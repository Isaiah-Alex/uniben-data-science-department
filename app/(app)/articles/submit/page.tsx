import Link from "next/link";
import { getCurrentUserServer } from "@/lib/data/submissions-server";
import { SubmitForm } from "@/components/articles/SubmitForm";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default async function ArticleSubmitRoute() {
  const currentUser = await getCurrentUserServer();

  if (!currentUser) {
    return (
      <div className="max-w-xl mx-auto my-12 p-8 border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900 rounded text-center">
        <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Log in required</h2>
        <p className="text-sm text-muted-foreground mb-6">
          You need to be logged in as a client to submit an article outline or
          draft.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-primary text-primary-foreground">
            <Link href="/login?redirect=/articles/submit">Log In</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/signup">Create an Account</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (currentUser.role !== "client") {
    return (
      <div className="max-w-xl mx-auto my-12 p-8 border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900 rounded text-center">
        <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Access Restricted</h2>
        <p className="text-sm text-muted-foreground mb-6">
          You are logged in as{" "}
          <span className="font-bold uppercase text-foreground">
            {currentUser.role}
          </span>{" "}
          ({currentUser.name}). Only client accounts can submit drafts or
          outlines.
        </p>
        <Button variant="outline" asChild>
          <Link href="/articles">Back to Articles</Link>
        </Button>
      </div>
    );
  }

return <SubmitForm currentUser={{ ...currentUser, role: "client" }} />; 
}
