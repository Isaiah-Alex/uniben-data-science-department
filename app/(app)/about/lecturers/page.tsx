import type { Metadata } from "next";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { facultyData } from "@/lib/data/faculty";
import { LecturersContent } from "./_components/LecturersContent";

export const metadata: Metadata = {
  title: "Faculty Members - Department of Data Science",
  description:
    "Meet the researchers and educators behind UNIBEN's data science programmes — specialists committed to teaching, discovery, and impact.",
};

export default function LecturersRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <div className="relative bg-muted border-b border-border overflow-hidden">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-14 relative z-10">
          <span className="inline-block text-xs font-medium text-primary uppercase tracking-widest mb-3">
            Department of Data Science
          </span>
          <h1 className="text-4xl md:text-5xl mb-4">Our Lecturers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Meet the researchers and educators behind UNIBEN's data science
            programmes — specialists committed to teaching, discovery, and
            impact.
          </p>
        </div>
        <div
          className="absolute right-0 top-0 h-full w-[40%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 100% 50%, rgba(56,142,237,0.12) 0%, transparent 75%)",
          }}
        />
      </div>

      {/* Stats bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "12", label: "Faculty Members" },
              { value: "4", label: "Research Areas" },
              { value: "74+", label: "Publications (2024–2026)" },
              { value: "34", label: "PhD Students Supervised" },
            ].map((s, i) => (
              <div key={i}>
                <div
                  className="text-2xl md:text-3xl font-bold mb-0.5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-primary-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter and Grid Content (Client Component) */}
      <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8">
        <LecturersContent faculty={facultyData} />
      </div>

      {/* Join us CTA */}
      <div className="border-t border-border bg-muted">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-[36px] mb-4">Join Our Faculty</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are growing and actively seeking talented academics and
              researchers to join Nigeria's most dynamic data science
              department. If you are passionate about teaching and discovery, we
              want to hear from you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a
              href="mailto:datascience@uniben.edu.ng"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors rounded-sm"
            >
              <Mail className="w-4 h-4" />
              Contact the Department
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors rounded-sm"
            >
              About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
