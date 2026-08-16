"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { UserRole } from "@/types/submission";

export interface MockUser {
  name: string;
  email: string;
  role: UserRole;
}

export const mockUsers: Record<UserRole, MockUser> = {
  client: {
    name: "Efe Nelson",
    email: "efe.nelson@student.uniben.edu",
    role: "client",
  },
  editor: {
    name: "Dr. Chioma Eze",
    email: "c.eze@uniben.edu.ng",
    role: "editor",
  },
  reviewer: {
    name: "Prof. Adebayo Okonkwo",
    email: "a.okonkwo@uniben.edu.ng",
    role: "reviewer",
  },
  admin: {
    name: "Admin User",
    email: "admin@uniben.edu.ng",
    role: "admin",
  },
};

interface MockAuthContextType {
  currentUser: MockUser;
  setRole: (role: UserRole) => void;
}

const MockAuthContext = createContext<MockAuthContextType | undefined>(undefined);

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>("editor");

  // Read initial role from cookie (if any) to prevent layout mismatches and persist across page views
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedRole = document.cookie
        .split("; ")
        .find((row) => row.startsWith("mock_role="))
        ?.split("=")[1] as UserRole;
      if (savedRole && mockUsers[savedRole]) {
        setRoleState(savedRole);
      }
    }
  }, []);

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    if (typeof window !== "undefined") {
      document.cookie = `mock_role=${newRole}; path=/; max-age=3600`;
      // Trigger a storage / state change event to sync other loaded context providers in the current tab
      window.dispatchEvent(new Event("mock-auth-change"));
    }
  };

  useEffect(() => {
    const handleSync = () => {
      const savedRole = document.cookie
        .split("; ")
        .find((row) => row.startsWith("mock_role="))
        ?.split("=")[1] as UserRole;
      if (savedRole && mockUsers[savedRole] && savedRole !== role) {
        setRoleState(savedRole);
      }
    };
    window.addEventListener("mock-auth-change", handleSync);
    return () => window.removeEventListener("mock-auth-change", handleSync);
  }, [role]);

  const currentUser = mockUsers[role];

  return (
    <MockAuthContext.Provider value={{ currentUser, setRole }}>
      {children}
    </MockAuthContext.Provider>
  );
}

export function useMockAuth() {
  const context = useContext(MockAuthContext);
  if (!context) {
    throw new Error("useMockAuth must be used within a MockAuthProvider");
  }
  return context;
}
