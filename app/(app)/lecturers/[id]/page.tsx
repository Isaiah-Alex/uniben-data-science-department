import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Book,
  Award,
  Users,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { facultyData } from "@/lib/data/faculty";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const lecturer = facultyData.find((item) => item.id.toString() === id);
  if (!lecturer) return {};
  return {
    title: `${lecturer.name} - Faculty Profile`,
    description: `${lecturer.role} in the Department of Data Science, UNIBEN. Research interests: ${lecturer.research.join(", ")}`,
  };
}

export default async function LecturerProfileRoute({ params }: PageProps) {
  const { id } = await params;
  const lecturer = facultyData.find((item) => item.id.toString() === id);
  if (!lecturer) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Back Button */}
      <div className="border-b border-border bg-background">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link
            href="/lecturers"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Faculty
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-3">
              <div className="relative aspect-3/4 overflow-hidden bg-background border border-border rounded-sm">
                <ImageWithFallback
                  src={lecturer.image}
                  alt={lecturer.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-9">
              <h1
                className="text-4xl md:text-5xl mb-3 font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {lecturer.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-2">
                {lecturer.role}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {lecturer.department}
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${lecturer.email}`}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {lecturer.email}
                    </a>
                  </div>
                </div>
                {lecturer.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">
                        {lecturer.phone}
                      </p>
                    </div>
                  </div>
                )}
                {lecturer.office && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Office</p>
                      <p className="text-foreground font-medium">
                        {lecturer.office}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Office Hours
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Biography */}
            <section>
              <h2
                className="text-3xl mb-6 flex items-center gap-3 font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <Users className="w-8 h-8 text-primary" />
                Biography
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                {lecturer.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </section>

            {/* Education */}
            {lecturer.education && lecturer.education.length > 0 && (
              <section>
                <h2
                  className="text-3xl mb-6 flex items-center gap-3 font-bold"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  <Book className="w-8 h-8 text-primary" />
                  Education
                </h2>
                <div className="space-y-4">
                  {lecturer.education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-primary pl-6 py-2 bg-muted/30"
                    >
                      <h3
                        className="text-xl font-medium"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-primary font-medium mt-1">
                        {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Publications */}
            {lecturer.publicationsList &&
              lecturer.publicationsList.length > 0 && (
                <section>
                  <h2
                    className="text-3xl mb-6 flex items-center gap-3 font-bold"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    <ExternalLink className="w-8 h-8 text-primary" />
                    Selected Publications
                  </h2>
                  <div className="space-y-6">
                    {lecturer.publicationsList.map((pub, index) => (
                      <div
                        key={index}
                        className="pb-6 border-b border-border last:border-0"
                      >
                        <h3
                          className="text-lg font-medium leading-snug hover:text-primary transition-colors cursor-pointer"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {pub.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground text-sm">
                          <em>{pub.journal}</em>, {pub.year}
                        </p>
                        <p className="mt-1 text-sm text-primary">
                          {pub.citations} citations
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Research Interests */}
              <div className="bg-muted p-6 border border-border">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Research Interests
                </h3>
                <ul className="space-y-2">
                  {lecturer.research.map((topic, index) => (
                    <li
                      key={index}
                      className="text-sm text-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary font-medium"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              {lecturer.courses && lecturer.courses.length > 0 && (
                <div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Current Courses
                  </h3>
                  <ul className="space-y-2">
                    {lecturer.courses.map((course, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground pb-2 border-b border-border last:border-0 font-medium"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Awards */}
              {lecturer.awards && lecturer.awards.length > 0 && (
                <div className="bg-muted p-6 border border-border">
                  <h3
                    className="text-xl font-bold mb-4 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <Award className="w-5 h-5 text-primary" />
                    Awards & Honors
                  </h3>
                  <ul className="space-y-3">
                    {lecturer.awards.map((award, index) => (
                      <li
                        key={index}
                        className="text-sm text-foreground font-medium"
                      >
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
