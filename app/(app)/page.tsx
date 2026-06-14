import { newsData } from '@/lib/data/news';
import { facultyData } from '@/lib/data/faculty';
import { programsData } from '@/lib/data/programs';

import { HeroSection } from './_components/HeroSection';
import { FeaturedNewsStrip } from './_components/FeaturedNewsStrip';
import { NewsAnnouncements } from './_components/NewsAnnouncements';
import { MeetLecturers } from './_components/MeetLecturers';
import { ProgramsSection } from './_components/ProgramsSection';
import { AboutPreview } from './_components/AboutPreview';

export default function HomeRoute() {
  const featuredStory = newsData[0];
  const latestUpdates = newsData.slice(1, 6);
  const featuredNews = newsData.slice(1, 4);
  const newsGrid = newsData.slice(4, 8);
  const featuredLecturers = facultyData.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        featuredStory={featuredStory}
        latestUpdates={latestUpdates}
      />

      {/* Featured News Strip */}
      <FeaturedNewsStrip featuredNews={featuredNews} />

      {/* News & Announcements */}
      <NewsAnnouncements newsGrid={newsGrid} />

      {/* Meet Our Lecturers */}
      <MeetLecturers lecturers={featuredLecturers} />

      {/* Programs */}
      <ProgramsSection programs={programsData} />

      {/* About Preview */}
      <AboutPreview />
    </div>
  );
}