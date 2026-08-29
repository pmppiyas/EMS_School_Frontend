'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Tag, Calendar, MapPin, Eye, Filter } from 'lucide-react';
import Image from 'next/image';
import { GalleryPhoto, galleryCategories } from './galleryData';

interface GalleryGridProps {
  photos: GalleryPhoto[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  onSelectPhoto: (index: number) => void;
}

export default function GalleryGrid({
  photos,
  activeCategory,
  setActiveCategory,
  onSelectPhoto,
}: GalleryGridProps) {
  return (
    <section className="w-full py-10 bg-white dark:bg-[#060D1A] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Filter Pills & Counter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-slate-100/80 dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-300 hover:bg-blue-50/60 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Counter Badge */}
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-sky-300 bg-blue-50 dark:bg-slate-900 border border-blue-200/80 dark:border-slate-800 px-4 py-2 rounded-2xl shadow-xs shrink-0">
            <Eye className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>মোট {photos.length}টি স্মরণীয় মুহূর্ত</span>
          </div>
        </div>

        {/* Empty State */}
        {photos.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200/80 dark:border-slate-800 my-8">
            <Filter className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-50" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              কোনো ছবি পাওয়া যায়নি
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              অনুগ্রহ করে অন্য কোনো কি-ওয়ার্ড দিয়ে সার্চ করুন বা ক্যাটাগরি পরিবর্তন করুন।
            </p>
            <button
              onClick={() => setActiveCategory('সকল মুহূর্ত')}
              className="mt-4 px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-sm"
            >
              সকল ছবি দেখুন
            </button>
          </div>
        ) : (
          /* Modern Bento Grid Layout */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[240px] gap-4 sm:gap-6 mb-16">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
                onClick={() => onSelectPhoto(index)}
                className={`relative overflow-hidden rounded-3xl group cursor-pointer ${
                  photo.span || 'md:col-span-1 md:row-span-1'
                } bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300`}
              >
                {/* Main Photo */}
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Multi-layer Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Category & Location Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/20 shadow-sm">
                    <Tag className="w-3 h-3 text-sky-400" />
                    <span>{photo.category}</span>
                  </span>

                  {/* Zoom Trigger Button */}
                  <div className="w-8 h-8 rounded-full bg-white/25 group-hover:bg-blue-600 backdrop-blur-md flex items-center justify-center text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 text-white space-y-1">
                  <h3 className="font-bold text-sm sm:text-base tracking-tight leading-snug group-hover:text-sky-200 transition-colors drop-shadow-xs">
                    {photo.title}
                  </h3>

                  <div className="flex items-center gap-3 text-[11px] text-slate-300 font-light pt-0.5">
                    {photo.date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-sky-400 shrink-0" />
                        <span>{photo.date}</span>
                      </span>
                    )}
                    {photo.location && (
                      <span className="flex items-center gap-1 hidden sm:flex">
                        <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                        <span>{photo.location}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-300 mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-normal">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
