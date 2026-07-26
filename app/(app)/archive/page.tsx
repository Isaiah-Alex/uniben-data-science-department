import type { Metadata } from "next";
import { articles } from "@/lib/data/articles";
import { ArchiveContent } from "./_components/ArchiveContent";

export const metadata: Metadata = {
  title: "Archive - Department of Data Science",
  description:
    "Browse all articles from the Department of Data Science by year and month.",
};

export default function ArchiveRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <div className="relative bg-muted border-b border-border overflow-hidden">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-12 relative z-10">
          <h1 className="text-4xl md:text-5xl mb-4">Archive</h1>
          <p className="text-lg text-muted-foreground">
            Browse our full article history by year and month
          </p>
        </div>
        <div
          className="absolute right-0 top-0 h-full w-[40%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 100% 50%, rgba(56,142,237,0.15) 0%, transparent 80%)",
          }}
        />
      </div>

      <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-12">
        <ArchiveContent allArticle={articles} />
      </div>
    </div>
  );
}
