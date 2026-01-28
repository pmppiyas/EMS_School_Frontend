'use client';

import head from '@/assets/head.png';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ClipboardList, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Information = () => {
  const cards = [
    {
      title: 'Our Teachers',
      icon: <Users className="w-6 h-6 text-primary" />,
      link: '/dashboard',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Results',
      icon: <ClipboardList className="w-6 h-6 text-primary" />,
      link: '/dashboard/result',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Exam ClassTime',
      icon: <Calendar className="w-6 h-6 text-primary" />,
      link: '/dashboard',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Routine',
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      link: '/dashboard/routine',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-16 w-full bg-linear-to-b  to-primary-foreground relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* MD Info */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:max-w-[400px] mx-auto lg:mx-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary to-primary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={head}
                  alt="Chairman"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-60-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <h2 className="text-4xl lg:text-5xl font-bold  mb-2 bg-linear-to-r from-primary to-primary bg-clip-text text-transparent">
                  MD Momirul Islam Liton
                </h2>
                <p className="text-xl text-muted-foreground font-medium">
                  Head & Chairman
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-primary to-primary rounded-full" />
              <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg pl-6">
                At Dhormopur Model KG School, we believe every child deserves a
                joyful and inspiring start to their educational journey. Our
                programs focus on nurturing curiosity, creativity, and social
                skills in a safe and caring environment. Through play-based
                learning, hands-on activities, and personalized attention, we
                help children build a strong foundation for lifelong learning.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Quick Links Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={card.link}
                className="group relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Animated Border */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}
                />

                {/* Icon Container */}
                <div
                  className={`relative flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-linear-to-br ${card.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-2xl" />
                  <div className="relative text-white">{card.icon}</div>
                </div>

                {/* Title */}
                <h3 className="relative text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                  {card.title}
                </h3>

                {/* Hover Arrow */}
                <div className="mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-8 h-0.5 bg-linear-to-r from-primary to-blue-500 rounded-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Information;
