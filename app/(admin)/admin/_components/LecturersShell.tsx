"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Pencil, Trash2, Search, ExternalLink, Mail } from "lucide-react";
import type { Lecturer } from "@/db/schema";
import { Modal } from "@/components/admin/Modal";
import { ConfirmDeleteModal } from "@/components/admin/ConfirmDeleteModal";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { LecturerForm } from "./LecturerForm";
import { cn } from "@/lib/utils";

const emptyForm: Omit<Lecturer, "id" | "updatedAt" | "image"> = {
  name: "",
  role: "",
  rank: "Lecturer",
  research: "",
  email: "",
  publications: 0,
  status: "Active",
};

const rankBadgeCls: Record<string, string> = {
  Professor: "bg-foreground text-background",
  "Senior Lecturer": "bg-primary text-primary-foreground",
  Lecturer: "bg-muted text-muted-foreground",
};

const rankFilters = ["All", "Professor", "Senior Lecturer", "Lecturer"];

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=400&h=400&fit=crop&auto=format";

type Props = {
  initialLecturers: Lecturer[];
};

export function LecturersShell({ initialLecturers }: Props) {
  const [lecturers, setLecturers] = useState<Lecturer[]>(initialLecturers);
  const [query, setQuery] = useState("");
  const [rankFilter, setRankFilter] = useState("All");
  const [createOpen, setCreateOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Lecturer | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Lecturer | null>(null);
  const [form, setForm] =
    useState<Omit<Lecturer, "id" | "updatedAt" | "image">>(emptyForm);

  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const filtered = lecturers.filter((l) => {
    const matchRank = rankFilter === "All" || l.rank === rankFilter;
    const q = query.toLowerCase();
    const matchQ =
      !q ||
      l.name.toLowerCase().includes(q) ||
      l.research.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q);
    return matchRank && matchQ;
  });

  const openCreate = () => {
    setForm(emptyForm);
    setCreateOpen(true);
  };

  const openEdit = (l: Lecturer) => {
    setEditTarget(l);
    setForm({
      name: l.name,
      role: l.role,
      rank: l.rank,
      research: l.research,
      email: l.email,
      publications: l.publications,
      status: l.status,
    });
  };

  const handleCreate = () => {
    setLecturers((prev) => [
      { ...form, id: Date.now(), image: PLACEHOLDER_IMAGE, updatedAt: today },
      ...prev,
    ]);
    setCreateOpen(false);
  };

  const handleEdit = () => {
    if (!editTarget) return;
    setLecturers((prev) =>
      prev.map((l) =>
        l.id === editTarget.id ? { ...l, ...form, updatedAt: today } : l,
      ),
    );
    setEditTarget(null);
  };

  const handleDelete = () => {
    if (!deleteTarget) return;
    setLecturers((prev) => prev.filter((l) => l.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-6 max-w-275">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Lecturers</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {lecturers.length} faculty member
            {lecturers.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          Add Lecturer
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, research, email..."
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-border bg-card text-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {rankFilters.map((r) => (
            <button
              key={r}
              onClick={() => setRankFilter(r)}
              className={cn(
                "px-3 py-2 text-xs font-medium transition-colors",
                rankFilter === r
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Faculty
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                  Rank
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                  Research Area
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden xl:table-cell">
                  Email
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                  Pubs
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((l) => (
                <tr key={l.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 shrink-0 overflow-hidden rounded-full bg-muted relative">
                        <Image
                          src={l.image}
                          alt={l.name}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-foreground truncate">
                          {l.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {l.role}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 hidden md:table-cell">
                    <span
                      className={cn(
                        "text-xs font-medium px-2 py-0.5",
                        rankBadgeCls[l.rank],
                      )}
                    >
                      {l.rank}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-muted-foreground hidden lg:table-cell text-xs">
                    {l.research}
                  </td>
                  <td className="px-4 py-3.5 hidden xl:table-cell">
                    <a
                      href={`mailto:${l.email}`}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-3 h-3" />
                      {l.email}
                    </a>
                  </td>
                  <td className="px-4 py-3.5 text-muted-foreground hidden md:table-cell">
                    {l.publications}
                  </td>
                  <td className="px-4 py-3.5">
                    <StatusBadge status={l.status} />
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1 justify-end">
                      <Link
                        href={`/lecturers/${l.id}`}
                        target="_blank"
                        className="p-1.5 hover:bg-border rounded transition-colors text-muted-foreground hover:text-primary"
                        title="View public profile"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => openEdit(l)}
                        className="p-1.5 hover:bg-border rounded transition-colors text-muted-foreground hover:text-foreground"
                        title="Edit"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setDeleteTarget(l)}
                        className="p-1.5 hover:bg-red-50 rounded transition-colors text-muted-foreground hover:text-destructive"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-12 text-center text-sm text-muted-foreground"
                  >
                    No lecturers match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <Modal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Add Lecturer"
      >
        <LecturerForm
          values={form}
          onChange={setForm}
          onSubmit={handleCreate}
          onClose={() => setCreateOpen(false)}
          submitLabel="Add Lecturer"
        />
      </Modal>

      <Modal
        open={!!editTarget}
        onClose={() => setEditTarget(null)}
        title="Edit Lecturer"
      >
        <LecturerForm
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
        subject={deleteTarget?.name ?? ""}
      />
    </div>
  );
}
