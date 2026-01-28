'use client';
import ScrollIndicator from '@/app/components/module/home/ScrollIndicator';
import image from '@/assets/hero.jpg';
import { Award, ChevronRight, Heart, Users } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gray-900 pt-20 md:pt-24 py-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="EMS Training"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDuration: '6s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Dhormopur Model School & College
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-300 mb-6"
            >
              Nurturing Young Minds with Care and Creativity
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="text-lg text-gray-300 mb-10 max-w-2xl"
            >
              At Little Stars Kindergarten, we provide a fun and safe learning
              environment where children explore, play, and grow. Our programs
              are designed to develop curiosity, social skills, and early
              learning foundations for a bright future.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105">
                Enroll Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm border border-white/20 transition-all hover:scale-105">
                View Courses
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="grid grid-cols-3 gap-6 max-w-xl"
            >
              <Stat
                icon={<Users className="w-6 h-6 text-primary" />}
                value="5000+"
                label="Graduates"
                delay={0.5}
              />
              <Stat
                icon={<Award className="w-6 h-6 text-primary" />}
                value="98%"
                label="Pass Rate"
                delay={0.6}
              />
              <Stat
                icon={<Heart className="w-6 h-6 text-primary" />}
                value="25+"
                label="Years Experience"
                delay={0.7}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        className="absolute top-1/4 right-10 hidden lg:block animate-float"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />
            <span className="text-white font-semibold">
              Next Class Starts Soon
            </span>
          </div>
          <p className="text-gray-300 text-sm mt-2">Limited spots available</p>
        </div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
  delay = 0,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="text-center group cursor-default"
    >
      <div className="flex items-center justify-center mb-2 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
}
