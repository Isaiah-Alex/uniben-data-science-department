import type {
  RecentActivity,
  QuickLink,
  StatusColors,
  Program,
  ResearchArea,
  Lecturer,
  ActivityItem,
  SiteSummary,
  DashboardStat,
} from "./schema";

import {
  BookOpen,
  FlaskConical,
  Users,
  Newspaper,
  TrendingUp,
} from "lucide-react";

export const researchAreas = [
  {
    id: 1,
    title: "Machine Learning & Artificial Intelligence",
    description:
      "Developing novel algorithms and architectures for supervised, unsupervised, and reinforcement learning with applications across healthcare, agriculture, and finance.",
    lead: "Prof. Adebayo Okonkwo",
    members: 6,
    publications: 24,
    image:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzgxMzc2NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"],
  },
  {
    id: 2,
    title: "Big Data Analytics & Cloud Computing",
    description:
      "Designing scalable pipelines and distributed systems for processing large-scale datasets in real-time, with focus on cloud-native architectures.",
    lead: "Dr. Chioma Eze",
    members: 5,
    publications: 18,
    image: "/images/data-analysis.jpg",
    tags: ["Apache Spark", "Hadoop", "AWS", "Real-time Processing"],
  },
  {
    id: 3,
    title: "Data Visualization & Human-Computer Interaction",
    description:
      "Creating intuitive visual representations of complex data to aid decision-making, with emphasis on interactive dashboards and accessible design.",
    lead: "Dr. Oluwaseun Ibrahim",
    members: 4,
    publications: 12,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["D3.js", "Tableau", "Information Design", "UX Research"],
  },
  {
    id: 4,
    title: "Statistical Modeling & Biostatistics",
    description:
      "Advancing statistical methods for complex data structures, including Bayesian inference, survival analysis, and causal inference for medical and social research.",
    lead: "Prof. Emeka Nwankwo",
    members: 5,
    publications: 20,
    image:
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc4MTM3NjU5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Bayesian Statistics", "Survival Analysis", "R", "Causal Inference"],
  },
];

export const recentPublications = [
  {
    title:
      "Predictive Modeling for Agricultural Yield Optimization in West Africa",
    authors: "Okonkwo, A., Eze, C., Adeleke, T.",
    journal: "Journal of Data Science & Agricultural Research",
    year: "2026",
    doi: "#",
  },
  {
    title:
      "Real-Time Anomaly Detection in Financial Transactions Using Deep Neural Networks",
    authors: "Nwankwo, E., Ibrahim, O.",
    journal: "IEEE Transactions on Neural Networks",
    year: "2026",
    doi: "#",
  },
  {
    title:
      "An Interactive Dashboard Framework for Public Health Surveillance in Nigeria",
    authors: "Ibrahim, O., Johnson, F.",
    journal: "Health Informatics Journal",
    year: "2025",
    doi: "#",
  },
  {
    title:
      "Bayesian Approaches to Missing Data in Clinical Trials: A Nigerian Perspective",
    authors: "Nwankwo, E., Obi, C.",
    journal: "Statistics in Medicine",
    year: "2025",
    doi: "#",
  },
  {
    title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
    authors: "Okonkwo, A., Eze, C.",
    journal: "Nature Machine Intelligence",
    year: "2025",
    doi: "#",
  },
];

export const stats = [
  { label: "Active Research Projects", value: "18" },
  { label: "Publications (2024–2026)", value: "74" },
  { label: "Research Staff", value: "20" },
  { label: "External Grants (₦M)", value: "340+" },
];

export const labs = [
  {
    name: "AI & Machine Learning Lab",
    description:
      "High-performance computing cluster with GPU nodes for deep learning research.",
    capacity: "20 researchers",
  },
  {
    name: "Data Engineering Studio",
    description:
      "Dedicated workspace for big data pipelines, cloud integration, and ETL development.",
    capacity: "15 researchers",
  },
  {
    name: "Visualization & UX Lab",
    description:
      "Interactive displays and user testing equipment for data visualization research.",
    capacity: "12 researchers",
  },
];

