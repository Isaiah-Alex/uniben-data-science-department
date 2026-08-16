import type { Submission, SubmissionStatus, UserRole } from "@/types/submission";
import { articles } from "./articles";

let submissionsStore: Submission[] = [
  {
    id: "sub-1",
    title: "Advancing NLP for Nigerian Languages",
    slug: "advancing-nlp-nigerian-languages",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    category: "Research",
    tags: ["NLP", "Yoruba", "Igbo"],
    author: { name: "Efe Nelson", slug: "efe-nelson" },
    summary: "A study on machine translation and pre-training for low-resource languages in Nigeria.",
    content: "Natural Language Processing has seen massive growth, but African languages remain underrepresented. This submission outlines a framework for pre-training transformers on local dialects...",
    date: "Aug 10, 2026",
    readTime: "5 min read",
    status: "submitted",
    submittedBy: { name: "Efe Nelson", email: "efe.nelson@student.uniben.edu" },
    history: [
      {
        status: "submitted",
        actor: { name: "Efe Nelson", role: "client" },
        timestamp: "2026-08-10T10:00:00.000Z",
        note: "Initial submission of my research proposal outline."
      }
    ]
  },
  {
    id: "sub-2",
    title: "Department Welcomes New Cohort of Data Science Students",
    slug: "department-welcomes-new-cohort-data-science-students",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    category: "Students",
    tags: ["Academics", "Orientation", "Students"],
    author: { name: "Editorial Board", slug: "editorial-board" },
    summary: "The Department of Data Science welcomed 100 new undergraduate students during the orientation ceremony.",
    content: "Our department officially inducted the freshman class of 2026. The HOD, Prof. Okonkwo, delivered the opening remarks, outlining the exciting curriculum and career paths available...",
    date: "Aug 12, 2026",
    readTime: "3 min read",
    status: "in_editing",
    submittedBy: { name: "Efe Nelson", email: "efe.nelson@student.uniben.edu" },
    history: [
      {
        status: "submitted",
        actor: { name: "Efe Nelson", role: "client" },
        timestamp: "2026-08-12T09:00:00.000Z",
        note: "Submitted draft of the freshman orientation report."
      },
      {
        status: "in_editing",
        actor: { name: "Dr. Chioma Eze", role: "editor" },
        timestamp: "2026-08-12T14:30:00.000Z",
        note: "Started editing to refine formatting and fix typos."
      }
    ]
  },
  {
    id: "sub-3",
    title: "Optimizing Wind Turbine Efficiency with Machine Learning",
    slug: "optimizing-wind-turbine-efficiency-ml",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200",
    category: "Research",
    tags: ["Machine Learning", "Energy", "Sustainability"],
    author: { name: "Dr. Tunde Adeleke", slug: "dr-tunde-adeleke" },
    summary: "Using reinforcement learning to dynamic align wind turbine blade angles for maximum output.",
    content: "Wind energy conversion systems suffer from aerodynamic inefficiencies due to turbulent flow. This article reviews how reinforcement learning agents adjust pitch dynamically...",
    date: "Aug 14, 2026",
    readTime: "6 min read",
    status: "in_review",
    submittedBy: { name: "Dr. Tunde Adeleke", email: "t.adeleke@uniben.edu.ng" },
    history: [
      {
        status: "submitted",
        actor: { name: "Dr. Tunde Adeleke", role: "client" },
        timestamp: "2026-08-14T08:00:00.000Z",
        note: "Ready for editor review."
      },
      {
        status: "in_editing",
        actor: { name: "Dr. Chioma Eze", role: "editor" },
        timestamp: "2026-08-14T10:00:00.000Z",
        note: "Reviewed and formatted references."
      },
      {
        status: "in_review",
        actor: { name: "Dr. Chioma Eze", role: "editor" },
        timestamp: "2026-08-14T11:15:00.000Z",
        note: "Sent to reviewer for final sign-off."
      }
    ]
  },
  {
    id: "sub-4",
    title: "Hackathon 2026: Dynamic Pricing Algorithms",
    slug: "hackathon-2026-dynamic-pricing-algorithms",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200",
    category: "Events",
    tags: ["Hackathon", "Competition", "Coding"],
    author: { name: "Efe Nelson", slug: "efe-nelson" },
    summary: "A summary of the department's 48-hour coding event focused on retail price optimization.",
    content: "Students spent 48 hours designing real-time predictive models for retail pricing. The winning team utilized an ensemble of XGBoost and LightGBM...",
    date: "Aug 11, 2026",
    readTime: "4 min read",
    status: "changes_requested",
    submittedBy: { name: "Efe Nelson", email: "efe.nelson@student.uniben.edu" },
    history: [
      {
        status: "submitted",
        actor: { name: "Efe Nelson", role: "client" },
        timestamp: "2026-08-11T09:00:00.000Z",
        note: "Submitted hackathon summary."
      },
      {
        status: "in_editing",
        actor: { name: "Dr. Chioma Eze", role: "editor" },
        timestamp: "2026-08-11T12:00:00.000Z",
        note: "Preparing draft."
      },
      {
        status: "in_review",
        actor: { name: "Dr. Chioma Eze", role: "editor" },
        timestamp: "2026-08-11T14:00:00.000Z",
        note: "Submitting to reviewer."
      },
      {
        status: "changes_requested",
        actor: { name: "Prof. Adebayo Okonkwo", role: "reviewer" },
        timestamp: "2026-08-11T16:30:00.000Z",
        note: "Please include the names of the winning students and details on the prize sponsorship."
      }
    ]
  },
  {
    id: "sub-5",
    title: "Responsible AI and Data Privacy in Health Informatics",
    slug: "responsible-ai-data-privacy-health-informatics",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    category: "Research",
    tags: ["Ethics", "Healthcare", "Privacy"],
    author: { name: "Dr. Mary Ojo", slug: "dr-mary-ojo" },
    summary: "Ethical considerations and regulations surrounding electronic health records in Sub-Saharan Africa.",
    content: "Data privacy is paramount when dealing with patient diagnostic records. This article explores federated learning and differential privacy models...",
    date: "Aug 05, 2026",
    readTime: "7 min read",
    status: "approved",
    submittedBy: { name: "Dr. Mary Ojo", email: "dr-mary-ojo@uniben.edu" },
    history: [
      {
        status: "submitted",
        actor: { name: "Dr. Mary Ojo", role: "client" },
        timestamp: "2026-08-05T08:30:00.000Z",
        note: "Submitted my ethics draft."
      },
      {
        status: "in_editing",
        actor: { name: "Dr. Chioma Eze", role: "editor" },
        timestamp: "2026-08-05T10:00:00.000Z",
        note: "Checked guidelines alignment."
      },
      {
        status: "in_review",
        actor: { name: "Dr. Chioma Eze", role: "editor" },
        timestamp: "2026-08-05T11:00:00.000Z",
        note: "Sent to reviewer."
      },
      {
        status: "approved",
        actor: { name: "Prof. Adebayo Okonkwo", role: "reviewer" },
        timestamp: "2026-08-05T15:00:00.000Z",
        note: "Excellent write-up. Ready for publication."
      }
    ]
  },
  {
    id: "sub-6",
    title: "Department Partners with Global AI Foundation",
    slug: "department-partners-global-ai-foundation",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
    category: "Partnerships",
    tags: ["Partnership", "Funding", "AI"],
    author: { name: "Editorial Board", slug: "editorial-board" },
    summary: "A new partnership providing GPU compute grants and PhD fellowships to UNIBEN research students.",
    content: "The Department of Data Science is proud to announce a collaborative research agreement with the Global AI Foundation...",
    date: "Aug 01, 2026",
    readTime: "4 min read",
    status: "published",
    submittedBy: { name: "Dr. Chioma Eze", email: "c.eze@uniben.edu.ng" },
    history: [
      {
        status: "submitted",
        actor: { name: "Dr. Chioma Eze", role: "client" },
        timestamp: "2026-08-01T09:00:00.000Z",
        note: "Created partnership post."
      },
      {
        status: "in_editing",
        actor: { name: "Dr. Chioma Eze", role: "editor" },
        timestamp: "2026-08-01T10:00:00.000Z",
        note: "Polished structure."
      },
      {
        status: "in_review",
        actor: { name: "Dr. Chioma Eze", role: "editor" },
        timestamp: "2026-08-01T10:30:00.000Z",
        note: "Submitted."
      },
      {
        status: "approved",
        actor: { name: "Prof. Adebayo Okonkwo", role: "reviewer" },
        timestamp: "2026-08-01T12:00:00.000Z",
        note: "Approved."
      },
      {
        status: "published",
        actor: { name: "Dr. Chioma Eze", role: "editor" },
        timestamp: "2026-08-01T14:00:00.000Z",
        note: "Published online."
      }
    ]
  }
];

