"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, BookOpen } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Note: role is intentionally NOT sent here. The database trigger
    // always assigns 'client' on signup, regardless of what's in metadata.
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    setCheckEmail(true);
  };

  if (checkEmail) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 border border-border bg-card rounded text-center">
        <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Check your email</h2>
        <p className="text-sm text-muted-foreground">
          We&apos;ve sent a confirmation link to <strong>{email}</strong>.
          Confirm your address, then log in to submit articles.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto my-16 px-4">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4" />
          DJMS Submissions Portal
        </div>
        <h1 className="text-2xl font-bold font-serif">Create your account</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Sign up to submit article drafts and outlines.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-card border border-border p-6 sm:p-8 rounded shadow-sm"
      >
        {error && (
          <div className="flex items-center gap-2 text-sm text-rose-600 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 p-3 rounded">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Creating account..." : "Sign Up"}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
