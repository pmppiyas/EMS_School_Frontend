'use client';

import { motion } from 'framer-motion';
import { Sparkles, Facebook, Youtube, Share2, ArrowRight, Camera } from 'lucide-react';
import Link from 'next/link';

export default function GalleryCTA() {
  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-blue-50/90 via-indigo-50/40 to-slate-100/90 dark:from-slate-900 dark:via-[#060D1A] dark:to-slate-950 border-t border-blue-100/90 dark:border-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Ambient Mesh Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-5 text-xs font-bold text-blue-700 dark:text-sky-300 bg-white dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 rounded-full shadow-2xs"
        >
          <Camera className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
          <span>আমাদের সোশ্যাল মিডিয়া ও মিডিয়া উইং</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight leading-tight max-w-3xl mx-auto"
        >
          ক্যাম্পাসের নিয়মিত ছবি ও আপডেট পেতে{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
            যুক্ত থাকুন
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-600 dark:text-slate-300 mb-10 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto"
        >
          আমাদের অফিসিয়াল ফেসবুক ও ইউটিউব চ্যানেলে প্রতিদিনের ক্লাস কার্যক্রম, নোটিশ ও ইভেন্টের ফুল এইচডি ভিডিও ও ফটো অ্যালবাম নিয়মিত প্রকাশ করা হয়।
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/25 hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer">
              <Facebook className="w-4 h-4" />
              <span>অফিসিয়াল ফেসবুক পেজ ফলো করুন</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200/90 dark:border-slate-800 px-7 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-2xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer">
              <Youtube className="w-4 h-4 text-rose-600" />
              <span>ইউটিউব চ্যানেল সাবস্ক্রাইব করুন</span>
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
