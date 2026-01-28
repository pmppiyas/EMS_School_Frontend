'use client';

import Header from '@/app/components/shared/Header';
import nursery from '@/assets/nursery.jpg';
import photo3 from '@/assets/nurseryresult.jpg';
import photo2 from '@/assets/oyada.jpg';
import photo1 from '@/assets/oyada2.jpg';
import pared from '@/assets/pared.jpg';
import pareda from '@/assets/paredresult.jpg';
import { motion } from 'framer-motion';
import { Camera, Eye, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const Featured = () => {
  const images = [
    {
      src: pared,
      label: 'Annual Sports Day',
      span: 'md:col-span-2 md:row-span-2',
      gradient: 'from-blue-600/80 to-purple-600/80',
    },
    {
      src: pared,
      label: 'Cultural Program',
      span: '',
      gradient: 'from-pink-600/80 to-rose-600/80',
    },
    {
      src: pareda,
      label: 'Classrooms',
      span: '',
      gradient: 'from-emerald-600/80 to-teal-600/80',
    },
    {
      src: nursery,
      label: 'Science Labs',
      span: 'md:col-span-2',
      gradient: 'from-orange-600/80 to-amber-600/80',
    },
    {
      src: photo2,
      label: 'Education Tour',
      span: '',
      gradient: 'from-cyan-600/80 to-blue-600/80',
    },
    {
      src: photo1,
      label: 'Library',
      span: 'md:row-span-2',
      gradient: 'from-violet-600/80 to-purple-600/80',
    },
    {
      src: photo3,
      label: 'Student Activities',
      span: '',
      gradient: 'from-indigo-600/80 to-blue-600/80',
    },
    {
      src: pared,
      label: 'Morning Assembly',
      span: '',
      gradient: 'from-red-600/80 to-pink-600/80',
    },
  ];

  return (
    <div className="w-full lg:w-11/12 mx-auto py-16 relative overflow-hidden from-white via-gray-50 to-primary-foreground ">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b -z-10" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
      </div>

      <section className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Header title="School" title2="Gallery" />
          </motion.div>

          {/* Gallery Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 bg-background rounded-2xl p-6 shadow-lg border border-background"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-linear-to-br from-primary to-primary p-3 rounded-xl shadow-md">
                  <Camera className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Capturing School Memories
                  </h3>
                  <p className="text-muted-foreground">
                    Explore the vibrant life and activities at our school
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4" />
                <span>{images.length} Photos</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 mb-10">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.span} shadow-md hover:shadow-2xl transition-shadow duration-300`}
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay Base */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300" />

                {/* Colored Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-t ${image.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 border border-white/30">
                  <ZoomIn className="w-5 h-5 text-background" />
                </div>

                {/* Label - Always Visible, Enhanced on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-background backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                      <h3 className="text-foreground font-bold text-base md:text-lg mb-1">
                        {image.label}
                      </h3>
                      <div className="w-0 group-hover:w-16 h-1 bg-linear-to-r from-primary to-primary rounded-full transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-linear-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-3xl" />
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <button className="group relative bg-linear-to-r from-primary to-primary hover:from-primary/90 hover:to-primary/90 text-background px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Camera className="w-5 h-5 relative z-10" />
              <span className="relative z-10">View Full Gallery</span>
              <div className="w-0 group-hover:w-6 h-0.5 bg-background rounded-full transition-all duration-300 relative z-10" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
