import { Link } from 'react-router';
import { ArrowRight, BookOpen, Users, Microscope, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

const researchAreas = [
  {
    id: 1,
    title: 'Machine Learning & Artificial Intelligence',
    description: 'Developing novel algorithms and architectures for supervised, unsupervised, and reinforcement learning with applications across healthcare, agriculture, and finance.',
    lead: 'Prof. Adebayo Okonkwo',
    members: 6,
    publications: 24,
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzgxMzc2NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning']
  },
  {
    id: 2,
    title: 'Big Data Analytics & Cloud Computing',
    description: 'Designing scalable pipelines and distributed systems for processing large-scale datasets in real-time, with focus on cloud-native architectures.',
    lead: 'Dr. Chioma Eze',
    members: 5,
    publications: 18,
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbnRpc3R8ZW58MXx8fHwxNzgxMzc2NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Apache Spark', 'Hadoop', 'AWS', 'Real-time Processing']
  },
  {
    id: 3,
    title: 'Data Visualization & Human-Computer Interaction',
    description: 'Creating intuitive visual representations of complex data to aid decision-making, with emphasis on interactive dashboards and accessible design.',
    lead: 'Dr. Oluwaseun Ibrahim',
    members: 4,
    publications: 12,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['D3.js', 'Tableau', 'Information Design', 'UX Research']
  },
  {
    id: 4,
    title: 'Statistical Modeling & Biostatistics',
    description: 'Advancing statistical methods for complex data structures, including Bayesian inference, survival analysis, and causal inference for medical and social research.',
    lead: 'Prof. Emeka Nwankwo',
    members: 5,
    publications: 20,
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc4MTM3NjU5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Bayesian Statistics', 'Survival Analysis', 'R', 'Causal Inference']
  }
];

const recentPublications = [
  {
    title: 'Predictive Modeling for Agricultural Yield Optimization in West Africa',
    authors: 'Okonkwo, A., Eze, C., Adeleke, T.',
    journal: 'Journal of Data Science & Agricultural Research',
    year: '2026',
    doi: '#'
  },
  {
    title: 'Real-Time Anomaly Detection in Financial Transactions Using Deep Neural Networks',
    authors: 'Nwankwo, E., Ibrahim, O.',
    journal: 'IEEE Transactions on Neural Networks',
    year: '2026',
    doi: '#'
  },
  {
    title: 'An Interactive Dashboard Framework for Public Health Surveillance in Nigeria',
    authors: 'Ibrahim, O., Johnson, F.',
    journal: 'Health Informatics Journal',
    year: '2025',
    doi: '#'
  },
  {
    title: 'Bayesian Approaches to Missing Data in Clinical Trials: A Nigerian Perspective',
    authors: 'Nwankwo, E., Obi, C.',
    journal: 'Statistics in Medicine',
    year: '2025',
    doi: '#'
  },
  {
    title: 'Federated Learning for Privacy-Preserving Healthcare Analytics',
    authors: 'Okonkwo, A., Eze, C.',
    journal: 'Nature Machine Intelligence',
    year: '2025',
    doi: '#'
  }
];

const stats = [
  { label: 'Active Research Projects', value: '18' },
  { label: 'Publications (2024–2026)', value: '74' },
  { label: 'Research Staff', value: '20' },
  { label: 'External Grants (₦M)', value: '340+' }
];

const labs = [
  {
    name: 'AI & Machine Learning Lab',
    description: 'High-performance computing cluster with GPU nodes for deep learning research.',
    capacity: '20 researchers'
  },
  {
    name: 'Data Engineering Studio',
    description: 'Dedicated workspace for big data pipelines, cloud integration, and ETL development.',
    capacity: '15 researchers'
  },
  {
    name: 'Visualization & UX Lab',
    description: 'Interactive displays and user testing equipment for data visualization research.',
    capacity: '12 researchers'
  }
];

export function Research() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="relative bg-[#111111] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(56,142,237,0.25) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <span className="inline-block text-xs font-medium text-[#388EED] uppercase tracking-widest mb-4">
            Department of Data Science
          </span>
          <h1 className="text-4xl md:text-6xl text-white mb-6 max-w-2xl leading-tight">
            Research & Innovation
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
            Advancing knowledge at the intersection of data, computation, and societal impact. Our researchers tackle Nigeria's most pressing challenges through rigorous, evidence-based inquiry.
          </p>
          <Button className="bg-[#388EED] hover:bg-[#2d7ad4] text-white px-8">
            Collaborate With Us
          </Button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#388EED]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'Playfair Display' }}>
                  {s.value}
                </div>
                <div className="text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Areas */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-[40px] mb-3">Research Areas</h2>
          <p className="text-[#717182] mb-12 text-lg">Explore our four core research clusters driving innovation.</p>

          <div className="space-y-12">
            {researchAreas.map((area, index) => (
              <div
                key={area.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#E8E8E8] last:border-0 last:pb-0`}
              >
                {/* Image — alternate sides */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl md:text-3xl mb-4 leading-tight">{area.title}</h3>
                  <p className="text-[#717182] leading-relaxed mb-6">{area.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {area.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#EBF4FF] text-[#388EED] text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center border border-[#E8E8E8] py-4">
                      <div className="text-xl font-bold text-[#388EED]" style={{ fontFamily: 'Playfair Display' }}>
                        {area.members}
                      </div>
                      <div className="text-xs text-[#717182] mt-1">Members</div>
                    </div>
                    <div className="text-center border border-[#E8E8E8] py-4">
                      <div className="text-xl font-bold text-[#388EED]" style={{ fontFamily: 'Playfair Display' }}>
                        {area.publications}
                      </div>
                      <div className="text-xs text-[#717182] mt-1">Publications</div>
                    </div>
                    <div className="text-center border border-[#E8E8E8] py-4 col-span-1">
                      <div className="text-sm font-medium text-[#111111] leading-snug">{area.lead}</div>
                      <div className="text-xs text-[#717182] mt-1">Lead Researcher</div>
                    </div>
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#388EED] hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl md:text-[40px] mb-2">Recent Publications</h2>
              <p className="text-[#717182]">Peer-reviewed research from our faculty and students</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-[#388EED] hover:gap-3 transition-all">
              View all publications <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-0">
            {recentPublications.map((pub, index) => (
              <div
                key={index}
                className="flex items-start gap-6 py-6 border-b border-[#E8E8E8] last:border-0 group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#388EED]/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#388EED]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-[#111111] group-hover:text-[#388EED] transition-colors leading-snug mb-1" style={{ fontFamily: 'Playfair Display', fontSize: '18px' }}>
                    {pub.title}
                  </h4>
                  <p className="text-sm text-[#717182]">{pub.authors}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#717182]">
                    <span className="italic">{pub.journal}</span>
                    <span>•</span>
                    <span className="font-medium text-[#388EED]">{pub.year}</span>
                  </div>
                </div>
                <a href={pub.doi} className="flex-shrink-0 text-xs font-medium text-[#388EED] border border-[#388EED] px-3 py-1.5 hover:bg-[#388EED] hover:text-white transition-colors hidden md:block">
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs */}
      <section className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-[40px] mb-3">Research Facilities</h2>
          <p className="text-[#717182] mb-12 text-lg">World-class infrastructure supporting cutting-edge research.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {labs.map((lab, index) => (
              <div key={index} className="border border-[#E8E8E8] p-8 hover:border-[#388EED] transition-colors group">
                <div className="w-12 h-12 bg-[#EBF4FF] flex items-center justify-center mb-6 group-hover:bg-[#388EED] transition-colors">
                  <Microscope className="w-6 h-6 text-[#388EED] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'Playfair Display' }}>{lab.name}</h3>
                <p className="text-sm text-[#717182] leading-relaxed mb-4">{lab.description}</p>
                <div className="flex items-center gap-2 text-xs font-medium text-[#388EED]">
                  <Users className="w-3.5 h-3.5" />
                  {lab.capacity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-medium text-[#388EED] uppercase tracking-widest mb-4">
                Partner With Us
              </span>
              <h2 className="text-3xl md:text-[40px] text-white mb-6 leading-tight">
                Collaborate on Research That Matters
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                We welcome partnerships with industry, government agencies, NGOs, and international institutions. Our researchers bring deep expertise and a grounded understanding of the Nigerian and West African context.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#388EED] hover:bg-[#2d7ad4] text-white px-8">
                  Get In Touch
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#111111] px-8">
                  View All Projects
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Globe className="w-6 h-6" />, label: 'International Partners', value: '12' },
                { icon: <Users className="w-6 h-6" />, label: 'Industry Partners', value: '25+' },
                { icon: <BookOpen className="w-6 h-6" />, label: 'Active Grants', value: '8' },
                { icon: <Microscope className="w-6 h-6" />, label: 'PhD Students', value: '34' },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 p-6 text-white">
                  <div className="text-[#388EED] mb-3">{item.icon}</div>
                  <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'Playfair Display' }}>{item.value}</div>
                  <div className="text-sm text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
