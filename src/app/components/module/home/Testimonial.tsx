'use client';

import ContactCTA from '@/app/components/module/home/ContactCTA';
import Header from '@/app/components/shared/Header';
import { motion } from 'framer-motion';
import { Quote, Star, Users } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Parent',
      image: '/testimonials/parent1.jpg',
      rating: 5,
      text: "The dedication of the teachers and the supportive environment have made a remarkable difference in my child's academic progress and personal growth.",
      linear: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Karim Rahman',
      role: 'Parent',
      image: '/testimonials/parent2.jpg',
      rating: 5,
      text: 'Excellent school with outstanding facilities. My daughter loves going to school every day and has developed both academically and socially.',
      linear: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Nadia Hassan',
      role: 'Former Student',
      image: '/testimonials/student1.jpg',
      rating: 5,
      text: 'The values and education I received here shaped who I am today. The teachers went above and beyond to ensure every student succeeded.',
      linear: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'Mohammad Ali',
      role: 'Parent',
      image: '/testimonials/parent3.jpg',
      rating: 5,
      text: "A nurturing environment where children thrive. The school's focus on holistic development sets it apart from others in the region.",
      linear: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="bg-linear-to-b from-white via-primary-foreground to-gray-50 w-full mx-auto relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <section className="py-16 lg:w-11/12 mx-auto relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Header
              title="What"
              title2="Parents Say"
              sub="Hear from our school community about their experiences and why they trust us with their children's education"
            />
          </motion.div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 bg-linear-to-r from-primary to-blue-600 rounded-2xl p-6 md:p-8 text-white shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">500+</div>
                  <div className="text-white/90 font-medium">
                    Happy Families
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <Star className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">4.9/5</div>
                  <div className="text-white/90 font-medium">
                    Average Rating
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <Quote className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">98%</div>
                  <div className="text-white/90 font-medium">Recommend Us</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* linear Accent on Hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${testimonial.linear} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />

                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-gray-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + i * 0.05,
                      }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10 min-h-[120px]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full bg-linear-to-br ${testimonial.linear} flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-3xl" />
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <ContactCTA />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
