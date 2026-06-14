import Link from 'next/link';
import { Clock, BookOpen, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { Program } from '@/lib/data/programs';

interface ProgramCardProps {
  prog: Program;
  index: number;
}

export function ProgramCard({ prog, index }: ProgramCardProps) {
  // Use tailwind semantic colors instead of inline hex styles
  const badgeClasses = 
    prog.id === 'bsc-data-science' ? 'bg-primary text-primary-foreground' :
    prog.id === 'pgd-data-analytics' ? 'bg-indigo-600 text-white' : 
    'bg-emerald-600 text-white';

  const textClass = 
    prog.id === 'bsc-data-science' ? 'text-primary' :
    prog.id === 'pgd-data-analytics' ? 'text-indigo-600' :
    'text-emerald-600';

  const borderClass = 
    prog.id === 'bsc-data-science' ? 'hover:border-primary' :
    prog.id === 'pgd-data-analytics' ? 'hover:border-indigo-600' :
    'hover:border-emerald-600';

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border overflow-hidden transition-colors group ${borderClass}`}
    >
      {/* Image — alternate sides */}
      <div className={`lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[240px] overflow-hidden bg-muted ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
        <ImageWithFallback
          src={prog.image}
          alt={prog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Level badge */}
        <span className="absolute top-4 left-4 text-xs font-medium text-white bg-black/60 px-3 py-1 backdrop-blur-sm">
          {prog.level}
        </span>
      </div>

      {/* Content */}
      <div className={`lg:col-span-7 p-8 md:p-10 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''} bg-background`}>
        <div>
          {/* Badge + title */}
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs font-medium px-2.5 py-1 ${badgeClasses}`}>
              {prog.badge}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl mb-1 leading-tight font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{prog.title}</h2>
          <p className={`${textClass} font-medium mb-4 text-sm`}>{prog.subtitle}</p>
          <p className="text-muted-foreground leading-relaxed mb-6">{prog.description}</p>

          {/* Quick meta */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="text-sm font-medium">{prog.duration}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Credits</p>
                <p className="text-sm font-medium">{prog.credits}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Intake</p>
                <p className="text-sm font-medium">{prog.intake}</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-8">
            {prog.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href={`/programs/${prog.id}`}>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 flex items-center gap-2">
              View Programme <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6">
            Request Information
          </Button>
        </div>
      </div>
    </div>
  );
}
