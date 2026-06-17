"use client";

import { useState } from "react";
import { Save, Eye, EyeOff, CheckCircle } from "lucide-react";
import { inputCls, textareaCls } from "@/components/admin/fieldStyles";
import { cn } from "@/lib/utils";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border">
      <div className="px-6 py-4 border-b border-border">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      <div className="px-6 py-5 space-y-5">{children}</div>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
      <div className="md:pt-2.5">
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
        {hint && <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>}
      </div>
      <div className="md:col-span-2">{children}</div>
    </div>
  );
}

function Toggle({
  checked,
  onToggle,
}: {
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none",
        checked ? "bg-primary" : "bg-border",
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-background shadow transition-transform",
          checked ? "translate-x-6" : "translate-x-1",
        )}
      />
    </button>
  );
}

type DeptState = {
  name: string;
  faculty: string;
  university: string;
  location: string;
  email: string;
  phone: string;
  about: string;
  hod: string;
  established: string;
};

type SiteState = {
  metaTitle: string;
  metaDescription: string;
  primaryColor: string;
  admissionsOpen: boolean;
  showResearch: boolean;
  maintenanceMode: boolean;
};

type ProfileState = {
  name: string;
  email: string;
  role: string;
  currentPw: string;
  newPw: string;
};

type NotificationState = {
  emailOnNewPost: boolean;
  emailOnLecturerUpdate: boolean;
  emailOnApplications: boolean;
  weeklyDigest: boolean;
};

