"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Paperclip,
  X,
  Plus,
  ImagePlus,
  Hash,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type {
  PostStatus,
  PostFormData,
  PostFormProps,
  AttachedFile,
} from "@/types/post";

import { toTitleCase } from "@/lib/utils";

export function PostForm<TCategory extends string = string>({
  mode = "create",
  initialData,
  categories,
  onSave,
  onPublish,
  routeName,
}: PostFormProps<TCategory>) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [summary, setSummary] = useState(initialData?.summary ?? "");
  const [body, setBody] = useState(initialData?.body ?? "");
  const [category, setCategory] = useState<TCategory | "">(
    initialData?.category ?? "",
  );
  const [status, setStatus] = useState<PostStatus>(
    initialData?.status ?? "draft",
  );
  const [publishDate, setPublishDate] = useState(
    initialData?.publishDate ?? "",
  );
  const [coverImage, setCoverImage] = useState<string | null>(
    initialData?.coverImage ?? null,
  );
  const [attachments, setAttachments] = useState<AttachedFile[]>(
    initialData?.attachments ?? [],
  );
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>(initialData?.tags ?? []);
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const tagInputRef = useRef<HTMLInputElement>(null);

  function buildFormData(): PostFormData<TCategory> {
    return {
      title,
      summary,
      body,
      category,
      status,
      publishDate,
      coverImage,
      attachments,
      tags,
    };
  }

  function handleCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverImage(URL.createObjectURL(file));
  }

  function handleAttachmentChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    const mapped: AttachedFile[] = files.map((f) => ({
      name: f.name,
      size:
        f.size > 1024 * 1024
          ? `${(f.size / (1024 * 1024)).toFixed(1)} MB`
          : `${Math.round(f.size / 1024)} KB`,
      type: f.type,
    }));
    setAttachments((prev) => [...prev, ...mapped]);
  }

  function removeAttachment(index: number) {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  }

  function handleTagKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim().replace(/^#/, "").toLowerCase();
      if (newTag && !tags.includes(newTag)) {
        setTags((prev) => [...prev, newTag]);
      }
      setTagInput("");
    }
    if (e.key === "Backspace" && !tagInput && tags.length > 0) {
      setTags((prev) => prev.slice(0, -1));
    }
  }

  function removeTag(tag: string) {
    setTags((prev) => prev.filter((t) => t !== tag));
  }

  async function handleSave() {
    setSaving(true);
    try {
      await onSave(buildFormData());
    } finally {
      setSaving(false);
    }
  }

  async function handlePublish() {
    setPublishing(true);
    try {
      await onPublish(buildFormData());
    } finally {
      setPublishing(false);
    }
  }

  const wordCount = body.trim() ? body.trim().split(/\s+/).length : 0;
  const canPublish =
    !publishing && !!title.trim() && !!body.trim() && !!category;
  const backHref = mode === "edit" ? ".." : `/admin/${routeName}`;
  const backLabel =
    mode === "edit" ? "Back" : `Back to ${toTitleCase(routeName)}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="sticky top-0 z-10 border-b border-border bg-background">
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border px-2.5 py-1">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  status === "published"
                    ? "bg-primary"
                    : status === "scheduled"
                      ? "bg-yellow-500"
                      : "bg-muted-foreground"
                }`}
              />
              {status === "draft"
                ? "Draft"
                : status === "scheduled"
                  ? "Scheduled"
                  : status === "published"
                    ? "Published"
                    : "Archived"}
            </span>

            <Button
              variant="outline"
              size="sm"
              className="rounded-none text-sm gap-2 hidden sm:inline-flex"
            >
              <Eye className="w-3.5 h-3.5" />
              Preview
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleSave}
              disabled={saving}
              className="rounded-none text-sm"
            >
              {saving ? "Saving…" : "Save draft"}
            </Button>

            <Button
              size="sm"
              onClick={handlePublish}
              disabled={!canPublish}
              className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-5"
            >
              {publishing ? "Publishing…" : "Publish"}
            </Button>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ── Left: Writing surface ── */}
          <div className="lg:col-span-8 space-y-0">
            {/* Cover image */}
            <div
              className="relative w-full aspect-21/9 border border-dashed border-border bg-muted/40 flex flex-col items-center justify-center cursor-pointer group hover:bg-muted/60 transition-colors overflow-hidden mb-8"
              onClick={() => coverInputRef.current?.click()}
            >
              {coverImage ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={coverImage}
                    alt="Cover"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-medium text-primary-foreground uppercase tracking-widest">
                      Change cover
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <ImagePlus className="w-6 h-6 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">
                    Add cover image
                  </span>
                </>
              )}
              <input
                ref={coverInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleCoverChange}
              />
            </div>

            {/* Eyebrow — category preview */}
            {category && (
              <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
                {category}
              </p>
            )}

            {/* Title */}
            <div className="mb-6">
              <textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
                rows={2}
                className="w-full resize-none bg-transparent border-0 border-b border-border focus:outline-none focus:border-primary text-3xl md:text-4xl leading-tight text-foreground placeholder:text-muted-foreground/40 pb-4 transition-colors"
                style={{ fontFamily: "Playfair Display" }}
              />
            </div>

            {/* Summary */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                Summary
              </label>
              <Textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="A short summary shown in listings and previews…"
                rows={2}
                className="rounded-none border-border bg-background text-sm resize-none text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>

            {/* Body */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest">
                  Body
                </label>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {wordCount} {wordCount === 1 ? "word" : "words"}
                </span>
              </div>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write the full article here…"
                rows={20}
                className="rounded-none border-border bg-background text-base leading-relaxed resize-y text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-0 focus-visible:border-primary"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Use double line breaks to separate paragraphs. Wrap headings in{" "}
                <code className="bg-muted px-1 py-0.5 text-[11px]">
                  &lt;h3&gt;
                </code>{" "}
                tags.
              </p>
            </div>
          </div>

          {/* ── Right: Metadata sidebar ── */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Publish settings */}
              <div className="border border-border">
                <div className="px-5 py-3 border-b border-border bg-muted/40">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    Publish settings
                  </p>
                </div>
                <div className="px-5 py-5 space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
                      Status
                    </label>
                    <Select
                      value={status}
                      onValueChange={(v) => setStatus(v as PostStatus)}
                    >
                      <SelectTrigger className="rounded-none border-border h-9 text-sm w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {status === "scheduled" && (
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
                        Publish date
                      </label>
                      <Input
                        type="datetime-local"
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                        className="rounded-none border-border h-9 text-sm"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1.5">
                      Category
                    </label>
                    <Select
                      value={category}
                      onValueChange={(v) => setCategory(v as TCategory)}
                    >
                      <SelectTrigger className="rounded-none border-border h-9 text-sm w-full">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                      <SelectContent className="rounded-none">
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Estimated read time:{" "}
                      <span className="font-medium text-foreground">
                        {wordCount < 200
                          ? "< 1 min"
                          : `${Math.ceil(wordCount / 200)} min`}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="border border-border">
                <div className="px-5 py-3 border-b border-border bg-muted/40 flex items-center gap-2">
                  <Hash className="w-3.5 h-3.5 text-muted-foreground" />
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    Tags
                  </p>
                  <span className="ml-auto text-[10px] text-muted-foreground/60 italic">
                    optional
                  </span>
                </div>
                <div className="px-5 py-4">
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-accent text-primary text-xs font-medium"
                        >
                          #{tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="text-primary/60 hover:text-primary transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <Input
                    ref={tagInputRef}
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    placeholder="Type a tag, press Enter"
                    className="rounded-none border-border h-9 text-sm"
                  />
                  <p className="mt-1.5 text-[11px] text-muted-foreground">
                    Separate tags with Enter or comma
                  </p>
                </div>
              </div>

              {/* Attachments */}
              <div className="border border-border">
                <div className="px-5 py-3 border-b border-border bg-muted/40 flex items-center gap-2">
                  <Paperclip className="w-3.5 h-3.5 text-muted-foreground" />
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    Attachments
                  </p>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {attachments.length > 0 && (
                    <div className="space-y-2">
                      {attachments.map((file, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 py-2 border-b border-border last:border-0"
                        >
                          <div className="w-7 h-7 bg-accent flex items-center justify-center shrink-0">
                            <Paperclip className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-foreground truncate">
                              {file.name}
                            </p>
                            <p className="text-[11px] text-muted-foreground">
                              {file.size}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeAttachment(i)}
                            className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-border text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Attach file
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleAttachmentChange}
                  />
                  <p className="text-[11px] text-muted-foreground">
                    PDFs, images, or documents
                  </p>
                </div>
              </div>

              {/* Publish CTA */}
              <div className="space-y-2">
                <Button
                  onClick={handlePublish}
                  disabled={!canPublish}
                  className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 text-sm font-medium"
                >
                  {publishing ? "Publishing…" : "Publish post"}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleSave}
                  disabled={saving}
                  className="w-full rounded-none h-10 text-sm"
                >
                  {saving ? "Saving…" : "Save as draft"}
                </Button>

                {(!title.trim() || !body.trim() || !category) && (
                  <p className="text-[11px] text-muted-foreground text-center pt-1">
                    Title, body, and category are required to publish
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
