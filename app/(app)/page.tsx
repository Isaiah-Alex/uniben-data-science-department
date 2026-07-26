import { articles } from "@/lib/data/articles";
import { facultyData } from "@/lib/data/faculty";
import { programsData } from "@/lib/data/programs";

import { HeroSection } from "./_components/HeroSection";
import { FeaturedArticlesStrip } from "./_components/FeaturedArticleStrip";
import { LatestArticle } from "./_components/LatestArticle";
import { MeetLecturers } from "./_components/MeetLecturers";
import { ProgramsSection } from "./_components/ProgramsSection";
import { AboutPreview } from "./_components/AboutPreview";
import { ResearchSpotlight } from "./_components/ResearchSpotlight";
import { CategoriesSection } from "./_components/CategorisSesstion";
import { categories } from "@/lib/data/categories";
import { NewsletterSection } from "./_components/NewslettterSection";

export default function HomeRoute() {
  const featuredStory = articles[0];
  const latestUpdates = articles.slice(1, 6);
  const featuredArticle = articles.slice(1, 4);
  const articleGrid = articles.slice(4, 8);
  const researchArticles = articles
    .filter((article) => article.category === "Research")
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        featuredStory={featuredStory}
        latestUpdates={latestUpdates}
      />

      {/* Featured Article Strip */}
      <FeaturedArticlesStrip featuredArticle={featuredArticle} />

      {/* Letsest Article */}
      <LatestArticle articleGrid={articleGrid} />

      <ResearchSpotlight researchArticles={researchArticles} />
      <CategoriesSection categories={categories} articles={articles} />
      <NewsletterSection />

      {/* Meet Our Lecturers */}
      {/* <MeetLecturers lecturers={featuredLecturers} /> */}

      {/* Programs */}
      <ProgramsSection programs={programsData} />

      {/* About Preview */}
      <AboutPreview />
    </div>
  );
}
