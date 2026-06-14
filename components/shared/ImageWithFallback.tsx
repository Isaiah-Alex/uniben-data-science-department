"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ImageWithFallback({ src, alt, className = '', priority = false }: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  // Check if image is an external URL that we can optimize, or a data URL
  const isDataUrl = src.startsWith('data:');

  if (didError || !src) {
    return (
      <div className={`relative w-full h-full min-h-[100px] flex items-center justify-center bg-muted/30 ${className}`}>
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          className="opacity-40 max-w-[48px] max-h-[48px]"
        />
      </div>
    );
  }

  if (isDataUrl) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setDidError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={`object-cover ${className}`}
      onError={() => setDidError(true)}
    />
  );
}
