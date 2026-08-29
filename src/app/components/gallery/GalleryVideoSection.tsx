'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Film, Sparkles, Clock, Eye, X, Video } from 'lucide-react';
import Image from 'next/image';
import heroImg from '@/assets/hero.jpg';
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/hero3.jpg';
import photo3 from '@/assets/nurseryresult.jpg';

export default function GalleryVideoSection() {
  const [activeVideo, setActiveVideo] = useState<{ title: string; url: string } | null>(null);

  const videos = [
    {
      id: 1,
      title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ও মার্চপাস্ট ২০২৪',
      category: 'ক্রীড়া ইভেন্ট',
      duration: '৩:৪৫ মিনিট',
      views: '২.৪k ভিউ',
      thumbnail: hero3,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      desc: 'শিক্ষার্থীদের মনোমুগ্ধকর কুচকাওয়াজ, মশাল প্রজ্বালন ও অলিম্পিক ধাঁচের মার্চপাস্ট হাইলাইটস।',
    },
    {
      id: 2,
      title: 'বর্ণাঢ্য সাংস্কৃতিক সন্ধ্যা ও মঞ্চ নাটক',
      category: 'সাংস্কৃতিক সন্ধ্যা',
      duration: '৫:২০ মিনিট',
      views: '১.৮k ভিউ',
      thumbnail: hero2,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      desc: 'জাতীয় দিবস উপলক্ষে শিক্ষার্থীদের দলগত নৃত্য, আবৃত্তি ও সামাজিক নাটকের চোখজুড়ানো মুহূর্ত।',
    },
    {
      id: 3,
      title: 'বিজ্ঞান মেলা ও রোবোটিক্স ইনোভেশন শোকেস',
      category: 'বিজ্ঞান ও প্রযুক্তি',
      duration: '৪:১০ মিনিট',
      views: '১.৫k ভিউ',
      thumbnail: photo3,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      desc: 'ক্ষুদে বিজ্ঞানীদের উদ্ভাবনী রোবট, সোলার সিস্টেম ও স্মার্ট এগ্রিকালচার প্রজেক্ট প্রদর্শনী।',
    },
    {
      id: 4,
      title: 'ভার্চুয়াল ক্যাম্পাস ট্যুর ও আধুনিক ক্লাসরুম',
      category: 'ক্যাম্পাস পরিচিতি',
      duration: '২:৫০ মিনিট',
      views: '৩.২k ভিউ',
      thumbnail: heroImg,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      desc: 'ডিজিটাল স্মার্ট ক্লাসরুম, বিজ্ঞান ল্যাব, লাইব্রেরি ও খেলার মাঠের সার্বিক ভিডিও পরিচিতি।',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-slate-100/80 dark:from-slate-900 dark:via-[#0B132B] dark:to-slate-950 border-y border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Ambient Mesh Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <Film className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>ভিডিও গ্যালারি ও ক্যাম্পাস ডকুমেন্টারি</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            ভিডিও চিত্রে আমাদের{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              কার্যক্রম
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            উৎসবের আনন্দ, ক্রীড়ার উত্তেজনা এবং বিজ্ঞান মেলার সেরা ভিডিও মুহূর্তগুলো উপভোগ করুন।
          </p>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setActiveVideo({ title: video.title, url: video.videoUrl })}
              className="group relative rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:-translate-y-1 backdrop-blur-md"
            >
              {/* Thumbnail Stage */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1 border border-white/20">
                  <Clock className="w-3 h-3 text-sky-400" />
                  <span>{video.duration}</span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-blue-600/90 backdrop-blur-md text-[10px] font-bold text-white">
                  {video.category}
                </div>

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-blue-500 transition-all duration-300 ring-4 ring-white/30">
                    <Play className="w-5 h-5 fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Info Content */}
              <div className="p-5 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">
                  {video.desc}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-blue-500" />
                    <span>{video.views}</span>
                  </span>
                  <span className="text-blue-600 dark:text-sky-400 font-bold group-hover:underline">
                    ভিডিও দেখুন
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 px-6 bg-slate-950 text-white border-b border-white/10">
                <span className="text-sm font-bold truncate pr-4">
                  {activeVideo.title}
                </span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Embed Stage */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                <iframe
                  src={`${activeVideo.url}?autoplay=1`}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
