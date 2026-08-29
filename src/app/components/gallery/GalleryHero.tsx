'use client';

import { motion } from 'framer-motion';
import { Camera, Sparkles, Image as ImageIcon, ChevronRight, Home, Search, Layers, Film } from 'lucide-react';
import Link from 'next/link';

interface GalleryHeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  totalCount: number;
}

export default function GalleryHero({ searchQuery, setSearchQuery, totalCount }: GalleryHeroProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-950 dark:via-[#060D1A] dark:to-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Decorative Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-sky-400/10 rounded-full blur-3xl pointer-events-none" />
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
          <span className="text-blue-600 dark:text-sky-400 font-bold">ছবি ও ভিডিও গ্যালারি</span>
        </motion.div>

        {/* Heading & Summary */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 text-xs sm:text-sm font-bold mb-4 shadow-xs"
          >
            <Camera className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>আমাদের রঙিন ক্যাম্পাস মুহূর্তসমূহ</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5"
          >
            ক্যাম্পাস জীবন, আনন্দ ও{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              স্মরণীয় মুহূর্ত
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
          >
            আমাদের শিক্ষার্থীদের প্রতিদিনের ক্লাস, বৈজ্ঞানিক আবিষ্কার, ক্রীড়া প্রতিযোগিতা, সাংস্কৃতিক উৎসব এবং ঐতিহাসিক অর্জনের বর্ণিল স্থিরচিত্র।
          </motion.p>
        </div>

        {/* Live Search & Quick Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-xl mx-auto mb-4"
        >
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="মুহূর্ত বা ইভেন্টের নাম লিখে খুঁজুন (যেমন: ক্রীড়া, বিজ্ঞান, ল্যাব)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 shadow-sm focus:ring-4 focus:ring-blue-500/10 transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 px-2 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700"
              >
                রিসেট
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