export const recentActivity: RecentActivity[] = [
  {
    action: "New news post published",
    subject: "UNIBEN Students Win Regional Analytics Challenge",
    user: "Dr. Chioma Eze",
    time: "2 hours ago",
    status: "published",
  },

  {
    action: "Lecturer profile updated",

    subject: "Dr. Amara Nwosu — research tags updated",

    user: "Prof. A. Okonkwo",

    time: "5 hours ago",

    status: "updated",
  },

  {
    action: "Program details edited",

    subject: "M.Sc Data Analytics — intake updated to 40",

    user: "Admin",

    time: "Yesterday",

    status: "updated",
  },
];

export const quickLinks: QuickLink[] = [
  {
    label: "Manage Programs",
    href: "/admin/programs",
    icon: BookOpen,
  },

  {
    label: "Manage Research",
    href: "/admin/research",
    icon: FlaskConical,
  },

  {
    label: "Manage Lecturers",
    href: "/admin/lecturers",
    icon: Users,
  },

  {
    label: "Site Settings",
    href: "/admin/settings",
    icon: TrendingUp,
  },
];

export const statusColors: StatusColors = {
  published: "bg-emerald-100 text-emerald-700",

  draft: "bg-amber-100 text-amber-700",

  updated: "bg-primary/10 text-primary",
};

export const seedPrograms: Program[] = [
  {
    id: "bsc-data-science",
    title: "B.Sc Data Science",
    level: "Undergraduate",
    duration: "4 years",
    credits: "120 credit hours",
    intake: 100,
    status: "Active",
    updatedAt: "June 10, 2026",
  },
  {
    id: "pgd-data-analytics",
    title: "PGD Data Analytics",
    level: "Postgraduate",
    duration: "1 year",
    credits: "30 credit hours",
    intake: 50,
    status: "Active",
    updatedAt: "May 22, 2026",
  },
  {
    id: "msc-data-analytics",
    title: "M.Sc Data Analytics",
    level: "Postgraduate",
    duration: "18 months",
    credits: "45 credit hours",
    intake: 40,
    status: "Active",
    updatedAt: "May 15, 2026",
  },
];

export const seedResearchAreas: ResearchArea[] = [
  {
    id: 1,
    title: "Machine Learning & Artificial Intelligence",
    lead: "Prof. Adebayo Okonkwo",
    members: 6,
    publications: 24,
    tags: "Deep Learning, NLP, Computer Vision, Reinforcement Learning",
    status: "Active",
    updatedAt: "June 10, 2026",
  },
  {
    id: 2,
    title: "Big Data Analytics & Cloud Computing",
    lead: "Dr. Chioma Eze",
    members: 5,
    publications: 18,
    tags: "Apache Spark, Hadoop, AWS, Real-time Processing",
    status: "Active",
    updatedAt: "May 28, 2026",
  },
  {
    id: 3,
    title: "Data Visualization & Human-Computer Interaction",
    lead: "Dr. Oluwaseun Ibrahim",
    members: 4,
    publications: 12,
    tags: "D3.js, Tableau, Information Design, UX Research",
    status: "Active",
    updatedAt: "May 15, 2026",
  },
  {
    id: 4,
    title: "Statistical Modeling & Biostatistics",
    lead: "Prof. Emeka Nwankwo",
    members: 5,
    publications: 20,
    tags: "Bayesian Statistics, Survival Analysis, R, Causal Inference",
    status: "Active",
    updatedAt: "April 30, 2026",
  },
];

