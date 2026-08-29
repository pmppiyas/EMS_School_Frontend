'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, PhoneCall, Send, Navigation, Calendar } from 'lucide-react';

export default function ContactCards() {
  const cards = [
    {
      icon: Phone,
      title: 'সরাসরি ফোন ও হেল্পলাইন',
      primaryText: '+৮৮০ ১৯১৭-৬৯২১৩৬',
      secondaryText: 'ভর্তি ডেস্ক: +৮৮০ ১৭১১-২৩৪৫৬৭',
      sub: 'শনিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:৩০',
      actionText: 'সরাসরি কল করুন',
      actionHref: 'tel:+8801917692136',
      tone: 'bg-blue-500/10 text-blue-600 dark:text-sky-400',
      badge: 'তাত্ক্ষণিক সহায়তা',
    },
    {
      icon: Mail,
      title: 'অফিসিয়াল ইমেইল ইনবক্স',
      primaryText: 'info@dhormopurschool.edu.bd',
      secondaryText: 'admissions@dhormopurschool.edu.bd',
      sub: '২৪ ঘণ্টার মধ্যে ফিরতি ইমেইল নিশ্চিত করা হয়',
      actionText: 'ইমেইল লিখুন',
      actionHref: 'mailto:info@dhormopurschool.edu.bd',
      tone: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      badge: 'অনলাইন ডেস্ক',
    },
    {
      icon: MapPin,
      title: 'ক্যাম্পাস ঠিকানা ও অবস্থান',
      primaryText: 'ধর্মপুর মেইন রোড, গোবিন্দগঞ্জ',
      secondaryText: 'গাইবান্ধা, রংপুর বিভাগ, বাংলাদেশ',
      sub: 'গোবিন্দগঞ্জ উপজেলা সদর থেকে মাত্র ১০ মিনিটের দূরত্ব',
      actionText: 'ম্যাপে ডিরেকশন দেখুন',
      actionHref: '#campus-map',
      tone: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
      badge: 'ক্যাম্পাস ভিজিট',
    },
    {
      icon: Clock,
      title: 'অফিস ও ভিজিটিং সময়সূচি',
      primaryText: 'শনি - বৃহস্পতি: সকাল ৮:০০ - ৪:৩০',
      secondaryText: 'অধ্যক্ষের সাক্ষাত: সকাল ১০:০০ - ১:০০',
      sub: 'শুক্রবার অফিস বন্ধ (অনলাইন সাপোর্ট চালু)',
      actionText: 'সাক্ষাতের পরামর্শ',
      actionHref: '#contact-form',
      tone: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
      badge: 'কার্যদিবস',
    },
  ];

  return (
    <section className="w-full py-12 bg-white dark:bg-[#060D1A] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-6 sm:p-7 rounded-3xl bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 backdrop-blur-md"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.tone} shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1">
                    {card.title}
                  </h3>

                  <p className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-snug break-all group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
                    {card.primaryText}
                  </p>

                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1 break-all">
                    {card.secondaryText}
                  </p>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                    {card.sub}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800">
                  <a
                    href={card.actionHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-sky-400 group-hover:text-blue-700 dark:group-hover:text-sky-300 group-hover:gap-2.5 transition-all"
                  >
                    <span>{card.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
