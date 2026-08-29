'use client';

import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, Heart, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AboutFacultyPreview() {
  const perks = [
    {
      icon: GraduationCap,
      title: 'উচ্চশিক্ষিত ও অভিজ্ঞ',
      desc: 'দেশের স্বনামধন্য বিশ্ববিদ্যালয় ও জাতীয় শিক্ষাক্রম বোর্ড থেকে বিশেষ প্রশিক্ষিত শিক্ষকবৃন্দ।',
    },
    {
      icon: Heart,
      title: 'মাতৃস্নেহ ও ব্যক্তিগত যত্ন',
      desc: 'প্রতিটি শিশুর প্রতি নিবিড় নজরদারি এবং দুর্বল শিক্ষার্থীদের জন্য ফ্রি এক্সট্রা কেয়ার ক্লাস।',
    },
    {
      icon: Award,
      title: 'ক্রমাগত টিচার্স ট্রেনিং',
      desc: 'আধুনিক শিখন পদ্ধতি, চাইল্ড সাইকোলজি ও ডিজিটাল পাঠদানে শিক্ষকমণ্ডলীর নিয়মিত প্রশিক্ষণ।',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-[#060D1A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 shadow-sm dark:shadow-2xl relative overflow-hidden backdrop-blur-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 text-xs sm:text-sm font-bold shadow-2xs">
                  <Users className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>আমাদের নিবেদিত শিক্ষক পরিষদ</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  দক্ষ, অভিজ্ঞ ও স্নেহশীল{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-300">
                    শিক্ষকমণ্ডলী
                  </span>
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  আমাদের শিক্ষকমণ্ডলী কেবল পাঠ্যপুস্তকের জ্ঞান দান করেন না, বরং প্রতিটি শিক্ষার্থীর মানসিক বিকাশ ও নৈতিক চরিত্র গঠনে পথপ্রদর্শক হিসেবে দায়িত্ব পালন করেন।
                </p>
              </div>

              <div className="space-y-3">
                {perks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3.5 shadow-2xs"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  href="/#teachers"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
                >
                  <span>সকল শিক্ষকের তালিকা ও প্রোফাইল</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Side Stats & Achievements */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-center shadow-xs">
                <span className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-sky-400 block mb-1">
                  ২৫+
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  পূর্ণকালীন শিক্ষক
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
                  স্নাতক ও স্নাতকোত্তর ডিগ্রিধারী
                </span>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-center shadow-xs">
                <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 block mb-1">
                  ১:২০
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  শিক্ষক-শিক্ষার্থী অনুপাত
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
                  নিবিড় ব্যক্তিগত পর্যবেক্ষণ
                </span>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-center shadow-xs">
                <span className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 block mb-1">
                  ১০০%
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  আইসিটি ও ডিজিটাল দক্ষ
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
                  স্মার্ট ক্লাসরুম পরিচালনায় পারদর্শী
                </span>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-center shadow-xs">
                <span className="text-3xl sm:text-4xl font-black text-amber-500 dark:text-amber-400 block mb-1">
                  ২৪/৭
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  অভিভাবক সহায়তা
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">
                  অগ্রগতি ও কাউন্সেলিং সাপোর্ট
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
