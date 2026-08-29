'use client';

import { motion } from 'framer-motion';
import {
  Trophy,
  MessageSquare,
  Cpu,
  Palette,
  Compass,
  PenTool,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function AboutCoCurricular() {
  const activities = [
    {
      icon: Trophy,
      title: 'ক্রীড়া ও অ্যাথলেটিক্স',
      desc: 'ফুটবল, ক্রিকেট, টেবিল টেনিস ও বার্ষিক ক্রীড়া প্রতিযোগিতার মাধ্যমে শারীরিক শক্তি ও টিমওয়ার্ক বৃদ্ধি।',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: MessageSquare,
      title: 'বিতর্ক ও ভাষা সংসদ',
      desc: 'বাংলা ও ইংরেজি উপস্থিত বক্তৃতা, আবৃত্তি ও বিতর্ক প্রতিযোগিতার মাধ্যমে প্রকাশভঙ্গি ও যুক্তিচর্চা।',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Cpu,
      title: 'বিজ্ঞান ও রোবোটিক্স ক্লাব',
      desc: 'উদ্ভাবনী প্রজেক্ট মেকিং, সায়েন্স ফেয়ার এবং বেসিক কোডিং ও টেকনোলজি ওয়ার্কশপ।',
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      icon: Palette,
      title: 'চারুকলা ও সাংস্কৃতিক ফোরাম',
      desc: 'চিত্রাঙ্কন, গান, অভিনয় ও জাতীয় দিবসসমূহে বর্ণাঢ্য সাংস্কৃতিক পরিবেশনা।',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      icon: Compass,
      title: 'স্কাউটিং ও সমাজসেবা',
      desc: 'শৃঙ্খলা, নেতৃত্ব, প্রাথমিক উদ্ধারকৌশল ও বৃক্ষরোপণসহ সামাজিক উন্নয়ন কার্যক্রম।',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      icon: PenTool,
      title: 'ক্যালিগ্রাফি ও হাতের লেখা',
      desc: 'বাংলা ও ইংরেজি দ্রুত ও সুন্দর হাতের লেখার জন্য বিশেষ নিয়মিত কর্মশালা।',
      gradient: 'from-sky-600 to-cyan-600',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-100/80 dark:from-slate-900 dark:via-[#0B132B] dark:to-slate-950 border-y border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative Ambient Mesh Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 text-xs sm:text-sm font-bold mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>সার্বিক ব্যক্তিত্ব ও প্রতিভা বিকাশ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            সহশিক্ষা ও{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              সাংস্কৃতিক কার্যক্রম
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            কেবল পাঠ্যবই নয়, খেলাধুলা, শিল্প-সাহিত্য ও নেতৃত্বের গুণাবলি চর্চার মাধ্যমে আমরা শিশুদের স্বাবলম্বী করে তুলি।
          </p>
        </motion.div>

        {/* Co-curricular 6 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {activities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 backdrop-blur-md"
              >
                <div>
                  <div className={`w-13 h-13 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${item.gradient} text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>সাপ্তাহিক নিয়মিত ক্লাব সেশন</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
