import type { Metadata } from 'next';
import { newsData } from '@/lib/data/news';
import { NewsContent } from './_components/NewsContent';

export const metadata: Metadata = {
  title: 'News & Announcements - Department of Data Science',
  description: 'Stay updated with the latest news, achievements, events, and research announcements from the Department of Data Science, UNIBEN.',
};

export default function NewsRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <div className="relative bg-muted border-b border-border overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 relative z-10">
          <h1 className="text-4xl md:text-5xl mb-4">News & Announcements</h1>
          <p className="text-lg text-muted-foreground">Stay updated with the latest developments from our department</p>
        </div>
        {/* Decorative blur */}
        <div
          className="absolute right-0 top-0 h-full w-[40%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 100% 50%, rgba(56,142,237,0.15) 0%, transparent 80%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <NewsContent allNews={newsData} />
      </div>
    </div>
  );
}
