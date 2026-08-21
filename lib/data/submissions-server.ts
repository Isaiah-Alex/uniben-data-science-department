import { createClient } from "@/lib/supabase/server";
import type { Submission } from "@/types/submission";
import type { Article } from "@/lib/data/articles";
import { articles as staticArticles } from "@/lib/data/articles";

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

/**
 * Server-only. Call directly inside an async Server Component
 * (a page.tsx without "use client"). RLS still applies — this uses
 * the signed-in user's session cookie, not the admin client, so a
 * reviewer only gets in_review rows back, a client only gets their
 * own, etc., exactly as the database policies define.
 */
export async function getAllSubmissionsServer(): Promise<Submission[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getAllSubmissionsServer error:", error.message);
    return [];
  }
  return (data ?? []).map(rowToSubmission);
}

export async function getSubmissionByIdServer(id: string): Promise<Submission | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    if (error) console.error("getSubmissionByIdServer error:", error.message);
    return null;
  }
  return rowToSubmission(data);
}

export interface CurrentUserServer {
  id: string;
  email: string;
  name: string;
  role: "client" | "editor" | "reviewer" | "admin";
}

export interface StaffUserServer {
  id: string;
  email: string;
  name: string;
  role: "editor" | "reviewer" | "admin";
}

/**
 * Server-only, PUBLIC — no auth required. Combines the static seed
 * articles with real published submissions into one sorted list.
 * This is what powers the public /articles listing and detail pages.
 */
export async function getMergedArticles(): Promise<Article[]> {
  const publishedFromSubmissions = await getPublishedArticlesFromSubmissions();

  const merged: Article[] = [...staticArticles, ...publishedFromSubmissions];

  // Both date formats ("July 21, 2026" and the "MMM d, yyyy" format
  // submissions are stored with) parse correctly via new Date().
  merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return merged;
}

/**
 * Server-only, PUBLIC — no auth required. Fetches all published
 * submissions and maps them to the Article shape, for the public
 * /articles listing to merge with any existing static articles.
 * Relies on the "submissions_select_public_published" RLS policy.
 */
export async function getPublishedArticlesFromSubmissions() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("submissions")
    .select("*")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getPublishedArticlesFromSubmissions error:", error.message);
    return [];
  }

  return (data ?? []).map((row: any) => ({
    id: row.id, // uuid string — see note below if Article.id is currently `number`
    slug: row.slug,
    image: row.image,
    category: row.category,
    tags: row.tags ?? [],
    author: row.author,
    title: row.title,
    summary: row.summary,
    content: row.content,
    date: row.date,
    readTime: row.read_time,
  }));
}
//  * Use this in Server Components instead of the Zustand store, which only
//  * exists on the client.
//  */

export async function getCurrentUserServer(): Promise<CurrentUserServer | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("name, role")
    .eq("id", user.id)
    .single();

  if (!profile) return null;

  return {
    id: user.id,
    email: user.email!,
    name: profile.name || user.email!,
    role: profile.role as CurrentUserServer["role"],
  };
}

/**
 * Same as getCurrentUserServer, but the return type is narrowed to staff
 * roles only ("editor" | "reviewer" | "admin"). Use this in any admin
 * page instead of getCurrentUserServer — it still checks role === "client"
 * at runtime and redirects, but callers no longer need to cast the result
 * to satisfy TypeScript afterward.
 */
export async function getStaffUserServer(
  redirectTo = "/admin/login"
): Promise<StaffUserServer> {
  const { redirect } = await import("next/navigation");
  const currentUser = await getCurrentUserServer();

  if (!currentUser || currentUser.role === "client") {
    redirect(redirectTo);
  }

  // Safe: redirect() above throws, so anything after only runs for staff.
  return currentUser as StaffUserServer;
}