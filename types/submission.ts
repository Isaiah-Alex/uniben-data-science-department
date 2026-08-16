import type { Article } from "@/lib/data/articles";

export type UserRole = "client" | "editor" | "reviewer" | "admin";

export type SubmissionStatus =
  | "submitted"
  | "in_editing"
  | "in_review"
  | "changes_requested"
  | "approved"
  | "published";

export interface SubmissionHistoryEntry {
  status: SubmissionStatus;
  actor: { name: string; role: UserRole };
  note?: string;
  timestamp: string; // ISO string
}

export interface Submission extends Omit<Article, "id"> {
  id: string;
  status: SubmissionStatus;
  submittedBy: { name: string; email: string };
  history: SubmissionHistoryEntry[];
}
