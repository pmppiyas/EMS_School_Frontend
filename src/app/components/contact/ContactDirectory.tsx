'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, UserCheck, CreditCard, Bus, ShieldCheck, PhoneForwarded, Sparkles } from 'lucide-react';

export default function ContactDirectory() {
  const departments = [
    {
      icon: UserCheck,
      dept: 'অধ্যক্ষ ও কেন্দ্রীয় প্রশাসন',
      person: 'অধ্যক্ষ মহোদয়ের সচিবালয়',
      phone: '+৮৮০ ১৯১৭-৬৯২১৩৬',
      email: 'principal@dhormopurschool.edu.bd',
      duty: 'প্রাতিষ্ঠানিক নীতি, পরামর্শ ও বিশেষ আবেদন',
      badge: 'প্রশাসন',
      tone: 'bg-blue-500/10 text-blue-600 dark:text-sky-400',
    },
    {
      icon: ShieldCheck,
      dept: 'ভর্তি ও শিক্ষার্থী নিবন্ধন সেল',
      person: 'ভর্তি ও ইনফরমেশন ডেস্ক ইনচার্জ',
      phone: '+৮৮০ ১৭১১-২৩৪৫৬৭',
      email: 'admissions@dhormopurschool.edu.bd',
      duty: 'নতুন ভর্তি ফরম, বয়সসীমা ও রেজিস্ট্রেশন',
      badge: 'ভর্তি ডেস্ক',
      tone: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    },
    {
      icon: CreditCard,
      dept: 'হিসাব ও টিউশন ফি কালেকশন',
      person: 'প্রধান হিসাবরক্ষণ কর্মকর্তা',
      phone: '+৮৮০ ১৮১২-৩৪৫৬৭৮',
      email: 'accounts@dhormopurschool.edu.bd',
      duty: 'মাসিক ফি, পরীক্ষার ফি ও অনলাইন পেমেন্ট',
      badge: 'হিসাব শাখা',
      tone: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    },
    {
      icon: Bus,
      dept: 'নিরাপত্তা ও পরিবহন সহায়তা',
      person: 'ক্যাম্পাস সিকিউরিটি ও রুট ইনচার্জ',
      phone: '+৮৮০ ১৬১৪-৫৬৭৮৯০',
      email: 'transport@dhormopurschool.edu.bd',
      duty: 'স্কুল ভ্যান রুট ও শিক্ষার্থী নিরাপত্তা',
      badge: 'পরিবহন ও কেয়ার',
      tone: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-100/80 dark:from-slate-900 dark:via-[#0B132B] dark:to-slate-950 border-y border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
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
            <PhoneForwarded className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>বিভাগভিত্তিক হেল্পলাইন ডিরেক্টরি</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            বিভাগীয় সরাসরি{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              যোগাযোগ নম্বর
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            আপনার নির্দিষ্ট বিষয়ের জন্য সরাসরি সংশ্লিষ্ট প্রশাসনিক বিভাগে যোগাযোগ করুন।
          </p>
        </motion.div>

        {/* Directory 4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, idx) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${dept.tone} shadow-2xs group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                      {dept.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 dark:text-white tracking-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
                    {dept.dept}
                  </h3>

                  <p className="text-xs font-semibold text-blue-700 dark:text-sky-300 mb-2">
                    {dept.person}
                  </p>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                    {dept.duty}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                  <a
                    href={`tel:${dept.phone}`}
                    className="flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                    <span>{dept.phone}</span>
                  </a>

                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-300 transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{dept.email}</span>
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
