'use client';

import { motion } from 'framer-motion';
import { Layers, FolderHeart, ArrowUpRight, Sparkles, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import pared from '@/assets/pared.jpg';
import photo2 from '@/assets/oyada.jpg';
import photo3 from '@/assets/nurseryresult.jpg';
import pareda from '@/assets/paredresult.jpg';

interface GalleryAlbumsProps {
  onSelectCategory: (cat: string) => void;
}

export default function GalleryAlbums({ onSelectCategory }: GalleryAlbumsProps) {
  const albums = [
    {
      title: 'বার্ষিক ক্রীড়া ও মার্চপাস্ট অ্যালবাম',
      category: 'ক্রীড়া',
      photosCount: '৪৫+ ছবি',
      year: '২০২৪ সেশন',
      cover: pared,
      desc: 'ক্রীড়া কুচকাওয়াজ, অ্যাথলেটিক্স এবং ট্রফি উদযাপনের সকল স্মরণীয় ছবি।',
    },
    {
      title: 'সাংস্কৃতিক সন্ধ্যা ও নাটক মঞ্চায়ন',
      category: 'সাংস্কৃতিক',
      photosCount: '৩৮+ ছবি',
      year: '২০২৪ সেশন',
      cover: photo2,
      desc: 'জাতীয় দিবস, নৃত্য, সঙ্গীত ও আবৃত্তি পরিবেশনার বর্ণিল সংগ্রহ।',
    },
    {
      title: 'বিজ্ঞান মেলা ও রোবোটিক্স ইনোভেশন',
      category: 'বিজ্ঞান ও ল্যাব',
      photosCount: '৩২+ ছবি',
      year: '২০২৪ সেশন',
      cover: photo3,
      desc: 'শিক্ষার্থীদের তৈরি আধুনিক বিজ্ঞান ও উদ্ভাবনী মডেল প্রদর্শনী।',
    },
    {
      title: 'মেধাবী শিক্ষার্থী সংবর্ধনা ও ট্রফি',
      category: 'পুরস্কার',
      photosCount: '৫০+ ছবি',
      year: '২০২৩-২৪ সেশন',
      cover: pareda,
      desc: 'ট্যালেন্টপুল বৃত্তি ও জিপিএ-৫ প্রাপ্ত কৃতি শিক্ষার্থীদের সম্মাননা।',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white dark:bg-[#060D1A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
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
            <Layers className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>বার্ষিক বিশেষ স্মৃতি সংগ্রহ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            বিশেষ ফটো{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300">
              অ্যালবামসমূহ
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            প্রতিটি বড় উৎসব ও শিক্ষাবর্ষের সকল আলোকচিত্র আলাদা অ্যালবামে সংরক্ষিত।
          </p>
        </motion.div>

        {/* Albums 4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {albums.map((album, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectCategory(album.category)}
              className="group relative rounded-3xl bg-slate-50/70 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-xs hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 backdrop-blur-md"
            >
              {/* Stack Cover Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-bold text-white">
                  {album.year}
                </div>

                {/* Photos Count Badge */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-xl bg-blue-600/90 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1 shadow-md">
                  <ImageIcon className="w-3 h-3" />
                  <span>{album.photosCount}</span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
                  {album.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">
                  {album.desc}
                </p>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-sky-400">
                  <span>অ্যালবাম খুলুন</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
