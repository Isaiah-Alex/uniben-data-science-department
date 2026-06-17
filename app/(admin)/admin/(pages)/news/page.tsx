import type { Metadata } from "next";
import { NewsManagement } from "../../_components/news/NewsManagement";

export const metadata: Metadata = {
  title: "News Management — Admin · Department of Data Science",
  description: "Create and manage department news and announcements.",
};

export default function AdminNewsPage() {
  return <NewsManagement />;
}
