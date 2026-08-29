'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ContactFAQ() {
  const contactFaqs = [
    {
      q: 'স্কুলে সরাসরি এসে ভর্তি ফরম সংগ্রহের নিয়ম ও অফিস সময় কী?',
      a: 'শনিবার থেকে বৃহস্পতিবার প্রতিদিন সকাল ৮:০০টা থেকে বিকাল ৪:৩০টা পর্যন্ত আমাদের প্রশাসনিক ভবনের নিচতলায় ভর্তি ডেস্ক থেকে সরাসরি ভর্তি ফরম সংগ্রহ ও জমা দেওয়া যায়।',
    },
    {
      q: 'অনলাইন ফর্ম পূরণ করে পাঠালে কত সময়ের মধ্যে কনফার্মেশন পাওয়া যাবে?',
      a: 'অনলাইনে বার্তা বা ভর্তি জিজ্ঞাসা পাঠানোর পর সাধারণত ২৪ ঘণ্টার মধ্যে আমাদের দায়িত্বপ্রাপ্ত কর্মকর্তা আপনার দেওয়া মোবাইল নম্বরে কল করে বা এসএমএসের মাধ্যমে বিস্তারিত নিশ্চিত করবেন।',
    },
    {
      q: 'অভিভাবকগণ প্রধান শিক্ষক মহোদয়ের সাথে সাক্ষাত করতে চাইলে করণীয় কী?',
      a: 'যেকোনো কার্যদিবসে সকাল ১০:০০টা থেকে দুপুর ১:০০টার মধ্যে সরাসরি প্রধান শিক্ষকের কার্যালয়ে এসে সাক্ষাত করা যায়। বিশেষ আলোচনার জন্য পূর্বে ফোনে অ্যাপয়েন্টমেন্ট নেওয়া সুবিধাজনক।',
    },
    {
      q: 'ভর্তির সময় কী কী প্রয়োজনীয় কাগজপত্র জমা দিতে হবে?',
      a: 'শিক্ষার্থীর অনলাইন জন্মনিবন্ধন সনদের ফটোকপি, ৪ কপি পাসপোর্ট সাইজ রঙিন ছবি, পিতা ও মাতার জাতীয় পরিচয়পত্রের ফটোকপি এবং পূর্ববর্তী স্কুলের ছাড়পত্র/রিপোর্ট কার্ড (প্রযোজ্য ক্ষেত্রে)।',
    },
    {
      q: 'দূরবর্তী এলাকা থেকে যাতায়াতের জন্য স্কুল ভ্যান সুবিধা কীভাবে নেওয়া যায়?',
      a: 'আমাদের পরিবহন শাখায় যোগাযোগ করে শিক্ষার্থীর বাসস্থান ও নির্দিষ্ট রুট অনুযায়ী ভ্যান সার্ভিসের সুবিধা নেওয়া যায়। আমাদের নিজস্ব দায়িত্বশীল ভ্যানচালকদের তত্ত্বাবধানে নিরাপদ যাতায়াত নিশ্চিত করা হয়।',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-100/80 dark:from-slate-900 dark:via-[#0B132B] dark:to-slate-950 border-t border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
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
            <span>যোগাযোগ ও ভর্তি সংক্রান্ত সাধারণ প্রশ্নোত্তর</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            ভর্তি বিষয়ক সাধারণ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              জিজ্ঞাসা
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            ভর্তি ফরম, সময়সূচি ও সাক্ষাতের নিয়মাবলি সম্পর্কে দ্রুত ধারণা নিন।
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
            {contactFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`contact-faq-${idx}`}
                className="bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl px-5 sm:px-6 shadow-xs overflow-hidden transition-colors backdrop-blur-md"
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
