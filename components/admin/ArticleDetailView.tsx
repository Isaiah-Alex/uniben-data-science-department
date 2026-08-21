"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  updateSubmissionAction,
  updateSubmissionStatusAction,
} from "@/app/actions/submissions";
import { categories } from "@/lib/data/categories";
import type { Submission, SubmissionStatus } from "@/types/submission";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  History,
  FileText,
  Edit2,
  CheckCircle,
  Play,
  Send,
  XCircle,
  Check,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StaffUser {
  id: string;
  email: string;
  name: string;
  role: "editor" | "reviewer" | "admin";
}

interface Props {
  submission: Submission;
  currentUser: StaffUser;
}

const statusBadgeConfig: Record<
  SubmissionStatus,
  { label: string; bg: string; text: string }
> = {
  submitted: { label: "Submitted", bg: "bg-gray-100 dark:bg-gray-900/40", text: "text-gray-700 dark:text-gray-400" },
  in_editing: { label: "In Editing", bg: "bg-blue-50 dark:bg-blue-950/20", text: "text-blue-700 dark:text-blue-400" },
  in_review: { label: "In Review", bg: "bg-amber-50 dark:bg-amber-950/20", text: "text-amber-700 dark:text-amber-400" },
  changes_requested: { label: "Changes Requested", bg: "bg-rose-50 dark:bg-rose-950/20", text: "text-rose-700 dark:text-rose-400" },
  approved: { label: "Approved", bg: "bg-emerald-50 dark:bg-emerald-950/20", text: "text-emerald-700 dark:text-emerald-400" },
  published: { label: "Published", bg: "bg-primary/10", text: "text-primary" },
};