export function getAllSubmissions(): Submission[] {
  return submissionsStore;
}

export function getSubmissionById(id: string): Submission | undefined {
  return submissionsStore.find((s) => s.id === id);
}

export function getSubmissionsByStatus(status: SubmissionStatus): Submission[] {
  return submissionsStore.filter((s) => s.status === status);
}

export function createSubmission(
  submission: Omit<Submission, "id" | "status" | "history">
): Submission {
  const newSubmission: Submission = {
    ...submission,
    id: `sub-${Date.now()}`,
    status: "submitted",
    history: [
      {
        status: "submitted",
        actor: { name: submission.submittedBy.name, role: "client" },
        timestamp: new Date().toISOString(),
        note: "Submission created."
      }
    ]
  };
  submissionsStore.push(newSubmission);
  return newSubmission;
}

export function updateSubmission(
  id: string,
  updatedFields: Partial<Omit<Submission, "id" | "history" | "status">>
): Submission | undefined {
  const index = submissionsStore.findIndex((s) => s.id === id);
  if (index === -1) return undefined;
  submissionsStore[index] = {
    ...submissionsStore[index],
    ...updatedFields
  };
  return submissionsStore[index];
}

export function updateSubmissionStatus(
  id: string,
  newStatus: SubmissionStatus,
  actor: { name: string; role: UserRole },
  note?: string
): Submission | undefined {
  const index = submissionsStore.findIndex((s) => s.id === id);
  if (index === -1) return undefined;

  const historyEntry = {
    status: newStatus,
    actor,
    timestamp: new Date().toISOString(),
    note
  };

  submissionsStore[index] = {
    ...submissionsStore[index],
    status: newStatus,
    history: [...submissionsStore[index].history, historyEntry]
  };

  return submissionsStore[index];
}

// Dynamically merges mock static articles with published workflow submissions
export function getMergedArticles() {
  const publishedSubmissionsAsArticles = submissionsStore
    .filter((s) => s.status === "published")
    .map((s) => ({
      id: s.id as any, // Cast string to number bypass (standard usage uses toString())
      slug: s.slug,
      image: s.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      category: s.category,
      tags: s.tags,
      author: s.author,
      title: s.title,
      summary: s.summary,
      content: s.content,
      date: s.date || new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      readTime: s.readTime || "5 min read"
    }));

  return [...articles, ...publishedSubmissionsAsArticles];
}
