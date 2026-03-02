import { Award, Heart, Users } from 'lucide-react';

import hero1 from '@/assets/hero2.jpg';
import hero2 from '@/assets/hero11.jpg';
import hero3 from '@/assets/hero3.jpg';
import hero4 from '@/assets/hero4.jpg';
import hero5 from '@/assets/hero5.jpg';
import hero6 from '@/assets/hero11.jpg';

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'ধর্মপুর মডেল স্কুল & কলেজ',
    subtitle: 'সন্তানের মানসিক ও সৃজনশীল বিকাশের যত্নে',
    description:
      'আমাদের প্রতিষ্ঠানে শিশুরা নিরাপদ ও আনন্দময় শিক্ষার পরিবেশে খেলে, শেখে এবং বৃদ্ধি পায়।',
    image: hero1,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '৫০০০+',
        label: 'স্নাতক',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: '৯৮%',
        label: 'পাস রেট',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: '২৫+',
        label: 'বছরের অভিজ্ঞতা',
      },
    ],
  },
  {
    id: 2,
    title: 'প্রতিশ্রুত শিক্ষকবৃন্দ',
    subtitle: 'বিশ্বাসযোগ্যতা এবং দক্ষতা',
    description:
      'অত্যন্ত যোগ্য শিক্ষক যারা শিক্ষার উৎকর্ষ নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।',
    image: hero2,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '২০০+',
        label: 'শিক্ষক',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: 'A+',
        label: 'ফলাফল',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: '১০০%',
        label: 'যত্ন',
      },
    ],
  },
  {
    id: 3,
    title: 'আধুনিক ক্যাম্পাস জীবন',
    subtitle: 'যেখানে ঐতিহ্য ও নতুনত্ব মেলে',
    description:
      'আমরা সমন্বিত সুযোগ-সুবিধা এবং প্রাণবন্ত ক্যাম্পাস সংস্কৃতি প্রদান করি যা সামগ্রিক উন্নয়নে সহায়ক।',
    image: hero3,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '১৫০০+',
        label: 'ছাত্রছাত্রী',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: '৫০+',
        label: 'পুরস্কার',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: '২৪/৭',
        label: 'নিরাপত্তা',
      },
    ],
  },
  {
    id: 4,
    title: 'সৃজনশীলতা অনুপ্রেরণা',
    subtitle: 'শ্রেণিকক্ষের বাইরের শিক্ষা',
    description:
      'আমাদের অতিরিক্ত কার্যক্রম শিক্ষার্থীদের লুকানো প্রতিভা এবং আগ্রহ খুঁজে পেতে সহায়ক।',
    image: hero4,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '৩০+',
        label: 'ক্লাব',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: 'শীর্ষ',
        label: 'র‌্যাঙ্কিং',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: 'আন্তর্জাতিক',
        label: 'মান',
      },
    ],
  },
  {
    id: 5,
    title: 'শিক্ষায় উৎকর্ষতা',
    subtitle: 'আগামী প্রজন্মের নেতা তৈরি করি',
    description:
      'আমাদের উন্নত পাঠ্যক্রম এবং অভিজ্ঞ শিক্ষক নিশ্চিত করে যে প্রতিটি ছাত্র তার পূর্ণ সম্ভাবনা অর্জন করে।',
    image: hero5,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '১৫:১',
        label: 'শিক্ষার্থী-শিক্ষক অনুপাত',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: 'সোনা',
        label: 'মেডেল',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: 'উচ্চমানের',
        label: 'শিক্ষা',
      },
    ],
  },
  {
    id: 6,
    title: 'উজ্জ্বল ভবিষ্যৎ গঠন',
    subtitle: 'আজই আমাদের কমিউনিটির সঙ্গে যুক্ত হোন',
    description:
      'সুযোগের দুনিয়ায় প্রবেশ করুন এবং আগামী দিনের চ্যালেঞ্জের জন্য প্রস্তুত হন।',
    image: hero6,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '২০+',
        label: 'অ্যালামনি',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: '১০০%',
        label: 'প্রতিশ্রুতি',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: 'নিরাপদ',
        label: 'ক্যাম্পাস',
      },
    ],
  },
];
