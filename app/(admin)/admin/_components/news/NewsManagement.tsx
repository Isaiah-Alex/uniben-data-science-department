"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsToolbar } from "./NewsToolbar";
import { NewsTable } from "./NewsTable";
import { NewsPagination } from "./NewsPagination";
import { mockNews } from "./mock-data";
import { NewsStatus, NewsCategory } from "./types";
import { useRouter } from "next/navigation";

const ITEMS_PER_PAGE = 5;

export function NewsManagement() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<NewsCategory | "all">("all");
  const [status, setStatus] = useState<NewsStatus | "all">("all");
  const [sort, setSort] = useState<"newest" | "oldest" | "updated">("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  let filtered = [...mockNews];

  if (search.trim()) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    );
  }
  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (status !== "all") {
    filtered = filtered.filter((p) => p.status === status);
  }
  if (sort === "newest") filtered = filtered.reverse();
  if (sort === "updated") {
    filtered = filtered
      .slice()
      .sort((a, b) => a.updatedAt.localeCompare(b.updatedAt));
  }

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  function handleFilterChange<T>(setter: (v: T) => void) {
    return (v: T) => {
      setter(v);
      setCurrentPage(1);
    };
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <div className="border-b border-border bg-background">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
                Admin · News
              </p>
              <h1
                className="text-3xl md:text-4xl text-foreground leading-tight"
                style={{ fontFamily: "Playfair Display" }}
              >
                News Management
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Create and manage department news and announcements
              </p>
            </div>
            <div className="shrink-0">
              <Button
                className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-5"
                onClick={() => router.push("/admin/news/create")}
              >
                <Plus className="w-4 h-4" />
                Create Post
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-10">
        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border mb-8">
          {[
            { label: "Total Posts", value: mockNews.length },
            {
              label: "Published",
              value: mockNews.filter((n) => n.status === "published").length,
            },
            {
              label: "Drafts",
              value: mockNews.filter((n) => n.status === "draft").length,
            },
            {
              label: "Scheduled",
              value: mockNews.filter((n) => n.status === "scheduled").length,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="px-6 py-4 border-r border-border last:border-r-0 text-center nth-2:border-b md:nth-2:border-b-0 nth-1:border-b md:nth-1:border-b-0"
            >
              <div
                className="text-2xl font-bold text-primary"
                style={{ fontFamily: "Playfair Display" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <NewsToolbar
          search={search}
          onSearchChange={handleFilterChange(setSearch)}
          category={category}
          onCategoryChange={handleFilterChange(setCategory)}
          status={status}
          onStatusChange={handleFilterChange(setStatus)}
          sort={sort}
          onSortChange={handleFilterChange(setSort)}
        />

        {/* Table */}
        <div className="mt-6">
          <NewsTable posts={paginated} />
        </div>

        {/* Pagination */}
        <NewsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
