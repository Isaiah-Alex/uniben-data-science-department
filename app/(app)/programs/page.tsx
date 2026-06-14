import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, BookOpen, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { programsData } from '@/lib/data/programs';
import { ProgramCard } from './_components/ProgramCard';

export const metadata: Metadata = {
  title: 'Academic Programs - Department of Data Science',
  description: 'Explore our B.Sc, Postgraduate Diploma, and M.Sc academic programmes in Data Science and Data Analytics at the University of Benin.',
};

const outcomes = [
  { value: '94%', label: 'Graduate Employment Rate' },
  { value: '280%', label: 'Students Currently Enrolled' },
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

export default function ProgramsRoute() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <div className="relative bg-muted border-b border-border overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-14 relative z-10">
          <span className="inline-block text-xs font-medium text-primary uppercase tracking-widest mb-3">
            Admissions 2026/2027
          </span>
          <h1 className="text-4xl md:text-5xl mb-4 font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Academic Programmes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Three distinct pathways into data science — from undergraduate study to advanced research. Find the programme that fits your goals.
          </p>
        </div>
        {/* Blue blur accent */}
        <div
          className="absolute right-0 top-0 h-full w-[40%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 100% 50%, rgba(56,142,237,0.1) 0%, transparent 75%)',
          }}
        />
      </div>

      {/* Stats bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {outcomes.map((o, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold mb-0.5" style={{ fontFamily: 'var(--font-serif)' }}>
                  {o.value}
                </div>
                <div className="text-xs text-primary-foreground/80">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programme Cards */}
      <section className="border-b border-border bg-background">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="space-y-12">
            {programsData.map((prog, index) => (
              <ProgramCard key={prog.id} prog={prog} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-[40px] mb-3">Why Study With Us?</h2>
          <p className="text-muted-foreground mb-12 text-lg max-w-2xl">We blend academic rigour with practical depth to produce graduates who are immediately effective in industry or research.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award className="w-6 h-6" />, title: 'NUC Accredited', desc: 'All programmes hold full accreditation from the National Universities Commission, recognised across Nigeria and internationally.' },
              { icon: <Users className="w-6 h-6" />, title: 'Industry Integration', desc: 'Partnerships with Google, Microsoft, Flutterwave, and 25+ others bring live projects, internships, and job pipelines directly to students.' },
              { icon: <BookOpen className="w-6 h-6" />, title: 'Research-Led Teaching', desc: 'Our faculty are active researchers. Classroom knowledge is shaped by what is happening at the frontier of data science today.' },
              { icon: <Clock className="w-6 h-6" />, title: 'Flexible Scheduling', desc: 'Evening and weekend classes on select programmes make it possible to study while continuing professional work.' },
              { icon: <CheckCircle className="w-6 h-6" />, title: '94% Employment Rate', desc: 'The majority of our graduates secure relevant employment within six months of completing their programme.' },
              { icon: <ArrowRight className="w-6 h-6" />, title: 'Clear Progression', desc: 'A structured pathway from B.Sc → PGD → M.Sc → PhD means you can grow with us at every stage of your career.' },
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 border border-border">
                <div className="w-11 h-11 bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg mb-2 font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-b border-border bg-background">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-[40px] mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Can't find your answer? Reach out to our admissions office directly.</p>
              <a href="mailto:admissions@uniben.edu.ng">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6">
                  Contact Admissions
                </Button>
              </a>
            </div>
            <div className="lg:col-span-8 space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="py-6 border-b border-border last:border-0">
                  <h4 className="font-medium text-foreground mb-3 text-[16px]" style={{ fontFamily: 'var(--font-sans)' }}>
                    {faq.q}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
            Ready to Apply for 2026/2027?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Applications are open. Take the first step toward a career in data science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-primary hover:bg-background/90 px-8 py-6 text-base">
              Apply Now
            </Button>
            <Link href="/about">
              <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-base">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
