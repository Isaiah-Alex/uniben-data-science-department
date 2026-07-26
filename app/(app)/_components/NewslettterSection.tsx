"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to backend/ESP later — for now just capturing locally
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="w-8 h-8 mx-auto opacity-80" />
          <h2 className="mt-4 text-2xl md:text-3xl">Stay in the Loop</h2>
          <p className="mt-3 text-primary-foreground/80 leading-relaxed">
            Get the latest articles, research, and department news delivered
            straight to your inbox.
          </p>

          {submitted ? (
            <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium">
              <Check className="w-5 h-5" />
              Thanks — you're subscribed!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:items-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 sm:max-w-xs px-4 py-2.5 rounded-sm border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <Button
                type="submit"
                className="bg-background text-foreground hover:bg-background/90 px-6 py-5 md:py-6"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
