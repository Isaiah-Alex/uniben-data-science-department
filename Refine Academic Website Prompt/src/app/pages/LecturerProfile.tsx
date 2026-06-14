import { useParams, Link } from 'react-router';
import { Mail, Phone, MapPin, Book, Award, Users, ArrowLeft, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

export function LecturerProfile() {
  const { id } = useParams();

  const lecturer = {
    name: 'Prof. Adebayo Okonkwo',
    role: 'Head of Department',
    department: 'Department of Data Science',
    image: 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzgxMzc2NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'a.okonkwo@uniben.edu.ng',
    phone: '+234 (0) 803 123 4567',
    office: 'Block C, Room 301',
    bio: `Professor Adebayo Okonkwo is a leading expert in machine learning and artificial intelligence with over 15 years of experience in research and teaching. He obtained his Ph.D. in Computer Science from the Massachusetts Institute of Technology (MIT) in 2011, where his dissertation focused on deep learning applications in natural language processing.

    Before joining the University of Benin in 2018 as Head of the Department of Data Science, Prof. Okonkwo held research positions at Google AI and Microsoft Research. His work has been instrumental in advancing the field of AI ethics and developing machine learning models optimized for low-resource environments.

    Prof. Okonkwo is passionate about building Africa's capacity in data science and AI. Under his leadership, the department has grown from 50 to over 300 students and has established partnerships with leading technology companies and research institutions worldwide.`,
    research: [
      'Machine Learning & Deep Learning',
      'Natural Language Processing',
      'AI Ethics and Fairness',
      'Computer Vision',
      'Federated Learning'
    ],
    education: [
      {
        degree: 'Ph.D. in Computer Science',
        institution: 'Massachusetts Institute of Technology (MIT)',
        year: '2011'
      },
      {
        degree: 'M.Sc. in Artificial Intelligence',
        institution: 'University of Edinburgh',
        year: '2007'
      },
      {
        degree: 'B.Sc. in Computer Science (First Class)',
        institution: 'University of Lagos',
        year: '2005'
      }
    ],
    publications: [
      {
        title: 'Federated Learning for Healthcare: Privacy-Preserving Machine Learning in Resource-Constrained Settings',
        journal: 'Nature Machine Intelligence',
        year: '2025',
        citations: 127
      },
      {
        title: 'Bias Mitigation in Natural Language Processing Models for African Languages',
        journal: 'ACM Transactions on Intelligent Systems',
        year: '2024',
        citations: 89
      },
      {
        title: 'Deep Learning Architectures for Low-Resource Language Translation',
        journal: 'IEEE Transactions on Neural Networks',
        year: '2023',
        citations: 214
      },
      {
        title: 'Ethical Frameworks for AI Development in Emerging Markets',
        journal: 'AI & Society',
        year: '2023',
        citations: 156
      }
    ],
    courses: [
      'CSC 401: Introduction to Machine Learning',
      'CSC 502: Advanced Deep Learning',
      'CSC 601: AI Ethics and Policy',
      'CSC 650: Research Methods in Data Science'
    ],
    awards: [
      'Nigerian National Science Award for ICT (2025)',
      'IEEE Outstanding Researcher Award (2024)',
      'Google AI Impact Scholarship (2023)',
      'UNIBEN Excellence in Teaching Award (2022, 2024)'
    ]
  };

  return (
    <div>
      {/* Back Button */}
      <div className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link
            to="/lecturer"
            className="inline-flex items-center gap-2 text-sm text-[#717182] hover:text-[#388EED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Faculty
          </Link>
        </div>
      </div>

      {/* Profile Header */}
      <section className="bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-3">
              <div className="relative aspect-[3/4] overflow-hidden sticky top-24">
                <ImageWithFallback
                  src={lecturer.image}
                  alt={lecturer.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-9">
              <h1 className="text-4xl md:text-5xl mb-3">
                {lecturer.name}
              </h1>
              <p className="text-xl text-[#388EED] font-medium mb-2">{lecturer.role}</p>
              <p className="text-lg text-[#717182] mb-8">{lecturer.department}</p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#388EED] mt-1" />
                  <div>
                    <p className="text-sm text-[#717182]">Email</p>
                    <a href={`mailto:${lecturer.email}`} className="text-[#111111] hover:text-[#388EED] transition-colors">
                      {lecturer.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#388EED] mt-1" />
                  <div>
                    <p className="text-sm text-[#717182]">Phone</p>
                    <p className="text-[#111111]">{lecturer.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#388EED] mt-1" />
                  <div>
                    <p className="text-sm text-[#717182]">Office</p>
                    <p className="text-[#111111]">{lecturer.office}</p>
                  </div>
                </div>
              </div>

              <Button className="bg-[#388EED] hover:bg-[#2d7ad4] text-white">
                Schedule Office Hours
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Biography */}
            <section>
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-[#388EED]" />
                Biography
              </h2>
              <div className="space-y-4 text-[#717182] leading-relaxed">
                {lecturer.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <Book className="w-8 h-8 text-[#388EED]" />
                Education
              </h2>
              <div className="space-y-4">
                {lecturer.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-[#388EED] pl-6 py-2">
                    <h3 className="text-xl font-medium" style={{ fontFamily: 'Playfair Display' }}>
                      {edu.degree}
                    </h3>
                    <p className="text-[#717182] mt-1">{edu.institution}</p>
                    <p className="text-sm text-[#388EED] font-medium mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Publications */}
            <section>
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <ExternalLink className="w-8 h-8 text-[#388EED]" />
                Selected Publications
              </h2>
              <div className="space-y-6">
                {lecturer.publications.map((pub, index) => (
                  <div key={index} className="pb-6 border-b border-[#E8E8E8] last:border-0">
                    <h3 className="text-lg font-medium leading-snug hover:text-[#388EED] transition-colors cursor-pointer" style={{ fontFamily: 'Playfair Display' }}>
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-[#717182]">
                      <em>{pub.journal}</em>, {pub.year}
                    </p>
                    <p className="mt-1 text-sm text-[#388EED]">
                      {pub.citations} citations
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Research Interests */}
              <div className="bg-[#F5F5F5] p-6">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter' }}>
                  Research Interests
                </h3>
                <ul className="space-y-2">
                  {lecturer.research.map((topic, index) => (
                    <li key={index} className="text-sm text-[#111111] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#388EED]">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter' }}>
                  Current Courses
                </h3>
                <ul className="space-y-2">
                  {lecturer.courses.map((course, index) => (
                    <li key={index} className="text-sm text-[#717182] pb-2 border-b border-[#E8E8E8] last:border-0">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards */}
              <div className="bg-[#F5F5F5] p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'Inter' }}>
                  <Award className="w-5 h-5 text-[#388EED]" />
                  Awards & Honors
                </h3>
                <ul className="space-y-3">
                  {lecturer.awards.map((award, index) => (
                    <li key={index} className="text-sm text-[#111111]">
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
