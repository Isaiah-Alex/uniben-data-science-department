"use client";

import Link from "next/link";
import {
  BookOpen,
  FlaskConical,
  Users,
  UserPen,
  Settings,
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  Clock,
  FileText,
} from "lucide-react";

import type { DashboardStat, ActivityItem, SiteSummary } from "@/db/schema";
import { StatusBadge } from "@/components/admin/StatusBadge";

const iconMap = {
  BookOpen,
  FlaskConical,
  Users,
  FileText,
};

const quickLinks = [
  { label: "Manage Articles", href: "/admin/articles", icon: FileText },
  { label: "Manage Programs", href: "/admin/programs", icon: BookOpen },
  { label: "Manage Research", href: "/admin/research", icon: FlaskConical },
  { label: "Manage Lecturers", href: "/admin/lecturers", icon: Users },
  { label: "Manage Editors", href: "/admin/editors", icon: UserPen },
  { label: "Site Settings", href: "/admin/settings", icon: Settings },
];

type Props = {
  stats: DashboardStat[];
  activity: ActivityItem[];
  summary: SiteSummary;
};

export function DashboardShell({ stats, activity, summary }: Props) {
  return (
    <div className="space-y-8 max-w-275">
      {/* Page title */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Welcome back, Prof. Okonkwo — here&apos;s what&apos;s happening across
          the department.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = iconMap[s.iconName];
          return (
            <Link
              key={s.label}
              href={s.href}
              className="bg-card border border-border p-5 hover:border-primary transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-9 h-9 flex items-center justify-center"
                  style={{ backgroundColor: s.color + "18" }}
                >
                  <Icon className="w-4 h-4" style={{ color: s.color }} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {s.value}
              </div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div
                className="mt-2 text-xs font-medium"
                style={{ color: s.color }}
              >
                {s.change}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity feed */}
        <div className="lg:col-span-2 bg-card border border-border">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">
              Recent Activity
            </h2>
            <span className="text-xs text-muted-foreground">Last 7 days</span>
          </div>
          <div className="divide-y divide-border">
            {activity.map((item, i) => (
              <div key={i} className="flex items-start gap-4 px-6 py-4">
                <div className="shrink-0 mt-0.5">
                  <CircleDot className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{item.action}</p>
                  <p className="text-sm font-medium text-foreground truncate mt-0.5">
                    {item.subject}
                  </p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="text-xs text-muted-foreground">
                      {item.user}
                    </span>
                    <span className="text-border">·</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                  </div>
                </div>
                <StatusBadge status={item.status} className="shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {/* Quick links */}
          <div className="bg-card border border-border">
            <div className="px-5 py-4 border-b border-border">
              <h2 className="text-sm font-semibold text-foreground">
                Quick Access
              </h2>
            </div>
            <div className="divide-y divide-border">
              {quickLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 px-5 py-3.5 hover:bg-muted group transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground flex-1">
                    {label}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Site summary */}
          <div className="bg-card border border-border px-5 py-5">
            <h2 className="text-sm font-semibold text-foreground mb-4">
              Site Summary
            </h2>
            <div className="space-y-3">
              {[
                {
                  label: "Published news posts",
                  value: summary.publishedPosts,
                },
                { label: "Draft posts", value: summary.draftPosts },
                { label: "Active programs", value: summary.activePrograms },
                {
                  label: "Research projects",
                  value: summary.researchProjects,
                },
                { label: "Faculty profiles", value: summary.facultyProfiles },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-semibold text-foreground">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* View public site */}
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between w-full bg-primary text-primary-foreground px-5 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Public Website
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
