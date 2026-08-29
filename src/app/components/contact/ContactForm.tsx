'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  User,
  Phone,
  Mail,
  GraduationCap,
  HelpCircle,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    targetClass: '১ম শ্রেণি',
    inquiryType: 'নতুন শিক্ষাবর্ষে ভর্তি তথ্য',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const classes = [
    'প্লে-গ্রুপ',
    'নার্সারি',
    'কেজি (KG)',
    '১ম শ্রেণি',
    '২য় শ্রেণি',
    '৩য় শ্রেণি',
    '৪র্থ শ্রেণি',
    '৫ম শ্রেণি',
    '৬ষ্ঠ শ্রেণি',
    '৭ম শ্রেণি',
    '৮ম শ্রেণি',
    '৯ম শ্রেণি',
    '১০ম শ্রেণি',
  ];

  const inquiryTypes = [
    'নতুন শিক্ষাবর্ষে ভর্তি তথ্য',
    'টিউশন ফি ও পেমেন্ট সংক্রান্ত',
    'ক্যাম্পাস ভিজিট ও সাক্ষাত শিডিউল',
    'একাডেমিক ফলাফল বা প্রগ্রেস রিপোর্ট',
    'সার্টিফিকেট বা প্রশংসাপত্র সংক্রান্ত',
    'অন্যান্য প্রাতিষ্ঠানিক জিজ্ঞাসা',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      studentName: '',
      targetClass: '১ম শ্রেণি',
      inquiryType: 'নতুন শিক্ষাবর্ষে ভর্তি তথ্য',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact-form" className="w-full py-16 sm:py-24 bg-white dark:bg-[#060D1A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Explanatory Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-sky-500/10 border border-blue-200/80 dark:border-sky-400/20 text-blue-700 dark:text-sky-300 text-xs sm:text-sm font-bold shadow-2xs">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span>অনলাইন অনুসন্ধান ও বার্তা প্রেরক</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                আমাদের একটি{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
                  বার্তা পাঠান
                </span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                আপনার শিশুর ভর্তি, বয়সসীমা, সিলেবাস বা যেকোনো প্রশ্ন আমাদের জানান। আমাদের প্রশাসনিক টিম আপনার সাথে দ্রুত যোগাযোগ করে বিস্তারিত জানিয়ে দেবে।
              </p>
            </div>

            {/* Reassurance Checklist */}
            <div className="p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 space-y-3.5 backdrop-blur-md">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                যোগাযোগের বিশেষ সুবিধাসমূহ:
              </h3>

              <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                <span>২৪ ঘণ্টার মধ্যে নিশ্চিত ফিরতি কল বা ইমেইল</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                <span>অভিভাবকদের জন্য সম্পূর্ণ ফ্রি একাডেমিক কাউন্সেলিং</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                <span>ক্যাম্পাস ঘুরে দেখার জন্য ফ্রি অ্যাপয়েন্টমেন্ট শিডিউল</span>
              </div>
            </div>

            {/* Helpline Callout Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-600 text-white shadow-xl shadow-blue-500/20 space-y-2">
              <span className="text-xs font-bold text-sky-200 uppercase tracking-wider block">
                জরুরি হটলাইন সেবা
              </span>
              <p className="text-xl sm:text-2xl font-black tracking-tight">
                +৮৮০ ১৯১৭-৬৯২১৩৬
              </p>
              <p className="text-xs text-blue-100 font-light">
                সরাসরি ভর্তি ইনচার্জ মহোদয়ের সাথে কথা বলতে কল করুন।
              </p>
            </div>
          </motion.div>

          {/* Right Form Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-sm dark:shadow-2xl relative overflow-hidden backdrop-blur-md">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      আপনার বার্তা সফলভাবে গৃহীত হয়েছে!
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      ধন্যবাদ <span className="font-bold text-blue-600 dark:text-sky-400">{formData.parentName}</span>। আমাদের ভর্তি ও তথ্য বিষয়ক কর্মকর্তা শীঘ্রই আপনার দেওয়া ফোন নম্বর (<span className="font-bold">{formData.phone}</span>)-এ যোগাযোগ করবেন।
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md cursor-pointer transition-all hover:scale-105"
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span>আরেকটি বার্তা পাঠান</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Parent's Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                          <span>অভিভাবকের পূর্ণ নাম *</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="যেমন: মোঃ রফিকুল ইসলাম"
                          className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                          <span>মোবাইল নম্বর *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="০১৭xxxxxxxx বা ০১৯xxxxxxxx"
                          className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                          <span>ইমেইল ঠিকানা (ঐচ্ছিক)</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="example@mail.com"
                          className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all"
                        />
                      </div>

                      {/* Student's Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                          <span>শিক্ষার্থীর নাম (যদি থাকে)</span>
                        </label>
                        <input
                          type="text"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          placeholder="যেমন: আরিয়ান মাহমুদ"
                          className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Target Class Dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                          <span>আবেদিত/লক্ষ্যিত শ্রেণি</span>
                        </label>
                        <select
                          value={formData.targetClass}
                          onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                        >
                          {classes.map((cls) => (
                            <option key={cls} value={cls}>
                              {cls}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Inquiry Topic Dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                          <span>যোগাযোগের বিষয়</span>
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all cursor-pointer"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Detailed Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                        <span>আপনার বার্তা বা বিশেষ জিজ্ঞাসা *</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="আপনার প্রয়োজনীয় তথ্য বা জিজ্ঞাসা এখানে বিস্তারিত লিখুন..."
                        className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 px-8 rounded-2xl text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>বার্তা পাঠানো হচ্ছে...</span>
                          </>
                        ) : (
                          <>
                            <span>বার্তা পাঠান</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
