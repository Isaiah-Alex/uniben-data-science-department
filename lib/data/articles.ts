export interface Article {
  id: number | string;
  slug: string; // new — cleaner URLs than raw IDs for /articles/[slug]
  image: string;
  category: string; // primary category (kept from NewsItem)
  tags: string[]; //  multiple tags for tag filter
  author: {
    name: string;
    slug: string;
  };
  title: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "uniben-launches-ai-innovation-hub",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    category: "Research",
    tags: ["Artificial Intelligence", "Innovation", "Research"],
    author: {
      name: "Editorial Board",
      slug: "editorial-board",
    },
    title: "UNIBEN Launches AI Innovation Hub to Advance Research",
    summary:
      "The Department of Data Science has unveiled a new Artificial Intelligence Innovation Hub aimed at accelerating cutting-edge research and student-led innovation.",
    content:
      "The University of Benin Department of Data Science officially launched its Artificial Intelligence Innovation Hub during a ceremony attended by faculty members, students, industry partners, and invited guests. The facility is equipped with high-performance computing resources, collaborative workspaces, and dedicated laboratories for machine learning, computer vision, and natural language processing research. According to the Head of Department, the initiative will strengthen collaborations between academia and industry while providing students with practical exposure to real-world AI challenges.",
    date: "July 21, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "students-win-national-data-analytics-competition",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    category: "Students",
    tags: ["Competition", "Machine Learning", "Students"],
    author: {
      name: "Editorial Board",
      slug: "editorial-board",
    },
    title: "Students Win National Data Analytics Competition",
    summary:
      "A team of undergraduate students secured first place at the National Data Analytics Challenge after developing an AI-powered healthcare solution.",
    content:
      "The competition attracted teams from over thirty universities across Nigeria. The UNIBEN team developed a predictive analytics platform capable of detecting high-risk medical conditions using historical patient records. Judges praised the team's technical implementation, innovation, and presentation.",
    date: "July 18, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    slug: "faculty-publish-breakthrough-ai-research",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200",
    category: "Research",
    tags: ["Publication", "Artificial Intelligence", "Faculty"],
    author: {
      name: "Dr. Tunde Adeleke",
      slug: "dr-tunde-adeleke",
    },
    title: "Faculty Publish Breakthrough AI Research in International Journal",
    summary:
      "Researchers from the department have published a groundbreaking paper on explainable AI in one of the world's leading journals.",
    content:
      "The research focuses on improving transparency in machine learning models used for healthcare diagnostics. The publication introduces a novel framework that enables clinicians to better understand AI-generated predictions, increasing trust and reliability in medical decision-making.",
    date: "July 15, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    slug: "department-hosts-annual-data-science-conference",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
    category: "Events",
    tags: ["Conference", "Events", "Networking"],
    author: {
      name: "Editorial Board",
      slug: "editorial-board",
    },
    title: "Department Hosts Annual Data Science Conference",
    summary:
      "Industry experts, researchers, and students gathered for the department's annual conference on emerging technologies.",
    content:
      "The three-day conference featured keynote sessions, technical workshops, student poster presentations, and networking opportunities with leading technology companies. Discussions focused on responsible AI, data governance, and digital transformation across Africa.",
    date: "July 10, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    slug: "new-curriculum-focuses-on-generative-ai",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200",
    category: "Academics",
    tags: ["Curriculum", "Generative AI", "Education"],
    author: {
      name: "Dr. Mary Ojo",
      slug: "dr-mary-ojo",
    },
    title: "New Curriculum Introduces Generative AI and LLM Engineering",
    summary:
      "Students will now study Generative AI, Prompt Engineering, and Large Language Models as part of the revised curriculum.",
    content:
      "The updated curriculum reflects the growing demand for AI professionals with practical experience in modern technologies. New courses will provide hands-on training in prompt engineering, transformer architectures, vector databases, and AI application development.",
    date: "July 5, 2026",
    readTime: "4 min read",
  },
  {
    id: 6,
    slug: "alumni-join-global-tech-companies",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200",
    category: "Alumni",
    tags: ["Alumni", "Careers", "Success Stories"],
    author: {
      name: "Editorial Board",
      slug: "editorial-board",
    },
    title: "Graduates Secure Roles at Leading Global Technology Companies",
    summary:
      "Recent graduates from the department have accepted software engineering and data science positions across top global firms.",
    content:
      "Graduates will begin careers at organizations including Microsoft, Google, Amazon, Flutterwave, and Interswitch. Faculty members attributed the achievement to the department's emphasis on practical projects, research, and industry collaboration.",
    date: "June 28, 2026",
    readTime: "3 min read",
  },
  {
    id: 7,
    slug: "researchers-build-smart-agriculture-platform",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200",
    category: "Research",
    tags: ["Agriculture", "IoT", "Machine Learning"],
    author: {
      name: "Prof. Adebayo Okonkwo",
      slug: "prof-adebayo-okonkwo",
    },
    title: "Researchers Develop Smart Agriculture Monitoring Platform",
    summary:
      "A multidisciplinary research team has introduced an AI-powered platform for monitoring crop health and predicting disease outbreaks.",
    content:
      "The platform combines IoT sensors, satellite imagery, and machine learning algorithms to provide farmers with actionable recommendations. Researchers believe the solution could significantly improve agricultural productivity across Nigeria.",
    date: "June 20, 2026",
    readTime: "6 min read",
  },
  {
    id: 8,
    slug: "department-signs-partnership-with-tech-firm",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    category: "Partnerships",
    tags: ["Industry", "Partnership", "Innovation"],
    author: {
      name: "Editorial Board",
      slug: "editorial-board",
    },
    title:
      "Department Signs Strategic Partnership with Leading Technology Firm",
    summary:
      "The agreement will provide internship opportunities, joint research initiatives, and scholarship support for outstanding students.",
    content:
      "The partnership establishes a long-term collaboration focused on talent development, innovation, and applied research. Students will benefit from internship placements, mentorship programmes, and access to industry-led workshops throughout the academic year.",
    date: "June 15, 2026",
    readTime: "4 min read",
  },
];
