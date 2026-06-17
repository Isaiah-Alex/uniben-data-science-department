export type NewsStatus = "draft" | "published" | "scheduled" | "archived";

export type NewsCategory = "news" | "announcement";

export interface News {
  id: string;
  title: string;
  category: NewsCategory;
  status: NewsStatus;
  image: string;
  publishedAt: string;
  updatedAt: string;
}
