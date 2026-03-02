// 'use client';

// import { useCallback } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import { ChevronRight, ChevronLeft } from 'lucide-react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import ScrollIndicator from '@/app/components/module/home/ScrollIndicator';
// import { HERO_SLIDES } from '@/assets';
// import HeroStat from '@/app/components/shared/stats/HeroStat';

// export default function HeroSection() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ delay: 5000 }),
//   ]);

//   const scrollPrev = useCallback(
//     () => emblaApi && emblaApi.scrollPrev(),
//     [emblaApi]
//   );
//   const scrollNext = useCallback(
//     () => emblaApi && emblaApi.scrollNext(),
//     [emblaApi]
//   );

//   return (
//     <section className="relative w-full overflow-hidden ">
//       <div className="embla" ref={emblaRef}>
//         <div className="embla__container flex h-screen min-h-[600px]">
//           {HERO_SLIDES.map((slide) => (
//             <div
//               className="embla__slide flex-[0_0_100%] min-w-0 relative h-full"
//               key={slide.id}
//             >
//               {/* Background Image Container */}
//               <div className="absolute inset-0 w-full h-full ">
//                 <Image
//                   src={slide.image}
//                   alt={slide.title}
//                   fill
//                   className="object-cover object-center"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40" />
//               </div>

//               {/* Content Wrapper */}
//               <div className="relative z-10 h-full flex items-center pt-36 lg:pt-48">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                   <div className="max-w-3xl">
//                     <motion.h1
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.8 }}
//                       className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
//                     >
//                       {slide.title}
//                     </motion.h1>

//                     <motion.p
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.8, delay: 0.2 }}
//                       className="text-xl md:text-2xl text-primary font-medium mb-4"
//                     >
//                       {slide.subtitle}
//                     </motion.p>

//                     <motion.div
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.8, delay: 0.4 }}
//                       className="flex flex-col sm:flex-row gap-4 mb-12"
//                     >
//                       <button className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center shadow-lg hover:scale-105">
//                         Contact Us
//                         <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                       </button>
//                     </motion.div>

//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-3 gap-6 max-w-xl md:pb-28">
//                       {slide.stats.map((stat, i) => (
//                         <HeroStat key={i} {...stat} delay={0.5 + i * 0.1} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Slider Controls */}
//       <div className="absolute bottom-10 right-10 z-20 hidden gap-4 md:flex">
//         <button
//           onClick={scrollPrev}
//           className="p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-primary transition-colors"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={scrollNext}
//           className="p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-primary transition-colors"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>

//       <ScrollIndicator />
//     </section>
//   );
// }

'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollIndicator from '@/app/components/module/home/ScrollIndicator';
import { HERO_SLIDES } from '@/assets';
import HeroStat from '@/app/components/shared/stats/HeroStat';
import Link from 'next/link';

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="relative w-full overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex h-screen min-h-[600px]">
          {HERO_SLIDES.map((slide) => (
            <div
              className="embla__slide flex-[0_0_100%] min-w-0 relative h-full"
              key={slide.id}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40" />
              </div>

              <div className="relative z-10 h-full flex items-center pt-36 lg:pt-48">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-xl md:text-2xl text-primary font-medium mb-4"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                      <Link
                        href="/contact"
                        className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center shadow-lg hover:scale-105"
                      >
                        যোগাযোগ করুন
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>

                    <div className="grid grid-cols-3 gap-6 max-w-xl md:pb-28">
                      {slide.stats.map((stat, i) => (
                        <HeroStat key={i} {...stat} delay={0.5 + i * 0.1} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* স্লাইড কন্ট্রোল */}
      <div className="absolute bottom-10 right-10 z-20 hidden gap-4 md:flex">
        <button
          onClick={scrollPrev}
          className="p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-primary transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          className="p-3 rounded-full border border-white/20 bg-white/10 text-white hover:bg-primary transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <ScrollIndicator />
    </section>
  );
}
