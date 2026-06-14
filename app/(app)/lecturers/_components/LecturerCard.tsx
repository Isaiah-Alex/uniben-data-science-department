import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Lecturer } from '@/lib/data/faculty';

interface LecturerCardProps {
  person: Lecturer;
}

export function LecturerCard({ person }: LecturerCardProps) {
  return (
    <Link
      href={`/lecturers/${person.id}`}
      className="group flex flex-col border border-border overflow-hidden hover:border-primary transition-colors bg-background"
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <ImageWithFallback
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        {/* Rank badge */}
        <span className="absolute top-3 left-3 text-xs font-medium text-white bg-black/60 px-2.5 py-1 backdrop-blur-sm">
          {person.rank}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-medium text-lg leading-tight mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
          {person.name}
        </h3>
        <p className="text-sm text-primary font-medium mb-2">{person.role}</p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
          {person.bio}
        </p>

        {/* Research tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {person.researchTags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-sm font-medium">
              {tag}
            </span>
          ))}
          {person.researchTags.length > 2 && (
            <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-sm">
              +{person.researchTags.length - 2}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BookOpen className="w-3.5 h-3.5" />
            {person.publications} publications
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Profile <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
