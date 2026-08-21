"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createSubmissionAction } from "@/app/actions/submissions";
import { categories } from "@/lib/data/categories";
import { ImageUpload } from "@/components/articles/ImageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, BookOpen, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

interface CurrentUser {
  id: string;
  email: string;
  name: string;
  role: "client";
}

interface Props {
  currentUser: CurrentUser;
}

export function SubmitForm({ currentUser }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [image, setImage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title || !summary || !content || !category) {
      setError("Please fill in all required fields.");
      return;
    }

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const words = content.trim().split(/\s+/).length;
    const readTime = `${Math.max(1, Math.ceil(words / 200))} min read`;

    startTransition(async () => {
      const result = await createSubmissionAction({
        title,
        summary,
        content,
        category,
        tags,
        slug,
        image:
          image ||
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
        readTime,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        author: {
          name: currentUser.name,
          slug: currentUser.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        },
        submittedBy: {
          name: currentUser.name,
          email: currentUser.email,
        },
      });

      if (result.error) {
        setError(result.error);
        return;
      }

      setSubmitted(true);
    });
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto my-12 p-8 border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-900 rounded text-center">
        <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Submission Successful!</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Thank you. Your article outline/draft has been submitted to the
          editorial queue.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-primary text-primary-foreground">
            <Link href="/articles">Back to Articles</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Articles
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4" />
          DJMS Submissions Portal
        </div>
        <h1 className="text-3xl font-bold font-serif mb-2">
          Submit an Article Outline or Draft
        </h1>
        <p className="text-sm text-muted-foreground">
          Submit your work here. Editors will review, edit, and move it through
          our publication pipeline.
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-sm text-rose-600 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 p-3 rounded mb-6">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-card border border-border p-6 sm:p-8 rounded shadow-sm"
      >
        <div className="space-y-2">
          <Label htmlFor="title" className="font-semibold text-sm">
            Title <span className="text-destructive">*</span>
          </Label>
          <Input
            id="title"
            placeholder="Enter article title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category" className="font-semibold text-sm">
            Category <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={setCategory} value={category}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c.slug} value={c.name}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="summary" className="font-semibold text-sm">
            Brief Summary <span className="text-destructive">*</span>
          </Label>
          <Input
            id="summary"
            placeholder="A short description of what this article is about (used in listings)"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            className="w-full"
          />
        </div>

        <ImageUpload
          value={image}
          onChange={setImage}
          userId={currentUser.id}
        />

        <div className="space-y-2">
          <Label htmlFor="tags" className="font-semibold text-sm">
            Tags (Optional, comma separated)
          </Label>
          <Input
            id="tags"
            placeholder="e.g. AI, Research, Computer Vision"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content" className="font-semibold text-sm">
            Article Draft or Outline Content{" "}
            <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="content"
            placeholder="Write your draft or outlines details here..."
            rows={12}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full font-sans"
          />
        </div>

        <div className="pt-4 border-t border-border flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-none font-medium"
          >
            {isPending ? "Submitting..." : "Submit to Department Queue"}
          </Button>
        </div>
      </form>
    </div>
  );
}
