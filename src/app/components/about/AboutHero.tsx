'use client';

import { motion } from 'framer-motion';
import { Sparkles, Calendar, Users, Award, ShieldCheck, ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function AboutHero() {
  const stats = [
    { label: 'প্রতিষ্ঠা ও অভিজ্ঞতা', value: '২০১০ সাল', sub: '১৪+ বছরের সুনাম', icon: Calendar },
    { label: 'বর্তমান শিক্ষার্থী', value: '১,২০০+', sub: 'প্লে থেকে ১০ম শ্রেণি', icon: Users },
    { label: 'অভিজ্ঞ শিক্ষকমণ্ডলী', value: '২৫+ জন', sub: 'প্রশিক্ষিত ও নিবেদিত', icon: Award },
    { label: 'পাবলিক পরীক্ষায় সাফল্য', value: '১০০%', sub: 'ট্যালেন্টপুল বৃত্তি ও জিপিএ ৫', icon: ShieldCheck },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-950 dark:via-[#060D1A] dark:to-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Decorative Ambient Mesh Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-sky-300 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>হোম</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-blue-600 dark:text-sky-400 font-bold">আমাদের সম্পর্কে</span>
        </motion.div>

        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 text-xs sm:text-sm font-bold mb-5 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>আদর্শ ও আধুনিক শিক্ষার অনন্য বাতিঘর</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6"
          >
            জ্ঞান, নৈতিকতা ও মানবিক{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              উৎকর্ষতার প্রতীক
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
          >
            ২০১০ সাল থেকে আমরা প্রতিটি শিশুর সুপ্ত মেধা ও সৃজনশীলতা জাগ্রত করতে প্রতিশ্রুতিবদ্ধ।
            আধুনিক ডিজিটাল শিক্ষাব্যবস্থা, অভিজ্ঞ শিক্ষক এবং নিরাপদ পরিবেশের মেলবন্ধনে আগামী দিনের আলোকিত নেতৃত্ব গড়ে তোলাই আমাদের লক্ষ্য।
          </motion.p>
        </div>

        {/* Stats Highlight Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-xs hover:shadow-xl dark:shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {item.value}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
