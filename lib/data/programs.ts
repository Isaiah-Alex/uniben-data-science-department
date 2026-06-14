export interface ProgramCareer {
  title: string;
  description: string;
}

export interface ProgramSemester {
  semester: string;
  courses: string[];
}

export interface ProgramRequirements {
  entry: string[];
  graduation: string[];
}

export interface ProgramStat {
  label: string;
  value: string;
}

export interface Program {
  id: string;
  level: 'Undergraduate' | 'Postgraduate';
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  credits: string;
  intake: string;
  image: string;
  highlights: string[];
  badge: string;
  badgeColor: string;
  overview: string;
  curriculum: ProgramSemester[];
  requirements: ProgramRequirements;
  careers: ProgramCareer[];
  stats: ProgramStat[];
}

export const programsData: Program[] = [
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
    badgeColor: '#388EED',
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
    badgeColor: '#6B5CE7',
    overview: `The Postgraduate Diploma in Data Analytics at UNIBEN is an intensive transition programme tailored for professionals and graduates from non-computing disciplines. The curriculum is strongly centered on core programming, databases, statistical foundations, and visual communication.

    Participants will acquire direct experience through practical lab workshops led by experienced industry mentors, enabling them to transition smoothly into analytical roles across sectors.`,
    curriculum: [
      {
        semester: 'Semester 1',
        courses: [
          'Foundations of Programming (Python)',
          'Applied Statistical Methods',
          'Data Warehousing & Relational Databases',
          'Introduction to Business Intelligence',
          'Data Visualization Foundations'
        ]
      },
      {
        semester: 'Semester 2',
        courses: [
          'Practical Machine Learning',
          'Data Analytics Capstone Project',
          'Applied Big Data Technologies',
          'Predictive Modeling Seminar',
          'Ethics and Governance in Data Science'
        ]
      }
    ],
    requirements: {
      entry: [
        'A first degree from an accredited university in any discipline (B.Sc., B.A., B.Eng., etc.)',
        'Basic mathematical proficiency (tested via pre-entry assessment if non-technical)',
        'Favorable academic reference letter'
      ],
      graduation: [
        'Successful completion of 30 credit hours of courses',
        'Minimum CGPA of 2.50',
        'Successful defense of data analytics capstone project'
      ]
    },
    careers: [
      {
        title: 'Data Analyst',
        description: 'Analyze data, build dashboards, and support department leaders with quantitative reports.'
      },
      {
        title: 'Business Analyst',
        description: 'Bridge business requests and IT departments using data insights.'
      },
      {
        title: 'Analytics Consultant',
        description: 'Help clients setup basic data systems and extract initial performance insights.'
      }
    ],
    stats: [
      { label: 'Students Enrolled', value: '45+' },
      { label: 'Mentors involved', value: '8' },
      { label: 'Industry Partners', value: '15+' },
      { label: 'Career Transition Rate', value: '88%' }
    ]
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
    badgeColor: '#059669',
    overview: `The Master of Science in Data Analytics is designed for graduates with computing or quantitative backgrounds seeking advanced training. It balances core algorithmic details (Deep Learning, NLP, Computer Vision) with rigorous methodology.

    Students spend the final 6 months conducting original academic research under faculty guidance, which culminates in a written dissertation and presentation.`,
    curriculum: [
      {
        semester: 'Semester 1 (Core)',
        courses: [
          'Advanced Algorithm Analysis',
          'Mathematical Foundations of ML',
          'Distributed Systems & Big Data Systems',
          'Advanced Bayesian Inference',
          'Information Retrieval'
        ]
      },
      {
        semester: 'Semester 2 (Specialized)',
        courses: [
          'Deep Neural Networks',
          'Natural Language Processing',
          'Computer Vision Systems',
          'Reinforcement Learning Agents',
          'Research Methods and Proposal Development'
        ]
      },
      {
        semester: 'Semester 3 (Research)',
        courses: [
          'M.Sc. Research Dissertation',
          'Graduate Seminar Series'
        ]
      }
    ],
    requirements: {
      entry: [
        'A first degree in Computer Science, Statistics, Mathematics, Physics, or related fields with a minimum of Second Class Upper Division',
        'Academic writing sample or statement of purpose',
        'Two letters of recommendation (academic)'
      ],
      graduation: [
        'Successful completion of 45 credit hours of course and research credits',
        'Successful defense of the research dissertation',
        'Submission of at least one manuscript to an accredited journal or conference'
      ]
    },
    careers: [
      {
        title: 'Senior Data Scientist',
        description: 'Lead analytics teams, engineer complex predictive systems, and drive AI strategy.'
      },
      {
        title: 'AI Researcher',
        description: 'Develop new model architectures and conduct theoretical AI studies.'
      },
      {
        title: 'Machine Learning Architect',
        description: 'Design enterprise-wide machine learning operations and model lifecycles.'
      }
    ],
    stats: [
      { label: 'Dissertations Completed', value: '32+' },
      { label: 'Active PhD Pathways', value: '8' },
      { label: 'Research Grants (₦M)', value: '180+' },
      { label: 'Conference Papers', value: '15' }
    ]
  }
];
