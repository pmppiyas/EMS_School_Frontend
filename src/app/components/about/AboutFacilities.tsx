'use client';

import { motion } from 'framer-motion';
import {
  MonitorPlay,
  FlaskConical,
  Library,
  Trophy,
  ShieldCheck,
  Droplets,
  Building,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';

export default function AboutFacilities() {
  const facilities = [
    {
      icon: MonitorPlay,
      title: 'ডিজিটাল স্মার্ট ক্লাসরুম',
      desc: 'মাল্টিমিডিয়া প্রজেক্টর ও ইন্টারেক্টিভ অডিও-ভিজ্যুয়াল ডিসপ্লের মাধ্যমে আনন্দময় শিক্ষণ পদ্ধতি।',
      tag: 'প্রযুক্তিনির্ভর',
      tone: 'bg-blue-500/10 text-blue-600 dark:text-sky-400',
    },
    {
      icon: FlaskConical,
      title: 'কম্পিউটার ও বিজ্ঞান ল্যাব',
      desc: 'হাতে-কলমে পদার্থ, রসায়ন, জীব ও তথ্যপ্রযুক্তি প্র্যাকটিক্যাল ক্লাসের জন্য সুসজ্জিত ল্যাবরেটরি।',
      tag: 'হাতে-কলমে শিক্ষা',
      tone: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    },
    {
      icon: Library,
      title: 'সমৃদ্ধ একাডেমি লাইব্রেরি',
      desc: 'সহস্রাধিক একাডেমিক বই, সাধারণ জ্ঞান, রেফারেন্স ও শিশুকিশোর সাহিত্যের বিশাল সম্ভার।',
      tag: 'জ্ঞানের ভাণ্ডার',
      tone: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    },
    {
      icon: Trophy,
      title: 'প্রশস্ত খেলার মাঠ ও ক্রীড়াঙ্গন',
      desc: 'ক্রিকেট, ফুটবল, ব্যাডমিন্টন ও শারীরিক কসরতের জন্য সুপরিসর উন্মুক্ত সবুজ ক্যাম্পাস।',
      tag: 'শারীরিক বিকাশ',
      tone: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    },
    {
      icon: ShieldCheck,
      title: '২৪/৭ সিসিটিভি ও নিরাপত্তা',
      desc: 'সম্পূর্ণ ক্যাম্পাস কেন্দ্রীয় সিসিটিভি ক্যামেরার আওতাধীন এবং সার্বক্ষণিক প্রশিক্ষিত নিরাপত্তা প্রহরী।',
      tag: '১০০% সুরক্ষিত',
      tone: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    },
    {
      icon: Droplets,
      title: 'বিশুদ্ধ পানি ও ফার্স্ট-এইড বুথ',
      desc: 'স্বয়ংক্রিয় আরও ফিল্টার বিশুদ্ধ পানীয় জল এবং ক্যাম্পাসে তাৎক্ষণিক প্রাথমিক স্বাস্থ্যসেবা সুবিধা।',
      tag: 'স্বাস্থ্যসম্মত',
      tone: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-[#060D1A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative Ambient Mesh Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 text-xs sm:text-sm font-bold mb-3 shadow-2xs">
            <Building className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>ক্যাম্পাস অবকাঠামো ও আধুনিক সুবিধা</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            আমাদের ক্যাম্পাস{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              সুবিধাসমূহ
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            একটি আন্তর্জাতিক মানের শিক্ষাপ্রতিষ্ঠানের সকল সুযোগ-সুবিধা নিয়ে সাজানো হয়েছে আমাদের প্রতিটি বিভাগ।
          </p>
        </motion.div>

        {/* 6 Facilities Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {facilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.tone} shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-sky-400 group-hover:gap-2 transition-all">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
