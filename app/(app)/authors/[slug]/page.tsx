import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock } from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { authors } from "@/lib/data/authors";
import { articles } from "@/lib/data/articles";

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

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="LinkedIn"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) return {};
  return {
    title: `${author.name} - Department of Data Science`,
    description: author.bio,
  };
}

export default async function AuthorProfileRoute({ params }: PageProps) {
  const { slug } = await params;
  const author = authors.find((a) => a.slug === slug);
  if (!author) {
    notFound();
  }

  const authorArticles = articles
    .filter((a) => a.author.name === author.name)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Profile Header */}
      <div className="border-b border-border bg-muted">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative w-28 h-28 shrink-0 rounded-full overflow-hidden bg-background">
              <ImageWithFallback
                src={author.avatar}
                alt={author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl">{author.name}</h1>
              <p className="mt-2 text-primary font-medium">{author.role}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                {author.bio}
              </p>

              {author.social && (
                <div className="mt-5 flex gap-3">
                  {author.social.twitter && (
                    <a
                      href={author.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-background border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                    >
                      <XLogo className="w-4 h-4" />
                    </a>
                  )}
                  {author.social.linkedin && (
                    <a
                      href={author.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-background border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Research Interests */}
          {author.researchInterests && author.researchInterests.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {author.researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-xs font-medium bg-background border border-border rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Published Articles */}
      <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl mb-8">
          Published Articles ({authorArticles.length})
        </h2>

        {authorArticles.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center">
            No articles published yet.
          </p>
        ) : (
          <div className="space-y-8">
            {authorArticles.map((article, index) => (
              <article
                key={article.id}
                className={`group ${
                  index !== authorArticles.length - 1
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
                      <h3 className="mt-2 text-xl md:text-2xl leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {article.summary}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
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
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
