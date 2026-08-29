import heroImg from '@/assets/hero.jpg';
import hero11 from '@/assets/hero11.jpg';
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/hero3.jpg';
import hero4 from '@/assets/hero4.jpg';
import hero5 from '@/assets/hero5.jpg';
import hero6 from '@/assets/hero6.jpg';
import nursery from '@/assets/nursery.jpg';
import photo3 from '@/assets/nurseryresult.jpg';
import photo2 from '@/assets/oyada.jpg';
import photo1 from '@/assets/oyada2.jpg';
import pared from '@/assets/pared.jpg';
import pareda from '@/assets/paredresult.jpg';
import { StaticImageData } from 'next/image';

export interface GalleryPhoto {
  id: number;
  src: StaticImageData;
  title: string;
  category: 'একাডেমিক' | 'ক্রীড়া' | 'সাংস্কৃতিক' | 'বিজ্ঞান ও ল্যাব' | 'পুরস্কার' | 'ক্যাম্পাস';
  date: string;
  description: string;
  span?: string;
  location?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    src: pared,
    title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ও বর্ণাঢ্য মার্চপাস্ট',
    category: 'ক্রীড়া',
    date: 'ফেব্রুয়ারি ২০২৪',
    description: 'শিক্ষার্থীদের শারীরিক সক্ষমতা, নিয়মানুবর্তিতা ও ক্রীড়া নৈপুণ্যের বার্ষিক কুচকাওয়াজ।',
    span: 'md:col-span-2 md:row-span-2',
    location: 'মূল খেলার মাঠ',
  },
  {
    id: 2,
    src: photo2,
    title: 'সাংস্কৃতিক উৎসব ও মঞ্চ নাটক',
    category: 'সাংস্কৃতিক',
    date: 'মার্চ ২০২৪',
    description: 'জাতীয় দিবস ও বার্ষিক সাংস্কৃতিক সন্ধ্যায় শিক্ষার্থীদের অভিনীত সামাজিক নাটক।',
    span: 'md:col-span-1 md:row-span-1',
    location: 'অডিটোরিয়াম হল',
  },
  {
    id: 3,
    src: pareda,
    title: 'মেধাবী শিক্ষার্থীদের সম্মাননা ও ট্রফি বিতরণ',
    category: 'পুরস্কার',
    date: 'ডিসেম্বর ২০২৩',
    description: 'পাবলিক পরীক্ষায় ট্যালেন্টপুল বৃত্তি ও জিপিএ-৫ প্রাপ্ত কৃতি শিক্ষার্থীদের পুরস্কার প্রদান।',
    span: 'md:col-span-1 md:row-span-1',
    location: 'সম্মেলন কক্ষ',
  },
  {
    id: 4,
    src: hero4,
    title: 'আধুনিক বিজ্ঞান ল্যাবে ব্যবহারিক পরীক্ষণ',
    category: 'বিজ্ঞান ও ল্যাব',
    date: 'জানুয়ারি ২০২৪',
    description: 'পদার্থ ও রসায়নের জটিল সূত্র হাতে-কলমে প্র্যাকটিক্যাল ক্লাসে সমাধান করছেন শিক্ষার্থীরা।',
    span: 'md:col-span-2 md:row-span-1',
    location: 'সায়েন্স ল্যাবরেটরি',
  },
  {
    id: 5,
    src: photo1,
    title: 'ডিজিটাল লাইব্রেরি ও বুক রিডিং কর্নার',
    category: 'একাডেমিক',
    date: 'নভেম্বর ২০২৩',
    description: 'দেশি-বিদেশি সমৃদ্ধ রেফারেন্স বই, এনসাইক্লোপিডিয়া ও দৈনিক পত্রিকা নিয়ে স্টাডি সেশন।',
    span: 'md:col-span-1 md:row-span-2',
    location: 'সেন্ট্রাল লাইব্রেরি',
  },
  {
    id: 6,
    src: photo3,
    title: 'বিজ্ঞান মেলা ও উদ্ভাবনী রোবোটিক্স প্রজেক্ট',
    category: 'বিজ্ঞান ও ল্যাব',
    date: 'ফেব্রুয়ারি ২০২৪',
    description: 'শিক্ষার্থীদের নিজস্ব পরিকল্পনায় তৈরি পরিবেশবান্ধব স্মার্ট সিটি ও রোবোটিক্স মডেল প্রদর্শনী।',
    span: 'md:col-span-1 md:row-span-1',
    location: 'বিজ্ঞান মেলা প্রাঙ্গণ',
  },
  {
    id: 7,
    src: heroImg,
    title: 'ক্যাম্পাস অ্যাসেম্বলি ও শপথ বাক্য পাঠ',
    category: 'ক্যাম্পাস',
    date: 'প্রতিদিনের আয়োজন',
    description: 'সকালের স্নিগ্ধ রোদে সমবেত কণ্ঠে জাতীয় সংগীত পরিবেশনা ও নৈতিকতার শপথ।',
    span: 'md:col-span-1 md:row-span-1',
    location: 'ক্যাম্পাস চত্বর',
  },
  {
    id: 8,
    src: hero11,
    title: 'স্মার্ট মাল্টিমিডিয়া ক্লাসরুম ও ইন্টারঅ্যাক্টিভ পাঠদান',
    category: 'একাডেমিক',
    date: 'অক্টোবর ২০২৩',
    description: 'ডিজিটাল প্রজেক্টরে অ্যানিমেশন ও ভিজ্যুয়াল গ্রাফিক্সের মাধ্যমে পাঠ সহজবোধ্যকরণ।',
    span: 'md:col-span-1 md:row-span-1',
    location: 'স্মার্ট ক্লাসরুম ১',
  },
  {
    id: 9,
    src: nursery,
    title: 'প্রাক-প্রাথমিক আনন্দমেলা ও প্লে কর্নার',
    category: 'ক্যাম্পাস',
    date: 'মার্চ ২০২৪',
    description: 'কোমলমতি শিশুদের জন্য রং-তুলি, খেলনা ও বর্ণমালার ব্লক দিয়ে আনন্দদায়ক শিক্ষণ।',
    span: 'md:col-span-2 md:row-span-1',
    location: 'কিডস জোন',
  },
  {
    id: 10,
    src: hero2,
    title: 'বসন্ত উৎসব ও নবীন বরণ অনুষ্ঠান',
    category: 'সাংস্কৃতিক',
    date: 'ফেব্রুয়ারি ২০২৪',
    description: 'বাঙালির ঐতিহ্যবাহী পোশাকে শিক্ষার্থীদের বর্ণিল নৃত্য ও লোকসংগীত পরিবেশনা।',
    span: 'md:col-span-1 md:row-span-1',
    location: 'মুক্তমঞ্চ',
  },
  {
    id: 11,
    src: hero3,
    title: 'আন্তঃস্কুল ফুটবল ও ক্রিকেট টুর্নামেন্ট',
    category: 'ক্রীড়া',
    date: 'জানুয়ারি ২০২৪',
    description: 'উপজেলা পর্যায়ের চ্যাম্পিয়নশিপ ট্রফি জয়ের রোমাঞ্চকর ফাইনাল ম্যাচ।',
    span: 'md:col-span-1 md:row-span-1',
    location: 'স্পোর্টস কমপ্লেক্স',
  },
  {
    id: 12,
    src: hero5,
    title: 'গ্রুপ ডিসকাশন ও দলগত শিখন কার্যক্রম',
    category: 'একাডেমিক',
    date: 'নভেম্বর ২০২৩',
    description: 'সহপাঠীদের সাথে মতবিনিময়ের মাধ্যমে সৃজনশীল সমস্যার উদ্ভাবনী সমাধান তৈরি।',
    span: 'md:col-span-1 md:row-span-1',
    location: 'একাডেমিক ভবন',
  },
  {
    id: 13,
    src: hero6,
    title: 'বাংলা ও ইংরেজি হাতের লেখা ও ক্যালিগ্রাফি প্রতিযোগিতা',
    category: 'সাংস্কৃতিক',
    date: 'ডিসেম্বর ২০২৩',
    description: 'শিক্ষার্থীদের পরিচ্ছন্ন ও সুন্দর হস্তলিপির প্রশংসনীয় প্রদর্শনী ও মূল্যায়ন।',
    span: 'md:col-span-1 md:row-span-1',
    location: 'আর্ট গ্যালারি রুম',
  },
];

export const galleryCategories = [
  'সকল মুহূর্ত',
  'একাডেমিক',
  'ক্রীড়া',
  'সাংস্কৃতিক',
  'বিজ্ঞান ও ল্যাব',
  'পুরস্কার',
  'ক্যাম্পাস',
] as const;
