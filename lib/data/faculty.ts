export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: string;
  citations: number;
}

export interface Lecturer {
  id: number;
  name: string;
  role: string;
  rank: 'Professor' | 'Senior Lecturer' | 'Lecturer';
  department: string;
  image: string;
  email: string;
  phone: string;
  office: string;
  bio: string;
  research: string[];
  researchTags: string[];
  publicationsList: Publication[];
  publications: number;
  education: Education[];
  courses: string[];
  awards: string[];
}

export const facultyData: Lecturer[] = [
  {
    id: 1,
    name: 'Prof. Adebayo Okonkwo',
    role: 'Head of Department',
    rank: 'Professor',
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
    researchTags: ['Deep Learning', 'NLP', 'AI Ethics', 'Computer Vision'],
    publications: 60,
    publicationsList: [
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
    courses: [
      'DSC 401: Introduction to Machine Learning',
      'DSC 502: Advanced Deep Learning',
      'DSC 601: AI Ethics and Policy',
      'DSC 650: Research Methods in Data Science'
    ],
    awards: [
      'Nigerian National Science Award for ICT (2025)',
      'IEEE Outstanding Researcher Award (2024)',
      'Google AI Impact Scholarship (2023)',
      'UNIBEN Excellence in Teaching Award (2022, 2024)'
    ]
  },
  {
    id: 2,
    name: 'Dr. Chioma Eze',
    role: 'Senior Lecturer & Deputy HOD',
    rank: 'Senior Lecturer',
    department: 'Department of Data Science',
    image: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3ODEzNzY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'c.eze@uniben.edu.ng',
    phone: '+234 (0) 805 987 6543',
    office: 'Block C, Room 303',
    bio: `Dr. Chioma Eze is a specialist in big data analytics, cloud computing, and distributed data systems. She completed her Ph.D. at Imperial College London. Her research aims at building high-throughput, fault-tolerant ETL pipelines and applying machine learning to real-time industrial data.

    Dr. Eze leads the department's industry partnerships and corporate outreach, connecting students directly with internship placements and collaborative projects. She is highly passionate about encouraging women to enter STEM fields.`,
    research: [
      'Big Data Analytics',
      'Distributed Systems',
      'Cloud Computing architectures',
      'Real-time Data Processing'
    ],
    researchTags: ['Apache Spark', 'Cloud Computing', 'ETL Pipelines', 'Real-time Systems'],
    publications: 38,
    publicationsList: [
      {
        title: 'High-Throughput Stream Processing for Smart Grid Infrastructure in Africa',
        journal: 'IEEE Transactions on Big Data',
        year: '2025',
        citations: 45
      },
      {
        title: 'Optimizing Apache Spark for Low-Bandwidth Cloud Deployments',
        journal: 'ACM Transactions on Cloud Computing',
        year: '2024',
        citations: 62
      }
    ],
    education: [
      {
        degree: 'Ph.D. in Computing',
        institution: 'Imperial College London',
        year: '2015'
      },
      {
        degree: 'M.Sc. in Computer Science',
        institution: 'University of Ibadan',
        year: '2011'
      },
      {
        degree: 'B.Sc. in Computer Science',
        institution: 'University of Benin',
        year: '2008'
      }
    ],
    courses: [
      'DSC 302: Database Management Systems',
      'DSC 404: Big Data Infrastructure',
      'DSC 511: Cloud Computing and Architectures'
    ],
    awards: [
      'Tech Women Fellowship Award (2023)',
      'L\'Oréal-UNESCO For Women in Science Fellowship (2022)'
    ]
  },
  {
    id: 3,
    name: 'Dr. Oluwaseun Ibrahim',
    role: 'Lecturer & Programme Coordinator',
    rank: 'Lecturer',
    department: 'Department of Data Science',
    image: 'https://images.unsplash.com/photo-1618053448492-2b629c2c912c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNjaWVudGlzdHxlbnwxfHx8fDE3ODEzNzY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'o.ibrahim@uniben.edu.ng',
    phone: '+234 (0) 809 111 2222',
    office: 'Block C, Room 305',
    bio: `Dr. Oluwaseun Ibrahim's research bridges data visualization, human-computer interaction, and public health informatics. She completed her doctorate at Carnegie Mellon University. 

    She has developed open-source visualization platforms deployed across West Africa to help public health agencies track epidemics and make evidence-based policy decisions.`,
    research: [
      'Data Visualization',
      'Human-Computer Interaction (HCI)',
      'Health Informatics',
      'Information Design'
    ],
    researchTags: ['D3.js', 'Tableau', 'UX Research', 'Information Design'],
    publications: 22,
    publicationsList: [
      {
        title: 'An Interactive Dashboard Framework for Public Health Surveillance in Nigeria',
        journal: 'Health Informatics Journal',
        year: '2025',
        citations: 54
      },
      {
        title: 'Cognitive Load and Decision Quality: Evaluating Data Visualizations for Epidemic Monitoring',
        journal: 'ACM CHI Conference on Human Factors in Computing Systems',
        year: '2024',
        citations: 32
      }
    ],
    education: [
      {
        degree: 'Ph.D. in Human-Computer Interaction',
        institution: 'Carnegie Mellon University',
        year: '2018'
      },
      {
        degree: 'M.Sc. in Computer Science',
        institution: 'Georgia Institute of Technology',
        year: '2014'
      },
      {
        degree: 'B.Tech. in Computer Science',
        institution: 'Federal University of Technology, Akure',
        year: '2011'
      }
    ],
    courses: [
      'DSC 204: Fundamentals of Data Visualization',
      'DSC 310: Human-Computer Interaction',
      'DSC 420: Data Science Capstone Coordinator'
    ],
    awards: [
      'CMU Distinguished Dissertation Award (2018)',
      'ACM CHI Honorable Mention Award (2024)'
    ]
  },
  {
    id: 4,
    name: 'Prof. Emeka Nwankwo',
    role: 'Professor of Statistics',
    rank: 'Professor',
    department: 'Department of Data Science',
    image: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBhY2FkZW1pY3xlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'e.nwankwo@uniben.edu.ng',
    phone: '+234 (0) 802 333 4444',
    office: 'Block C, Room 302',
    bio: `Professor Emeka Nwankwo is a renowned statistician with over 25 years of research experience in biostatistics, Bayesian inference, and statistical modeling. He holds a D.Sc. from the University of Lagos.

    His research on Bayesian methods for clinical trials and survival analysis has directly influenced public health policy decisions at the Federal Ministry of Health in Nigeria.`,
    research: [
      'Statistical Modeling',
      'Bayesian Inference',
      'Biostatistics & Clinical Trials',
      'Survival Analysis'
    ],
    researchTags: ['Bayesian Inference', 'Survival Analysis', 'R', 'Clinical Trials'],
    publications: 51,
    publicationsList: [
      {
        title: 'Bayesian Approaches to Missing Data in Clinical Trials: A Nigerian Perspective',
        journal: 'Statistics in Medicine',
        year: '2025',
        citations: 42
      },
      {
        title: 'Survival Analysis Models for Malaria Intervention Program Assessment',
        journal: 'Biometrics',
        year: '2023',
        citations: 91
      }
    ],
    education: [
      {
        degree: 'D.Sc. in Statistics',
        institution: 'University of Lagos',
        year: '2002'
      },
      {
        degree: 'M.Sc. in Statistics',
        institution: 'University of Ibadan',
        year: '1996'
      },
      {
        degree: 'B.Sc. in Statistics',
        institution: 'University of Ibadan',
        year: '1993'
      }
    ],
    courses: [
      'DSC 201: Probability and Statistics for Data Science',
      'DSC 305: Statistical Inference',
      'DSC 505: Bayesian Data Analysis'
    ],
    awards: [
      'Fellow of the Royal Statistical Society (2015)',
      'Nigerian Statistical Association Lifetime Achievement Award (2023)'
    ]
  },
  {
    id: 5,
    name: 'Dr. Tunde Adeleke',
    role: 'Lecturer',
    rank: 'Lecturer',
    department: 'Department of Data Science',
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbnRpc3R8ZW58MXx8fHwxNzgxMzc2NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 't.adeleke@uniben.edu.ng',
    phone: '+234 (0) 803 444 5555',
    office: 'Block C, Room 307',
    bio: `Dr. Tunde Adeleke completed his Ph.D. at the University of Cape Town. His primary research interests are in Natural Language Processing (NLP) and Large Language Models, with a focus on building computational resources for African languages, especially Yoruba and Igbo.`,
    research: [
      'Natural Language Processing',
      'African Language Technology',
      'Transformer Architectures',
      'Language Modeling'
    ],
    researchTags: ['Transformer Models', 'Yoruba NLP', 'Text Classification', 'LLMs'],
    publications: 17,
    publicationsList: [
      {
        title: 'YorubaBERT: Pre-trained Language Model for Yoruba Text Classification',
        journal: 'Proceedings of ACL',
        year: '2024',
        citations: 28
      }
    ],
    education: [
      {
        degree: 'Ph.D. in Computer Science',
        institution: 'University of Cape Town',
        year: '2021'
      },
      {
        degree: 'M.Sc. in Computer Science',
        institution: 'University of Ibadan',
        year: '2017'
      }
    ],
    courses: [
      'DSC 309: Introduction to Natural Language Processing',
      'DSC 412: Machine Translation Systems'
    ],
    awards: [
      'Google African Research Award (2025)'
    ]
  },
  {
    id: 6,
    name: 'Dr. Amara Nwosu',
    role: 'Lecturer',
    rank: 'Lecturer',
    department: 'Department of Data Science',
    image: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3ODEzNzY1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'a.nwosu@uniben.edu.ng',
    phone: '+234 (0) 806 555 6666',
    office: 'Block C, Room 309',
    bio: `Dr. Amara Nwosu holds a Ph.D. from the University of Witwatersrand. She specializes in computer vision, image processing, and remote sensing, applying deep learning models to analyze satellite images for crop yield forecasting and monitoring deforestation in sub-Saharan Africa.`,
    research: [
      'Computer Vision',
      'Remote Sensing',
      'Agricultural AI',
      'Deep Learning for Imagery'
    ],
    researchTags: ['CNNs', 'Satellite Imagery', 'Object Detection', 'Agricultural AI'],
    publications: 14,
    publicationsList: [
      {
        title: 'Deep CNNs for Crop Identification using Sentinel-2 Imagery in Nigeria',
        journal: 'Remote Sensing of Environment',
        year: '2025',
        citations: 21
      }
    ],
    education: [
      {
        degree: 'Ph.D. in Computer Vision',
        institution: 'University of Witwatersrand',
        year: '2022'
      },
      {
        degree: 'M.Sc. in Geoinformatics',
        institution: 'University of Nigeria, Nsukka',
        year: '2018'
      }
    ],
    courses: [
      'DSC 312: Introduction to Computer Vision',
      'DSC 415: Remote Sensing Data Analysis'
    ],
    awards: [
      'African Women in Agricultural Research and Development (AWARD) Fellowship (2024)'
    ]
  },
  {
    id: 7,
    name: 'Dr. Kelechi Obi',
    role: 'Lecturer',
    rank: 'Lecturer',
    department: 'Department of Data Science',
    image: 'https://images.unsplash.com/photo-1621241484978-6f60fdb68f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMG1vZGVybnxlbnwxfHx8fDE3ODEzNzY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'k.obi@uniben.edu.ng',
    phone: '+234 (0) 808 666 7777',
    office: 'Block C, Room 308',
    bio: `Dr. Kelechi Obi holds a Ph.D. from the University of Edinburgh. He specializes in reinforcement learning and robotics, focusing on developing learning algorithms that are computationally efficient enough to run on constrained edge and embedded systems.`,
    research: [
      'Reinforcement Learning',
      'Robotics & Control Systems',
      'Edge Computing',
      'Autonomous Systems'
    ],
    researchTags: ['RL Algorithms', 'Simulation', 'Control Systems', 'Autonomous Agents'],
    publications: 11,
    publicationsList: [
      {
        title: 'EdgeRL: Efficient Reinforcement Learning on Embedded Microcontrollers',
        journal: 'IEEE Transactions on Computers',
        year: '2025',
        citations: 18
      }
    ],
    education: [
      {
        degree: 'Ph.D. in Robotics and Autonomous Systems',
        institution: 'University of Edinburgh',
        year: '2023'
      },
      {
        degree: 'M.Sc. in Embedded Systems',
        institution: 'University of Leeds',
        year: '2019'
      }
    ],
    courses: [
      'DSC 320: Reinforcement Learning',
      'DSC 418: Embedded Systems and Edge AI'
    ],
    awards: [
      'Edinburgh Global Research Scholarship (2020)'
    ]
  },
  {
    id: 8,
    name: 'Dr. Folake Johnson',
    role: 'Lecturer & Admissions Coordinator',
    rank: 'Lecturer',
    department: 'Department of Data Science',
    image: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGhhY2thdGhvbnxlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'f.johnson@uniben.edu.ng',
    phone: '+234 (0) 809 777 8888',
    office: 'Block C, Room 306',
    bio: `Dr. Folake Johnson holds a Ph.D. from the University of Ghana. Her research centers on Health Informatics and Ethics in Data Science. She is interested in data privacy, patient record security, and mitigating bias in clinical predictive modeling.`,
    research: [
      'Health Informatics',
      'Data Ethics & Fairness',
      'Information Privacy',
      'Healthcare Analytics'
    ],
    researchTags: ['Electronic Health Records', 'Privacy', 'Fairness in ML', 'Public Health'],
    publications: 19,
    publicationsList: [
      {
        title: 'Privacy-Preserving Architectures for Federated Health Records in Ghana and Nigeria',
        journal: 'Lancet Digital Health',
        year: '2024',
        citations: 37
      }
    ],
    education: [
      {
        degree: 'Ph.D. in Health Informatics',
        institution: 'University of Ghana',
        year: '2020'
      },
      {
        degree: 'M.Sc. in Information Technology',
        institution: 'University of Ibadan',
        year: '2015'
      }
    ],
    courses: [
      'DSC 202: Introduction to Health Informatics',
      'DSC 315: Ethical and Social Issues in Data Science'
    ],
    awards: [
      'Global Health Equity Research Award (2023)'
    ]
  }
];