export function ArticleDetailView({ submission, currentUser }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [feedbackNote, setFeedbackNote] = useState("");
  const [noteError, setNoteError] = useState(false);
  const [actionError, setActionError] = useState("");

  // Editor edit state fields
  const [title, setTitle] = useState(submission.title);
  const [summary, setSummary] = useState(submission.summary);
  const [content, setContent] = useState(submission.content);
  const [category, setCategory] = useState(submission.category);
  const [tagsInput, setTagsInput] = useState(submission.tags.join(", "));
  const [image, setImage] = useState(submission.image);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const badge = statusBadgeConfig[submission.status];

  const canEditorEdit =
    currentUser.role === "editor" &&
    ["submitted", "in_editing", "changes_requested"].includes(submission.status);

  const handleEditorSave = (e: React.FormEvent) => {
    e.preventDefault();
    setActionError("");
    const tags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);

    startTransition(async () => {
      const result = await updateSubmissionAction(submission.id, {
        title,
        summary,
        content,
        category,
        tags,
        image,
      });
      if (result.error) {
        setActionError(result.error);
        return;
      }
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
      router.refresh();
    });
  };

  const transitionStatus = (newStatus: SubmissionStatus, note?: string) => {
    setActionError("");
    startTransition(async () => {
      const result = await updateSubmissionStatusAction(
        submission.id,
        newStatus,
        { name: currentUser.name, role: currentUser.role },
        note
      );
      if (result.error) {
        setActionError(result.error);
        return;
      }
      setFeedbackNote("");
      setNoteError(false);
      router.refresh();
    });
  };

  const handleStartEditing = () =>
    transitionStatus("in_editing", "Editor checked out submission for revision.");

  const handleSendToReview = () => {
    const tags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
    setActionError("");
    startTransition(async () => {
      await updateSubmissionAction(submission.id, {
        title,
        summary,
        content,
        category,
        tags,
        image,
      });
      const result = await updateSubmissionStatusAction(
        submission.id,
        "in_review",
        { name: currentUser.name, role: currentUser.role },
        "Editor completed drafts edits and submitted for peer review."
      );
      if (result.error) {
        setActionError(result.error);
        return;
      }
      router.refresh();
    });
  };

  const handleReviewApprove = () =>
    transitionStatus("approved", feedbackNote || "Reviewer approved this article.");

  const handleReviewReject = () => {
    if (!feedbackNote.trim()) {
      setNoteError(true);
      return;
    }
    setNoteError(false);
    transitionStatus("changes_requested", feedbackNote);
  };

  const handlePublish = () =>
    transitionStatus("published", "Editor published the article to DJMS portal.");

  const handleAdminOverride = (newStatus: SubmissionStatus) =>
    transitionStatus(newStatus, `Admin override: Forcefully shifted status to ${newStatus}.`);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <Link
        href="/admin/articles"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Submissions
      </Link>

      {actionError && (
        <div className="flex items-center gap-2 text-sm text-rose-600 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 p-3 rounded">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {actionError}
        </div>
      )}

      {/* Top Header Card */}
      <div className="bg-card border border-border p-6 rounded shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-sm",
                badge.bg,
                badge.text
              )}
            >
              {badge.label}
            </span>
            <span className="text-xs text-muted-foreground">ID: {submission.id}</span>
          </div>
          <h1 className="text-2xl font-bold mt-2 font-serif text-foreground leading-tight">
            {submission.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3 flex-wrap">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-primary" />
              By {submission.submittedBy.name} ({submission.submittedBy.email})
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Submitted {submission.date}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
          {currentUser.role === "editor" && (
            <>
              {["submitted", "changes_requested"].includes(submission.status) && (
                <Button onClick={handleStartEditing} disabled={isPending} className="bg-primary text-primary-foreground">
                  <Play className="w-4 h-4 mr-1.5" />
                  Start Editing
                </Button>
              )}
              {submission.status === "in_editing" && (
                <Button onClick={handleSendToReview} disabled={isPending} className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Send className="w-4 h-4 mr-1.5" />
                  Send to Reviewer
                </Button>
              )}
              {submission.status === "approved" && (
                <Button onClick={handlePublish} disabled={isPending} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <CheckCircle className="w-4 h-4 mr-1.5" />
                  Publish Article
                </Button>
              )}
            </>
          )}

          {currentUser.role === "reviewer" && submission.status === "in_review" && (
            <div className="space-y-4 w-full">
              <div className="space-y-1">
                <Label htmlFor="review-note" className="text-xs font-semibold">
                  Reviewer Notes / Feedback:
                </Label>
                <Textarea
                  id="review-note"
                  placeholder="Enter comments. Notes are required if requesting changes."
                  value={feedbackNote}
                  onChange={(e) => {
                    setFeedbackNote(e.target.value);
                    if (e.target.value.trim()) setNoteError(false);
                  }}
                  rows={3}
                  className={cn("w-full text-sm", noteError && "border-rose-500")}
                />
                {noteError && (
                  <p className="text-xs text-rose-500 font-medium">
                    Feedback notes are mandatory when requesting revisions.
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <Button onClick={handleReviewApprove} disabled={isPending} className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1 sm:flex-initial">
                  <Check className="w-4 h-4 mr-1.5" />
                  Approve Publication
                </Button>
                <Button onClick={handleReviewReject} disabled={isPending} variant="destructive" className="flex-1 sm:flex-initial">
                  <XCircle className="w-4 h-4 mr-1.5" />
                  Request Changes
                </Button>
              </div>
            </div>
          )}

          {currentUser.role === "admin" && (
            <div className="bg-rose-50/50 dark:bg-rose-950/10 border border-rose-200 dark:border-rose-900 p-3 rounded flex items-center gap-4 w-full">
              <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-rose-800 dark:text-rose-400">Admin Control Panel</p>
                <p className="text-[10px] text-muted-foreground">Directly override submission status:</p>
              </div>
              <Select
                onValueChange={(val) => handleAdminOverride(val as SubmissionStatus)}
                value={submission.status}
                disabled={isPending}
              >
                <SelectTrigger className="w-44 h-8 text-xs bg-background">
                  <SelectValue placeholder="Override status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="submitted">Submitted</SelectItem>
                  <SelectItem value="in_editing">In Editing</SelectItem>
                  <SelectItem value="in_review">In Review</SelectItem>
                  <SelectItem value="changes_requested">Changes Requested</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {canEditorEdit ? (
            <form onSubmit={handleEditorSave} className="bg-card border border-border p-6 rounded shadow-sm space-y-6">
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Edit2 className="w-5 h-5 text-primary" />
                  Editor Interface (Editable Draft)
                </h3>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title" className="text-xs font-semibold">Title</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-xs font-semibold">Category</Label>
                <Select onValueChange={setCategory} value={category}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => (
                      <SelectItem key={c.slug} value={c.name}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary" className="text-xs font-semibold">Summary</Label>
                <Input id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image" className="text-xs font-semibold">Cover Image URL</Label>
                <Input id="image" value={image} onChange={(e) => setImage(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-xs font-semibold">Tags (comma separated)</Label>
                <Input id="tags" value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content" className="text-xs font-semibold">Article Draft / Body Content</Label>
                <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={15} required />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-border">
                {saveSuccess ? (
                  <span className="text-xs font-medium text-emerald-600 flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    Changes saved!
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    Save content adjustments before pushing further in the pipeline.
                  </span>
                )}
                <Button type="submit" disabled={isPending} className="bg-primary text-primary-foreground rounded-none">
                  {isPending ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="bg-card border border-border p-6 rounded shadow-sm space-y-6 text-foreground">
              <div className="border-b border-border pb-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Submission Draft Content
                </h3>
              </div>

              <div className="bg-muted/40 p-4 border border-l-4 border-l-primary/60 border-border text-sm italic">
                <p className="font-semibold text-xs not-italic uppercase tracking-wider text-muted-foreground mb-1 select-none">
                  Summary
                </p>
                &ldquo;{submission.summary}&rdquo;
              </div>

              {submission.image && (
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Cover Image
                  </p>
                  <div className="relative aspect-video max-h-72 overflow-hidden rounded border border-border">
                    <img src={submission.image} alt={submission.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Article Body
                </p>
                <div className="space-y-4 leading-relaxed text-sm whitespace-pre-line text-foreground/95 bg-muted/10 p-4 border border-border rounded">
                  {submission.content}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {submission.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-sm font-medium">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border p-5 rounded shadow-sm">
            <h3 className="font-semibold text-base flex items-center gap-2 border-b border-border pb-3 mb-4 select-none">
              <History className="w-5 h-5 text-primary" />
              Submission History
            </h3>

            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
              {submission.history.map((hist, idx) => {
                const histBadge = statusBadgeConfig[hist.status] || {
                  label: hist.status,
                  bg: "bg-muted",
                  text: "text-muted-foreground",
                };
                return (
                  <div key={idx} className="relative pl-8 text-sm">
                    <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background ring-4 ring-background transform -translate-x-1/2" />
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-foreground text-xs">{hist.actor.name}</span>
                        <span className="text-[10px] uppercase font-semibold text-muted-foreground">
                          ({hist.actor.role})
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] text-muted-foreground">changed status to</span>
                        <span
                          className={cn(
                            "inline-flex px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-sm",
                            histBadge.bg,
                            histBadge.text
                          )}
                        >
                          {histBadge.label}
                        </span>
                      </div>
                      {hist.note && (
                        <p className="mt-1.5 text-xs text-muted-foreground bg-muted/30 p-2 border border-border rounded italic whitespace-pre-wrap leading-normal">
                          &ldquo;{hist.note}&rdquo;
                        </p>
                      )}
                      <div className="text-[10px] text-muted-foreground/80 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(hist.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}