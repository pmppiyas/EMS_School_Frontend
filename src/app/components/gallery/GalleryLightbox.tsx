'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Tag, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';
import { GalleryPhoto } from './galleryData';

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  selectedIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function GalleryLightbox({
  photos,
  selectedIndex,
  onClose,
  onSelectIndex,
}: GalleryLightboxProps) {
  const handlePrev = useCallback(() => {
    if (selectedIndex === null || photos.length === 0) return;
    onSelectIndex(selectedIndex > 0 ? selectedIndex - 1 : photos.length - 1);
  }, [selectedIndex, photos.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null || photos.length === 0) return;
    onSelectIndex(selectedIndex < photos.length - 1 ? selectedIndex + 1 : 0);
  }, [selectedIndex, photos.length, onSelectIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, onClose, handlePrev, handleNext]);

  if (selectedIndex === null || !photos[selectedIndex]) return null;

  const currentPhoto = photos[selectedIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 select-none"
        onClick={onClose}
      >
        {/* Top Floating Control Bar */}
        <div
          className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-50 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-blue-600/90 backdrop-blur-md text-white shadow-md border border-white/20">
              <Tag className="w-3 h-3 text-sky-300" />
              <span>{currentPhoto.category}</span>
            </span>

            <span className="text-xs text-slate-300 font-semibold px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              {selectedIndex + 1} / {photos.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 focus:outline-none cursor-pointer hover:scale-105"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Main Stage */}
        <div
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center pt-8 sm:pt-4"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentPhoto.id}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-[52vh] sm:h-[65vh] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900"
          >
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.title}
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Bottom Captions & Details */}
          <div className="mt-4 text-center text-white max-w-3xl px-4 space-y-1.5">
            <h3 className="text-base sm:text-xl font-bold tracking-tight text-white">
              {currentPhoto.title}
            </h3>

            <div className="flex items-center justify-center gap-4 text-[11px] sm:text-xs text-slate-400">
              {currentPhoto.date && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-sky-400" />
                  <span>{currentPhoto.date}</span>
                </span>
              )}
              {currentPhoto.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  <span>{currentPhoto.location}</span>
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              {currentPhoto.description}
            </p>
          </div>

          {/* Prev Navigation Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-1 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Navigation Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-1 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
