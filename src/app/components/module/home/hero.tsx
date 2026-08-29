'use client';

import { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Award,
  Users,
  Trophy,
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HERO_SLIDES } from '@/assets';
import HeroStat from '@/app/components/shared/stats/HeroStat';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5500, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-950 via-indigo-950 to-slate-900">
      <div className="embla w-full" ref={emblaRef}>
        <div className="embla__container flex w-full h-screen min-h-[640px] max-h-[960px]">
          {HERO_SLIDES.map((slide, index) => {
            const isCurrent = selectedIndex === index;
            return (
              <div
                className="embla__slide flex-[0_0_100%] min-w-full relative h-full w-full"
                key={slide.id}
              >
                {/* Background Image with Full-Width Royal Gradient Overlays */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
                    priority={index === 0}
                  />
                  {/* Full-width multi-layer uniform dark & vibrant gradient masks */}
                  <div className="absolute inset-0 w-full h-full bg-slate-950/70" />
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-950/95 via-blue-950/85 to-indigo-950/80" />
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-slate-950/95 via-transparent to-black/50" />
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-14">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="max-w-3xl space-y-6">
                      {/* Top Badge - Soothing & Elegant */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isCurrent ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-sky-600/30 backdrop-blur-md border border-sky-400/40 text-sky-200 text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/10"
                      >
                        <Trophy className="w-4 h-4 text-sky-400 animate-bounce" />
                        <span>গৌরবময় ঐতিহ্য ও আধুনিক শিক্ষা ব্যবস্থা</span>
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      </motion.div>

                      {/* Main Heading */}
                      <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={isCurrent ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-3.5xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.18] sm:leading-[1.15] drop-shadow-md"
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Subtitle - Vibrant Accent */}
                      <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={isCurrent ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl sm:text-2xl text-sky-300 font-bold flex items-center gap-2"
                      >
                        <Sparkles className="w-5 h-5 text-sky-400" />
                        <span>{slide.subtitle}</span>
                      </motion.p>

                      {/* Description */}
                      {slide.description && (
                        <motion.p
                          initial={{ opacity: 0, y: 25 }}
                          animate={isCurrent ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.7, delay: 0.25 }}
                          className="text-sm sm:text-base text-blue-50/90 max-w-2xl leading-relaxed font-medium"
                        >
                          {slide.description}
                        </motion.p>
                      )}

                      {/* Dual Action Buttons - Soothing & Elegant */}
                      <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={isCurrent ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="flex flex-wrap items-center gap-4 pt-2"
                      >
                        <Button
                          size="lg"
                          asChild
                          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-700 hover:via-indigo-700 hover:to-sky-700 text-white font-extrabold text-sm sm:text-base px-8 h-12.5 rounded-2xl shadow-xl shadow-blue-500/30 hover:scale-105 transition-all"
                        >
                          <Link href="/contact" className="flex items-center gap-2.5">
                            <span>ভর্তি ও যোগাযোগ</span>
                            <ArrowRight className="w-4.5 h-4.5" />
                          </Link>
                        </Button>

                        <Button
                          size="lg"
                          variant="outline"
                          asChild
                          className="border-2 border-white/40 text-white bg-white/15 hover:bg-white/25 backdrop-blur-md font-bold text-sm sm:text-base px-7 h-12.5 rounded-2xl hover:border-white transition-all"
                        >
                          <Link href="/about" className="flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-sky-300" />
                            <span>আমাদের একাডেমি</span>
                          </Link>
                        </Button>
                      </motion.div>

                      {/* Stats Glass Strip - Colorful Proud Cards */}
                      <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={isCurrent ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl pt-4"
                      >
                        {slide.stats.map((stat, i) => {
                          const cardStyles = [
                            'bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border-blue-400/40 text-blue-200',
                            'bg-gradient-to-br from-sky-600/30 to-blue-600/30 border-sky-400/40 text-sky-200',
                            'bg-gradient-to-br from-emerald-600/30 to-teal-600/30 border-emerald-400/40 text-emerald-200',
                          ];
                          return (
                            <div
                              key={i}
                              className={`p-3.5 sm:p-4.5 rounded-2xl backdrop-blur-xl border ${cardStyles[i % cardStyles.length]} text-center shadow-xl hover:scale-105 transition-transform`}
                            >
                              <HeroStat
                                {...stat}
                                delay={0.1 + i * 0.1}
                                valueColor="text-white"
                                labelColor="text-slate-100"
                              />
                            </div>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modern Floating Navigation Controls */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-12 z-20 flex items-center gap-4">
        {/* Dot Indicators */}
        <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selectedIndex === idx
                  ? 'w-7 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Arrow Navigation Pills */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous Slide"
            className="p-3 rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:border-transparent transition-all shadow-xl active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next Slide"
            className="p-3 rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:border-transparent transition-all shadow-xl active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
