'use client';

import { motion } from 'framer-motion';
import { Quote, CheckCircle2, Award, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';
import headImg from '@/assets/head.png';

export default function AboutLeadership() {
  const commitments = [
    { title: 'নৈতিক ও ধর্মীয় মূল্যবোধ', desc: 'শিশুর আদব-কায়দা ও সৎ চরিত্র গঠনে সর্বোচ্চ অগ্রাধিকার।' },
    { title: 'ডিজিটাল স্মার্ট ক্লাসরুম', desc: 'মাল্টিমিডিয়া ও প্র্যাকটিক্যাল ল্যাবে আধুনিক প্রযুক্তিনির্ভর পাঠদান।' },
    { title: 'স্নেহশীল ও অভিজ্ঞ শিক্ষক', desc: 'ব্যক্তিগত পর্যবেক্ষণ ও দুর্বল শিক্ষার্থীদের বিশেষ যত্ন নিশ্চিত করা।' },
    { title: 'নিরাপদ ও আনন্দময় ক্যাম্পাস', desc: 'সিসিটিভি ও পূর্ণাঙ্গ সুরক্ষায় আনন্দমুখর শিক্ষার পরিবেশ।' },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-[#060D1A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Subtle Ambient Background Mesh */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-12 shadow-sm dark:shadow-2xl relative overflow-hidden backdrop-blur-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Chairman Photo Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-[360px] w-full">
                {/* Glowing Gradient Border Ring */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-950 border-2 border-white dark:border-white/15 shadow-2xl">
                  <Image
                    src={headImg}
                    alt="এমডি মোমিনুল ইসলাম লিটন - প্রতিষ্ঠাতা ও চেয়ারম্যান"
                    width={450}
                    height={520}
                    className="w-full h-[380px] sm:h-[430px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Badge Over Photo */}
                  <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-lg text-center">
                    <p className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-1.5">
                      <span>এমডি মোমিনুল ইসলাম লিটন</span>
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                    </p>
                    <p className="text-xs font-semibold text-blue-700 dark:text-sky-300">
                      প্রতিষ্ঠাতা ও চেয়ারম্যান
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chairman's Message Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 text-xs sm:text-sm font-bold shadow-2xs">
                  <Sparkles className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  <span>প্রতিষ্ঠাতা ও চেয়ারম্যানের দিকনির্দেশনা</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  নৈতিক মূল্যবোধ ও আধুনিক জ্ঞানে শিশুর ভবিষ্যৎ নির্মাণ
                </h2>

                <p className="text-sm sm:text-base font-semibold text-blue-700 dark:text-sky-300">
                  এমডি মোমিনুল ইসলাম লিটন • চেয়ারম্যান, ধর্মপুর মডেল একাডেমি
                </p>
              </div>

              {/* Message Quote */}
              <div className="relative pl-6 sm:pl-7 border-l-4 border-blue-600 dark:border-blue-500 space-y-3 py-1">
                <Quote className="absolute -top-3 -left-3.5 w-7 h-7 text-blue-200 dark:text-blue-500/30" />
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                  &ldquo;ধর্মপুর মডেল একাডেমিতে আমরা বিশ্বাস করি, প্রতিটি শিশুই এক একটি সম্ভাবনাময় নক্ষত্র। তাদের ভেতর লুক্কায়িত প্রতিভাকে স্নেহ, যত্ন ও আধুনিক প্রযুক্তির মাধ্যমে বিকশিত করাই আমাদের মূল অঙ্গীকার। আমরা এমন একটি প্রজন্ম গড়ে তুলতে চাই যারা মেধা ও মননে বিশ্বমানের হবে এবং হৃদয়ে ধারণ করবে গভীর দেশপ্রেম ও নৈতিক সততা।&rdquo;
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs sm:text-sm">
                  অভিজ্ঞ শিক্ষকমণ্ডলীর নিরলস পরিশ্রম এবং সম্মানিত অভিভাবকদের আস্থাই আমাদের এগিয়ে চলার মূল প্রেরণা।
                </p>
              </div>

              {/* 4 Core Commitments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {commitments.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-2.5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