export const seedLecturers: Lecturer[] = [
  {
    id: 1,
    name: "Prof. Adebayo Okonkwo",
    role: "Head of Department",
    rank: "Professor",
    research: "Machine Learning & AI",
    email: "a.okonkwo@uniben.edu.ng",
    publications: 60,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=400&h=400&fit=crop&auto=format",
    updatedAt: "June 10, 2026",
  },
  {
    id: 2,
    name: "Dr. Chioma Eze",
    role: "Senior Lecturer & Deputy HOD",
    rank: "Senior Lecturer",
    research: "Big Data Analytics",
    email: "c.eze@uniben.edu.ng",
    publications: 38,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=400&h=400&fit=crop&auto=format",
    updatedAt: "June 8, 2026",
  },
  {
    id: 3,
    name: "Dr. Oluwaseun Ibrahim",
    role: "Lecturer & Programme Coordinator",
    rank: "Lecturer",
    research: "Data Visualization",
    email: "o.ibrahim@uniben.edu.ng",
    publications: 22,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1618053448492-2b629c2c912c?w=400&h=400&fit=crop&auto=format",
    updatedAt: "May 30, 2026",
  },
  {
    id: 4,
    name: "Prof. Emeka Nwankwo",
    role: "Professor of Statistics",
    rank: "Professor",
    research: "Statistical Modeling",
    email: "e.nwankwo@uniben.edu.ng",
    publications: 51,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=400&h=400&fit=crop&auto=format",
    updatedAt: "May 22, 2026",
  },
  {
    id: 5,
    name: "Dr. Tunde Adeleke",
    role: "Lecturer",
    rank: "Lecturer",
    research: "Natural Language Processing",
    email: "t.adeleke@uniben.edu.ng",
    publications: 17,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=400&h=400&fit=crop&auto=format",
    updatedAt: "May 18, 2026",
  },
  {
    id: 6,
    name: "Dr. Amara Nwosu",
    role: "Lecturer",
    rank: "Lecturer",
    research: "Computer Vision",
    email: "a.nwosu@uniben.edu.ng",
    publications: 14,
    status: "On Leave",
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=400&h=400&fit=crop&auto=format",
    updatedAt: "April 15, 2026",
  },
  {
    id: 7,
    name: "Dr. Kelechi Obi",
    role: "Lecturer",
    rank: "Lecturer",
    research: "Reinforcement Learning",
    email: "k.obi@uniben.edu.ng",
    publications: 11,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1621241484978-6f60fdb68f1c?w=400&h=400&fit=crop&auto=format",
    updatedAt: "April 10, 2026",
  },
  {
    id: 8,
    name: "Dr. Folake Johnson",
    role: "Lecturer & Admissions Coordinator",
    rank: "Lecturer",
    research: "Health Informatics",
    email: "f.johnson@uniben.edu.ng",
    publications: 19,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1638029202288-451a89e0d55f?w=400&h=400&fit=crop&auto=format",
    updatedAt: "March 28, 2026",
  },
];

export const seedActivity: ActivityItem[] = [
  {
    type: "post",
    action: "New news post published",
    subject: "UNIBEN Students Win Regional Analytics Challenge",
    user: "Dr. Chioma Eze",
    time: "2 hours ago",
    status: "published",
  },
  {
    type: "lecturer",
    action: "Lecturer profile updated",
    subject: "Dr. Amara Nwosu — research tags updated",
    user: "Prof. A. Okonkwo",
    time: "5 hours ago",
    status: "updated",
  },
  {
    type: "program",
    action: "Program details edited",
    subject: "M.Sc Data Analytics — intake updated to 40",
    user: "Admin",
    time: "Yesterday",
    status: "updated",
  },
  {
    type: "research",
    action: "New research area added",
    subject: "Reinforcement Learning & Robotics",
    user: "Dr. Kelechi Obi",
    time: "2 days ago",
    status: "published",
  },
  {
    type: "post",
    action: "News post drafted",
    subject: "Department Ranked Top 3 in National Assessment",
    user: "Dr. Folake Johnson",
    time: "3 days ago",
    status: "draft",
  },
  {
    type: "lecturer",
    action: "New lecturer onboarded",
    subject: "Dr. Kelechi Obi — profile created",
    user: "Admin",
    time: "4 days ago",
    status: "published",
  },
];

export const seedSiteSummary: SiteSummary = {
  publishedPosts: 7,
  draftPosts: 2,
  activePrograms: 3,
  researchProjects: 18,
  facultyProfiles: 8,
};

export const seedDashboardStats: DashboardStat[] = [
  {
    label: "Total Programs",
    value: "3",
    change: "+1 this year",
    href: "/admin/programs",
    iconName: "BookOpen",
    color: "var(--color-primary)",
  },
  {
    label: "Research Areas",
    value: "4",
    change: "18 active projects",
    href: "/admin/research",
    iconName: "FlaskConical",
    color: "#6B5CE7",
  },
  {
    label: "Faculty Members",
    value: "8",
    change: "+2 this semester",
    href: "/admin/lecturers",
    iconName: "Users",
    color: "#059669",
  },
  {
    label: "News Posts",
    value: "9",
    change: "3 this month",
    href: "/admin/news",
    iconName: "Newspaper",
    color: "#D97706",
  },
];
