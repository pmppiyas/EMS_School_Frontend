'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import heroImg from '@/assets/hero.jpg';

const ContactPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-background text-foreground min-h-screen w-full">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg}
          alt="School Building"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/70" />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            আমাদের সঙ্গে যোগাযোগ করুন
          </motion.h1>

          <motion.p
            {...fadeIn}
            className="mt-6 text-white/80 max-w-2xl mx-auto text-lg"
          >
            আমাদের অভিজ্ঞ শিক্ষক ও যত্নশীল টিম শিশুর উন্নতি, নিরাপত্তা এবং
            আনন্দদায়ক শিক্ষার পরিবেশ নিশ্চিত করে।
          </motion.p>

          <motion.div
            {...fadeIn}
            className="h-1.5 w-24 bg-primary mx-auto mt-6 rounded-full"
          />
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* যোগাযোগ তথ্য */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              {...fadeIn}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border"
            >
              <h3 className="text-2xl font-bold mb-6">যোগাযোগের তথ্য</h3>

              <div className="space-y-6">
                <ContactInfoItem
                  icon={<MapPin size={20} />}
                  title="অবস্থান"
                  detail="ধরমপুর মেইন রোড, ঢাকা, বাংলাদেশ"
                />
                <ContactInfoItem
                  icon={<Phone size={20} />}
                  title="ফোন"
                  detail="+880 1917-692136"
                />
                <ContactInfoItem
                  icon={<Mail size={20} />}
                  title="ইমেইল"
                  detail="info@dhormopurschool.edu.bd"
                />
                <ContactInfoItem
                  icon={<Clock size={20} />}
                  title="অফিস সময়"
                  detail="শনিবার - বৃহস্পতিবার: ৯:০০ AM - ৪:০০ PM"
                />
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">আমাদের অনুসরণ করুন</h4>
                <div className="flex gap-4">
                  <SocialIcon icon={<Facebook size={20} />} href="#" />
                  <SocialIcon icon={<Twitter size={20} />} href="#" />
                  <SocialIcon icon={<Youtube size={20} />} href="#" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* যোগাযোগ ফর্ম */}
          <div className="lg:col-span-2">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 md:p-12 rounded-2xl shadow-sm border border-border"
            >
              <h3 className="text-2xl font-bold mb-8">
                আমাদের একটি বার্তা পাঠান
              </h3>

              <form
                className="grid md:grid-cols-2 gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <InputField
                  label="শিক্ষার্থী/অভিভাবকের নাম"
                  placeholder="প্রিন্স মাহমুদ পিয়াস"
                />
                <InputField
                  label="ইমেইল ঠিকানা"
                  type="email"
                  placeholder="example@mail.com"
                />

                <div className="md:col-span-2">
                  <InputField
                    label="বিষয়"
                    placeholder="ভর্তি সংক্রান্ত তথ্য"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium">বার্তা</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                    placeholder="আপনার বার্তা এখানে টাইপ করুন..."
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95"
                  >
                    <Send size={18} />
                    বার্তা পাঠান
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const InputField = ({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  type?: string;
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
    />
  </div>
);

const ContactInfoItem = ({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) => (
  <div className="flex gap-4 group cursor-pointer">
    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
      {icon}
    </div>
    <div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{detail}</p>
    </div>
  </div>
);

const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
  >
    {icon}
  </a>
);

export default ContactPage;
