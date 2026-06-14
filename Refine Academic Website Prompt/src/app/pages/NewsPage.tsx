import { useState } from 'react';
import { Link } from 'react-router';
import { Calendar, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const allNews = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGhhY2thdGhvbnxlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Achievement',
    title: 'UNIBEN Data Science Students Win Regional Analytics Challenge',
    excerpt: 'A team of five undergraduate students from the Department of Data Science emerged victorious at the West African Data Analytics Competition.',
    date: 'June 10, 2026',
    author: 'Dr. Chioma Eze'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzgxMzc2NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Research',
    title: 'Department Launches AI Research Initiative',
    excerpt: 'New research lab dedicated to artificial intelligence and machine learning applications in healthcare and agriculture.',
    date: 'June 12, 2026',
    author: 'Prof. Adebayo Okonkwo'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc4MTM3NjU5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Partnership',
    title: 'New Partnership with Tech Industry Leaders',
    excerpt: 'Strategic collaboration with leading technology companies to provide internship and employment opportunities for students.',
    date: 'June 11, 2026',
    author: 'Department Admin'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Curriculum',
    title: 'New Course on Advanced Data Visualization',
    excerpt: 'Department introduces cutting-edge curriculum focused on modern visualization techniques and interactive dashboards.',
    date: 'May 28, 2026',
    author: 'Dr. Oluwaseun Ibrahim'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Event',
    title: 'Annual Data Science Symposium 2026',
    excerpt: 'Three-day event featuring keynote speakers, workshops, and networking opportunities for students and professionals.',
    date: 'June 1, 2026',
    author: 'Event Coordinator'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3ODEzNzY1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Alumni',
    title: 'Class of 2026 Celebrates Success',
    excerpt: 'Graduating students secure positions at top tech companies including Google, Microsoft, and local startups.',
    date: 'May 25, 2026',
    author: 'Alumni Office'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbnRpc3R8ZW58MXx8fHwxNzgxMzc2NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Research',
    title: 'Lab Expansion Project Completed',
    excerpt: 'State-of-the-art facilities now available for advanced research in data science and machine learning.',
    date: 'May 22, 2026',
    author: 'Prof. Emeka Nwankwo'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1621241484978-6f60fdb68f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMG1vZGVybnxlbnwxfHx8fDE3ODEzNzY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Achievement',
    title: 'Department Ranked Top 3 in National Assessment',
    excerpt: 'The National Universities Commission assessment places UNIBEN Data Science among the top departments in Nigeria.',
    date: 'May 18, 2026',
    author: 'Department Admin'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzgxMzc2NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Event',
    title: 'Guest Lecture Series: Ethics in AI',
    excerpt: 'Industry experts and academics gather to discuss the ethical implications of artificial intelligence in modern society.',
    date: 'May 15, 2026',
    author: 'Dr. Chioma Eze'
  }
];

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

export function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = activeCategory === 'All'
    ? allNews
    : allNews.filter((n) => n.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header with right-side blur */}
      <div className="relative bg-[#F5F5F5] border-b border-[#E8E8E8] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 relative z-10">
          <h1 className="text-4xl md:text-5xl mb-4">News & Announcements</h1>
          <p className="text-lg text-[#717182]">Stay updated with the latest developments from our department</p>
        </div>
        {/* Decorative blue blur at right */}
        <div
          className="absolute right-0 top-0 h-full w-[40%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 100% 50%, rgba(56,142,237,0.18) 0%, rgba(56,142,237,0.07) 50%, transparent 80%)',
          }}
        />
        <div
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(56,142,237,0.22) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Grid */}
          <div className="lg:col-span-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[#E8E8E8]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-[#388EED] text-white'
                      : 'bg-[#F5F5F5] text-[#111111] hover:bg-[#388EED] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* News List */}
            {paginated.length === 0 ? (
              <p className="text-[#717182] py-12 text-center">No articles in this category yet.</p>
            ) : (
              <div className="space-y-8">
                {paginated.map((news, index) => (
                  <article
                    key={news.id}
                    className={`group ${index !== paginated.length - 1 ? 'pb-8 border-b border-[#E8E8E8]' : ''}`}
                  >
                    <Link to={`/news/${news.id}`} className="block">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1 relative aspect-[4/3] overflow-hidden">
                          <ImageWithFallback
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <span className="text-xs font-medium text-[#388EED] uppercase tracking-wider">
                            {news.category}
                          </span>
                          <h2 className="mt-2 text-2xl md:text-3xl leading-tight group-hover:text-[#388EED] transition-colors">
                            {news.title}
                          </h2>
                          <p className="mt-3 text-[#717182] leading-relaxed">
                            {news.excerpt}
                          </p>
                          <div className="mt-4 flex items-center gap-4 text-sm text-[#717182]">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {news.date}
                            </span>
                            <span>•</span>
                            <span>{news.author}</span>
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
              <div className="mt-10 flex items-center justify-between border-t border-[#E8E8E8] pt-6">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#111111] border border-[#E8E8E8] hover:border-[#388EED] hover:text-[#388EED] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
                          ? 'bg-[#388EED] text-white'
                          : 'text-[#111111] hover:bg-[#F5F5F5]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#111111] border border-[#E8E8E8] hover:border-[#388EED] hover:text-[#388EED] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
                  className="w-full px-4 py-3 pl-11 border border-[#E8E8E8] focus:outline-none focus:border-[#388EED] transition-colors"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]" />
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 pb-3 border-b border-[#E8E8E8]" style={{ fontFamily: 'Inter' }}>
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="block pb-4 border-b border-[#E8E8E8] last:border-0 group"
                  >
                    <h4 className="font-medium leading-snug group-hover:text-[#388EED] transition-colors" style={{ fontFamily: 'Inter', fontSize: '15px' }}>
                      {post.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#717182]">{post.date}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-[#F5F5F5] p-6">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter' }}>
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="pb-4 border-b border-[#E8E8E8] last:border-0">
                    <h4 className="font-medium leading-snug" style={{ fontFamily: 'Inter', fontSize: '15px' }}>
                      {event.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#388EED] font-medium">{event.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 pb-3 border-b border-[#E8E8E8]" style={{ fontFamily: 'Inter' }}>
                Categories
              </h3>
              <div className="space-y-2">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      activeCategory === category
                        ? 'text-[#388EED] bg-[#EBF4FF]'
                        : 'hover:bg-[#F5F5F5]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
