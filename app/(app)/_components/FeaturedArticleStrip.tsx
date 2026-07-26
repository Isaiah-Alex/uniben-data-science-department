import Link from "next/link";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Article } from "@/lib/data/articles";

interface FeaturedArticlesStripProps {
  featuredArticle: Article[];
}

export function FeaturedArticlesStrip({
  featuredArticle,
}: FeaturedArticlesStripProps) {
  return (
    <section className="bg-muted border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticle.map((news) => (
            <Link
              key={news.id}
              href={`/news/${news.id}`}
              className="group bg-background overflow-hidden border border-border shadow-sm"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <ImageWithFallback
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {/* news.tag || new.category */}
                  {news.category}
                </span>
                <h3
                  className="mt-2 font-medium leading-snug group-hover:text-primary transition-colors text-[20px]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {news.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  {news.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
