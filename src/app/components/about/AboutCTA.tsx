'use client';

import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  PhoneCall,
  MapPin,
  CalendarCheck,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-blue-50/90 via-indigo-50/40 to-slate-100/90 dark:from-slate-900 dark:via-[#060D1A] dark:to-slate-950 border-t border-blue-100/90 dark:border-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative Ambient Mesh Glows */}
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
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
          <span>আমাদের ক্যাম্পাসে আপনাকে স্বাগতম</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tight leading-tight max-w-3xl mx-auto"
        >
          আপনার সন্তানের আদর্শ ভবিষ্যতের সূচনা হোক{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
            আমাদের সাথে
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-600 dark:text-slate-300 mb-10 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto"
        >
          ক্যাম্পাস ঘুরে দেখতে বা সম্মানিত চেয়ারম্যান ও অধ্যক্ষ মহোদয়ের সাথে
          সরাসরি পরামর্শ করতে যেকোনো কার্যদিবসে আমাদের ক্যাম্পাসে আমন্ত্রিত।
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/25 hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer">
              <CalendarCheck className="w-4 h-4" />
              <span>ভর্তি ও ক্যাম্পাস ভিজিটের জন্য যোগাযোগ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <a href="tel:+8801917692136" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-white border border-slate-200/90 dark:border-slate-800 px-7 py-4 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-2xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer">
              <PhoneCall className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>হেল্পলাইন: +৮৮০ ১৯১৭-৬৯২১৩৬</span>
            </button>
          </a>
        </motion.div>

        {/* Campus Location snippet */}
        <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <MapPin className="w-4 h-4 text-blue-600 dark:text-sky-400" />
          <span>ক্যাম্পাস: ধর্মপুর, গোবিন্দগঞ্জ, গাইবান্ধা, বাংলাদেশ</span>
        </div>
      </div>
    </section>
  );
}
