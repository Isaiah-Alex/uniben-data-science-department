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
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
  },
  {
    name: "Dr. Tunde Adeleke",
    slug: "dr-tunde-adeleke",
    role: "Senior Lecturer, AI & NLP",
    bio: "Dr. Adeleke researches explainable AI and low-resource language processing, with recent work published in leading international journals.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
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
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400",
    researchInterests: [
      "Generative AI",
      "Prompt Engineering",
      "Curriculum Design",
    ],
  },
  {
    name: "Prof. Adebayo Okonkwo",
    slug: "prof-adebayo-okonkwo",
    role: "Head of Department",
    bio: "Prof. Okonkwo's research spans smart agriculture systems, IoT, and applied machine learning for African development challenges.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    researchInterests: [
      "Smart Agriculture",
      "IoT Systems",
      "Applied Machine Learning",
    ],
    social: { linkedin: "https://linkedin.com/in/adebayookonkwo" },
  },
];
