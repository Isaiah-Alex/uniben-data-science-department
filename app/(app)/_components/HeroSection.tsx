import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { NewsItem } from "@/lib/data/news";

interface HeroSectionProps {
  featuredStory: NewsItem;
  latestUpdates: NewsItem[];
}

export function HeroSection({
  featuredStory,
  latestUpdates,
}: HeroSectionProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Story */}
          <div className="lg:col-span-8">
            <Link href={`/news/${featuredStory.id}`} className="group block">
              <div className="relative aspect-16/10 overflow-hidden bg-muted">
                <ImageWithFallback
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wider rounded-sm">
                  {featuredStory.category}
                </span>
                <h1 className="mt-4 text-3xl md:text-[40px] leading-tight group-hover:text-primary transition-colors">
                  {featuredStory.title}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {featuredStory.summary}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredStory.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredStory.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Latest Updates Sidebar */}
          <div className="lg:col-span-4">
            <h3
              className="text-xl font-bold mb-6 pb-3 border-b border-border"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Latest Updates
            </h3>
            <div className="space-y-4">
              {latestUpdates.map((update) => (
                <Link
                  key={update.id}
                  href={`/news/${update.id}`}
                  className="block pb-4 border-b border-border last:border-0 group"
                >
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {update.category}
                  </span>
                  <h4
                    className="mt-2 font-medium leading-snug group-hover:text-primary transition-colors text-[15px]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {update.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {update.date}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
