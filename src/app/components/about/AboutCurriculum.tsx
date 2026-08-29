'use client';

import { motion } from 'framer-motion';
import { BookOpenCheck, Baby, GraduationCap, Laptop, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutCurriculum() {
  const tiers = [
    {
      icon: Baby,
      badge: 'প্লে, নার্সারি ও কেজি',
      title: 'প্রাক-প্রাথমিক স্তর (Pre-Primary)',
      age: 'বয়স: ৩ থেকে ৫+ বছর',
      desc: 'ভয়হীন ও আনন্দময় পরিবেশে খেলাধুলা, ছবি, ছড়া ও মন্টেসরি পদ্ধতিতে শিশুদের প্রথম শিক্ষার প্রতি ভালোবাসা তৈরি করা।',
      features: [
        'বইয়ের বোঝা ছাড়া আনন্দময় ও ব্যাগমুক্ত পাঠদান',
        'রং, ড্রয়িং, ব্লক ও কারুকাজের মাধ্যমে কল্পনাশক্তি বৃদ্ধি',
        'বাংলা ও ইংরেজি বর্ণমালার নিখুঁত উচ্চারণ ও ড্রিল',
        'শিশুর খাদ্যাভ্যাস ও শিষ্টাচারের প্রাথমিক শিক্ষা',
      ],
      tone: 'from-amber-500 to-orange-500',
      badgeColor: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    },
    {
      icon: BookOpenCheck,
      badge: '১ম থেকে ৫ম শ্রেণি',
      title: 'প্রাথমিক স্তর (Primary Section)',
      age: 'বয়স: ৬ থেকে ১০+ বছর',
      desc: 'মৌলিক বিষয়সমূহে দৃঢ় ভিত্তি তৈরি, সৃজনশীল চিন্তা ও নিয়মিত মূল্যায়নের মাধ্যমে আত্মবিশ্বাসী করে গড়ে তোলা।',
      features: [
        'ইংরেজি স্পোকেন ও কারেক্ট প্রোনাউনসিয়েশন বুটক্যাম্প',
        'গণিতের ভয় দূর করতে বিশেষ ম্যাথ অলিম্পিয়াড ক্লাস',
        'হাতে-কলমে প্রাথমিক বিজ্ঞান ও পরিবেশ পরিচিতি',
        'নিয়মিত ক্লাস টেস্ট ও প্রগ্রেস রিপোর্ট কার্ড',
      ],
      tone: 'from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 border-blue-200 dark:border-blue-800',
    },
    {
      icon: Laptop,
      badge: '৬ষ্ঠ থেকে ১০ম শ্রেণি',
      title: 'মাধ্যমিক স্তর (Secondary Section)',
      age: 'বয়স: ১১ থেকে ১৬+ বছর',
      desc: 'নতুন শিক্ষাক্রমের আলোকে গবেষণামূলক শিক্ষা, কম্পিউটার ল্যাব প্র্যাকটিক্যাল এবং বোর্ড পরীক্ষার নিখুঁত প্রস্তুতি।',
      features: [
        'বিজ্ঞান ও প্রযুক্তি ল্যাবে হাতে-কলমে প্র্যাকটিক্যাল',
        'আইসিটি ও কোডিং বেসিকসের আধুনিক প্রশিক্ষণ',
        'সাপ্তাহিক মডেল টেস্ট ও স্পেশাল কেয়ার সেশন',
        'ক্যারিয়ার গাইডেন্স ও উচ্চশিক্ষার রোডম্যাপ',
      ],
      tone: 'from-indigo-600 to-purple-600',
      badgeColor: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-100/80 dark:from-slate-900 dark:via-[#0B132B] dark:to-slate-950 border-y border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Ambient Mesh Glows */}
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
            <span>পাঠদান পদ্ধতি ও শিক্ষাক্রম কাঠামো</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            আমাদের একাডেমিক{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              স্তরসমূহ
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            প্রতিটি বয়সের শিশুর মানসিক ও শারীরিক চাহিদার সাথে সামঞ্জস্য রেখে সাজানো হয়েছে আমাদের বিশেষায়িত শিক্ষাক্রম।
          </p>
        </motion.div>

        {/* 3 Academic Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${tier.tone} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${tier.badgeColor}`}>
                      {tier.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 block mb-1">
                    {tier.age}
                  </span>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-3 group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
                    {tier.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {tier.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
