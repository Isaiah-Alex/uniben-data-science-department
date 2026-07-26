import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Article } from "@/lib/data/articles";

interface ResearchSpotlightProps {
  researchArticles: Article[];
}

export function ResearchSpotlight({
  researchArticles,
}: ResearchSpotlightProps) {
  if (researchArticles.length === 0) return null;

  return (
    <section className="bg-foreground text-background border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Section intro */}
          <div className="lg:col-span-4">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Spotlight
            </span>
            <h2 className="mt-2 text-3xl md:text-[36px] leading-tight">
              Research
            </h2>
            <p className="mt-4 text-background/70 leading-relaxed">
              Ongoing studies, publications, and breakthroughs from our faculty
              and research teams.
            </p>
            <Link
              href="/research"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              View All Research <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Indexed list */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {researchArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="group flex items-start gap-6 py-6 border-b border-background/20 last:border-0"
                >
                  <span className="text-sm text-primary font-medium pt-1 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-background/70 text-sm leading-relaxed line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-background/50">
                      <span>{article.author.name}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
