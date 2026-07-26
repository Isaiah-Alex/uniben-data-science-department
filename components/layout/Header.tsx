"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchModal } from "./SearchModal";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Archive", href: "/archive" },
    // { label: "Programs", href: "/programs" },
    { label: "Research", href: "/research" },
    { label: "About", href: "/about" },
    { label: "Editors", href: "/authors" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background border-b border-border transition-all duration-200 ${
          scrolled ? "h-16" : "h-18"
        }`}
      >
        <div className="max-w-300 mx-auto px-4 md:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="text-left">
                <div className="font-bold text-foreground leading-tight">
                  UNIBEN
                </div>
                <div className="text-xs text-foreground leading-tight">
                  Department of Data Science
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors relative group pb-1 ${
                      active
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-200 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 border border-border hover:border-primary rounded transition-colors text-sm text-muted-foreground hover:text-primary"
                title="Search (Ctrl+K)"
              >
                <Search className="w-4 h-4" />
                <span className="hidden lg:inline">Search</span>
                <kbd className="hidden lg:inline ml-1 px-1.5 py-0.5 bg-muted border border-border rounded text-xs">
                  Ctrl K
                </kbd>
              </button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-5">
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col px-4 py-4">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`py-3 text-sm font-medium border-b border-border last:border-0 transition-colors ${
                      active
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-3 border border-border text-sm text-muted-foreground"
                >
                  <Search className="w-4 h-4" />
                  Search...
                </button>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
