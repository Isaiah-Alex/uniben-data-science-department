import Link from "next/link";
import { ArrowRight, BookOpen, Users, Microscope, Globe } from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { labs, recentPublications, researchAreas, stats } from "@/db/seed";
import { articles } from "@/lib/data/articles";
// import { articles, Article } from "@/lib/data/articles";

export default function ResearchPage() {
  // const featuredStory = articles[0];
  const researchArticles = articles.filter((a) => a.category === "Research");

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="relative bg-foreground overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, color-mix(in srgb, var(--primary) 25%, transparent) 0%, transparent 65%)",
          }}
        />
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <span className="inline-block text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Department of Data Science
          </span>

          <h1 className="text-4xl md:text-6xl text-primary-foreground mb-6 max-w-2xl leading-tight">
            Research & Innovation
          </h1>

          <p className="text-lg text-primary-foreground/70 max-w-2xl leading-relaxed mb-8">
            Advancing knowledge at the intersection of data, computation, and
            societal impact. Our researchers tackle Nigeria's most pressing
            challenges through rigorous, evidence-based inquiry.
          </p>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Collaborate With Us
          </Button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center text-primary-foreground">
                <div
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {s.value}
                </div>

                <div className="text-sm text-primary-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Areas */}
      <section className="border-b border-border">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-[40px] mb-3">Research Areas</h2>

          <p className="text-muted-foreground mb-12 text-lg">
            Explore our four core research clusters driving innovation.
          </p>

          <div className="space-y-12">
            {researchAreas.map((area, index) => (
              <div
                key={area.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-border last:border-0 last:pb-0"
              >
                <div
                  className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Link href={`/research/${area.id}`}>
                      <ImageWithFallback
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h3 className="text-2xl md:text-3xl mb-4 leading-tight transition-colors group-hover:text-primary">
                    {area.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center border border-border py-4">
                      <div
                        className="text-xl font-bold text-primary"
                        style={{ fontFamily: "Playfair Display" }}
                      >
                        {area.members}
                      </div>

                      <div className="text-xs text-muted-foreground mt-1">
                        Members
                      </div>
                    </div>

                    <div className="text-center border border-border py-4">
                      <div
                        className="text-xl font-bold text-primary"
                        style={{ fontFamily: "Playfair Display" }}
                      >
                        {area.publications}
                      </div>

                      <div className="text-xs text-muted-foreground mt-1">
                        Publications
                      </div>
                    </div>

                    <div className="text-center border border-border py-4 col-span-1">
                      <div className="text-sm font-medium text-foreground leading-snug">
                        {area.lead}
                      </div>

                      <div className="text-xs text-muted-foreground mt-1">
                        Lead Researcher
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/research/${area.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* From Our Research Articles */}
      {researchArticles.length > 0 && (
        <section className="border-b border-border">
          <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-16">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl md:text-[40px] mb-2">
                  From Our Research Articles
                </h2>
                <p className="text-muted-foreground">
                  Stories, updates, and breakthroughs from our research teams
                </p>
              </div>
              <Link
                href="/articles?category=research"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                View all research articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {researchArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="group bg-background overflow-hidden border border-border shadow-sm"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {article.category}
                    </span>
                    <h3
                      className="mt-2 font-medium leading-snug group-hover:text-primary transition-colors text-[20px]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {article.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {article.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Recent Publications */}
      <section className="bg-secondary border-b border-border">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl md:text-[40px] mb-2">
                Recent Publications
              </h2>
              <p className="text-muted-foreground">
                Peer-reviewed research from our faculty and students
              </p>
            </div>

            <a
              href="#"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              View all publications <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-0">
            {recentPublications.map((pub, index) => (
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
                    style={{ fontFamily: "Playfair Display", fontSize: "18px" }}
                  >
                    {pub.title}
                  </h4>

                  <p className="text-sm text-muted-foreground">{pub.authors}</p>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="italic">{pub.journal}</span>
                    <span>•</span>

                    <span className="font-medium text-primary">{pub.year}</span>
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
        </div>
      </section>

      {/* Labs */}
      <section className="border-b border-border">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-[40px] mb-3">Research Facilities</h2>

          <p className="text-muted-foreground mb-12 text-lg">
            World-class infrastructure supporting cutting-edge research.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {labs.map((lab, index) => (
              <div
                key={index}
                className="border border-border p-8 hover:border-primary transition-colors group"
              >
                <div className="w-12 h-12 bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Microscope className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {lab.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {lab.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <Users className="w-3.5 h-3.5" />
                  {lab.capacity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="bg-foreground">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-medium text-primary uppercase tracking-widest mb-4">
                Partner With Us
              </span>

              <h2 className="text-3xl md:text-[40px] text-primary-foreground mb-6 leading-tight">
                Collaborate on Research That Matters
              </h2>

              <p className="text-primary-foreground/70 leading-relaxed mb-8">
                We welcome partnerships with industry, government agencies,
                NGOs, and international institutions. Our researchers bring deep
                expertise and a grounded understanding of the Nigerian and West
                African context.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Get In Touch
                </Button>

                <Button
                  variant="outline"
                  className="border border-primary-foreground text-primary-foreground bg-opacity-0 px-8"
                >
                  View All Projects
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Globe className="w-6 h-6" />,
                  label: "International Partners",
                  value: "12",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  label: "Industry Partners",
                  value: "25+",
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  label: "Active Grants",
                  value: "8",
                },
                {
                  icon: <Microscope className="w-6 h-6" />,
                  label: "PhD Students",
                  value: "34",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-primary-foreground/10 p-6 text-primary-foreground"
                >
                  <div className="text-primary mb-3">{item.icon}</div>

                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {item.value}
                  </div>

                  <div className="text-sm text-primary-foreground/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
