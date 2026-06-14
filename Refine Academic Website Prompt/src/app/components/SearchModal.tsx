import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const searchData = [
  { label: 'UNIBEN Students Win Regional Analytics Challenge', href: '/news/1', category: 'News' },
  { label: 'Department Launches AI Research Initiative', href: '/news/2', category: 'News' },
  { label: 'B.Sc Data Science Program', href: '/programs/bsc-data-science', category: 'Program' },
  { label: 'Postgraduate Diploma in Data Analytics', href: '/programs/pgd-data-analytics', category: 'Program' },
  { label: 'M.Sc Data Analytics', href: '/programs/msc-data-analytics', category: 'Program' },
  { label: 'Research Initiatives', href: '/research', category: 'Page' },
  { label: 'About the Department', href: '/about', category: 'Page' },
  { label: 'News & Announcements', href: '/news', category: 'Page' },
  { label: 'Prof. Adebayo Okonkwo', href: '/lecturer/1', category: 'Lecturer' },
  { label: 'Dr. Chioma Eze', href: '/lecturer/2', category: 'Lecturer' },
];

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const results = query.trim()
    ? searchData.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchData.slice(0, 6);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl mx-4 bg-white shadow-2xl border border-[#E8E8E8]">
        {/* Search Input */}
        <div className="flex items-center border-b border-[#E8E8E8] px-4">
          <Search className="w-5 h-5 text-[#717182] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news, programs, lecturers..."
            className="flex-1 px-4 py-4 text-base text-[#111111] placeholder:text-[#717182] outline-none bg-transparent"
          />
          <button onClick={onClose} className="p-1 hover:bg-[#F5F5F5] rounded transition-colors">
            <X className="w-4 h-4 text-[#717182]" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[360px] overflow-y-auto">
          {results.length === 0 ? (
            <p className="text-center text-[#717182] py-8 text-sm">No results found for "{query}"</p>
          ) : (
            <div className="py-2">
              {results.map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-4 py-3 hover:bg-[#F5F5F5] group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#388EED] bg-[#EBF4FF] px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-sm text-[#111111] group-hover:text-[#388EED] transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#717182] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[#E8E8E8] px-4 py-2 flex items-center gap-4">
          <span className="text-xs text-[#717182]">Press <kbd className="px-1.5 py-0.5 bg-[#F5F5F5] border border-[#E8E8E8] rounded text-xs">Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}
