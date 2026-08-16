import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { getMergedArticles } from "@/lib/data/submissions";
import { ReadingProgressBar } from "@/components/shared/ReadingProgressBar";

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="X (formerly Twitter)"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const merged = getMergedArticles();
  const article = merged.find((item) => item.id.toString() === id);
  if (!article) return {};
  return {
    title: `${article.title} - Department of Data Science`,
    description: article.summary,
  };
}

export default async function ArticleRoute({ params }: PageProps) {
  const { id } = await params;
  const merged = getMergedArticles();
  const article = merged.find((item) => item.id.toString() === id);
  if (!article) {
    notFound();
  }

  // Get related articles: same category first, then shared tags, then recent fallback
  const sameCategory = merged.filter(
    (item) => item.id.toString() !== id && item.category === article.category,
  );

  const sharedTags = merged.filter(
    (item) =>
      item.id.toString() !== id &&
      item.category !== article.category &&
      item.tags.some((tag) => article.tags.includes(tag)),
  );

  const fallback = merged.filter(
    (item) =>
      item.id.toString() !== id &&
      !sameCategory.includes(item) &&
      !sharedTags.includes(item),
  );

  const relatedArticles = [...sameCategory, ...sharedTags, ...fallback].slice(
    0,
    3,
  );

  return (
    <div>
      {/* Reading Progress Bar (Client component) */}
      <ReadingProgressBar />

      {/* Back Button */}
      <div className="border-b border-border bg-background">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 bg-background text-foreground">
        <div className="max-w-180 mx-auto py-12">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wider rounded-sm">
            {article.category}
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl leading-tight">
            {article.title}
          </h1>

          <p className="mt-4 text-base text-muted-foreground">
            By{" "}
            <span className="font-medium text-foreground">
              {article.author.name}
            </span>
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-21/9 overflow-hidden my-8 bg-muted">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div
              className="max-w-none text-foreground leading-relaxed space-y-6 text-lg"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {article.content.split("\n\n").map((para, i) => {
                const cleanPara = para.trim();
                if (cleanPara.startsWith("<h3>")) {
                  const headingText = cleanPara
                    .replace("<h3>", "")
                    .replace("</h3>", "");
                  return (
                    <h3
                      key={i}
                      className="text-2xl font-semibold mt-8 mb-4 font-serif"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {headingText}
                    </h3>
                  );
                }
                return <p key={i}>{cleanPara}</p>;
              })}
            </div>

            {/* Share Row */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Share this article:
                </span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                    <XLogo className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              {/* Related Articles */}
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      href={`/articles/${related.id}`}
                      className="group block pb-4 border-b border-border last:border-0"
                    >
                      <div className="relative aspect-video overflow-hidden mb-3 bg-muted">
                        <ImageWithFallback
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h4
                        className="font-medium leading-snug group-hover:text-primary transition-colors text-[16px]"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {related.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {related.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
