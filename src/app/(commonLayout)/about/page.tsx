'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Target,
  History,
  Users2,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';
import Image from 'next/image';
import heroImg from '@/assets/hero.jpg';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg}
          alt="School Building"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/70" />

        <motion.div {...fadeIn} className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            আমাদের সম্পর্কে
          </h1>

          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            শিশুর হাসি, শিক্ষা ও সুন্দর ভবিষ্যৎ গড়ার অঙ্গীকার।
          </p>

          <div className="h-1.5 w-24 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              <History size={18} /> আমাদের ইতিহাস
            </div>

            <h2 className="text-4xl font-bold mb-6">
              ২০১০ সাল থেকে সুনামের সাথে পথচলা
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              আমাদের কেজি স্কুল প্রতিষ্ঠিত হয়েছে ছোট্ট শিশুদের মানসম্মত
              প্রাথমিক শিক্ষা নিশ্চিত করার লক্ষ্য নিয়ে। শুরুতে অল্প কয়েকজন
              শিক্ষার্থী নিয়ে যাত্রা শুরু হলেও আজ আমরা অভিভাবকদের আস্থার একটি
              নাম।
            </p>

            <p className="text-muted-foreground leading-relaxed">
              আনন্দময় পরিবেশ, যত্নশীল শিক্ষক এবং আধুনিক শিক্ষাব্যবস্থার মাধ্যমে
              আমরা প্রতিটি শিশুর সৃজনশীলতা ও নৈতিক বিকাশে গুরুত্ব দিয়ে থাকি।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            <Image src={heroImg} alt="History" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <GlassCard
              icon={<Target size={28} />}
              title="আমাদের লক্ষ্য"
              desc="শিশুদের আনন্দময় ও নিরাপদ পরিবেশে মানসম্মত শিক্ষা প্রদান করা, যাতে তারা আত্মবিশ্বাসী ও নৈতিকভাবে শক্তিশালী হয়ে উঠতে পারে।"
            />

            <GlassCard
              icon={<BookOpen size={28} />}
              title="আমাদের স্বপ্ন"
              desc="একটি আদর্শ কেজি স্কুল গড়ে তোলা যেখানে প্রতিটি শিশু ভালোবাসা, যত্ন ও আধুনিক শিক্ষার মাধ্যমে তার সম্ভাবনাকে বিকশিত করতে পারে।"
            />
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            কেন আমাদের স্কুল নির্বাচন করবেন?
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            আমরা প্রতিটি শিশুর সার্বিক বিকাশে বিশ্বাস করি।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<GraduationCap size={28} />}
            title="অভিজ্ঞ শিক্ষকবৃন্দ"
            desc="প্রশিক্ষিত ও স্নেহশীল শিক্ষক যারা প্রতিটি শিশুকে ব্যক্তিগতভাবে যত্ন নিয়ে শেখান।"
            tone="chart-1"
          />

          <FeatureCard
            icon={<ShieldCheck size={28} />}
            title="নিরাপদ পরিবেশ"
            desc="নিরাপদ ও আনন্দময় ক্যাম্পাস যেখানে শিশুরা নিশ্চিন্তে পড়াশোনা ও খেলাধুলা করতে পারে।"
            tone="chart-2"
          />

          <FeatureCard
            icon={<Users2 size={28} />}
            title="সহশিক্ষা কার্যক্রম"
            desc="গান, নাচ, চিত্রাঙ্কন ও খেলাধুলার মাধ্যমে শিশুর সৃজনশীলতা ও আত্মবিশ্বাস বৃদ্ধি।"
            tone="chart-3"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

const GlassCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="bg-card border border-border p-10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
  >
    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>

    <h3 className="text-2xl font-bold mb-4">{title}</h3>

    <p className="text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

const FeatureCard = ({
  icon,
  title,
  desc,
  tone = 'chart-1',
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tone?: 'chart-1' | 'chart-2' | 'chart-3';
}) => {
  const toneStyles = {
    'chart-1': 'bg-chart-1/10 text-chart-1',
    'chart-2': 'bg-chart-2/10 text-chart-2',
    'chart-3': 'bg-chart-3/10 text-chart-3',
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-card border border-border p-8 rounded-3xl text-center shadow-sm hover:shadow-lg transition-all"
    >
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${toneStyles[tone]}`}
      >
        {icon}
      </div>

      <h4 className="text-xl font-semibold mb-3">{title}</h4>

      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
};
