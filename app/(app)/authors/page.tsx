import type { Metadata } from "next";
import Link from "next/link";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { authors } from "@/lib/data/authors";
import { articles } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "Editors - Department of Data Science",
  description:
    "Meet the editors and contributors behind the Department of Data Science's articles and research updates.",
};

export default function AuthorsRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <div className="relative bg-muted border-b border-border overflow-hidden">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-12 relative z-10">
          <h1 className="text-4xl md:text-5xl mb-4">Editors</h1>
          <p className="text-lg text-muted-foreground">
            The voices behind our articles, research, and department updates
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

      {/* Author List */}
      <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {authors.map((author) => {
            const articleCount = articles.filter(
              (a) => a.author.name === author.name,
            ).length;

            return (
              <Link
                key={author.slug}
                href={`/authors/${author.slug}`}
                className="group flex gap-5 p-6 border border-border hover:border-primary transition-colors bg-background"
              >
                <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={author.avatar}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2
                    className="text-lg font-bold group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {author.name}
                  </h2>
                  <p className="mt-1 text-sm text-primary font-medium">
                    {author.role}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {author.bio}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {articleCount} {articleCount === 1 ? "article" : "articles"}{" "}
                    published
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
