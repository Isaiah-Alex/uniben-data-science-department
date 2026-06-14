"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { NewsItem } from '@/lib/data/news';

const ITEMS_PER_PAGE = 4;
const categories = ['All', 'Achievement', 'Research', 'Partnership', 'Event', 'Curriculum', 'Alumni'];

const recentPosts = [
  { title: 'Data Science Workshop Series Begins', date: 'June 13, 2026' },
  { title: 'Guest Lecture: Ethics in AI', date: 'June 12, 2026' },
  { title: 'Student Hackathon Registration Open', date: 'June 11, 2026' },
  { title: 'Department Newsletter June 2026', date: 'June 10, 2026' }
];

const upcomingEvents = [
  { title: 'Open House for Prospective Students', date: 'June 20, 2026' },
  { title: 'Industry Panel Discussion', date: 'June 25, 2026' },
  { title: 'Research Showcase', date: 'July 1, 2026' }
];

interface NewsContentProps {
  allNews: NewsItem[];
}

export function NewsContent({ allNews }: NewsContentProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredByCategory = activeCategory === 'All'
    ? allNews
    : allNews.filter((n) => n.category === activeCategory);

  const filtered = searchQuery.trim()
    ? filteredByCategory.filter((n) => 
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        n.summary.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredByCategory;

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Main Grid */}
      <div className="lg:col-span-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-border">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News List */}
        {paginated.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center">No articles found in this category.</p>
        ) : (
          <div className="space-y-8">
            {paginated.map((news, index) => (
              <article
                key={news.id}
                className={`group ${index !== paginated.length - 1 ? 'pb-8 border-b border-border' : ''}`}
              >
                <Link href={`/news/${news.id}`} className="block">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 relative aspect-[4/3] overflow-hidden bg-muted">
                      <ImageWithFallback
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {news.category}
                      </span>
                      <h2 className="mt-2 text-2xl md:text-3xl leading-tight group-hover:text-primary transition-colors">
                        {news.title}
                      </h2>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {news.summary}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {news.date}
                        </span>
                        <span>•</span>
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-background"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 text-sm font-medium transition-colors ${
                    page === currentPage
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted bg-background border border-border'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors bg-background"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full px-4 py-3 pl-11 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 pb-3 border-b border-border" style={{ fontFamily: 'var(--font-sans)' }}>
            Recent Posts
          </h3>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="block pb-4 border-b border-border last:border-0 group"
              >
                <h4 className="font-medium leading-snug text-[15px]" style={{ fontFamily: 'var(--font-sans)' }}>
                  {post.title}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">{post.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-muted p-6 border border-border">
          <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            Upcoming Events
          </h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="pb-4 border-b border-border last:border-0">
                <h4 className="font-medium leading-snug text-[15px]" style={{ fontFamily: 'var(--font-sans)' }}>
                  {event.title}
                </h4>
                <p className="mt-1 text-xs text-primary font-medium">{event.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 pb-3 border-b border-border" style={{ fontFamily: 'var(--font-sans)' }}>
            Categories
          </h3>
          <div className="space-y-2">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors rounded-sm ${
                  activeCategory === category
                    ? 'text-primary bg-primary/10 font-medium'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
