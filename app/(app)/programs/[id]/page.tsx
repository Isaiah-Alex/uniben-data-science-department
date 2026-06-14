import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { programsData } from '@/lib/data/programs';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const program = programsData.find(item => item.id === id);
  if (!program) return {};
  return {
    title: `${program.title} - Department of Data Science`,
    description: program.description,
  };
}

export default async function ProgramDetailRoute({ params }: PageProps) {
  const { id } = await params;
  const program = programsData.find(item => item.id === id);
  if (!program) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      {/* Back Button */}
      <div className="border-b border-border bg-background">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
        </div>
      </div>

      {/* Program Header */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl mb-4 font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
            {program.title}
          </h1>
          <p className="text-xl text-primary font-medium mb-6">{program.subtitle}</p>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            {program.description}
          </p>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3 bg-background p-4 border border-border rounded-sm">
              <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium text-lg text-foreground">{program.duration}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-background p-4 border border-border rounded-sm">
              <BookOpen className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Credits</p>
                <p className="font-medium text-lg text-foreground">{program.credits}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-background p-4 border border-border rounded-sm">
              <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Annual Intake</p>
                <p className="font-medium text-lg text-foreground">{program.intake}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-sm">
              Apply Now for 2026/2027
            </Button>
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-sm bg-background">
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {program.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <Accordion type="single" collapsible className="space-y-4">
          {/* Overview */}
          <AccordionItem value="overview" className="border border-border px-6 bg-background">
            <AccordionTrigger className="text-2xl py-6 hover:no-underline hover:text-primary text-foreground font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
              Program Overview
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                {program.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Curriculum */}
          <AccordionItem value="curriculum" className="border border-border px-6 bg-background">
            <AccordionTrigger className="text-2xl py-6 hover:no-underline hover:text-primary text-foreground font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
              Curriculum
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-8">
                {program.curriculum.map((year, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-sans)' }}>
                      {year.semester}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {year.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex items-start gap-2 text-muted-foreground font-medium"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Requirements */}
          <AccordionItem value="requirements" className="border border-border px-6 bg-background">
            <AccordionTrigger className="text-2xl py-6 hover:no-underline hover:text-primary text-foreground font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
              Admission & Graduation Requirements
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-sans)' }}>
                    Entry Requirements
                  </h3>
                  <ul className="space-y-3">
                    {program.requirements.entry.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground font-medium">
                        <span className="text-primary mt-1">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary" style={{ fontFamily: 'var(--font-sans)' }}>
                    Graduation Requirements
                  </h3>
                  <ul className="space-y-3">
                    {program.requirements.graduation.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground font-medium">
                        <span className="text-primary mt-1">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Career Opportunities */}
          <AccordionItem value="careers" className="border border-border px-6 bg-background">
            <AccordionTrigger className="text-2xl py-6 hover:no-underline hover:text-primary text-foreground font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
              Career Opportunities
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.careers.map((career, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6 py-3 bg-muted/20">
                    <h4 className="text-lg font-bold mb-2 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                      {career.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {career.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-muted border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  Our graduates have secured positions at leading organizations including Google, Microsoft, Amazon, 
                  Andela, Flutterwave, and various research institutions. Many have also founded successful startups 
                  or pursued advanced degrees at top universities worldwide.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Section */}
        <div className="mt-12 bg-primary text-primary-foreground p-8 md:p-12 text-center rounded-sm">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join the next generation of data scientists and make an impact through data-driven innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-primary hover:bg-background/90 px-8 py-6 text-lg rounded-sm">
              Apply Now
            </Button>
            <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg rounded-sm">
              Request Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
