import { Link } from 'react-router';
import { ArrowRight, Award, BookOpen, Users, Target, MapPin, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

const leadership = [
  {
    id: 1,
    name: 'Prof. Adebayo Okonkwo',
    role: 'Head of Department',
    bio: 'Prof. Okonkwo holds a Ph.D. from the University of Edinburgh and has over 20 years of academic and industry experience in machine learning and AI. He has published over 60 peer-reviewed papers and serves on the editorial boards of several international journals.',
    research: 'Machine Learning & AI',
    image: 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzgxMzc2NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Dr. Chioma Eze',
    role: 'Senior Lecturer & Deputy HOD',
    bio: 'Dr. Eze is a specialist in big data analytics with a Ph.D. from Imperial College London. She leads the department\'s industry partnerships and has been instrumental in building the curriculum\'s practical focus.',
    research: 'Big Data Analytics',
    image: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3ODEzNzY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'Dr. Oluwaseun Ibrahim',
    role: 'Lecturer & Programme Coordinator',
    bio: 'Dr. Ibrahim\'s research bridges data visualization and human-computer interaction. She completed her doctorate at Carnegie Mellon University and has developed visualization tools used across West Africa.',
    research: 'Data Visualization',
    image: 'https://images.unsplash.com/photo-1618053448492-2b629c2c912c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNjaWVudGlzdHxlbnwxfHx8fDE3ODEzNzY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    name: 'Prof. Emeka Nwankwo',
    role: 'Professor of Statistics',
    bio: 'Prof. Nwankwo is one of Nigeria\'s leading biostatisticians. His work on Bayesian methods for clinical trials has influenced health policy decisions at the federal level. He holds a D.Sc. from the University of Lagos.',
    research: 'Statistical Modeling',
    image: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBhY2FkZW1pY3xlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

const milestones = [
  { year: '2018', event: 'Department established as part of UNIBEN\'s Faculty of Physical Sciences' },
  { year: '2019', event: 'First cohort of 45 B.Sc. students admitted' },
  { year: '2020', event: 'AI & Machine Learning Lab inaugurated with TETFund support' },
  { year: '2021', event: 'Postgraduate Diploma programme launched; first international research grant secured' },
  { year: '2022', event: 'M.Sc. Data Analytics programme begins; NUC full accreditation received' },
  { year: '2023', event: 'Partnership with Google for Education and Microsoft Research established' },
  { year: '2024', event: 'Department ranked in top 5 for data science in Nigeria by NUC assessment' },
  { year: '2025', event: 'Expansion of research labs; PhD programme approved by Senate' },
  { year: '2026', event: 'Students win West African Data Analytics Competition; 94% graduate employment rate achieved' },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Academic Excellence',
    description: 'We hold ourselves and our students to the highest standards of rigour, integrity, and intellectual curiosity.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Inclusive Community',
    description: 'We celebrate diversity across gender, ethnicity, and background, knowing great data science requires many perspectives.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Impactful Research',
    description: 'We pursue knowledge that addresses real problems — in Nigeria, across Africa, and for the world.'
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Lifelong Learning',
    description: 'We equip graduates not just for today\'s jobs, but for careers that do not yet exist.'
  }
];

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-[#E8E8E8]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-4 md:px-6 lg:px-16 py-16 md:py-24 flex flex-col justify-center max-w-[600px]">
            <span className="inline-block text-xs font-medium text-[#388EED] uppercase tracking-widest mb-4">
              Since 2018
            </span>
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
              Shaping Nigeria's Data-Driven Future
            </h1>
            <p className="text-lg text-[#717182] leading-relaxed mb-8">
              The Department of Data Science at the University of Benin was founded with a singular conviction: that rigorous training in data science is essential for Nigeria's development. Today we are a vibrant community of researchers, educators, and students driving that mission forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/programs/bsc-data-science">
                <Button className="bg-[#388EED] hover:bg-[#2d7ad4] text-white px-8">
                  Explore Programs
                </Button>
              </Link>
              <Link to="/research">
                <Button variant="outline" className="border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white px-8">
                  Our Research
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto min-h-[360px] lg:min-h-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc29yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzgxMzc2NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Department of Data Science"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent lg:from-transparent" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#388EED]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '280+', label: 'Enrolled Students' },
              { value: '12', label: 'Faculty Members' },
              { value: '94%', label: 'Employment Rate' },
              { value: '25+', label: 'Industry Partners' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Playfair Display' }}>
                  {s.value}
                </div>
                <div className="text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#388EED] pl-8">
              <h2 className="text-2xl mb-4">Our Mission</h2>
              <p className="text-[#717182] leading-relaxed">
                To provide world-class education and research in data science that empowers graduates to develop data-driven solutions to local, national, and global challenges, while nurturing a culture of integrity, collaboration, and lifelong learning.
              </p>
            </div>
            <div className="border-l-4 border-[#111111] pl-8">
              <h2 className="text-2xl mb-4">Our Vision</h2>
              <p className="text-[#717182] leading-relaxed">
                To be West Africa's leading centre for data science education and research, recognised internationally for the quality of our graduates, the relevance of our scholarship, and our contribution to evidence-based decision-making across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-[40px] mb-3">Our Values</h2>
          <p className="text-[#717182] mb-12 text-lg">The principles that guide everything we do.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#EBF4FF] flex items-center justify-center text-[#388EED] mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg mb-3" style={{ fontFamily: 'Playfair Display' }}>{v.title}</h3>
                <p className="text-sm text-[#717182] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl md:text-[40px] mb-2">Leadership</h2>
              <p className="text-[#717182]">The faculty driving our academic mission</p>
            </div>
            <Link to="/lecturer/1" className="hidden md:flex items-center gap-2 text-sm font-medium text-[#388EED] hover:gap-3 transition-all">
              All Faculty <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((person) => (
              <Link
                key={person.id}
                to={`/lecturer/${person.id}`}
                className="group flex gap-6 border border-[#E8E8E8] p-6 hover:border-[#388EED] transition-colors"
              >
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-lg leading-tight mb-1" style={{ fontFamily: 'Playfair Display' }}>
                    {person.name}
                  </h3>
                  <p className="text-sm text-[#388EED] font-medium mb-2">{person.role}</p>
                  <p className="text-sm text-[#717182] leading-relaxed line-clamp-3">{person.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-[40px] mb-3">Our Story</h2>
          <p className="text-[#717182] mb-12 text-lg">Key milestones in our journey of growth.</p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-[#E8E8E8] hidden md:block" />

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-[72px] text-right">
                    <span className="text-sm font-bold text-[#388EED]">{m.year}</span>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#388EED] mt-1.5 hidden md:block" />
                    <p className="text-[#717182] leading-relaxed text-sm md:text-base">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-[40px] mb-6">Get In Touch</h2>
              <p className="text-[#717182] leading-relaxed mb-8">
                Whether you are a prospective student, an industry partner, or a fellow researcher, we would love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#388EED] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-[#717182]">Department of Data Science, Faculty of Physical Sciences,<br />University of Benin, Ugbowo, Benin City, Edo State, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#388EED] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-[#717182]">+234 (0) 800 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#388EED] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-[#717182]">datascience@uniben.edu.ng</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick contact form */}
            <div className="bg-[#F5F5F5] p-8">
              <h3 className="text-xl mb-6" style={{ fontFamily: 'Playfair Display' }}>Send Us a Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-[#E8E8E8] bg-white focus:outline-none focus:border-[#388EED] transition-colors text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-[#E8E8E8] bg-white focus:outline-none focus:border-[#388EED] transition-colors text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-[#E8E8E8] bg-white focus:outline-none focus:border-[#388EED] transition-colors text-sm"
                />
                <select className="w-full px-4 py-3 border border-[#E8E8E8] bg-white focus:outline-none focus:border-[#388EED] transition-colors text-sm text-[#717182]">
                  <option value="">Subject / Enquiry Type</option>
                  <option>Admissions</option>
                  <option>Research Collaboration</option>
                  <option>Industry Partnership</option>
                  <option>General Enquiry</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-[#E8E8E8] bg-white focus:outline-none focus:border-[#388EED] transition-colors text-sm resize-none"
                />
                <Button className="w-full bg-[#388EED] hover:bg-[#2d7ad4] text-white py-6">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
