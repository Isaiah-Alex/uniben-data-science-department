import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  type QuickLink = {
    routeName: string;
    path: string;
  };

  const QUICK_LINKS: QuickLink[] = [
    {
      routeName: "Home",
      path: "/",
    },
    {
      routeName: "Articles",
      path: "/articles",
    },
    {
      routeName: "Archive",
      path: "/archive",
    },
    {
      routeName: "Research",
      path: "/research",
    },
    {
      routeName: "About",
      path: "/about",
    },
    {
      routeName: "Editors",
      path: "/authors",
    },
    {
      routeName: "Lecturers",
      path: "/about/lecturers",
    },
    {
      routeName: "Programs",
      path: "/programs",
    },
    {
      routeName: "Submit an article",
      path: "/articles/submit",
    },
  ];

  return (
    <footer className="bg-neutral-900 text-white border-t border-white/5">
      <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3
              className="font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              UNIBEN Data Science
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Leading the future of data-driven innovation through world-class
              education, cutting-edge research, and industry collaboration.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-medium text-white mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.routeName}>
                  <Link
                    href={link.path}
                    className="text-neutral-400 hover:text-primary transition-colors"
                  >
                    {link.routeName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-medium text-white mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>
                  University of Benin, Ugbowo Campus, Benin City, Nigeria
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <span>+234 (0) 803 123 4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-1 shrink-0" />
                <span>datascience@uniben.edu.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>&copy; 2026 University of Benin. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
