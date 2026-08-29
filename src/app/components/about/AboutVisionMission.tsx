'use client';

import { motion } from 'framer-motion';
import { Target, Compass, HeartHandshake, Lightbulb, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutVisionMission() {
  const pillars = [
    {
      icon: Target,
      tag: 'আমাদের লক্ষ্য',
      title: 'মিশন (Our Mission)',
      desc: 'আনন্দময়, ভয়হীন ও প্রযুক্তিনির্ভর শিক্ষাদানের মাধ্যমে প্রতিটি শিক্ষার্থীর সৃজনশীলতা, বুদ্ধিবৃত্তিক দক্ষতা ও মানবিক মূল্যবোধের সর্বোচ্চ বিকাশ নিশ্চিত করা।',
      points: [
        'মানসম্মত ও যুগোপযোগী শিক্ষাক্রম বাস্তবায়ন',
        'ব্যক্তিগত পরিচর্যার মাধ্যমে প্রতিভা বিকাশ',
        'নৈতিকতা, শৃঙ্খলা ও দেশপ্রেমের দীক্ষা প্রদান',
      ],
      badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-sky-400 border-blue-200/80 dark:border-blue-800/60',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Compass,
      tag: 'আমাদের স্বপ্ন',
      title: 'ভিশন (Our Vision)',
      desc: 'উত্তরবঙ্গের অন্যতম শ্রেষ্ঠ, আধুনিক ও আদর্শ বিদ্যাপীঠ হিসেবে আত্মপ্রকাশ করা, যা আগামী দিনের স্মার্ট বাংলাদেশের জন্য দক্ষ, দূরদর্শী ও মানবিক নেতা গড়ে তুলবে।',
      points: [
        'ডিজিটাল ও স্মার্ট এডুকেশন ক্যাম্পাসে রূপান্তর',
        'আন্তর্জাতিক মানসম্পন্ন প্রাথমিক ও মাধ্যমিক শিক্ষা',
        '১০০% মানবিক ও আদর্শ নাগরিক গড়ে তোলা',
      ],
      badgeBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200/80 dark:border-indigo-800/60',
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      icon: HeartHandshake,
      tag: 'মৌলিক ভিত্তি',
      title: 'মূল্যবোধ (Core Values)',
      desc: 'আমরা এমন কিছু সার্বজনীন মূলনীতি ধারণ করি যা শিক্ষার্থী, শিক্ষক ও অভিভাবকদের মধ্যে পারস্পরিক শ্রদ্ধা, সহযোগিতা এবং সততার সংস্কৃতি গড়ে তোলে।',
      points: [
        'সততা, নিয়মানুবর্তিতা ও ন্যায়পরায়ণতা',
        'সহমর্মিতা, পারস্পরিক শ্রদ্ধা ও দলগত চেতনা',
        'সৃজনশীল চিন্তা ও ক্রমাগত উন্নতির প্রয়াস',
      ],
      badgeBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-200/80 dark:border-sky-800/60',
      gradient: 'from-sky-600 to-cyan-600',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-100/80 dark:from-slate-900 dark:via-[#0B132B] dark:to-slate-950 border-y border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 text-xs sm:text-sm font-bold mb-3 shadow-2xs">
            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>আমাদের প্রাতিষ্ঠানিক দর্শন ও অঙ্গীকার</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            লক্ষ্য, দৃষ্টিভঙ্গি ও{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              মূল্যবোধ
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            একটি আদর্শ বিদ্যাপীঠ কেবল পাঠ্যবই পড়ায় না, বরং স্বপ্ন দেখায় এবং সেই স্বপ্ন পূরণের দৃঢ় মনোবল গড়ে দেয়।
          </p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
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
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${pillar.gradient} text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${pillar.badgeBg}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Key Points */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                  {pillar.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                      <span>{point}</span>
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
