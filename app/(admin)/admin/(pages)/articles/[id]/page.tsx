import {
  getSubmissionByIdServer,
  getStaffUserServer,
} from "@/lib/data/submissions-server";
import { ArticleDetailView } from "@/components/admin/ArticleDetailView";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetailRoute({ params }: Props) {
  const { id } = await params;

  // Safety net — middleware already blocks non-staff/logged-out users.
  // Returns a narrowed "editor" | "reviewer" | "admin" role, no cast needed.
  const currentUser = await getStaffUserServer();

  const submission = await getSubmissionByIdServer(id);

  if (!submission) {
    return (
      <div className="text-center py-12">
        <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
        <h2 className="text-xl font-bold">Submission Not Found</h2>
        <p className="text-sm text-muted-foreground mt-1">
          The requested submission does not exist or has been deleted.
        </p>
        <Button className="mt-6" asChild>
          <Link href="/admin/articles">Back to Submissions</Link>
        </Button>
      </div>
    );
  }

  return (
    <ArticleDetailView submission={submission} currentUser={currentUser} />
  );
}
