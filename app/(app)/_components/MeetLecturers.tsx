import Link from 'next/link';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { Lecturer } from '@/lib/data/faculty';

interface MeetLecturersProps {
  lecturers: Lecturer[];
}

export function MeetLecturers({ lecturers }: MeetLecturersProps) {
  return (
    <section className="bg-muted border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl md:text-[40px] mb-8">Meet Our Lecturers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lecturers.map((lecturer) => (
            <Link
              key={lecturer.id}
              href={`/lecturers/${lecturer.id}`}
              className="group bg-background overflow-hidden border border-border shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <ImageWithFallback
                  src={lecturer.image}
                  alt={lecturer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-lg leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                  {lecturer.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{lecturer.role}</p>
                <p className="mt-2 text-xs text-primary font-medium">{lecturer.research[0] || lecturer.researchTags[0]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
