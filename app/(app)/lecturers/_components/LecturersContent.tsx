"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Lecturer } from '@/lib/data/faculty';
import { LecturerCard } from './LecturerCard';

const ranks = ['All', 'Professor', 'Senior Lecturer', 'Lecturer'];

interface LecturersContentProps {
  faculty: Lecturer[];
}

export function LecturersContent({ faculty }: LecturersContentProps) {
  const [query, setQuery] = useState('');
  const [activeRank, setActiveRank] = useState('All');

  const filtered = faculty.filter((f) => {
    const matchesRank = activeRank === 'All' || f.rank === activeRank;
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      f.name.toLowerCase().includes(q) ||
      f.research.some((r) => r.toLowerCase().includes(q)) ||
      f.researchTags.some((t) => t.toLowerCase().includes(q));
    return matchesRank && matchesQuery;
  });

  return (
    <div>
      {/* Filters */}
      <div className="border-b border-border sticky top-[64px] md:top-[72px] bg-background z-40">
        <div className="max-w-[1200px] mx-auto py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or research area..."
              className="w-full pl-9 pr-4 py-2.5 border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Rank filter */}
          <div className="flex flex-wrap gap-2">
            {ranks.map((rank) => (
              <button
                key={rank}
                onClick={() => setActiveRank(rank)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeRank === rank
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {rank}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-muted/20 border border-dashed border-border rounded-sm">
            <p className="text-muted-foreground text-lg">No faculty match your search.</p>
            <button
              onClick={() => { setQuery(''); setActiveRank('All'); }}
              className="mt-4 text-sm text-primary hover:underline font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((person) => (
              <LecturerCard key={person.id} person={person} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
