"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Article } from "@/lib/data/articles";

interface ArchiveContentProps {
  allArticle: Article[];
}

interface MonthGroup {
  month: string;
  monthIndex: number;
  articles: Article[];
}

interface YearGroup {
  year: number;
  months: MonthGroup[];
  total: number;
}

export function ArchiveContent({ allArticle }: ArchiveContentProps) {
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set());
  const [expandedMonths, setExpandedMonths] = useState<Set<string>>(new Set());

  const yearGroups = useMemo(() => {
    const map = new Map<number, Map<number, Article[]>>();

    allArticle.forEach((article) => {
      const date = new Date(article.date);
      const year = date.getFullYear();
      const month = date.getMonth();

      if (!map.has(year)) map.set(year, new Map());
      const yearMap = map.get(year)!;
      if (!yearMap.has(month)) yearMap.set(month, []);
      yearMap.get(month)!.push(article);
    });

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const result: YearGroup[] = Array.from(map.entries())
      .map(([year, monthMap]) => {
        const months: MonthGroup[] = Array.from(monthMap.entries())
          .map(([monthIndex, arts]) => ({
            month: monthNames[monthIndex],
            monthIndex,
            articles: arts.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            ),
          }))
          .sort((a, b) => b.monthIndex - a.monthIndex);

        const total = months.reduce((sum, m) => sum + m.articles.length, 0);
        return { year, months, total };
      })
      .sort((a, b) => b.year - a.year);

    return result;
  }, [allArticle]);

  const toggleYear = (year: number) => {
    setExpandedYears((prev) => {
      const next = new Set(prev);
      next.has(year) ? next.delete(year) : next.add(year);
      return next;
    });
  };

  const toggleMonth = (key: string) => {
    setExpandedMonths((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  if (yearGroups.length === 0) {
    return (
      <p className="text-muted-foreground py-12 text-center">
        No articles in the archive yet.
      </p>
    );
  }

  return (
    <div className="max-w-3xl">
      {yearGroups.map(({ year, months, total }) => {
        const yearExpanded = expandedYears.has(year);

        return (
          <div key={year} className="border-b border-border">
            <button
              onClick={() => toggleYear(year)}
              className="w-full flex items-center justify-between py-5 group"
            >
              <span className="flex items-center gap-3">
                {yearExpanded ? (
                  <ChevronDown className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                )}
                <span className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                  {year}
                </span>
              </span>
              <span className="text-sm text-muted-foreground">
                {total} {total === 1 ? "article" : "articles"}
              </span>
            </button>

            {yearExpanded && (
              <div className="pl-8 pb-4 space-y-1">
                {months.map(
                  ({ month, monthIndex, articles: monthArticles }) => {
                    const key = `${year}-${monthIndex}`;
                    const monthExpanded = expandedMonths.has(key);

                    return (
                      <div key={key}>
                        <button
                          onClick={() => toggleMonth(key)}
                          className="w-full flex items-center justify-between py-3 group"
                        >
                          <span className="flex items-center gap-3">
                            {monthExpanded ? (
                              <ChevronDown className="w-4 h-4 text-primary" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            )}
                            <span className="text-base font-medium group-hover:text-primary transition-colors">
                              {month}
                            </span>
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {monthArticles.length}{" "}
                            {monthArticles.length === 1
                              ? "article"
                              : "articles"}
                          </span>
                        </button>

                        {monthExpanded && (
                          <div className="pl-7 pb-4 space-y-4">
                            {monthArticles.map((article) => (
                              <Link
                                key={article.id}
                                href={`/articles/${article.id}`}
                                className="group flex gap-4 items-center"
                              >
                                <div className="relative w-16 h-16 shrink-0 overflow-hidden bg-muted rounded-sm">
                                  <ImageWithFallback
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="text-sm font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                  </h4>
                                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                                    <Calendar className="w-3 h-3" />
                                    {article.date}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  },
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
