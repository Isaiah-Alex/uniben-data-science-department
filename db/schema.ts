import type { LucideIcon } from "lucide-react";

//Dashboard Stats

//Activity Feed

export type ActivityStatus = "published" | "draft" | "updated";

export type RecentActivity = {
  action: string;

  subject: string;

  user: string;

  time: string;

  status: ActivityStatus;
};

//Quick Links

export type QuickLink = {
  label: string;

  href: string;

  icon: LucideIcon;
};

//Site Summary

//Status Colors

export type StatusColors = Record<ActivityStatus, string>;

export type ProgramLevel = "Undergraduate" | "Postgraduate";
export type ProgramStatus = "Active" | "Draft";
export type ResearchStatus = "Active" | "Draft";
export type LecturerRank = "Professor" | "Senior Lecturer" | "Lecturer";
export type LecturerStatus = "Active" | "On Leave" | "Draft";
export type ActivityType = "post" | "lecturer" | "program" | "research";
export type Program = {
  id: string;
  title: string;
  level: ProgramLevel;
  duration: string;
  credits: string;
  intake: number;
  status: ProgramStatus;
  updatedAt: string;
};

export type ResearchArea = {
  id: number;
  title: string;
  lead: string;
  members: number;
  publications: number;
  tags: string;
  status: ResearchStatus;
  updatedAt: string;
};

export type Lecturer = {
  id: number;
  name: string;
  role: string;
  rank: LecturerRank;
  research: string;
  email: string;
  publications: number;
  status: LecturerStatus;
  image: string;
  updatedAt: string;
};

export type ActivityItem = {
  type: ActivityType;
  action: string;
  subject: string;
  user: string;
  time: string;
  status: ActivityStatus;
};

export type SiteSummary = {
  publishedPosts: number;
  draftPosts: number;
  activePrograms: number;
  researchProjects: number;
  facultyProfiles: number;
};

export type DashboardStat = {
  label: string;
  value: string;
  change: string;
  href: string;
  iconName: "BookOpen" | "FlaskConical" | "Users" | "Newspaper";
  color: string;
};
