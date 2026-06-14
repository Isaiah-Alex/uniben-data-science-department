import { Link } from 'react-router';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const featuredStory = {
    image: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGhhY2thdGhvbnxlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Achievement',
    title: 'UNIBEN Data Science Students Win Regional Analytics Challenge',
    summary: 'A team of five undergraduate students from the Department of Data Science emerged victorious at the West African Data Analytics Competition, showcasing exceptional skills in machine learning and predictive modeling.',
    date: 'June 10, 2026',
    readTime: '5 min read'
  };

  const latestUpdates = [
    { title: 'Department Launches AI Research Initiative', date: 'June 12, 2026', category: 'Research' },
    { title: 'New Partnership with Tech Industry Leaders', date: 'June 11, 2026', category: 'Partnership' },
    { title: 'Admissions Open for 2026/2027 Session', date: 'June 9, 2026', category: 'Admissions' },
    { title: 'Prof. Adeyemi Wins National Science Award', date: 'June 8, 2026', category: 'Award' },
    { title: 'Data Science Seminar Series Begins', date: 'June 7, 2026', category: 'Event' }
  ];

  const featuredNews = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzgxMzc2NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'AI Research',
      title: 'Breakthrough in Natural Language Processing',
      date: 'June 5, 2026'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc4MTM3NjU5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Blockchain',
      title: 'Department Explores Blockchain Applications',
      date: 'June 3, 2026'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tag: 'Conference',
      title: 'Annual Data Science Symposium 2026',
      date: 'June 1, 2026'
    }
  ];

  const newsGrid = [
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Analytics',
      title: 'New Course on Advanced Data Visualization',
      excerpt: 'Department introduces cutting-edge curriculum focused on modern visualization techniques and tools.',
      date: 'May 28, 2026',
      size: 'large'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3ODEzNzY1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Alumni',
      title: 'Class of 2026 Celebrates Success',
      excerpt: 'Graduating students secure positions at top tech companies.',
      date: 'May 25, 2026',
      size: 'small'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbnRpc3R8ZW58MXx8fHwxNzgxMzc2NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Research',
      title: 'Lab Expansion Project Completed',
      excerpt: 'State-of-the-art facilities now available for students.',
      date: 'May 22, 2026',
      size: 'small'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1621241484978-6f60fdb68f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMG1vZGVybnxlbnwxfHx8fDE3ODEzNzY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Campus',
      title: 'Campus Innovation Hub Opens',
      excerpt: 'New collaborative space for data science projects.',
      date: 'May 20, 2026',
      size: 'small'
    }
  ];

  const lecturers = [
    {
      id: 1,
      name: 'Prof. Adebayo Okonkwo',
      role: 'Head of Department',
      research: 'Machine Learning & AI',
      image: 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzgxMzc2NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Dr. Chioma Eze',
      role: 'Senior Lecturer',
      research: 'Big Data Analytics',
      image: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3ODEzNzY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Dr. Oluwaseun Ibrahim',
      role: 'Lecturer',
      research: 'Data Visualization',
      image: 'https://images.unsplash.com/photo-1618053448492-2b629c2c912c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNjaWVudGlzdHxlbnwxfHx8fDE3ODEzNzY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'Prof. Emeka Nwankwo',
      role: 'Professor',
      research: 'Statistical Modeling',
      image: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBhY2FkZW1pY3xlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const programs = [
    {
      id: 'bsc-data-science',
      title: 'B.Sc Data Science',
      description: 'Comprehensive undergraduate program combining mathematics, statistics, and computer science.',
      duration: '4 years'
    },
    {
      id: 'pgd-data-analytics',
      title: 'Postgraduate Diploma in Data Analytics',
      description: 'Professional certification for working professionals seeking to transition into data science.',
      duration: '1 year'
    },
    {
      id: 'msc-data-analytics',
      title: 'M.Sc Data Analytics',
      description: 'Advanced graduate program focusing on machine learning, AI, and big data technologies.',
      duration: '18 months'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Story */}
            <div className="lg:col-span-8">
              <Link to={`/news/${featuredStory.title.toLowerCase().replace(/\s+/g, '-')}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 bg-[#388EED] text-white text-xs font-medium uppercase tracking-wider">
                    {featuredStory.category}
                  </span>
                  <h1 className="mt-4 text-3xl md:text-[48px] leading-tight group-hover:text-[#388EED] transition-colors">
                    {featuredStory.title}
                  </h1>
                  <p className="mt-4 text-lg text-[#717182] leading-relaxed">
                    {featuredStory.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-[#717182]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredStory.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredStory.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Latest Updates Sidebar */}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-[#E8E8E8]" style={{ fontFamily: 'Inter' }}>
                Latest Updates
              </h3>
              <div className="space-y-4">
                {latestUpdates.map((update, index) => (
                  <Link
                    key={index}
                    to={`/news/${update.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block pb-4 border-b border-[#E8E8E8] last:border-0 group"
                  >
                    <span className="text-xs font-medium text-[#388EED] uppercase tracking-wider">
                      {update.category}
                    </span>
                    <h4 className="mt-2 font-medium leading-snug group-hover:text-[#388EED] transition-colors" style={{ fontFamily: 'Inter', fontSize: '15px' }}>
                      {update.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#717182]">{update.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Strip */}
      <section className="bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNews.map((news) => (
              <Link key={news.id} to={`/news/${news.id}`} className="group bg-white overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-[#388EED] uppercase tracking-wider">
                    {news.tag}
                  </span>
                  <h3 className="mt-2 font-medium leading-snug group-hover:text-[#388EED] transition-colors" style={{ fontFamily: 'Playfair Display', fontSize: '20px' }}>
                    {news.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#717182]">{news.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-[40px]">News & Announcements</h2>
            <Link to="/news" className="flex items-center gap-2 text-sm font-medium text-[#388EED] hover:gap-3 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Large Card */}
            <div className="lg:col-span-7">
              <Link to={`/news/${newsGrid[0].id}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={newsGrid[0].image}
                    alt={newsGrid[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-medium text-[#388EED] uppercase tracking-wider">
                    {newsGrid[0].category}
                  </span>
                  <h3 className="mt-2 text-2xl leading-tight group-hover:text-[#388EED] transition-colors">
                    {newsGrid[0].title}
                  </h3>
                  <p className="mt-3 text-[#717182] leading-relaxed">
                    {newsGrid[0].excerpt}
                  </p>
                  <p className="mt-3 text-sm text-[#717182]">{newsGrid[0].date}</p>
                </div>
              </Link>
            </div>

            {/* Small Cards */}
            <div className="lg:col-span-5 space-y-6">
              {newsGrid.slice(1).map((news) => (
                <Link key={news.id} to={`/news/${news.id}`} className="group flex gap-4 pb-6 border-b border-[#E8E8E8] last:border-0">
                  <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden">
                    <ImageWithFallback
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-[#388EED] uppercase tracking-wider">
                      {news.category}
                    </span>
                    <h4 className="mt-1 font-medium leading-snug group-hover:text-[#388EED] transition-colors line-clamp-2" style={{ fontFamily: 'Playfair Display', fontSize: '16px' }}>
                      {news.title}
                    </h4>
                    <p className="mt-2 text-xs text-[#717182]">{news.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Lecturers */}
      <section className="bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-3xl md:text-[40px] mb-8">Meet Our Lecturers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lecturers.map((lecturer) => (
              <Link
                key={lecturer.id}
                to={`/lecturer/${lecturer.id}`}
                className="group bg-white overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={lecturer.image}
                    alt={lecturer.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-lg leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                    {lecturer.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#717182]">{lecturer.role}</p>
                  <p className="mt-2 text-xs text-[#388EED] font-medium">{lecturer.research}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-3xl md:text-[40px] mb-8">Programs</h2>
          <div className="space-y-1">
            {programs.map((program) => (
              <Link
                key={program.id}
                to={`/programs/${program.id}`}
                className="group flex items-center gap-6 py-6 px-6 border-l-4 border-transparent hover:border-[#388EED] hover:bg-[#F5F5F5] transition-all"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-medium group-hover:text-[#388EED] transition-colors" style={{ fontFamily: 'Playfair Display' }}>
                    {program.title}
                  </h3>
                  <p className="mt-2 text-[#717182] leading-relaxed">{program.description}</p>
                  <p className="mt-2 text-sm text-[#388EED] font-medium">Duration: {program.duration}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#388EED] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc29yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzgxMzc2NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Department of Data Science"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-[40px] mb-6">About the Department</h2>
              <p className="text-lg text-[#717182] leading-relaxed mb-6">
                The Department of Data Science at the University of Benin is at the forefront of data-driven innovation in West Africa. We combine rigorous academic training with practical industry experience to prepare the next generation of data scientists and analysts.
              </p>
              <blockquote className="border-l-4 border-[#388EED] pl-6 mb-6">
                <p className="text-lg italic text-[#111111] leading-relaxed mb-3">
                  "Our mission is to empower students with the knowledge and skills to transform data into actionable insights that drive societal progress."
                </p>
                <footer className="text-sm">
                  <strong>Prof. Adebayo Okonkwo</strong>
                  <br />
                  <span className="text-[#717182]">Head of Department</span>
                </footer>
              </blockquote>
              <Button className="bg-[#388EED] hover:bg-[#2d7ad4] text-white px-6">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
