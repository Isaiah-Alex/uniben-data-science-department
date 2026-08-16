"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MockAuthProvider, useMockAuth, mockUsers } from "@/lib/mock-auth";
import { categories } from "@/lib/data/categories";
import { createSubmission } from "@/lib/data/submissions";
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
import { ArrowLeft, BookOpen, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";

function SubmitFormContent() {
  const { currentUser, setRole } = useMockAuth();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [image, setImage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !summary || !content || !category) {
      alert("Please fill in all required fields.");
      return;
    }

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Calculate dynamic read time
    const words = content.trim().split(/\s+/).length;
    const readTime = `${Math.max(1, Math.ceil(words / 200))} min read`;

    createSubmission({
      title,
      summary,
      content,
      category,
      tags,
      slug,
      image: image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
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

    setSubmitted(true);
    setTimeout(() => {
      router.push("/articles");
    }, 3000);
  };

  // Auth gate check
  if (currentUser.role !== "client") {
    return (
      <div className="max-w-xl mx-auto my-12 p-8 border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900 rounded text-center">
        <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Access Restricted</h2>
        <p className="text-sm text-muted-foreground mb-6">
          You are currently viewing as <span className="font-bold uppercase text-foreground">{currentUser.role}</span> ({currentUser.name}).
          Only clients can submit drafts or outlines.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => setRole("client")}
            className="bg-amber-600 hover:bg-amber-700 text-white"
          >
            Switch to Client Role
          </Button>
          <Button variant="outline" asChild>
            <Link href="/articles">Back to Articles</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto my-12 p-8 border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-900 rounded text-center">
        <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Submission Successful!</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Thank you. Your article outline/draft has been submitted to the editorial queue.
        </p>
        <p className="text-xs text-muted-foreground">
          Redirecting to articles listing...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      {/* Header link */}
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
        <h1 className="text-3xl font-bold font-serif mb-2">Submit an Article Outline or Draft</h1>
        <p className="text-sm text-muted-foreground">
          Submit your work here. Editors will review, edit, and move it through our publication pipeline.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border p-6 sm:p-8 rounded shadow-sm">
        {/* Title */}
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

        {/* Category */}
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

        {/* Summary */}
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

        {/* Cover Image URL */}
        <div className="space-y-2">
          <Label htmlFor="image" className="font-semibold text-sm">
            Cover Image URL (Optional)
          </Label>
          <Input
            id="image"
            placeholder="https://example.com/cover-image.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full"
          />
          <p className="text-[11px] text-muted-foreground">
            Leave blank to use a default placeholder cover image.
          </p>
        </div>

        {/* Tags */}
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

        {/* Content */}
        <div className="space-y-2">
          <Label htmlFor="content" className="font-semibold text-sm">
            Article Draft or Outline Content <span className="text-destructive">*</span>
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

        {/* Action Button */}
        <div className="pt-4 border-t border-border flex justify-end">
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-none font-medium"
          >
            Submit to Department Queue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function ArticleSubmitRoute() {
  return (
    <MockAuthProvider>
      <SubmitFormContent />
    </MockAuthProvider>
  );
}
