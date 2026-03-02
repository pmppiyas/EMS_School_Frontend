'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactCTA() {
  const contacts = [
    { icon: Phone, label: '+880 01917-692136', tone: 'chart-3' },
    { icon: Mail, label: 'office@dhormopur.edu.bd', tone: 'chart-2' },
    {
      icon: MapPin,
      label: 'ধর্মপুর, কাজলা, গোবিন্দগঞ্জ, গাইবান্ধা',
      tone: 'chart-3',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-20 text-center px-4"
    >
      <div className="relative group max-w-5xl mx-auto">
        {/* Glow Background */}
        <div className="absolute -inset-1 bg-linear-to-r from-primary via-primary to-primary/70 rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

        <div className="relative bg-white rounded-4xl p-10 md:p-14 shadow-2xl border border-gray-100 overflow-hidden">
          {/* Animated blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-primary/10 to-primary/10 blur-3xl rounded-full -mr-20 -mt-20 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-primary/10 to-primary/10 blur-3xl rounded-full -ml-20 -mb-20 animate-pulse" />

          <div className="relative z-10">
            {/* Tagline */}
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary uppercase bg-primary/5 rounded-full">
              যোগাযোগ করুন
            </span>

            <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              আমাদের অফিসের সাথে{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary">
                যোগাযোগ করুন
              </span>
            </h3>

            <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
              কোনো প্রশ্ন আছে? ভর্তি, সময়সূচি বা যেকোনো তথ্যের জন্য আমাদের
              প্রশাসনিক দল সাহায্যের জন্য প্রস্তুত।
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contacts.map((item, idx) => {
                let toneClass = '';
                if (item.tone === 'chart-1') toneClass = 'bg-chart-1';
                else if (item.tone === 'chart-2') toneClass = 'bg-chart-2';
                else if (item.tone === 'chart-3') toneClass = 'bg-chart-3';

                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center p-6 rounded-2xl bg-linear-to-b from-gray-50 to-white border border-gray-100 shadow-sm group/item hover:shadow-md transition-all"
                  >
                    <div
                      className={`${toneClass} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-4 group-hover/item:rotate-12 transition-transform`}
                    >
                      <item.icon className="text-white w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-gray-800 tracking-tight">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Button */}
            <Link href="/contact" className="inline-block">
              <button className="group relative bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 flex items-center gap-4 overflow-hidden">
                <span className="relative z-10">এখন যোগাযোগ করুন</span>
                <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />

                {/* Hover linear overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
