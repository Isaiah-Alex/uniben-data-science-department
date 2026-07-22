"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Wire up your auth logic here
    await new Promise((r) => setTimeout(r, 1200));
    if (password === "password12" && email === "uniben@gmail.com") {
      router.push("/admin");
      setLoading(false);
    } else {
      setLoading(false);
      setError("Invalid credentials. Check your email and password.");
    }
  }

  return (
    <div className="min-h-screen bg-foreground flex">
      {/* Left Panel — Editorial Identity */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 border-r border-primary-foreground/10 relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, color-mix(in srgb, var(--primary) 20%, transparent) 0%, transparent 60%)",
          }}
        />

        {/* Logo / Wordmark */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span
                className="text-primary-foreground text-sm font-bold"
                style={{ fontFamily: "Playfair Display" }}
              >
                D
              </span>
            </div>
            <span className="text-primary-foreground/60 text-sm tracking-widest uppercase group-hover:text-primary-foreground transition-colors">
              Dept. of Data Science
            </span>
          </Link>
        </div>

        {/* Centre copy */}
        <div className="relative z-10 max-w-sm">
          <span className="inline-block text-xs font-medium text-primary uppercase tracking-widest mb-6">
            Administration Portal
          </span>
          <h1
            className="text-4xl xl:text-5xl text-primary-foreground leading-tight mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Restricted
            <br />
            Access
          </h1>
          <p className="text-primary-foreground/50 leading-relaxed text-sm">
            This portal is reserved for authorised department staff only. Access
            is monitored and logged. If you believe you should have access,
            contact your department administrator.
          </p>
        </div>

        {/* Bottom rule */}
        <div className="relative z-10 border-t border-primary-foreground/10 pt-6">
          <p className="text-xs text-primary-foreground/30 uppercase tracking-widest">
            University of Benin · {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
        {/* Mobile logo */}
        <div className="lg:hidden mb-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-7 h-7 bg-primary flex items-center justify-center">
              <span
                className="text-primary-foreground text-xs font-bold"
                style={{ fontFamily: "Playfair Display" }}
              >
                D
              </span>
            </div>
            <span className="text-primary-foreground/60 text-xs tracking-widest uppercase">
              Dept. of Data Science
            </span>
          </Link>
        </div>

        <div className="max-w-sm w-full mx-auto lg:mx-0">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-widest">
                Admin sign-in
              </span>
            </div>
            <h2
              className="text-3xl text-primary-foreground"
              style={{ fontFamily: "Playfair Display" }}
            >
              Sign in to your account
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-primary-foreground/60 uppercase tracking-wider mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@uniben.edu.ng"
                className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/25 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-primary-foreground/60 uppercase tracking-wider mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full px-4 py-3 pr-11 bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/25 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/30 hover:text-primary-foreground/70 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs text-primary-foreground/40 hover:text-primary transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Error */}
            {error && (
              <div className="px-4 py-3 border border-red-500/30 bg-red-500/10">
                <p className="text-xs text-red-400">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    />
                  </svg>
                  Signing in…
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider + back link */}
          <div className="mt-10 pt-8 border-t border-primary-foreground/10">
            <Link
              href="/"
              className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
            >
              ← Back to department website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
