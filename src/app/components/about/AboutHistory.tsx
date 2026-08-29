'use client';

import { motion } from 'framer-motion';
import { History, Calendar, CheckCircle2, Award, Sparkles, Building2, BookOpen } from 'lucide-react';
import Image from 'next/image';
import heroImg from '@/assets/hero.jpg';
import campusImg from '@/assets/paredresult.jpg';

export default function AboutHistory() {
  const milestones = [
    {
      year: '২০১০',
      title: 'প্রতিষ্ঠা ও শুভ সূচনা',
      desc: 'মাত্র ৩৫ জন কোমলমতি শিক্ষার্থী ও ৫ জন নিবেদিতপ্রাণ শিক্ষক নিয়ে আদর্শ প্রাথমিক শিক্ষা নিশ্চিত করার প্রত্যয়ে যাত্রা শুরু হয়।',
      icon: BookOpen,
    },
    {
      year: '২০১৪',
      title: 'স্থায়ী ক্যাম্পাস ও অবকাঠামো',
      desc: 'শিক্ষার্থীদের পড়াশোনার সুবিধার্থে নিজস্ব শান্ত ও মনোমুগ্ধকর পরিবেশে স্থায়ী ক্যাম্পাস এবং বিজ্ঞানাগার প্রতিষ্ঠা করা হয়।',
      icon: Building2,
    },
    {
      year: '২০১৮',
      title: 'শতভাগ সাফল্য ও মেধা বৃত্তি',
      desc: 'পাবলিক পরীক্ষায় শতভাগ পাশের রেকর্ড এবং উপজেলা ও জেলা পর্যায়ে সর্বাধিক ট্যালেন্টপুল বৃত্তি অর্জন করে অনন্য সুনাম কুড়ায়।',
      icon: Award,
    },
    {
      year: '২০২২',
      title: 'ডিজিটাল স্মার্ট ক্লাসরুম রূপান্তর',
      desc: 'প্রতিটি শ্রেণিকক্ষে মাল্টিমিডিয়া প্রজেক্টর, কম্পিউটার ল্যাব ও অনলাইন ইএমএস পোর্টাল চালুর মাধ্যমে স্মার্ট একাডেমি যাত্রা।',
      icon: Sparkles,
    },
    {
      year: '২০২৪-২০২৫',
      title: 'পূর্ণাঙ্গ মডেল শিক্ষাপ্রতিষ্ঠান',
      desc: '১২০০+ শিক্ষার্থীর আধুনিক শিক্ষাঙ্গন, সমৃদ্ধ লাইব্রেরি, সায়েন্স ক্লাব ও সহশিক্ষা ফোরাম নিয়ে শীর্ষস্থানীয় বিদ্যাপীঠ।',
      icon: CheckCircle2,
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
            <History className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>আমাদের সোনালী অতীত ও অগ্রযাত্রা</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            ১৪+ বছরের ধারাবাহিক{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              সাফল্যের ইতিহাস
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            একটি ছোট্ট স্বপ্ন থেকে আজকের এই সুবিশাল বিদ্যাপীঠ। ত্যাগ, একাগ্রতা এবং অবিচল নিষ্ঠার গল্প।
          </p>
        </motion.div>

        {/* Narrative & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
          {/* Visual Images Collage Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 h-[280px] sm:h-[320px] group">
              <Image
                src={heroImg}
                alt="School Campus History"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-md">
                <p className="text-xs font-extrabold text-slate-900 dark:text-white">
                  ক্যাম্পাস অ্যাসেম্বলি ও সুশৃঙ্খল পরিবেশ
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  প্রতিদিনের নৈতিক পাঠ ও জাতীয় সংগীত চর্চা
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800 h-[200px] group">
              <Image
                src={campusImg}
                alt="Annual Sports & Success"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-md">
                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  সহশিক্ষা ও বার্ষিক পুরস্কার বিতরণী
                </p>
              </div>
            </div>
          </motion.div>

          {/* Chronological Timeline Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-200 dark:border-blue-900/60 space-y-8">
              {milestones.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing Bullet Node */}
                    <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30 ring-4 ring-white dark:ring-slate-950 group-hover:scale-115 transition-transform duration-300">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 group-hover:border-blue-300 dark:group-hover:border-blue-500/40 shadow-2xs group-hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-blue-600 text-white shadow-2xs">
                          {item.year}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
