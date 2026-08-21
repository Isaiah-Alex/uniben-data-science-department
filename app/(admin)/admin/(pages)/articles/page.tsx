import {
  getAllSubmissionsServer,
  getStaffUserServer,
} from "@/lib/data/submissions-server";
import { AdminArticlesDashboard } from "@/components/admin/AdminArticlesDashboard";

export default async function AdminArticlesPage() {

  const currentUser = await getStaffUserServer();


  const submissions = await getAllSubmissionsServer();

  return (
    <AdminArticlesDashboard
      submissions={submissions}
      currentUser={currentUser}
    />
  );
}
