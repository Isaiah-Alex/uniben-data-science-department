import Link from "next/link";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { Category } from "@/lib/data/categories";
import { Article } from "@/lib/data/articles";

interface CategoriesSectionProps {
  categories: Category[];
  articles: Article[];
}

export function CategoriesSection({
  categories,
  articles,
}: CategoriesSectionProps) {
  return (
    <section className="bg-background border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl md:text-[40px] mb-8">Explore by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => {
            const count = articles.filter(
              (a) => a.category === category.name,
            ).length;

            return (
              <Link
                key={category.slug}
                href={`/articles?category=${category.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm block"
              >
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 md:p-5">
                  <h3 className="text-white text-lg md:text-xl font-medium">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">
                    {count} {count === 1 ? "article" : "articles"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
