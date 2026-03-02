'use client';

import head from '@/assets/head.png';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ClipboardList, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Information = () => {
  const cards: {
    title: string;
    icon: React.ReactNode;
    link: string;
    tone: 'chart-1' | 'chart-2' | 'chart-3' | 'chart-4';
  }[] = [
    {
      title: 'শিক্ষকবৃন্দ',
      icon: <Users className="w-6 h-6 text-primary" />,
      link: '/dashboard',
      tone: 'chart-1',
    },
    {
      title: 'ফলাফল',
      icon: <ClipboardList className="w-6 h-6 text-primary" />,
      link: '/dashboard/result',
      tone: 'chart-2',
    },
    {
      title: 'পরীক্ষার সময়সূচি',
      icon: <Calendar className="w-6 h-6 text-primary" />,
      link: '/dashboard',
      tone: 'chart-3',
    },
    {
      title: 'রুটিন',
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      link: '/dashboard/routine',
      tone: 'chart-4',
    },
  ];
  return (
    <section className="py-16  text-foreground relative overflow-hidden">
      {/* Decorative blobs */}

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:max-w-[400px] mx-auto lg:mx-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={head}
                  alt="চেয়ারম্যান"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-500 mb-2">
                এমডি মোমিনুল ইসলাম লিটন
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                প্রধান ও চেয়ারম্যান
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary rounded-full" />
              <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg pl-6">
                ধরমপুর মডেল কেজি স্কুলে আমরা বিশ্বাস করি প্রতিটি শিশুকে
                আনন্দদায়ক ও উদ্দীপনামূলক শিক্ষাজীবনের শুরু দেওয়া উচিত। আমাদের
                প্রোগ্রামগুলো কৌতূহল, সৃজনশীলতা এবং সামাজিক দক্ষতা বিকাশে
                মনোনিবেশ করে। খেলাধুলাভিত্তিক শেখা, হাতে-কলমে কার্যক্রম এবং
                ব্যক্তিগত যত্নের মাধ্যমে আমরা শিশুদের শক্তিশালী ভিত্তি তৈরি করি।
              </p>
            </motion.div>
          </div>
        </div>

        {/* Quick Links Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, idx) => (
            <FeatureCard
              key={idx}
              title={card.title}
              icon={card.icon}
              link={card.link}
              tone={card.tone}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Information;

const FeatureCard = ({
  title,
  icon,
  link,
  tone = 'chart-1',
}: {
  title: string;
  icon: React.ReactNode;
  link: string;
  tone?: 'chart-1' | 'chart-2' | 'chart-3' | 'chart-4';
}) => {
  const toneStyles = {
    'chart-1': 'bg-chart-1/20 text-chart-1',
    'chart-2': 'bg-chart-2/20 text-chart-2',
    'chart-3': 'bg-chart-3/20 text-chart-3',
    'chart-4': 'bg-chart-4/20 text-chart-4',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={link}
        className="group relative flex flex-col items-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border hover:border-transparent"
      >
        {/* Tone Background */}
        <div
          className={`absolute inset-0 ${toneStyles[tone]} opacity-10 group-hover:opacity-20 transition-opacity rounded-2xl`}
        />

        {/* Icon */}
        <div
          className={`relative flex items-center justify-center w-16 h-16 mb-4 rounded-2xl ${toneStyles[tone]} shadow-md transform group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="relative text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
          {title}
        </h3>
      </Link>
    </motion.div>
  );
};
