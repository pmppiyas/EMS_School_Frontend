'use client';

import { motion } from 'framer-motion';
import { PhoneCall, Sparkles, ChevronRight, Home, Clock, Headphones, CalendarCheck, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ContactHero() {
  const quickBadges = [
    { icon: Headphones, title: 'জরুরি হেল্পলাইন', sub: '+৮৮০ ১৯১৭-৬৯২১৩৬' },
    { icon: Clock, title: 'অফিস সময়সূচি', sub: 'শনি-বৃহস্পতি: ৮:০০ - ৪:৩০' },
    { icon: CalendarCheck, title: 'ক্যাম্পাস ভিজিট', sub: 'যেকোনো কার্যদিবসে স্বাগতম' },
    { icon: ShieldCheck, title: 'অনলাইন সাপোর্ট', sub: '২৪ ঘণ্টার মধ্যে ফিডব্যাক' },
  ];

  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-950 dark:via-[#060D1A] dark:to-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Ambient Mesh Glows */}
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
          <span className="text-blue-600 dark:text-sky-400 font-bold">যোগাযোগ ও ভর্তি তথ্য</span>
        </motion.div>

        {/* Heading & Summary */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 text-xs sm:text-sm font-bold mb-4 shadow-xs"
          >
            <PhoneCall className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>প্রশাসনিক সহায়তা ও ভর্তি ইনফরমেশন ডেস্ক</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-5"
          >
            আপনার যেকোনো প্রয়োজনে{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              আমরা আছি পাশে
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
          >
            সন্তানের নতুন শিক্ষাবর্ষে ভর্তি, ফি কাঠামো, ট্রান্সপোর্ট সুবিধা বা একাডেমিক তথ্যের জন্য সরাসরি কল করুন অথবা নিচের ফর্মটি পূরণ করে পাঠান।
          </motion.p>
        </div>

        {/* 4 Quick Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {quickBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-center gap-3.5 backdrop-blur-md"
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    {badge.title}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mt-0.5">
                    {badge.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
