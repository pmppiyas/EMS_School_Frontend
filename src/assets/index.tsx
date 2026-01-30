import { Award, Heart, Users } from 'lucide-react';

import hero1 from '@/assets/hero2.jpg';
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/hero3.jpg';
import hero4 from '@/assets/hero4.jpg';
import hero5 from '@/assets/hero5.jpg';
import hero6 from '@/assets/hero11.jpg';

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Dhormopur Model School & College',
    subtitle: 'Nurturing Young Minds with Care and Creativity',
    description:
      'At our institution, we provide a fun and safe learning environment where children explore, play, and grow.',
    image: hero1,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '5000+',
        label: 'Graduates',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: '98%',
        label: 'Pass Rate',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: '25+',
        label: 'Years Exp.',
      },
    ],
  },
  {
    id: 2,
    title: 'Excellence in Education',
    subtitle: 'Building the Leaders of Tomorrow',
    description:
      'Our advanced curriculum and expert teachers ensure that every student reaches their full potential.',
    image: hero2,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '200+',
        label: 'Teachers',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: 'A+',
        label: 'Result',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: '100%',
        label: 'Care',
      },
    ],
  },
  {
    id: 3,
    title: 'Modern Campus Life',
    subtitle: 'Where Tradition Meets Innovation',
    description:
      'We offer state-of-the-art facilities and a vibrant campus culture for holistic development.',
    image: hero3,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '1500+',
        label: 'Students',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: '50+',
        label: 'Awards',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: '24/7',
        label: 'Safety',
      },
    ],
  },
  {
    id: 4,
    title: 'Inspiring Creativity',
    subtitle: 'Beyond the Classroom Walls',
    description:
      'Our extracurricular programs empower students to discover their hidden talents and passions.',
    image: hero4,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '30+',
        label: 'Clubs',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: 'Top',
        label: 'Rankings',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: 'Global',
        label: 'Standards',
      },
    ],
  },
  {
    id: 5,
    title: 'Dedicated Faculty',
    subtitle: 'Expertise You Can Trust',
    description:
      'Learn from highly qualified educators who are committed to academic excellence.',
    image: hero5,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '15:1',
        label: 'Ratio',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: 'Gold',
        label: 'Medals',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: 'Quality',
        label: 'Learning',
      },
    ],
  },
  {
    id: 6,
    title: 'Building a Bright Future',
    subtitle: 'Join Our Community Today',
    description:
      'Step into a world of opportunities and prepare yourself for the challenges of tomorrow.',
    image: hero6,
    stats: [
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        value: '20k+',
        label: 'Alumni',
      },
      {
        icon: <Award className="w-6 h-6 text-primary" />,
        value: '100%',
        label: 'Commitment',
      },
      {
        icon: <Heart className="w-6 h-6 text-primary" />,
        value: 'Safe',
        label: 'Campus',
      },
    ],
  },
];
