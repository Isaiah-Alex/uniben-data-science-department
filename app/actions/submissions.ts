"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import type {
  Submission,
  SubmissionStatus,
  SubmissionHistoryEntry,
  UserRole,
} from "@/types/submission";

function rowToSubmission(row: any): Submission {
  return {
    id: row.id,
    title: row.title,
    summary: row.summary,
    content: row.content,
    category: row.category,
    tags: row.tags ?? [],
    slug: row.slug,
    image: row.image,
    readTime: row.read_time,
    date: row.date,
    author: row.author,
    submittedBy: row.submitted_by,
    status: row.status,
    history: row.history ?? [],
  };
}

export async function createSubmissionAction(
  input: Omit<Submission, "id" | "status" | "history">,
): Promise<{ data?: Submission; error?: string }> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated." };

  const initialHistory: SubmissionHistoryEntry[] = [
    {
      status: "submitted",
      actor: { name: input.submittedBy.name, role: "client" },
      note: "Submission created.",
      timestamp: new Date().toISOString(),
    },
  ];

  const { data, error } = await supabase
    .from("submissions")
    .insert({
      title: input.title,
      summary: input.summary,
      content: input.content,
      category: input.category,
      tags: input.tags,
      slug: input.slug,
      image: input.image,
      read_time: input.readTime,
      date: input.date,
      author: input.author,
      submitted_by: input.submittedBy,
      status: "submitted" as SubmissionStatus,
      history: initialHistory,
    })
    .select()
    .single();

  if (error || !data) return { error: error?.message ?? "Failed to submit." };

  revalidatePath("/my-submissions");
  return { data: rowToSubmission(data) };
}

export async function updateSubmissionAction(
  id: string,
  updates: Partial<
    Pick<
      Submission,
      "title" | "summary" | "content" | "category" | "tags" | "image"
    >
  >,
): Promise<{ data?: Submission; error?: string }> {
  const supabase = await createClient();

  const row: Record<string, unknown> = {};
  if (updates.title !== undefined) row.title = updates.title;
  if (updates.summary !== undefined) row.summary = updates.summary;
  if (updates.content !== undefined) row.content = updates.content;
  if (updates.category !== undefined) row.category = updates.category;
  if (updates.tags !== undefined) row.tags = updates.tags;
  if (updates.image !== undefined) row.image = updates.image;

  const { data, error } = await supabase
    .from("submissions")
    .update(row)
    .eq("id", id)
    .select()
    .single();

  if (error || !data) return { error: error?.message ?? "Failed to update." };

  revalidatePath(`/admin/articles/${id}`);
  revalidatePath("/admin/articles");
  return { data: rowToSubmission(data) };
}

export async function updateSubmissionStatusAction(
  id: string,
  newStatus: SubmissionStatus,
  actor: { name: string; role: UserRole },
  note?: string,
): Promise<{ data?: Submission; error?: string }> {
  const supabase = await createClient();

  const { data: current, error: fetchError } = await supabase
    .from("submissions")
    .select("history")
    .eq("id", id)
    .single();

  if (fetchError || !current) {
    return { error: fetchError?.message ?? "Submission not found." };
  }

  const newEntry: SubmissionHistoryEntry = {
    status: newStatus,
    actor,
    note,
    timestamp: new Date().toISOString(),
  };
  const updatedHistory = [...(current.history ?? []), newEntry];

  const { data, error } = await supabase
    .from("submissions")
    .update({ status: newStatus, history: updatedHistory })
    .eq("id", id)
    .select()
    .single();

  if (error || !data)
    return { error: error?.message ?? "Failed to change status." };

  revalidatePath(`/admin/articles/${id}`);
  revalidatePath("/admin/articles");
  return { data: rowToSubmission(data) };
}
