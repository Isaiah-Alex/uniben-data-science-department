import { useParams, Link } from 'react-router';
import { Calendar, Clock, Share2, Facebook, Linkedin, ArrowLeft } from 'lucide-react';

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="X (formerly Twitter)">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { useEffect, useState } from 'react';

export function NewsArticle() {
  const { id } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const article = {
    title: 'UNIBEN Data Science Students Win Regional Analytics Challenge',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGhhY2thdGhvbnxlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'June 10, 2026',
    readTime: '5 min read',
    author: 'Dr. Chioma Eze',
    content: `
      <p>In a remarkable display of technical prowess and innovative thinking, a team of five undergraduate students from the Department of Data Science at the University of Benin emerged victorious at the prestigious West African Data Analytics Competition held in Lagos.</p>

      <p>The team, comprising final-year students Chukwudi Obi, Amara Nwosu, Tunde Adeleke, Folake Johnson, and Ifeanyi Okoro, competed against 47 teams from universities across West Africa. Their winning project focused on using machine learning algorithms to predict crop yields based on climate data, addressing a critical challenge in regional agriculture.</p>

      <h3>The Winning Solution</h3>

      <p>"Our solution combined historical weather patterns, soil composition data, and satellite imagery to create a predictive model that farmers can use to optimize their planting strategies," explained team leader Chukwudi Obi. "We achieved 92% accuracy in our predictions, which could translate to significant improvements in food security across the region."</p>

      <p>The competition, now in its fifth year, challenges students to develop practical data science solutions to real-world problems. This year's theme was "Data for Development," emphasizing the role of analytics in addressing societal challenges.</p>

      <h3>Journey to Victory</h3>

      <p>The team's preparation for the competition began six months ago under the mentorship of Dr. Chioma Eze, a senior lecturer in the department specializing in big data analytics. "These students demonstrated exceptional dedication," Dr. Eze noted. "They would often work late into the night, testing different algorithms and refining their models."</p>

      <p>The competition consisted of three rounds: an initial submission of a project proposal, a technical implementation phase, and a final presentation to a panel of industry experts and academics. The UNIBEN team excelled in all three stages, particularly impressing judges with their thorough data preprocessing methodology and innovative feature engineering techniques.</p>

      <h3>Recognition and Opportunities</h3>

      <p>As winners, the team received a cash prize of ₦2 million, certificates of excellence, and internship offers from three leading technology companies. Additionally, their solution will be piloted in partnership with the Nigerian Agricultural Development Authority.</p>

      <p>"This victory is not just about winning a competition," said Prof. Adebayo Okonkwo, Head of the Department of Data Science. "It validates our curriculum's focus on practical, impactful applications of data science. Our students are not just learning theory—they're solving real problems that affect millions of people."</p>

      <h3>Impact on the Department</h3>

      <p>The win has brought renewed attention to UNIBEN's Data Science program, which has been growing steadily since its establishment five years ago. Applications for the upcoming academic year have increased by 40%, and the department has received inquiries from several international institutions interested in collaboration.</p>

      <p>Team member Amara Nwosu shared her perspective on the experience: "This competition taught us more than any textbook could. We learned how to work under pressure, communicate complex ideas simply, and most importantly, how to use our skills to make a difference. I'm proud to represent UNIBEN and Nigeria on this platform."</p>

      <h3>Looking Ahead</h3>

      <p>The department plans to build on this success by establishing a dedicated research lab focused on agricultural data analytics. Discussions are also underway to create an annual internal competition to identify and nurture talent for future regional and international competitions.</p>

      <p>As the team prepares to graduate later this year, they leave behind a legacy of excellence and inspiration for current and future students. Their achievement demonstrates that with the right combination of education, mentorship, and determination, Nigerian students can compete and excel on any stage.</p>
    `
  };

  const relatedArticles = [
    {
      id: 2,
      title: 'Department Launches AI Research Initiative',
      date: 'June 12, 2026',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzgxMzc2NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      title: 'New Partnership with Tech Industry Leaders',
      date: 'June 11, 2026',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      title: 'New Course on Advanced Data Visualization',
      date: 'May 28, 2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div>
      {/* Reading Progress Bar */}
      <div className="fixed top-[72px] left-0 w-full h-1 bg-[#F5F5F5] z-50">
        <div
          className="h-full bg-[#388EED] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back Button */}
      <div className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm text-[#717182] hover:text-[#388EED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-[720px] mx-auto py-12">
          <span className="inline-block px-3 py-1 bg-[#388EED] text-white text-xs font-medium uppercase tracking-wider">
            {article.category}
          </span>
          
          <h1 className="mt-6 text-4xl md:text-5xl leading-tight">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#717182] pb-6 border-b border-[#E8E8E8]">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
            <span>•</span>
            <span>By {article.author}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] overflow-hidden my-8">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontFamily: 'Inter',
                lineHeight: '1.8',
                color: '#111111'
              }}
            />

            {/* Share Row */}
            <div className="mt-12 pt-8 border-t border-[#E8E8E8]">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-[#717182]">Share this article:</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-[#388EED] hover:text-white flex items-center justify-center transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-[#388EED] hover:text-white flex items-center justify-center transition-colors">
                    <XLogo className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-[#388EED] hover:text-white flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#F5F5F5] hover:bg-[#388EED] hover:text-white flex items-center justify-center transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              {/* Author Info */}
              <div className="bg-[#F5F5F5] p-6 mb-6">
                <h3 className="text-sm font-medium text-[#717182] uppercase tracking-wider mb-3">
                  Written By
                </h3>
                <h4 className="font-bold text-lg mb-2" style={{ fontFamily: 'Inter' }}>
                  {article.author}
                </h4>
                <p className="text-sm text-[#717182]">
                  Senior Lecturer in Big Data Analytics
                </p>
              </div>

              {/* Related Articles */}
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter' }}>
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      to={`/news/${related.id}`}
                      className="group block pb-4 border-b border-[#E8E8E8] last:border-0"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden mb-3">
                        <ImageWithFallback
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-medium leading-snug group-hover:text-[#388EED] transition-colors" style={{ fontFamily: 'Playfair Display', fontSize: '16px' }}>
                        {related.title}
                      </h4>
                      <p className="mt-1 text-xs text-[#717182]">{related.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Custom Styles for Article Content */}
      <style>{`
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .prose h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #111111;
        }
      `}</style>
    </div>
  );
}
