'use client';

import ContactCTA from '@/app/components/module/home/ContactCTA';
import Header from '@/app/components/shared/Header';
import { motion } from 'framer-motion';
import { Quote, Star, Users } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'সারা আহমেদ',
      role: 'অভিভাবক',
      rating: 5,
      text: 'শিক্ষকদের নিবেদন এবং সহায়ক পরিবেশ আমার সন্তানের শিক্ষাজীবন ও ব্যক্তিগত বিকাশে অসাধারণ প্রভাব ফেলেছে।',
      tone: 'chart-2',
    },
    {
      name: 'করিম রহমান',
      role: 'অভিভাবক',
      rating: 5,
      text: 'চমৎকার বিদ্যালয় ও সুবিধাসম্পন্ন পরিবেশ। আমার কন্যা প্রতিদিন বিদ্যালয়ে যেতে ভালোবাসে এবং শিক্ষাগত ও সামাজিকভাবে উন্নতি করেছে।',
      tone: 'chart-2',
    },
    {
      name: 'নাদিয়া হাসান',
      role: 'প্রাক্তন শিক্ষার্থী',
      rating: 5,
      text: 'এখানকার শিক্ষা এবং মূল্যবোধ আমাকে আজকের আমি হতে সাহায্য করেছে। শিক্ষকরা প্রতিটি শিক্ষার্থীর সাফল্যের জন্য অতিরিক্ত যত্ন নেন।',
      tone: 'chart-3',
    },
    {
      name: 'মোহাম্মদ আলী',
      role: 'অভিভাবক',
      rating: 5,
      text: 'একটি যত্নশীল পরিবেশ যেখানে শিশুরা বিকাশ লাভ করে। বিদ্যালয়ের সামগ্রিক উন্নয়নের দিকে মনোযোগ অন্যান্য বিদ্যালয়ের চেয়ে আলাদা।',
      tone: 'chart-4',
    },
  ];

  return (
    <div className="bg-background text-foreground w-full relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full filter blur-3xl" />
      </div>

      <section className="py-16 lg:w-11/12 mx-auto relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Header
              title="অভিভাবকরা কি বলেন"
              sub="আমাদের বিদ্যালয়ের অভিজ্ঞতা এবং কেন তারা তাদের সন্তানের শিক্ষা আমাদের হাতে বিশ্বাস করেন, তা জানুন।"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 bg-primary p-6 md:p-8 rounded-2xl text-white shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">৫০০+</div>
                  <div className="text-white/90 font-medium">
                    সন্তুষ্ট পরিবার
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">৪.৯/৫</div>
                  <div className="text-white/90 font-medium">গড় রেটিং</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">৯৮%</div>
                  <div className="text-white/90 font-medium">
                    আমাদের সুপারিশ করেন
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => {
              let toneClass = '';
              if (testimonial.tone === 'chart-1') toneClass = 'bg-chart-1';
              else if (testimonial.tone === 'chart-2') toneClass = 'bg-chart-2';
              else if (testimonial.tone === 'chart-3') toneClass = 'bg-chart-3';
              else if (testimonial.tone === 'chart-4') toneClass = 'bg-chart-4';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed relative z-10 min-h-[120px]">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 relative z-10">
                    <div
                      className={`${toneClass} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <ContactCTA />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
