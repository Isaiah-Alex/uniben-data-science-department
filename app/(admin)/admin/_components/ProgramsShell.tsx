"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Program } from "@/db/schema";
import { Modal } from "@/components/admin/Modal";
import { ConfirmDeleteModal } from "@/components/admin/ConfirmDeleteModal";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { ProgramForm } from "./ProgramForm";
import { useRouter } from "next/navigation";

const emptyForm: Omit<Program, "id" | "updatedAt"> = {
  title: "",
  level: "Undergraduate",
  duration: "",
  credits: "",
  intake: 0,
  status: "Draft",
};

type Props = {
  initialPrograms: Program[];
};

export function ProgramsShell({ initialPrograms }: Props) {
  const [programs, setPrograms] = useState<Program[]>(initialPrograms);
  const [createOpen, setCreateOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Program | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Program | null>(null);
  const [form, setForm] =
    useState<Omit<Program, "id" | "updatedAt">>(emptyForm);

  const router = useRouter();

  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const openCreate = () => {
    setForm(emptyForm);
    setCreateOpen(true);
  };

  const openEdit = (p: Program) => {
    setEditTarget(p);
    setForm({
      title: p.title,
      level: p.level,
      duration: p.duration,
      credits: p.credits,
      intake: p.intake,
      status: p.status,
    });
  };

  const handleCreate = () => {
    const newP: Program = {
      ...form,
      id: form.title.toLowerCase().replace(/\s+/g, "-"),
      updatedAt: today,
    };
    setPrograms((prev) => [newP, ...prev]);
    setCreateOpen(false);
  };

  const handleEdit = () => {
    if (!editTarget) return;
    setPrograms((prev) =>
      prev.map((p) =>
        p.id === editTarget.id ? { ...p, ...form, updatedAt: today } : p,
      ),
    );
    setEditTarget(null);
  };

  const handleDelete = () => {
    if (!deleteTarget) return;
    setPrograms((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-6 max-w-275">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Programs</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {programs.length} programme{programs.length !== 1 ? "s" : ""} listed
          </p>
        </div>
        <button
          onClick={() => router.push("/admin/programs/create")}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus className="w-4 h-4" />
          Add Programme
        </button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left px-5 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Title
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Level
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                  Duration
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                  Credits
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                  Intake
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                  Updated
                </th>
                <th className="px-4 py-3.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {programs.map((p) => (
                <tr key={p.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-4 font-medium text-foreground">
                    {p.title}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">{p.level}</td>
                  <td className="px-4 py-4 text-muted-foreground hidden md:table-cell">
                    {p.duration}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground hidden lg:table-cell">
                    {p.credits}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground hidden md:table-cell">
                    {p.intake}/yr
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="px-4 py-4 text-muted-foreground hidden lg:table-cell">
                    {p.updatedAt}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 justify-end">
                      <Link
                        href={`/programs/${p.id}`}
                        target="_blank"
                        className="p-1.5 hover:bg-border rounded transition-colors text-muted-foreground hover:text-primary"
                        title="View public page"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => openEdit(p)}
                        className="p-1.5 hover:bg-border rounded transition-colors text-muted-foreground hover:text-foreground"
                        title="Edit"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setDeleteTarget(p)}
                        className="p-1.5 hover:bg-red-50 rounded transition-colors text-muted-foreground hover:text-destructive"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View all link */}
      <Link
        href="/programs"
        target="_blank"
        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
      >
        View public programs page <ArrowUpRight className="w-3.5 h-3.5" />
      </Link>

      {/* Modals */}
      <Modal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Add Programme"
      >
        <ProgramForm
          values={form}
          onChange={setForm}
          onSubmit={handleCreate}
          onClose={() => setCreateOpen(false)}
          submitLabel="Create Programme"
        />
      </Modal>

      <Modal
        open={!!editTarget}
        onClose={() => setEditTarget(null)}
        title="Edit Programme"
      >
        <ProgramForm
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
