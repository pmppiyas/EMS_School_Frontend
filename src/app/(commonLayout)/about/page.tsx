'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Target,
  History,
  Users2,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';
import Image from 'next/image';
import heroImg from '@/assets/hero.jpg';
import FeatureCard from '@/app/components/about/FutureCard';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImg}
          alt="School Building"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center">
          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tighter"
          >
            About Our Institution
          </motion.h1>
          <div className="h-1.5 w-24 bg-primary mx-auto mt-4 rounded-full" />
        </div>
      </section>

      {/* Legacy & History */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-2 text-primary font-bold mb-4 uppercase tracking-widest text-sm">
              <History size={20} /> Our History
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              A Legacy of Excellence Since 2010
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dhormopur Model School & College was founded with a clear vision:
              to provide quality education and foster moral values in students.
              For over two decades, we have been a beacon of light in our
              community, shaping the leaders of tomorrow through innovation and
              discipline.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From a small building with 50 students to a modern campus with
              thousands, our journey has been defined by the success of our
              alumni who are serving the nation in various sectors.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image src={heroImg} alt="History" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeIn}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-blue-600" size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-loose">
                To empower students with a holistic education that combines
                academic excellence, technological proficiency, and strong moral
                character to navigate a complex global landscape.
              </p>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="text-green-600" size={30} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-loose">
                To be a premier institution that inspires curiosity, creativity,
                and lifelong learning, creating a future where every student
                contributes positively to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Our School?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<GraduationCap className="text-primary" />}
            title="Expert Faculty"
            desc="Highly qualified teachers dedicated to nurturing individual student potential."
          />
          <FeatureCard
            icon={<ShieldCheck className="text-primary" />}
            title="Safe Environment"
            desc="A secure and friendly campus focused on the physical and mental well-being of every child."
          />
          <FeatureCard
            icon={<Users2 className="text-primary" />}
            title="Extra-Curriculars"
            desc="Broad range of sports, arts, and debate clubs for overall development."
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
