export interface Author {
  name: string;
  slug: string;
  role: string;
  bio: string;
  avatar: string;
  researchInterests?: string[];
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export const authors: Author[] = [
  {
    name: "Editorial Board",
    slug: "editorial-board",
    role: "Department of Data Science",
    bio: "Official announcements and updates published on behalf of the Department of Data Science.",
    avatar:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400",
  },
  {
    name: "Dr. Tunde Adeleke",
    slug: "dr-tunde-adeleke",
    role: "Senior Lecturer, AI & NLP",
    bio: "Dr. Adeleke researches explainable AI and low-resource language processing, with recent work published in leading international journals.",
    avatar:
      "https://images.unsplash.com/photo-1688120320082-f23f0c1425be?w=400",
    researchInterests: [
      "Natural Language Processing",
      "Low-Resource Languages",
      "Explainable AI",
    ],
    social: {
      twitter: "https://twitter.com/tundeadeleke",
      linkedin: "https://linkedin.com/in/tundeadeleke",
    },
  },
  {
    name: "Dr. Mary Ojo",
    slug: "dr-mary-ojo",
    role: "Lecturer, Curriculum & Generative AI",
    bio: "Dr. Ojo leads curriculum development for the department's Generative AI and LLM Engineering tracks.",
    avatar:
      "https://images.unsplash.com/photo-1652095319417-4bf8a0de1a3d?w=400",
    researchInterests: [
      "Generative AI",
      "Prompt Engineering",
      "Curriculum Design",
    ],
  },
  {
    name: "Prof. Mrs Konyeha S.",
    slug: "prof-konyeha-s",
    role: "Head of Department",
    bio: "Prof. Konyeha's research spans smart agriculture systems, IoT, and applied machine learning for African development challenges.",
    avatar:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1080&q=80",
    researchInterests: [
      "Smart Agriculture",
      "IoT Systems",
      "Applied Machine Learning",
    ],
    social: { linkedin: "https://linkedin.com/in/adebayookonkwo" },
  },
];
