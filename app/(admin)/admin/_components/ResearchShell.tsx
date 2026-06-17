"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Search, Tag } from "lucide-react";
import type { ResearchArea } from "@/db/schema";
import { Modal } from "@/components/admin/Modal";
import { ConfirmDeleteModal } from "@/components/admin/ConfirmDeleteModal";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ResearchForm } from "./ResearchForm";
import { useRouter } from "next/navigation";

const emptyForm: Omit<ResearchArea, "id" | "updatedAt"> = {
  title: "",
  lead: "",
  members: 0,
  publications: 0,
  tags: "",
  status: "Draft",
};

type Props = {
  initialAreas: ResearchArea[];
};

export function ResearchShell({ initialAreas }: Props) {
  const [areas, setAreas] = useState<ResearchArea[]>(initialAreas);
  const [query, setQuery] = useState("");
  const [createOpen, setCreateOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<ResearchArea | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<ResearchArea | null>(null);
  const [form, setForm] =
    useState<Omit<ResearchArea, "id" | "updatedAt">>(emptyForm);

  const router = useRouter();
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const filtered = query
    ? areas.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.lead.toLowerCase().includes(query.toLowerCase()) ||
          a.tags.toLowerCase().includes(query.toLowerCase()),
      )
    : areas;

  const openCreate = () => {
    setForm(emptyForm);
    setCreateOpen(true);
  };

  const openEdit = (a: ResearchArea) => {
    setEditTarget(a);
    setForm({
      title: a.title,
      lead: a.lead,
      members: a.members,
      publications: a.publications,
      tags: a.tags,
      status: a.status,
    });
  };

  const handleCreate = () => {
    setAreas((prev) => [
      { ...form, id: Date.now(), updatedAt: today },
      ...prev,
    ]);
    setCreateOpen(false);
  };

  const handleEdit = () => {
    if (!editTarget) return;
    setAreas((prev) =>
      prev.map((a) =>
        a.id === editTarget.id ? { ...a, ...form, updatedAt: today } : a,
      ),
    );
    setEditTarget(null);
  };

  const handleDelete = () => {
    if (!deleteTarget) return;
    setAreas((prev) => prev.filter((a) => a.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-6 max-w-275">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Research</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {areas.length} research area{areas.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={() => router.push("/admin/research/create")}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          Add Research Area
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search research areas..."
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-border bg-card text-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((area) => (
          <div
            key={area.id}
            className="bg-card border border-border p-5 hover:border-primary transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-semibold text-foreground leading-snug">
                {area.title}
              </h3>
              <StatusBadge status={area.status} className="shrink-0" />
            </div>

            <p className="text-xs text-muted-foreground mb-3">
              Lead: <span className="text-foreground">{area.lead}</span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {area.tags.split(",").map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-primary/10 text-primary"
                >
                  <Tag className="w-2.5 h-2.5" />
                  {tag.trim()}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 text-xs text-muted-foreground mb-4">
              <span>
                <strong className="text-foreground">{area.members}</strong>{" "}
                members
              </span>
              <span>
                <strong className="text-foreground">{area.publications}</strong>{" "}
                publications
              </span>
              <span className="ml-auto">Updated {area.updatedAt}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t border-border">
              <button
                onClick={() => openEdit(area)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Pencil className="w-3 h-3" />
                Edit
              </button>
              <button
                onClick={() => setDeleteTarget(area)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border text-muted-foreground hover:border-destructive hover:text-destructive transition-colors"
              >
                <Trash2 className="w-3 h-3" />
                Delete
              </button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="md:col-span-2 text-center py-16 text-muted-foreground text-sm">
            No research areas match your search.
          </div>
        )}
      </div>

      {/* Modals */}
      <Modal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Add Research Area"
      >
        <ResearchForm
          values={form}
          onChange={setForm}
          onSubmit={handleCreate}
          onClose={() => setCreateOpen(false)}
          submitLabel="Create"
        />
      </Modal>

      <Modal
        open={!!editTarget}
        onClose={() => setEditTarget(null)}
        title="Edit Research Area"
      >
        <ResearchForm
          values={form}
          onChange={setForm}
          onSubmit={handleEdit}
          onClose={() => setEditTarget(null)}
          submitLabel="Save Changes"
        />
      </Modal>

      <ConfirmDeleteModal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        subject={deleteTarget?.title ?? ""}
      />
    </div>
  );
}
