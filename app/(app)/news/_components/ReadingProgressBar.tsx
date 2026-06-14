"use client";

import { useEffect, useState } from 'react';

export function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      
      if (documentHeight > 0) {
        const progress = (scrolled / documentHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-[64px] md:top-[72px] left-0 w-full h-1 bg-muted z-50">
      <div
        className="h-full bg-primary transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
