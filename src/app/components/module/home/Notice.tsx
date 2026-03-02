'use client';

import Header from '@/app/components/shared/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Bell, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const NoticeBoard = () => {
  const NoticeData = [
    {
      title: 'মিড-টার্ম পরীক্ষার সময়সূচি প্রকাশ',
      message:
        'সকল শ্রেণির মিড-টার্ম পরীক্ষার সময়সূচি প্রকাশিত হয়েছে। শিক্ষার্থীদের নির্ধারিত সময় অনুযায়ী প্রস্তুতি নেওয়ার জন্য অনুরোধ করা হচ্ছে। পরীক্ষার হলে প্রবেশের সময় পরিচয়পত্র সঙ্গে আনতে হবে।',
      url: '#',
      date: '২৮ জানুয়ারি, ২০২৬',
      category: 'পরীক্ষা',
    },
    {
      title: 'ক্যাম্পাস সংস্কার কার্যক্রম',
      message:
        'আগামী সপ্তাহ থেকে ক্যাম্পাসের কিছু অংশে সংস্কার কাজ শুরু হবে। সাময়িকভাবে কিছু শ্রেণিকক্ষ পরিবর্তন হতে পারে। কর্তৃপক্ষ শিক্ষার্থীদের অসুবিধা কমাতে সর্বোচ্চ চেষ্টা করবে।',
      url: '#',
      date: '২৫ জানুয়ারি, ২০২৬',
      category: 'ক্যাম্পাস',
    },
    {
      title: 'লাইব্রেরি সদস্যপদ নবায়ন',
      message:
        'নতুন সেমিস্টারের জন্য সকল শিক্ষার্থীকে লাইব্রেরি সদস্যপদ নবায়ন করতে অনুরোধ করা হচ্ছে। নবায়ন না করলে বই ধার নেওয়া ও ডিজিটাল রিসোর্স ব্যবহার করা যাবে না।',
      url: '#',
      date: '২২ জানুয়ারি, ২০২৬',
      category: 'লাইব্রেরি',
    },
  ];

  return (
    <div className="bg-background text-foreground w-full relative overflow-hidden">
      <section className="py-20 lg:w-11/12 mx-auto">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Header title="নোটিশ" title2="বোর্ড" />
          </motion.div>

          {/* Marquee */}
          <div className="relative my-12 overflow-hidden">
            <div className="flex gap-6 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
              {NoticeData.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium shadow-md hover:opacity-90 transition"
                >
                  <Bell className="w-5 h-5" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Accordion */}
            <div className="flex-1">
              <div className="bg-card border border-border rounded-2xl shadow-sm">
                <div className="bg-primary text-primary-foreground p-6 rounded-t-2xl">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <Bell className="w-6 h-6" />
                    সাম্প্রতিক ঘোষণা
                  </h3>
                </div>

                <Accordion type="single" collapsible className="px-6 py-4">
                  {NoticeData.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b border-border last:border-0"
                    >
                      <AccordionTrigger className="hover:no-underline py-6">
                        <div className="flex flex-col items-start gap-2 text-left">
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                              {item.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {item.date}
                            </span>
                          </div>

                          <span className="font-semibold text-foreground">
                            {item.title}
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                        <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                          {item.message}
                        </div>

                        <Link
                          href={item.url}
                          className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:gap-3 transition-all"
                        >
                          বিস্তারিত পড়ুন
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Side Panel */}
            <aside className="lg:w-80 space-y-6">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-6 h-6" />
                  <h4 className="text-xl font-bold">গুরুত্বপূর্ণ বার্তা</h4>
                </div>
                <p className="mb-4 text-primary-foreground/90">
                  বিদ্যালয়ের সর্বশেষ ঘোষণা ও আপডেট জানতে নিয়মিত নোটিশ বোর্ড
                  দেখুন।
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-background text-primary px-4 py-2 rounded-lg font-medium hover:bg-muted transition"
                >
                  সকল নোটিশ দেখুন
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-bold mb-4">দ্রুত লিংক</h4>

                <ul className="space-y-3">
                  {[
                    'একাডেমিক ক্যালেন্ডার',
                    'পরীক্ষার সময়সূচি',
                    'ইভেন্ট নিবন্ধন',
                    'যোগাযোগ করুন',
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition"
                      >
                        <span className="text-muted-foreground hover:text-foreground transition">
                          {link}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticeBoard;
