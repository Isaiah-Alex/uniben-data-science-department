import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Users,
  Share2,
  Calendar,
  Tag,
} from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { researchAreas, recentPublications } from "@/db/seed";
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
  const area = researchAreas.find((r) => r.id.toString() === id);
  if (!area) return {};
  return {
    title: `${area.title} - Research - Department of Data Science`,
    description: area.description,
  };
}

export default async function ResearchAreaRoute({ params }: PageProps) {
  const { id } = await params;
  const area = researchAreas.find((r) => r.id.toString() === id);
  if (!area) notFound();

  // Related areas (exclude current)
  const relatedAreas = researchAreas
    .filter((r) => r.id.toString() !== id)
    .slice(0, 3);

  // Publications loosely tied to this area (you can wire up real filtering later)
  const areaPublications = recentPublications.slice(0, 3);

  return (
    <div>
      <ReadingProgressBar />

      {/* Back Button */}
      <div className="border-b border-border bg-background">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 bg-background text-foreground">
        <div className="max-w-180 mx-auto py-12">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium uppercase tracking-wider rounded-sm">
            Research Area
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl leading-tight">
            {area.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {area.members} Members
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {area.publications} Publications
            </span>
            <span>•</span>
            <span className="text-primary font-medium">Lead: {area.lead}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-21/9 overflow-hidden my-8 bg-muted">
          <ImageWithFallback
            src={area.image}
            alt={area.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {area.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent text-primary text-xs font-medium"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-10 border border-border">
              <div className="text-center py-6 border-r border-border">
                <div
                  className="text-3xl font-bold text-primary mb-1"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {area.members}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Researchers
                </div>
              </div>
              <div className="text-center py-6 border-r border-border">
                <div
                  className="text-3xl font-bold text-primary mb-1"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {area.publications}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Publications
                </div>
              </div>
              <div className="text-center py-6">
                <div
                  className="text-base font-semibold text-foreground mb-1 leading-snug px-2"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {area.lead}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Lead Researcher
                </div>
              </div>
            </div>

            {/* Description Body */}
            <div
              className="text-foreground leading-relaxed space-y-6 text-lg"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {area.description.split("\n\n").map((para, i) => {
                const cleanPara = para.trim();
                if (!cleanPara) return null;
                if (cleanPara.startsWith("<h3>")) {
                  const headingText = cleanPara
                    .replace("<h3>", "")
                    .replace("</h3>", "");
                  return (
                    <h3
                      key={i}
                      className="text-2xl font-semibold mt-8 mb-4"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {headingText}
                    </h3>
                  );
                }
                return <p key={i}>{cleanPara}</p>;
              })}
            </div>

            {/* Publications tied to this area */}
            <div className="mt-14 pt-10 border-t border-border">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Related Publications
              </h3>
              <div className="space-y-0">
                {areaPublications.map((pub, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 py-6 border-b border-border last:border-0 group"
                  >
                    <div className="shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug mb-1"
                        style={{
                          fontFamily: "Playfair Display",
                          fontSize: "17px",
                        }}
                      >
                        {pub.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {pub.authors}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="italic">{pub.journal}</span>
                        <span>•</span>
                        <span className="font-medium text-primary">
                          {pub.year}
                        </span>
                      </div>
                    </div>
                    <a
                      href={pub.doi}
                      className="shrink-0 text-xs font-medium text-primary border border-primary px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors hidden md:block"
                    >
                      View
                    </a>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all mt-6"
              >
                View all publications <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Share Row */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Share this research:
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
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Collaborate CTA */}
              <div className="bg-primary p-6">
                <h3
                  className="text-xl font-bold text-primary-foreground mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Collaborate With Us
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
                  Interested in partnering on research in this area? Get in
                  touch with our team.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium bg-primary-foreground text-primary px-4 py-2 hover:opacity-90 transition-opacity"
                >
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Other Research Areas */}
              <div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Other Research Areas
                </h3>
                <div className="space-y-4">
                  {relatedAreas.map((related) => (
                    <Link
                      key={related.id}
                      href={`/research/${related.id}`}
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
                      <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {related.members} members
                        </span>
                        <span>•</span>
                        <span>{related.publications} pubs</span>
                      </div>
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
