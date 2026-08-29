import { Metadata } from 'next';
import ContactHero from '@/app/components/contact/ContactHero';
import ContactCards from '@/app/components/contact/ContactCards';
import ContactForm from '@/app/components/contact/ContactForm';
import ContactDirectory from '@/app/components/contact/ContactDirectory';
import ContactMap from '@/app/components/contact/ContactMap';
import ContactFAQ from '@/app/components/contact/ContactFAQ';

export const metadata: Metadata = {
  title: 'যোগাযোগ ও ভর্তি তথ্য | ধর্মপুর মডেল একাডেমি',
  description:
    'ধর্মপুর মডেল একাডেমির সাথে যোগাযোগ করুন। নতুন শিক্ষাবর্ষে ভর্তি তথ্য, হেল্পলাইন নম্বর, বিভাগীয় ডিরেক্টরি, ক্যাম্পাস লোকেশন ও অনলাইন অনুসন্ধান ফর্ম।',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* 1. Hero with Breadcrumb & Quick Help Highlights */}
      <ContactHero />

      {/* 2. Primary 4 Contact Channels Cards */}
      <ContactCards />

      {/* 3. Interactive Online Inquiry & Admission Form */}
      <ContactForm />

      {/* 4. Departmental Phone & Email Directory */}
      <ContactDirectory />

      {/* 5. Google Map Location & Travel Directions Guide */}
      <ContactMap />

      {/* 6. Contact & Admission Frequently Asked Questions */}
      <ContactFAQ />
    </main>
  );
}
