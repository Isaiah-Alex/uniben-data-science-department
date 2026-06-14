import { Link } from 'react-router';
import { Clock, Users, BookOpen, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const programs = [
  {
    id: 'bsc-data-science',
    level: 'Undergraduate',
    title: 'B.Sc Data Science',
    subtitle: 'Bachelor of Science in Data Science',
    description: 'A rigorous four-year undergraduate programme that fuses mathematics, statistics, computer science, and domain knowledge. Graduates are equipped for careers as data scientists, ML engineers, and analysts at leading organisations.',
    duration: '4 years (8 semesters)',
    credits: '120 credit hours',
    intake: '100 students/year',
    image: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGhhY2thdGhvbnxlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      'JAMB & Post-UTME entry',
      '6-month industrial training (SIWES)',
      'Capstone project in final year',
      'NUC fully accredited'
    ],
    badge: 'Most Popular',
    badgeColor: '#388EED'
  },
  {
    id: 'pgd-data-analytics',
    level: 'Postgraduate',
    title: 'PGD Data Analytics',
    subtitle: 'Postgraduate Diploma in Data Analytics',
    description: 'A one-year intensive programme designed for working professionals and graduates from other disciplines who wish to pivot into data science. Coursework-based with a strong applied focus and industry mentorship.',
    duration: '1 year (2 semesters)',
    credits: '30 credit hours',
    intake: '50 students/year',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      'Open to all degree holders',
      'Evening & weekend classes available',
      'Industry-led workshops',
      'Direct pathway to M.Sc'
    ],
    badge: 'Career Change',
    badgeColor: '#6B5CE7'
  },
  {
    id: 'msc-data-analytics',
    level: 'Postgraduate',
    title: 'M.Sc Data Analytics',
    subtitle: 'Master of Science in Data Analytics',
    description: 'An 18-month advanced graduate programme emphasising machine learning, AI, and big data. Students undertake original research culminating in a dissertation. Ideal for those targeting research careers or senior industry roles.',
    duration: '18 months',
    credits: '45 credit hours',
    intake: '40 students/year',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzgxMzc2NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      'Research dissertation required',
      'Access to all department labs',
      'International conference funding',
      'Pathway to PhD programme'
    ],
    badge: 'Research Track',
    badgeColor: '#059669'
  }
];

const outcomes = [
  { value: '94%', label: 'Graduate Employment Rate' },
  { value: '280+', label: 'Students Currently Enrolled' },
  { value: '25+', label: 'Industry Partners' },
  { value: '3', label: 'Programmes Offered' },
];

const faqs = [
  {
    q: 'What are the entry requirements for the B.Sc programme?',
    a: 'Five O\'Level credits including Mathematics, English Language, and Physics, plus a JAMB UTME score of at least 200. Candidates must also pass the University\'s Post-UTME screening.'
  },
  {
    q: 'Can I apply for the PGD if my first degree is not in a science field?',
    a: 'Yes. The PGD in Data Analytics is open to graduates of any discipline. Applicants without a strong quantitative background are required to complete a pre-entry bridging module.'
  },
  {
    q: 'Is the M.Sc programme available part-time?',
    a: 'Currently the M.Sc is offered full-time. A part-time option is under development and expected to be available from the 2027/2028 session.'
  },
  {
    q: 'What is the application deadline for the 2026/2027 session?',
    a: 'JAMB applications follow the national UTME calendar. Postgraduate applications are accepted on a rolling basis until August 31, 2026.'
  }
];