export function SettingsShell() {
  const [saved, setSaved] = useState(false);
  const [showCurrentPw, setShowCurrentPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);

  const [dept, setDept] = useState<DeptState>({
    name: "Department of Data Science",
    faculty: "Faculty of Physical Sciences",
    university: "University of Benin (UNIBEN)",
    location: "Ugbowo, Benin City, Edo State, Nigeria",
    email: "datascience@uniben.edu.ng",
    phone: "+234 (0) 800 123 4567",
    about:
      "The Department of Data Science at the University of Benin is at the forefront of data-driven innovation in West Africa. We combine rigorous academic training with practical industry experience to prepare the next generation of data scientists and analysts.",
    hod: "Prof. Adebayo Okonkwo",
    established: "2018",
  });

  const [site, setSite] = useState<SiteState>({
    metaTitle: "Dept. of Data Science — University of Benin",
    metaDescription:
      "Official website of the Department of Data Science, University of Benin. Explore our programmes, research, and faculty.",
    primaryColor: "#388EED",
    admissionsOpen: true,
    showResearch: true,
    maintenanceMode: false,
  });

  const [profile, setProfile] = useState<ProfileState>({
    name: "Prof. Adebayo Okonkwo",
    email: "a.okonkwo@uniben.edu.ng",
    role: "Head of Department",
    currentPw: "",
    newPw: "",
  });

  const [notifications, setNotifications] = useState<NotificationState>({
    emailOnNewPost: true,
    emailOnLecturerUpdate: false,
    emailOnApplications: true,
    weeklyDigest: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const SaveButton = ({ className }: { className?: string }) => (
    <button
      onClick={handleSave}
      className={cn(
        "flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors",
        saved
          ? "bg-emerald-600 text-white"
          : "bg-primary text-primary-foreground hover:opacity-90",
        className,
      )}
    >
      {saved ? (
        <CheckCircle className="w-4 h-4" />
      ) : (
        <Save className="w-4 h-4" />
      )}
      {saved ? "Saved" : "Save Changes"}
    </button>
  );

  return (
    <div className="space-y-6 max-w-205">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage department information, site preferences, and your account.
          </p>
        </div>
        <SaveButton />
      </div>

      {/* Department Info */}
      <Section
        title="Department Information"
        description="Core details shown throughout the public website."
      >
        {(
          [
            { label: "Department Name", key: "name" },
            { label: "Faculty", key: "faculty" },
            { label: "University", key: "university" },
            { label: "Location", key: "location" },
            { label: "Head of Department", key: "hod" },
            { label: "Year Established", key: "established" },
          ] as { label: string; key: keyof DeptState }[]
        ).map(({ label, key }) => (
          <Field key={key} label={label}>
            <input
              className={inputCls}
              value={dept[key] as string}
              onChange={(e) => setDept({ ...dept, [key]: e.target.value })}
            />
          </Field>
        ))}
        <Field label="Contact Email">
          <input
            type="email"
            className={inputCls}
            value={dept.email}
            onChange={(e) => setDept({ ...dept, email: e.target.value })}
          />
        </Field>
        <Field label="Phone">
          <input
            className={inputCls}
            value={dept.phone}
            onChange={(e) => setDept({ ...dept, phone: e.target.value })}
          />
        </Field>
        <Field label="About Blurb" hint="Shown on homepage and About page.">
          <textarea
            rows={4}
            className={textareaCls}
            value={dept.about}
            onChange={(e) => setDept({ ...dept, about: e.target.value })}
          />
        </Field>
      </Section>

      {/* Site Preferences */}
      <Section
        title="Site Preferences"
        description="Control visibility, SEO metadata, and site-wide behaviour."
      >
        <Field label="Meta Title" hint="Browser tab title.">
          <input
            className={inputCls}
            value={site.metaTitle}
            onChange={(e) => setSite({ ...site, metaTitle: e.target.value })}
          />
        </Field>
        <Field label="Meta Description" hint="Used by search engines.">
          <textarea
            rows={2}
            className={textareaCls}
            value={site.metaDescription}
            onChange={(e) =>
              setSite({ ...site, metaDescription: e.target.value })
            }
          />
        </Field>
        <Field label="Primary Brand Color">
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={site.primaryColor}
              onChange={(e) =>
                setSite({ ...site, primaryColor: e.target.value })
              }
              className="w-10 h-10 border border-border cursor-pointer p-0.5 bg-background"
            />
            <input
              className={cn(inputCls, "flex-1")}
              value={site.primaryColor}
              onChange={(e) =>
                setSite({ ...site, primaryColor: e.target.value })
              }
            />
          </div>
        </Field>

        {(
          [
            {
              key: "admissionsOpen",
              label: "Admissions Open",
              hint: 'Shows "Apply Now" banners across the site.',
            },
            {
              key: "showResearch",
              label: "Research Section Visible",
              hint: "Toggles research area on the public Research page.",
            },
            {
              key: "maintenanceMode",
              label: "Maintenance Mode",
              hint: "Replaces public pages with a maintenance notice.",
            },
          ] as { key: keyof SiteState; label: string; hint: string }[]
        ).map(({ key, label, hint }) => (
          <Field key={key} label={label} hint={hint}>
            <Toggle
              checked={site[key] as boolean}
              onToggle={() =>
                setSite((prev) => ({ ...prev, [key]: !prev[key] }))
              }
            />
          </Field>
        ))}
      </Section>

      {/* Notifications */}
      <Section
        title="Email Notifications"
        description="Choose which events trigger an email to your account."
      >
        {(
          [
            { key: "emailOnNewPost", label: "New news post published" },
            {
              key: "emailOnLecturerUpdate",
              label: "Lecturer profile updated",
            },
            {
              key: "emailOnApplications",
              label: "New programme enquiry received",
            },
            { key: "weeklyDigest", label: "Weekly activity digest" },
          ] as { key: keyof NotificationState; label: string }[]
        ).map(({ key, label }) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-sm text-foreground">{label}</span>
            <Toggle
              checked={notifications[key]}
              onToggle={() =>
                setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
              }
            />
          </div>
        ))}
      </Section>

      {/* Account */}
      <Section
        title="My Account"
        description="Update your admin profile and password."
      >
        <Field label="Display Name">
          <input
            className={inputCls}
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </Field>
        <Field label="Email Address">
          <input
            type="email"
            className={inputCls}
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </Field>
        <Field label="Role">
          <input
            className={inputCls}
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          />
        </Field>

        <div className="border-t border-border pt-5 space-y-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Change Password
          </p>
          <Field label="Current Password">
            <div className="relative">
              <input
                type={showCurrentPw ? "text" : "password"}
                className={cn(inputCls, "pr-10")}
                value={profile.currentPw}
                onChange={(e) =>
                  setProfile({ ...profile, currentPw: e.target.value })
                }
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPw(!showCurrentPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showCurrentPw ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </Field>
          <Field label="New Password">
            <div className="relative">
              <input
                type={showNewPw ? "text" : "password"}
                className={cn(inputCls, "pr-10")}
                value={profile.newPw}
                onChange={(e) =>
                  setProfile({ ...profile, newPw: e.target.value })
                }
                placeholder="min. 8 characters"
              />
              <button
                type="button"
                onClick={() => setShowNewPw(!showNewPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showNewPw ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </Field>
        </div>
      </Section>

      {/* Danger Zone */}
      <Section title="Danger Zone">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              Clear all draft posts
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Permanently delete all unpublished draft content.
            </p>
          </div>
          <button className="px-4 py-2 text-sm border border-destructive/30 text-destructive hover:bg-destructive/5 transition-colors">
            Clear Drafts
          </button>
        </div>
        <div className="border-t border-border pt-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              Reset site content to defaults
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Restores all sample data. Irreversible.
            </p>
          </div>
          <button className="px-4 py-2 text-sm border border-destructive/30 text-destructive hover:bg-destructive/5 transition-colors">
            Reset Content
          </button>
        </div>
      </Section>

      {/* Floating save */}
      <div className="flex justify-end pb-4">
        <SaveButton className="px-6 py-3" />
      </div>
    </div>
  );
}
