import { useState } from 'react';
import { Link } from 'react-router';
import { Search, ArrowRight, Mail, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const faculty = [
  {
    id: 1,
    name: 'Prof. Adebayo Okonkwo',
    role: 'Head of Department',
    rank: 'Professor',
    research: 'Machine Learning & AI',
    researchTags: ['Deep Learning', 'NLP', 'AI Ethics', 'Computer Vision'],
    email: 'a.okonkwo@uniben.edu.ng',
    publications: 60,
    image: 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzgxMzc2NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Ph.D. MIT 2011. Former researcher at Google AI and Microsoft Research. Over 15 years shaping data science education and policy in Nigeria.',
  },
  {
    id: 2,
    name: 'Dr. Chioma Eze',
    role: 'Senior Lecturer & Deputy HOD',
    rank: 'Senior Lecturer',
    research: 'Big Data Analytics',
    researchTags: ['Apache Spark', 'Cloud Computing', 'ETL Pipelines', 'Real-time Systems'],
    email: 'c.eze@uniben.edu.ng',
    publications: 38,
    image: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3ODEzNzY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Ph.D. Imperial College London. Specialist in distributed data systems and industry-academia partnership. Leads the department\'s corporate engagement.',
  },
  {
    id: 3,
    name: 'Dr. Oluwaseun Ibrahim',
    role: 'Lecturer & Programme Coordinator',
    rank: 'Lecturer',
    research: 'Data Visualization & HCI',
    researchTags: ['D3.js', 'Tableau', 'UX Research', 'Information Design'],
    email: 'o.ibrahim@uniben.edu.ng',
    publications: 22,
    image: 'https://images.unsplash.com/photo-1618053448492-2b629c2c912c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNjaWVudGlzdHxlbnwxfHx8fDE3ODEzNzY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Ph.D. Carnegie Mellon University. Develops open-source visualization tools deployed across West Africa for public health decision-making.',
  },
  {
    id: 4,
    name: 'Prof. Emeka Nwankwo',
    role: 'Professor of Statistics',
    rank: 'Professor',
    research: 'Statistical Modeling & Biostatistics',
    researchTags: ['Bayesian Inference', 'Survival Analysis', 'R', 'Clinical Trials'],
    email: 'e.nwankwo@uniben.edu.ng',
    publications: 51,
    image: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBhY2FkZW1pY3xlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'D.Sc. University of Lagos. One of Nigeria\'s foremost biostatisticians; his Bayesian methods research has influenced federal health policy.',
  },
  {
    id: 5,
    name: 'Dr. Tunde Adeleke',
    role: 'Lecturer',
    rank: 'Lecturer',
    research: 'Natural Language Processing',
    researchTags: ['Transformer Models', 'Yoruba NLP', 'Text Classification', 'LLMs'],
    email: 't.adeleke@uniben.edu.ng',
    publications: 17,
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbnRpc3R8ZW58MXx8fHwxNzgxMzc2NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Ph.D. University of Cape Town. Focuses on building NLP resources and models for low-resource African languages, particularly Yoruba and Igbo.',
  },
  {
    id: 6,
    name: 'Dr. Amara Nwosu',
    role: 'Lecturer',
    rank: 'Lecturer',
    research: 'Computer Vision & Remote Sensing',
    researchTags: ['CNNs', 'Satellite Imagery', 'Object Detection', 'Agricultural AI'],
    email: 'a.nwosu@uniben.edu.ng',
    publications: 14,
    image: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3ODEzNzY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Ph.D. University of Witwatersrand. Applies computer vision to satellite imagery for crop monitoring and environmental analysis across sub-Saharan Africa.',
  },
  {
    id: 7,
    name: 'Dr. Kelechi Obi',
    role: 'Lecturer',
    rank: 'Lecturer',
    research: 'Reinforcement Learning & Robotics',
    researchTags: ['RL Algorithms', 'Simulation', 'Control Systems', 'Autonomous Agents'],
    email: 'k.obi@uniben.edu.ng',
    publications: 11,
    image: 'https://images.unsplash.com/photo-1621241484978-6f60fdb68f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMG1vZGVybnxlbnwxfHx8fDE3ODEzNzY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Ph.D. University of Edinburgh. Developing RL frameworks optimised for resource-constrained edge devices common in the West African industrial context.',
  },
  {
    id: 8,
    name: 'Dr. Folake Johnson',
    role: 'Lecturer & Admissions Coordinator',
    rank: 'Lecturer',
    research: 'Health Informatics & Data Ethics',
    researchTags: ['Electronic Health Records', 'Privacy', 'Fairness in ML', 'Public Health'],
    email: 'f.johnson@uniben.edu.ng',
    publications: 19,
    image: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGhhY2thdGhvbnxlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Ph.D. University of Ghana. Research focuses on the ethical deployment of ML in healthcare settings, with an emphasis on equity and patient data governance.',
  },
];

const ranks = ['All', 'Professor', 'Senior Lecturer', 'Lecturer'];

export function Lecturers() {
  const [query, setQuery] = useState('');
  const [activeRank, setActiveRank] = useState('All');

  const filtered = faculty.filter((f) => {
    const matchesRank = activeRank === 'All' || f.rank === activeRank;
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      f.name.toLowerCase().includes(q) ||
      f.research.toLowerCase().includes(q) ||
      f.researchTags.some((t) => t.toLowerCase().includes(q));
    return matchesRank && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="relative bg-[#F5F5F5] border-b border-[#E8E8E8] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-14 relative z-10">
          <span className="inline-block text-xs font-medium text-[#388EED] uppercase tracking-widest mb-3">
            Department of Data Science
          </span>
          <h1 className="text-4xl md:text-5xl mb-4">Our Faculty</h1>
          <p className="text-lg text-[#717182] max-w-2xl">
            Meet the researchers and educators behind UNIBEN's data science programmes — specialists committed to teaching, discovery, and impact.
          </p>
        </div>
        <div
          className="absolute right-0 top-0 h-full w-[40%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 100% 50%, rgba(56,142,237,0.15) 0%, transparent 75%)',
          }}
        />
      </div>

      {/* Stats bar */}
      <div className="bg-[#388EED]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '12', label: 'Faculty Members' },
              { value: '4', label: 'Research Areas' },
              { value: '74+', label: 'Publications (2024–2026)' },
              { value: '34', label: 'PhD Students Supervised' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold mb-0.5" style={{ fontFamily: 'Playfair Display' }}>
                  {s.value}
                </div>
                <div className="text-xs text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-[#E8E8E8] sticky top-[72px] bg-white z-40">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or research area..."
              className="w-full pl-9 pr-4 py-2.5 border border-[#E8E8E8] text-sm focus:outline-none focus:border-[#388EED] transition-colors"
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
                    ? 'bg-[#388EED] text-white'
                    : 'bg-[#F5F5F5] text-[#111111] hover:bg-[#388EED] hover:text-white'
                }`}
              >
                {rank}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#717182] text-lg">No faculty match your search.</p>
            <button
              onClick={() => { setQuery(''); setActiveRank('All'); }}
              className="mt-4 text-sm text-[#388EED] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((person) => (
              <Link
                key={person.id}
                to={`/lecturer/${person.id}`}
                className="group flex flex-col border border-[#E8E8E8] overflow-hidden hover:border-[#388EED] transition-colors"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Rank badge */}
                  <span className="absolute top-3 left-3 text-xs font-medium text-white bg-black/50 px-2.5 py-1 backdrop-blur-sm">
                    {person.rank}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-medium text-lg leading-tight mb-1" style={{ fontFamily: 'Playfair Display' }}>
                    {person.name}
                  </h3>
                  <p className="text-sm text-[#388EED] font-medium mb-2">{person.role}</p>
                  <p className="text-xs text-[#717182] leading-relaxed mb-4 line-clamp-3 flex-1">
                    {person.bio}
                  </p>

                  {/* Research tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {person.researchTags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-[#EBF4FF] text-[#388EED]">
                        {tag}
                      </span>
                    ))}
                    {person.researchTags.length > 2 && (
                      <span className="text-xs px-2 py-0.5 bg-[#F5F5F5] text-[#717182]">
                        +{person.researchTags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8]">
                    <div className="flex items-center gap-1.5 text-xs text-[#717182]">
                      <BookOpen className="w-3.5 h-3.5" />
                      {person.publications} publications
                    </div>
                    <span className="flex items-center gap-1 text-xs font-medium text-[#388EED] opacity-0 group-hover:opacity-100 transition-opacity">
                      Profile <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Join us CTA */}
      <div className="border-t border-[#E8E8E8] bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-[36px] mb-4">Join Our Faculty</h2>
            <p className="text-[#717182] leading-relaxed">
              We are growing and actively seeking talented academics and researchers to join Nigeria's most dynamic data science department. If you are passionate about teaching and discovery, we want to hear from you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <a href="mailto:datascience@uniben.edu.ng" className="inline-flex items-center gap-2 px-6 py-3 bg-[#388EED] text-white text-sm font-medium hover:bg-[#2d7ad4] transition-colors">
              <Mail className="w-4 h-4" />
              Contact the Department
            </a>
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#111111] text-[#111111] text-sm font-medium hover:bg-[#111111] hover:text-white transition-colors">
              About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
