import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Article } from "@/lib/data/articles";

interface LatestArticleProps {
  articleGrid: Article[];
}

export function LatestArticle({ articleGrid }: LatestArticleProps) {
  if (articleGrid.length === 0) return null;

  const largeCard = articleGrid[0];
  const smallCards = articleGrid.slice(1, 4); // Limit to 3 small cards for neat layout

  return (
    <section className="border-b border-border bg-background">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-[40px]">Latest Articles</h2>
          <Link
            href="/news"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Large Card */}
          {largeCard && (
            <div className="lg:col-span-7">
              <Link
                href={`/news/${largeCard.id}`}
                className="group block border border-border overflow-hidden p-2 rounded-sm shadow-sm bg-background"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={largeCard.image}
                    alt={largeCard.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 p-2">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {largeCard.category}
                  </span>
                  <h3 className="mt-2 text-2xl leading-tight group-hover:text-primary transition-colors">
                    {largeCard.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {largeCard.summary}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {largeCard.date}
                  </p>
                </div>
              </Link>
            </div>
          )}

          {/* Small Cards */}
          <div className="lg:col-span-5 space-y-6">
            {smallCards.map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className="group flex gap-4 pb-6 border-b border-border last:border-0"
              >
                <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {news.category}
                  </span>
                  <h4
                    className="mt-1 font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2 text-[16px]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {news.title}
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {news.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
