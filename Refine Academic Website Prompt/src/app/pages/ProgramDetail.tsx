import { useParams, Link } from 'react-router';
import { ArrowLeft, Clock, BookOpen, Users, Award, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export function ProgramDetail() {
  const { id } = useParams();

  const program = {
    title: 'B.Sc Data Science',
    subtitle: 'Bachelor of Science in Data Science',
    description: 'A comprehensive undergraduate program that combines mathematics, statistics, computer science, and domain knowledge to prepare students for careers in data science and analytics.',
    duration: '4 years (8 semesters)',
    credits: '120 credit hours',
    intake: '100 students per year',
    overview: `The Bachelor of Science in Data Science program at UNIBEN is designed to equip students with the theoretical foundations and practical skills needed to excel in the rapidly evolving field of data science. Our curriculum emphasizes hands-on learning through projects, internships, and research opportunities.

    Students will develop expertise in statistical analysis, machine learning, data visualization, big data technologies, and programming. The program also covers essential soft skills such as communication, critical thinking, and ethical decision-making in the context of data-driven solutions.

    Graduates of this program are prepared for diverse career paths in technology, finance, healthcare, government, and research institutions.`,
    curriculum: [
      {
        semester: 'Year 1',
        courses: [
          'Introduction to Computer Science',
          'Calculus and Analytic Geometry I & II',
          'Introduction to Statistics',
          'Linear Algebra',
          'Programming Fundamentals (Python)',
          'Discrete Mathematics',
          'Communication Skills',
          'Introduction to Data Science'
        ]
      },
      {
        semester: 'Year 2',
        courses: [
          'Data Structures and Algorithms',
          'Probability Theory',
          'Database Systems',
          'Statistical Computing with R',
          'Web Technologies',
          'Introduction to Machine Learning',
          'Data Visualization',
          'Research Methods'
        ]
      },
      {
        semester: 'Year 3',
        courses: [
          'Advanced Machine Learning',
          'Big Data Analytics',
          'Deep Learning',
          'Time Series Analysis',
          'Natural Language Processing',
          'Computer Vision',
          'Data Mining',
          'Ethics in AI and Data Science',
          'Industrial Training (6 months)'
        ]
      },
      {
        semester: 'Year 4',
        courses: [
          'Advanced Statistical Modeling',
          'Cloud Computing for Data Science',
          'Reinforcement Learning',
          'Optimization Techniques',
          'Capstone Project I',
          'Electives (Choose 3)',
          'Capstone Project II',
          'Entrepreneurship in Tech'
        ]
      }
    ],
    requirements: {
      entry: [
        'Five O\'Level credits including Mathematics, English Language, and Physics at not more than two sittings',
        'JAMB UTME score of at least 200',
        'Good performance in Post-UTME screening',
        'JAMB subject combination: Mathematics, Physics, and Chemistry/Further Mathematics'
      ],
      graduation: [
        'Successful completion of all required courses (120 credit hours)',
        'Minimum CGPA of 2.0',
        'Completion of industrial training',
        'Successful defense of capstone project',
        'Clearance from all departments and university library'
      ]
    },
    careers: [
      {
        title: 'Data Scientist',
        description: 'Analyze complex datasets to extract insights and build predictive models for business decisions.'
      },
      {
        title: 'Machine Learning Engineer',
        description: 'Design and implement machine learning systems and algorithms in production environments.'
      },
      {
        title: 'Data Analyst',
        description: 'Transform data into actionable business intelligence through statistical analysis and visualization.'
      },
      {
        title: 'Business Intelligence Analyst',
        description: 'Create dashboards and reports to help organizations make data-driven decisions.'
      },
      {
        title: 'Research Scientist',
        description: 'Conduct advanced research in AI, machine learning, and data science methodologies.'
      },
      {
        title: 'AI/ML Consultant',
        description: 'Advise organizations on implementing data science and AI solutions to solve business problems.'
      }
    ],
    stats: [
      { label: 'Students Enrolled', value: '280+' },
      { label: 'Faculty Members', value: '12' },
      { label: 'Industry Partners', value: '25+' },
      { label: 'Employment Rate', value: '94%' }
    ]
  };

  return (
    <div>
      {/* Back Button */}
      <div className="border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-4">
          <Link
            to="/#programs"
            className="inline-flex items-center gap-2 text-sm text-[#717182] hover:text-[#388EED] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
        </div>
      </div>

      {/* Program Header */}
      <section className="bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl mb-4">
            {program.title}
          </h1>
          <p className="text-xl text-[#388EED] font-medium mb-6">{program.subtitle}</p>
          <p className="text-lg text-[#717182] max-w-3xl mb-8 leading-relaxed">
            {program.description}
          </p>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#388EED] mt-1" />
              <div>
                <p className="text-sm text-[#717182]">Duration</p>
                <p className="font-medium text-lg">{program.duration}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen className="w-6 h-6 text-[#388EED] mt-1" />
              <div>
                <p className="text-sm text-[#717182]">Credits</p>
                <p className="font-medium text-lg">{program.credits}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-[#388EED] mt-1" />
              <div>
                <p className="text-sm text-[#717182]">Annual Intake</p>
                <p className="font-medium text-lg">{program.intake}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#388EED] hover:bg-[#2d7ad4] text-white px-8 py-6 text-lg">
              Apply Now for 2026/2027
            </Button>
            <Button variant="outline" className="border-2 border-[#388EED] text-[#388EED] hover:bg-[#388EED] hover:text-white px-8 py-6 text-lg">
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="bg-white border-b border-[#E8E8E8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {program.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#388EED] mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#717182]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <Accordion type="single" collapsible className="space-y-4">
          {/* Overview */}
          <AccordionItem value="overview" className="border border-[#E8E8E8] px-6">
            <AccordionTrigger className="text-2xl py-6 hover:no-underline hover:text-[#388EED]" style={{ fontFamily: 'Playfair Display' }}>
              Program Overview
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-4 text-[#717182] leading-relaxed">
                {program.overview.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Curriculum */}
          <AccordionItem value="curriculum" className="border border-[#E8E8E8] px-6">
            <AccordionTrigger className="text-2xl py-6 hover:no-underline hover:text-[#388EED]" style={{ fontFamily: 'Playfair Display' }}>
              Curriculum
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-8">
                {program.curriculum.map((year, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-4 text-[#388EED]" style={{ fontFamily: 'Inter' }}>
                      {year.semester}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {year.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex items-start gap-2 text-[#717182]"
                        >
                          <span className="text-[#388EED] mt-1">•</span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Requirements */}
          <AccordionItem value="requirements" className="border border-[#E8E8E8] px-6">
            <AccordionTrigger className="text-2xl py-6 hover:no-underline hover:text-[#388EED]" style={{ fontFamily: 'Playfair Display' }}>
              Admission & Graduation Requirements
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#388EED]" style={{ fontFamily: 'Inter' }}>
                    Entry Requirements
                  </h3>
                  <ul className="space-y-3">
                    {program.requirements.entry.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#717182]">
                        <span className="text-[#388EED] mt-1">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#388EED]" style={{ fontFamily: 'Inter' }}>
                    Graduation Requirements
                  </h3>
                  <ul className="space-y-3">
                    {program.requirements.graduation.map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#717182]">
                        <span className="text-[#388EED] mt-1">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Career Opportunities */}
          <AccordionItem value="careers" className="border border-[#E8E8E8] px-6">
            <AccordionTrigger className="text-2xl py-6 hover:no-underline hover:text-[#388EED]" style={{ fontFamily: 'Playfair Display' }}>
              Career Opportunities
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.careers.map((career, index) => (
                  <div key={index} className="border-l-4 border-[#388EED] pl-6 py-3">
                    <h4 className="text-lg font-medium mb-2" style={{ fontFamily: 'Playfair Display' }}>
                      {career.title}
                    </h4>
                    <p className="text-sm text-[#717182] leading-relaxed">
                      {career.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-[#F5F5F5]">
                <p className="text-[#717182] leading-relaxed">
                  Our graduates have secured positions at leading organizations including Google, Microsoft, Amazon, 
                  Andela, Flutterwave, and various research institutions. Many have also founded successful startups 
                  or pursued advanced degrees at top universities worldwide.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Section */}
        <div className="mt-12 bg-[#388EED] text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Playfair Display' }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join the next generation of data scientists and make an impact through data-driven innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#388EED] hover:bg-gray-100 px-8 py-6 text-lg">
              Apply Now
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#388EED] px-8 py-6 text-lg">
              Request Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
