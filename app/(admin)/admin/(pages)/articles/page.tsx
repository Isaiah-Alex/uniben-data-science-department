"use client";

import { useState } from "react";
import { useMockAuth } from "@/lib/mock-auth";
import { getAllSubmissions, updateSubmissionStatus } from "@/lib/data/submissions";
import type { Submission, SubmissionStatus } from "@/types/submission";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FileText, Eye, Edit2, Play, Send, Check, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const statusConfig: Record<
  SubmissionStatus,
  { label: string; bg: string; text: string; icon: any }
> = {
  submitted: { label: "Submitted", bg: "bg-gray-100 dark:bg-gray-900/40", text: "text-gray-700 dark:text-gray-400", icon: FileText },
  in_editing: { label: "In Editing", bg: "bg-blue-50 dark:bg-blue-950/20", text: "text-blue-700 dark:text-blue-400", icon: Edit2 },
  in_review: { label: "In Review", bg: "bg-amber-50 dark:bg-amber-950/20", text: "text-amber-700 dark:text-amber-400", icon: Send },
  changes_requested: { label: "Changes Requested", bg: "bg-rose-50 dark:bg-rose-950/20", text: "text-rose-700 dark:text-rose-400", icon: AlertCircle },
  approved: { label: "Approved", bg: "bg-emerald-50 dark:bg-emerald-950/20", text: "text-emerald-700 dark:text-emerald-400", icon: Check },
  published: { label: "Published", bg: "bg-primary/10", text: "text-primary", icon: RefreshCw },
};

