"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-secondary p-8 border border-border">
      <h3 className="text-xl mb-6 font-bold" style={{ fontFamily: 'var(--font-serif)' }}>Send Us a Message</h3>
      {success && (
        <div className="mb-6 p-4 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-sm">
          Message sent successfully! We will get back to you soon.
        </div>
      )}
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="First Name *"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
          />
        </div>
        <input
          type="email"
          required
          placeholder="Email Address *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
        />
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
        >
          <option value="">Subject / Enquiry Type</option>
          <option value="Admissions">Admissions</option>
          <option value="Research Collaboration">Research Collaboration</option>
          <option value="Industry Partnership">Industry Partnership</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
        <textarea
          rows={4}
          required
          placeholder="Your message... *"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors text-sm resize-none"
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
