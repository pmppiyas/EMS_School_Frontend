'use client';

import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AboutFAQ() {
  const faqs = [
    {
      q: 'ধর্মপুর মডেল একাডেমিতে নতুন শিক্ষাবর্ষে ভর্তির নিয়ম ও সময়সীমা কী?',
      a: 'প্রতি বছর নভেম্বর ও ডিসেম্বর মাস জুড়ে প্লে থেকে নবম শ্রেণি পর্যন্ত ভর্তি ফরম বিতরণ ও ভর্তি কার্যক্রম পরিচালিত হয়। নির্ধারিত আবেদন ফরম পূরণ করে সরাসরি স্কুল অফিস থেকে বা আমাদের ওয়েবসাইটের অনলাইন ভর্তি পোর্টাল থেকে আবেদন করা যায়।',
    },
    {
      q: 'শ্রেণিকক্ষে শিক্ষক ও শিক্ষার্থীর অনুপাত (Ratio) কেমন থাকে?',
      a: 'আমরা প্রতিটি শ্রেণিকক্ষে ১:২০ অনুপাত বজায় রাখি, যাতে শিক্ষক প্রতিটি শিক্ষার্থীর প্রতি ব্যক্তিগত মনোযোগ দিতে পারেন এবং কোনো শিশুই পাঠগ্রহণে পিছিয়ে না পড়ে।',
    },
    {
      q: 'দুর্বল বা পিছিয়ে পড়া শিক্ষার্থীদের জন্য অতিরিক্ত কেয়ারের ব্যবস্থা আছে কি?',
      a: 'হ্যাঁ, নিয়মিত ক্লাসের বাইরেও পিছিয়ে পড়া বা গণিত/ইংরেজিতে দুর্বল শিক্ষার্থীদের জন্য শিক্ষকমণ্ডলীর তত্ত্বাবধানে কোনো অতিরিক্ত ফি ছাড়াই নিয়মিত স্পেশাল কেয়ার ও রিমিডিয়াল ক্লাসের ব্যবস্থা রয়েছে।',
    },
    {
      q: 'ক্যাম্পাসে শিশুদের সার্বিক নিরাপত্তা কীভাবে নিশ্চিত করা হয়?',
      a: 'সম্পূর্ণ ক্যাম্পাস ২৪/৭ সিসিটিভি ক্যামেরার আওতাধীন। গেটে সার্বক্ষণিক প্রশিক্ষিত নিরাপত্তা প্রহরী থাকেন এবং অভিভাবক ছাড়া অন্য কারো কাছে শিক্ষার্থীকে হস্তান্তর করা হয় না। এছাড়া ক্যাম্পাসে জরুরি ফার্স্ট-এইড বক্সের সুব্যবস্থা রয়েছে।',
    },
    {
      q: 'সন্তানের পড়াশোনার অগ্রগতি ও উপস্থিতি অভিভাবকরা কীভাবে জানতে পারেন?',
      a: 'আমাদের ডিজিটাল ইএমএস পোর্টাল এবং নিয়মিত অভিভাবক-শিক্ষক মতবিনিময় সভার (PTM) মাধ্যমে শিক্ষার্থীর উপস্থিতি, ক্লাস টেস্টের রেজাল্ট ও আচরণগত রিপোর্ট কার্ড স্বয়ংক্রিয়ভাবে অভিভাবকদের কাছে পৌঁছে দেওয়া হয়।',
    },
    {
      q: 'শিক্ষার্থীদের জন্য কী কী সহশিক্ষা ও ক্লাব কার্যক্রম চালু রয়েছে?',
      a: 'আমাদের স্কুলে বিজ্ঞান ও রোবোটিক্স ক্লাব, বিতর্ক সংসদ, চারুকলা ও সঙ্গীত ফোরাম, স্কাউটিং, হাতের লেখা উন্নয়ন কর্মশালা এবং বার্ষিক ক্রীড়া ও সাংস্কৃতিক প্রতিযোগিতা নিয়মিত অনুষ্ঠিত হয়।',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-[#060D1A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Ambient Mesh Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 text-xs sm:text-sm font-bold mb-3 shadow-2xs">
            <HelpCircle className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>অভিভাবকদের সাধারণ জিজ্ঞাসা</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            সচরাচর জিজ্ঞাসিত{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              প্রশ্নোত্তর
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            আমাদের একাডেমি, ভর্তি ও পরিচালনা ব্যবস্থা সংক্রান্ত প্রয়োজনীয় তথ্যসমূহ এক নজরে জেনে নিন।
          </p>
        </motion.div>

        {/* Shadcn Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full space-y-3.5">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl px-5 sm:px-6 shadow-xs overflow-hidden transition-colors"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 hover:no-underline py-4 sm:py-5">
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-sky-400 text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1 pb-5 pl-9">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
