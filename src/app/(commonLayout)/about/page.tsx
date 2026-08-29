import { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import AboutLeadership from '@/app/components/about/AboutLeadership';
import AboutVisionMission from '@/app/components/about/AboutVisionMission';
import AboutHistory from '@/app/components/about/AboutHistory';
import AboutCurriculum from '@/app/components/about/AboutCurriculum';
import AboutFacilities from '@/app/components/about/AboutFacilities';
import AboutCoCurricular from '@/app/components/about/AboutCoCurricular';
import AboutFacultyPreview from '@/app/components/about/AboutFacultyPreview';
import AboutFAQ from '@/app/components/about/AboutFAQ';
import AboutCTA from '@/app/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'আমাদের সম্পর্কে | ধর্মপুর মডেল একাডেমি',
  description:
    '২০১০ সাল থেকে সুনামের সাথে পরিচালিত ধর্মপুর মডেল একাডেমির ইতিহাস, লক্ষ্য, শিক্ষাক্রম, আধুনিক সুযোগ-সুবিধা ও শিক্ষকমণ্ডলী সম্পর্কে বিস্তারিত জানুন।',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* 1. Hero Section with Stats Ribbon & Breadcrumb */}
      <AboutHero />

      {/* 2. Chairman & Founder Leadership Message */}
      <AboutLeadership />

      {/* 3. Mission, Vision & Core Values */}
      <AboutVisionMission />

      {/* 4. 14+ Years History & Milestone Timeline */}
      <AboutHistory />

      {/* 5. Specialized Academic Tiers & Curriculum Breakdown */}
      <AboutCurriculum />

      {/* 6. Modern Campus Facilities & Tech Infrastructure */}
      <AboutFacilities />

      {/* 7. Extracurricular Clubs, Sports & Cultural Life */}
      <AboutCoCurricular />

      {/* 8. Dedicated Faculty & Mentorship Overview */}
      <AboutFacultyPreview />

      {/* 9. Interactive Frequently Asked Questions (FAQ) */}
      <AboutFAQ />

      {/* 10. Call to Action & Campus Visit Invitation */}
      <AboutCTA />
    </main>
  );
}
