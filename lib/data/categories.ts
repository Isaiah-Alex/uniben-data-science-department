export interface Category {
  name: string;
  slug: string;
  image: string;
}

export const categories: Category[] = [
  {
    name: "Research",
    slug: "research",
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800",
  },
  {
    name: "Students",
    slug: "students",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    name: "Events",
    slug: "events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
  },
  {
    name: "Academics",
    slug: "academics",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800",
  },
  {
    name: "Alumni",
    slug: "alumni",
    image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800",
  },
  {
    name: "Partnerships",
    slug: "partnerships",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=800",
  },
];
