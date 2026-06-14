import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Program } from '@/lib/data/programs';

interface ProgramsSectionProps {
  programs: Program[];
}

export function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl md:text-[40px] mb-8">Programs</h2>
        <div className="space-y-1">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={`/programs/${program.id}`}
              className="group flex items-center gap-6 py-6 px-6 border-l-4 border-transparent hover:border-primary hover:bg-muted transition-all"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-medium group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                  {program.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{program.description}</p>
                <p className="mt-2 text-sm text-primary font-medium">Duration: {program.duration}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
