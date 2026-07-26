"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Calendar, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Article } from "@/lib/data/articles";

const ITEMS_PER_PAGE = 4;

const categories = [
  "All",
  "Research",
  "Students",
  "Events",
  "Academics",
  "Alumni",
  "Partnerships",
];

interface ArticleContentProps {
  allArticle: Article[];
  initialCategory?: string;
}

export function ArticleContent({
  allArticle,
  initialCategory,
}: ArticleContentProps) {
  const resolvedInitialCategory = categories.find(
    (c) => c.toLowerCase() === (initialCategory || "").toLowerCase() || "All",
  );

  const [activeCategory, setActiveCategory] = useState(resolvedInitialCategory);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // Debounce search input (300ms) — ready for backeand integration later
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  // Derive all unique tags from the dataset
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    allArticle.forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [allArticle]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
    setCurrentPage(1);
  };

  const filteredByCategory =
    activeCategory === "All"
      ? allArticle
      : allArticle.filter((n) => n.category === activeCategory);

  const filteredByTags =
    activeTags.length === 0
      ? filteredByCategory
      : filteredByCategory.filter((n) =>
          n.tags.some((t) => activeTags.includes(t)),
        );

  const filtered = debouncedQuery.trim()
    ? filteredByTags.filter(
        (n) =>
          n.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          n.summary.toLowerCase().includes(debouncedQuery.toLowerCase()),
      )
    : filteredByTags;

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [filtered, sortOrder]);

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const paginated = sorted.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // Sidebar data — derived from real articles, not hardcoded
  const recentPosts = useMemo(
    () =>
      [...allArticle]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4),
    [allArticle],
  );

  const upcomingEvents = useMemo(
    () => allArticle.filter((a) => a.category === "Events").slice(0, 3),
    [allArticle],
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Main Grid */}
      <div className="lg:col-span-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-6 border-b border-border">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                activeTags.includes(tag)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Sort + Result count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            {sorted.length} {sorted.length === 1 ? "article" : "articles"} found
          </p>
          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "newest" | "oldest")
            }
            className="text-sm border border-border bg-background px-3 py-2 focus:outline-none focus:border-primary"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Article List */}
        {paginated.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center">
            No articles found matching your filters.
          </p>
        ) : (
          <div className="space-y-8">
            {paginated.map((article, index) => (
              <article
                key={article.id}
                className={`group ${
                  index !== paginated.length - 1
                    ? "pb-8 border-b border-border"
                    : ""
                }`}
              >
                <Link href={`/articles/${article.id}`} className="block">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 relative aspect-4/3 overflow-hidden bg-muted">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h2 className="mt-2 text-2xl md:text-3xl leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        By{" "}
                        <span className="font-medium text-foreground">
                          {article.author.name}
                        </span>
                      </p>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {article.summary}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-background"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 text-sm font-medium transition-colors ${
                      page === currentPage
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted bg-background border border-border"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-background"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-11 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Recent Posts — derived from real article data */}
        <div className="mb-8">
          <h3
            className="text-xl font-bold mb-4 pb-3 border-b border-border"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Recent Posts
          </h3>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/articles/${post.id}`}
                className="block pb-4 border-b border-border last:border-0 group"
              >
                <h4
                  className="font-medium leading-snug text-[15px] group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {post.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  {post.date}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Latest Events — derived from real article data (category: Events) */}
        {upcomingEvents.length > 0 && (
          <div className="bg-muted p-6 border border-border">
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Latest Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/articles/${event.id}`}
                  className="block pb-4 border-b border-border last:border-0 group"
                >
                  <h4
                    className="font-medium leading-snug text-[15px] group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {event.title}
                  </h4>
                  <p className="mt-1 text-xs text-primary font-medium">
                    {event.date}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        <div className="mt-8">
          <h3
            className="text-xl font-bold mb-4 pb-3 border-b border-border"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Categories
          </h3>
          <div className="space-y-2">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors rounded-sm ${
                  activeCategory === category
                    ? "text-primary bg-primary/10 font-medium"
                    : "hover:bg-muted text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