export function Programs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="relative bg-[#F5F5F5] border-b border-[#E8E8E8] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-14 relative z-10">
          <span className="inline-block text-xs font-medium text-[#388EED] uppercase tracking-widest mb-3">
            Admissions 2026/2027
          </span>
          <h1 className="text-4xl md:text-5xl mb-4">Academic Programmes</h1>
          <p className="text-lg text-[#717182] max-w-2xl">
            Three distinct pathways into data science — from undergraduate study to advanced research. Find the programme that fits your goals.
          </p>
        </div>
        {/* Blue blur accent */}
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
            {outcomes.map((o, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold mb-0.5" style={{ fontFamily: 'Playfair Display' }}>
                  {o.value}
                </div>
                <div className="text-xs text-white/80">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programme Cards */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="space-y-12">
            {programs.map((prog, index) => (
              <div
                key={prog.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#E8E8E8] overflow-hidden hover:border-[#388EED] transition-colors group"
              >
                {/* Image — alternate sides */}
                <div className={`lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[240px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ImageWithFallback
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Level badge */}
                  <span className="absolute top-4 left-4 text-xs font-medium text-white bg-black/60 px-3 py-1 backdrop-blur-sm">
                    {prog.level}
                  </span>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 p-8 md:p-10 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    {/* Badge + title */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-medium text-white px-2.5 py-1"
                        style={{ backgroundColor: prog.badgeColor }}
                      >
                        {prog.badge}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl mb-1 leading-tight">{prog.title}</h2>
                    <p className="text-[#388EED] font-medium mb-4 text-sm">{prog.subtitle}</p>
                    <p className="text-[#717182] leading-relaxed mb-6">{prog.description}</p>

                    {/* Quick meta */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-[#388EED] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-[#717182]">Duration</p>
                          <p className="text-sm font-medium">{prog.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-[#388EED] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-[#717182]">Credits</p>
                          <p className="text-sm font-medium">{prog.credits}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-[#388EED] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-[#717182]">Intake</p>
                          <p className="text-sm font-medium">{prog.intake}</p>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-8">
                      {prog.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#717182]">
                          <CheckCircle className="w-4 h-4 text-[#388EED] flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={`/programs/${prog.id}`}>
                      <Button className="bg-[#388EED] hover:bg-[#2d7ad4] text-white px-6 flex items-center gap-2">
                        View Programme <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button variant="outline" className="border-2 border-[#388EED] text-[#388EED] hover:bg-[#388EED] hover:text-white px-6">
                      Request Information
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-[40px] mb-3">Why Study With Us?</h2>
          <p className="text-[#717182] mb-12 text-lg max-w-2xl">We blend academic rigour with practical depth to produce graduates who are immediately effective in industry or research.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award className="w-6 h-6" />, title: 'NUC Accredited', desc: 'All programmes hold full accreditation from the National Universities Commission, recognised across Nigeria and internationally.' },
              { icon: <Users className="w-6 h-6" />, title: 'Industry Integration', desc: 'Partnerships with Google, Microsoft, Flutterwave, and 25+ others bring live projects, internships, and job pipelines directly to students.' },
              { icon: <BookOpen className="w-6 h-6" />, title: 'Research-Led Teaching', desc: 'Our faculty are active researchers. Classroom knowledge is shaped by what is happening at the frontier of data science today.' },
              { icon: <Clock className="w-6 h-6" />, title: 'Flexible Scheduling', desc: 'Evening and weekend classes on select programmes make it possible to study while continuing professional work.' },
              { icon: <CheckCircle className="w-6 h-6" />, title: '94% Employment Rate', desc: 'The majority of our graduates secure relevant employment within six months of completing their programme.' },
              { icon: <ArrowRight className="w-6 h-6" />, title: 'Clear Progression', desc: 'A structured pathway from B.Sc → PGD → M.Sc → PhD means you can grow with us at every stage of your career.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8">
                <div className="w-11 h-11 bg-[#EBF4FF] flex items-center justify-center text-[#388EED] mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'Playfair Display' }}>{item.title}</h3>
                <p className="text-sm text-[#717182] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-[40px] mb-4">Frequently Asked Questions</h2>
              <p className="text-[#717182] leading-relaxed mb-6">Can't find your answer? Reach out to our admissions office directly.</p>
              <a href="mailto:admissions@uniben.edu.ng">
                <Button variant="outline" className="border-2 border-[#388EED] text-[#388EED] hover:bg-[#388EED] hover:text-white px-6">
                  Contact Admissions
                </Button>
              </a>
            </div>
            <div className="lg:col-span-8 space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="py-6 border-b border-[#E8E8E8] last:border-0">
                  <h4 className="font-medium text-[#111111] mb-3" style={{ fontFamily: 'Inter', fontSize: '16px' }}>
                    {faq.q}
                  </h4>
                  <p className="text-sm text-[#717182] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#388EED]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
            Ready to Apply for 2026/2027?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Applications are open. Take the first step toward a career in data science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#388EED] hover:bg-gray-100 px-8 py-6 text-base">
              Apply Now
            </Button>
            <Link to="/about">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#388EED] px-8 py-6 text-base">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
