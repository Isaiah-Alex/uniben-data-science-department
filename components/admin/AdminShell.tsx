"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  FlaskConical,
  Users,
  Settings,
  Menu,
  X,
  Bell,
  ChevronRight,
  LogOut,
  ExternalLink,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "News", href: "/admin/news", icon: Newspaper },
  { label: "Programs", href: "/admin/programs", icon: BookOpen },
  { label: "Research", href: "/admin/research", icon: FlaskConical },
  { label: "Lecturers", href: "/admin/lecturers", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

type Props = { children: ReactNode };

export default function AdminShell({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const currentPage = navItems.find((n) => isActive(n.href))?.label ?? "Admin";

  //functions
  const handleSIgnout = () => {
    router.push("/admin/login");
  };

  return (
    <div className="flex h-screen bg-secondary">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-60 flex-col bg-secondary-foreground transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "lg:static lg:translate-x-0",
        )}
      >
        {/* Logo */}
        <div className="border-b border-white/10 px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold tracking-wide text-sidebar-primary-foreground">
                UNIBEN
              </p>
              <p className="mt-1 text-xs text-sidebar-primary-foreground/40">
                Data Science · Admin
              </p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-sidebar-primary-foreground/40 hover:text-sidebar-primary-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded px-3 py-2.5 text-sm transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-primary-foreground/50 hover:bg-white/5 hover:text-sidebar-primary-foreground",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
                {active && (
                  <ChevronRight className="ml-auto h-3 w-3 opacity-70" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer links */}
        <div className="space-y-0.5 border-t border-white/10 px-3 py-4">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 rounded px-3 py-2.5 text-sm text-sidebar-primary-foreground/50 hover:bg-white/5 hover:text-sidebar-primary-foreground transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            View Site
          </Link>
          <button
            onClick={() => handleSIgnout()}
            className="flex w-full items-center gap-3 rounded px-3 py-2.5 text-sm text-sidebar-primary-foreground/50 hover:bg-white/5 hover:text-destructive transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>

        {/* Profile */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-3 rounded bg-white/5 p-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              AO
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-sidebar-primary-foreground">
                Prof. A. Okonkwo
              </p>
              <p className="truncate text-[11px] text-sidebar-primary-foreground/40">
                Head of Department
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Content area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border bg-background px-4 md:px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded p-1.5 hover:bg-muted lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Admin</span>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-foreground">{currentPage}</span>
          </div>

          <div className="ml-auto">
            <button className="relative rounded p-1.5 hover:bg-muted">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
