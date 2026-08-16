"use client";

import { useMockAuth, mockUsers } from "@/lib/mock-auth";
import type { UserRole } from "@/types/submission";
import { User } from "lucide-react";

export function RoleSwitcher() {
  const { currentUser, setRole } = useMockAuth();

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as UserRole);
  };

  return (
    <div className="flex items-center gap-2 border border-dashed border-primary/40 bg-accent/40 rounded px-2.5 py-1 text-xs select-none">
      <User className="w-3.5 h-3.5 text-primary" />
      <span className="font-semibold text-primary uppercase tracking-wider text-[10px] hidden sm:inline">
        Dev Auth:
      </span>
      <select
        value={currentUser.role}
        onChange={handleRoleChange}
        className="bg-transparent text-foreground font-medium outline-none cursor-pointer pr-1"
      >
        <option value="client">Client ({mockUsers.client.name})</option>
        <option value="editor">Editor ({mockUsers.editor.name})</option>
        <option value="reviewer">Reviewer ({mockUsers.reviewer.name})</option>
        <option value="admin">Admin ({mockUsers.admin.name})</option>
      </select>
    </div>
  );
}