export default function AdminArticlesDashboard() {
  const { currentUser } = useMockAuth();
  const router = useRouter();
  const [filterTab, setFilterTab] = useState<"action_items" | "all" | "published" | "drafts">("action_items");

  const submissions = getAllSubmissions();

  // 1. Role-Filtered List
  let visibleSubmissions = [...submissions];

  if (currentUser.role === "client") {
    // Client sees only their own submissions
    visibleSubmissions = visibleSubmissions.filter(
      (s) => s.submittedBy.email === currentUser.email
    );
  } else if (currentUser.role === "editor") {
    // Editor sees everything but mainly filters by action queue (submitted, changes_requested, approved)
    // The tabs below will further filter.
  } else if (currentUser.role === "reviewer") {
    // Reviewer only sees submissions in review
    visibleSubmissions = visibleSubmissions.filter((s) => s.status === "in_review");
  } else if (currentUser.role === "admin") {
    // Admin sees everything
  }

  // 2. Tab Filter (Further filter for editor & admin roles)
  if (currentUser.role === "editor" || currentUser.role === "admin") {
    if (filterTab === "action_items") {
      if (currentUser.role === "editor") {
        visibleSubmissions = visibleSubmissions.filter((s) =>
          ["submitted", "changes_requested", "approved"].includes(s.status)
        );
      } else {
        // Admin: show all items requiring attention
        visibleSubmissions = visibleSubmissions.filter((s) => s.status !== "published");
      }
    } else if (filterTab === "published") {
      visibleSubmissions = visibleSubmissions.filter((s) => s.status === "published");
    } else if (filterTab === "drafts") {
      visibleSubmissions = visibleSubmissions.filter((s) =>
        ["submitted", "in_editing", "changes_requested"].includes(s.status)
      );
    }
  }

  const handleRowClick = (id: string) => {
    router.push(`/admin/articles/${id}`);
  };

  return (
    <div className="space-y-6 max-w-275 mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-border pb-6">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
            Editorial Workflow · {currentUser.role}
          </p>
          <h1 className="text-3xl font-bold text-foreground font-serif leading-tight">
            Editorial Submissions
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {currentUser.role === "client" && "View the progress and history of your submitted articles."}
            {currentUser.role === "editor" && "Manage workflow submissions, refine drafts, and publish approved articles."}
            {currentUser.role === "reviewer" && "Review drafts, approve them, or request revisions from editors."}
            {currentUser.role === "admin" && "Administrative override panel with full visibility across all submissions."}
          </p>
        </div>
      </div>

      {/* Stats Summary Panel */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border border-border bg-card p-4">
        {[
          { label: "Submitted Queue", count: submissions.filter((s) => s.status === "submitted").length, color: "text-gray-500" },
          { label: "In Review Queue", count: submissions.filter((s) => s.status === "in_review").length, color: "text-amber-500" },
          { label: "Approved (Ready)", count: submissions.filter((s) => s.status === "approved").length, color: "text-emerald-500" },
          { label: "Total Articles", count: submissions.length, color: "text-primary" },
        ].map((stat, i) => (
          <div key={i} className="text-center py-2 border-r border-border last:border-0">
            <div className={cn("text-3xl font-bold font-serif", stat.color)}>{stat.count}</div>
            <div className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs Filter Bar (Only for Editor/Admin roles) */}
      {(currentUser.role === "editor" || currentUser.role === "admin") && (
        <div className="flex border-b border-border">
          {[
            { id: "action_items", label: currentUser.role === "editor" ? "My Action Items" : "Pending Actions" },
            { id: "all", label: "All Submissions" },
            { id: "published", label: "Published" },
            { id: "drafts", label: "Drafts & Edits" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterTab(tab.id as any)}
              className={cn(
                "px-5 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors",
                filterTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Submissions Table / Cards */}
      <div className="border border-border bg-card rounded shadow-sm overflow-hidden">
        {visibleSubmissions.length === 0 ? (
          <div className="text-center py-16 px-4">
            <FileText className="w-12 h-12 text-muted-foreground/60 mx-auto mb-4" />
            <h3 className="font-semibold text-lg">No submissions found</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {currentUser.role === "reviewer"
                ? "There are currently no articles pending review."
                : "No items match your active role filters."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40 font-semibold text-xs uppercase tracking-wider text-muted-foreground select-none">
                  <th className="px-6 py-4">Title & Details</th>
                  <th className="px-6 py-4">Submitted By</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Last Event</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {visibleSubmissions.map((sub) => {
                  const cfg = statusConfig[sub.status] || {
                    label: sub.status,
                    bg: "bg-muted",
                    text: "text-muted-foreground",
                    icon: FileText,
                  };
                  const StatusIcon = cfg.icon;
                  const lastHistory = sub.history[sub.history.length - 1];

                  return (
                    <tr
                      key={sub.id}
                      onClick={() => handleRowClick(sub.id)}
                      className="hover:bg-muted/40 cursor-pointer transition-colors group"
                    >
                      {/* Title & tags */}
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1 max-w-[280px]">
                          {sub.title}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {sub.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] px-1.5 py-0.5 bg-accent/40 text-accent-foreground font-medium rounded-sm"
                            >
                              {t}
                            </span>
                          ))}
                          {sub.tags.length > 3 && (
                            <span className="text-[10px] text-muted-foreground">
                              +{sub.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Submitted By */}
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground text-xs">
                          {sub.submittedBy.name}
                        </div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">
                          {sub.submittedBy.email}
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-6 py-4 text-xs font-semibold text-muted-foreground">
                        {sub.category}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm",
                            cfg.bg,
                            cfg.text
                          )}
                        >
                          <StatusIcon className="w-3.5 h-3.5" />
                          {cfg.label}
                        </span>
                      </td>

                      {/* Last Event */}
                      <td className="px-6 py-4 text-xs text-muted-foreground">
                        <div className="font-medium text-foreground">
                          {lastHistory?.actor.name} ({lastHistory?.actor.role})
                        </div>
                        <div className="text-[10px] mt-0.5">
                          {lastHistory ? new Date(lastHistory.timestamp).toLocaleString() : ""}
                        </div>
                      </td>

                      {/* Action buttons */}
                      <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRowClick(sub.id)}
                          className="text-primary hover:text-primary/80"
                        >
                          <Eye className="w-4 h-4 mr-1.5" />
                          View Details
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
