"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NewsStatus, NewsCategory } from "./types";

interface NewsToolbarProps {
  search: string;
  onSearchChange: (v: string) => void;
  category: NewsCategory | "all";
  onCategoryChange: (v: NewsCategory | "all") => void;
  status: NewsStatus | "all";
  onStatusChange: (v: NewsStatus | "all") => void;
  sort: "newest" | "oldest" | "updated";
  onSortChange: (v: "newest" | "oldest" | "updated") => void;
}

export function NewsToolbar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  status,
  onStatusChange,
  sort,
  onSortChange,
}: NewsToolbarProps) {
  return (
    <div className="flex flex-wrap gap-3 pb-6 border-b border-border">
      {/* Search */}
      <div className="relative flex-1 min-w-50">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search by title…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 rounded-none border-border bg-background text-sm h-9"
        />
      </div>

      {/* Category */}
      <Select
        value={category}
        onValueChange={(v) => onCategoryChange(v as NewsCategory | "all")}
      >
        <SelectTrigger className="w-37.5 rounded-none border-border h-9 text-sm">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="rounded-none">
          <SelectItem value="all">All categories</SelectItem>
          <SelectItem value="news">News</SelectItem>
          <SelectItem value="announcement">Announcement</SelectItem>
        </SelectContent>
      </Select>

      {/* Status */}
      <Select
        value={status}
        onValueChange={(v) => onStatusChange(v as NewsStatus | "all")}
      >
        <SelectTrigger className="w-37.5 rounded-none border-border h-9 text-sm">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent className="rounded-none">
          <SelectItem value="all">All statuses</SelectItem>
          <SelectItem value="published">Published</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="scheduled">Scheduled</SelectItem>
          <SelectItem value="archived">Archived</SelectItem>
        </SelectContent>
      </Select>

      {/* Sort */}
      <Select
        value={sort}
        onValueChange={(v) =>
          onSortChange(v as "newest" | "oldest" | "updated")
        }
      >
        <SelectTrigger className="w-42.5 rounded-none border-border h-9 text-sm">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="rounded-none">
          <SelectItem value="newest">Newest first</SelectItem>
          <SelectItem value="oldest">Oldest first</SelectItem>
          <SelectItem value="updated">Recently updated</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
