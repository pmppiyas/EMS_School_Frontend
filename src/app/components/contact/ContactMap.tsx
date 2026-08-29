'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Navigation,
  Car,
  Bus,
  Compass,
  ExternalLink,
} from 'lucide-react';

export default function ContactMap() {
  const travelGuides = [
    {
      title: 'গোবিন্দগঞ্জ উপজেলা সদর থেকে',
      desc: 'গোবিন্দগঞ্জ মেইন বাজার মোড় থেকে অটো বা সিএনজিযোগে ধর্মপুর মডেল একাডেমি গেইট পর্যন্ত মাত্র ৭-১০ মিনিটের পথ।',
      icon: Bus,
    },
    {
      title: 'গাইবান্ধা জেলা সদর থেকে',
      desc: 'গাইবান্ধা বাস টার্মিনাল থেকে গোবিন্দগঞ্জগামী বাস বা লোকাল সিএনজিতে উঠে ধর্মপুর স্কুল মোড়ে নামলেই সামনে ক্যাম্পাস।',
      icon: Car,
    },
    {
      title: 'ক্যাম্পাস পার্কিং ও প্রবেশদ্বার',
      desc: 'ক্যাম্পাসের ভেতরে সম্মানিত অভিভাবকদের জন্য সুপরিসর বাইক ও গাড়ি পার্কিং জোন এবং ওয়েটিং লাউঞ্জ রয়েছে।',
      icon: Compass,
    },
  ];

  return (
    <section
      id="campus-map"
      className="w-full py-16 sm:py-24 bg-white dark:bg-[#060D1A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Ambient Mesh */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <Navigation className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>ক্যাম্পাস লোকেশন ও দিকনির্দেশনা</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            আমাদের ক্যাম্পাসে{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              কীভাবে পৌঁছাবেন
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            গোবিন্দগঞ্জ ও গাইবান্ধার যেকোনো স্থান থেকে সহজে ও নিরাপদে আমাদের
            ক্যাম্পাসে আসার সহজ রুট নির্দেশিকা।
          </p>
        </motion.div>

        {/* Map & Direction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Google Maps Stage (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200/80 dark:border-slate-800 h-[380px] sm:h-[460px] bg-slate-100 dark:bg-slate-900">
              <iframe
                title="Dharmapur Model Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114873.34484089856!2d89.43265888820624!3d25.56844962692292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2ce3f6a27e74d%3A0x6ceba59f6356c39f!2sSundarganj%20Upazila!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-lg text-xs">
                <p className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                  <span>ধর্মপুর মডেল একাডেমি</span>
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  গোবিন্দগঞ্জ, গাইবান্ধা
                </p>
              </div>
            </div>
          </motion.div>

          {/* Travel Guides Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="space-y-4">
              {travelGuides.map((guide, idx) => {
                const Icon = guide.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-3xl bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 space-y-2 backdrop-blur-md shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-13">
                      {guide.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
              >
                <span>গুগল ম্যাপসে লাইভ রুট দেখুন</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
