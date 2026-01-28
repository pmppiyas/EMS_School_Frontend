'use client';

import Header from '@/app/components/shared/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Bell, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const NoticeBoard = () => {
  const NoticeData = [
    {
      title: 'Mid-Term Examination ClassTime Published',
      message:
        'The Mid-Term Examination ClassTime for all programs has officially been published. Students are advised to review the timetable carefully and make necessary preparations ahead of time. Please ensure that you bring your student ID to the examination hall and arrive at least fifteen minutes before your ClassTimed exam.',
      url: '#',
      date: 'Jan 28, 2026',
      category: 'Examination',
    },
    {
      title: 'Campus Renovation Work Announcement',
      message:
        'Renovation work will begin on different parts of the campus starting next week. Students may experience temporary changes in class locations, walkway restrictions, or noise during daytime hours. The management team is working to ensure that the renovation process causes minimal disruption to academic activities.',
      url: '#',
      date: 'Jan 25, 2026',
      category: 'Campus',
    },
    {
      title: 'Library Membership Renewal Reminder',
      message:
        'All students are reminded to renew their library memberships for the upcoming semester before the deadline. Without renewal, you will lose access to book borrowing, digital resources, and study room reservations. Visit the library help desk with your student ID to complete the process.',
      url: '#',
      date: 'Jan 22, 2026',
      category: 'Library',
    },
    {
      title: 'Co-Curricular Activities Week Registration',
      message:
        'Registration for Co-Curricular Activities Week is now open for all students. This event includes competitions, workshops, sports activities, and creative showcases designed to help students build confidence and discover new talents. Participation certificates will be provided, which can be valuable for future portfolios and university applications.',
      url: '#',
      date: 'Jan 20, 2026',
      category: 'Activities',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-primary-foreground via-gray-50 to-white w-full mx-auto relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
      </div>

      <section className="py-16 lg:w-11/12 mx-auto relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Header title="Notice" title2="Board" />
          </motion.div>

          {/* Enhanced Marquee Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-12"
          >
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary-foreground to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary-foreground to-transparent z-10" />

            <div className="slider-container w-full flex-nowrap relative overflow-hidden">
              <div className="marqueeSliderLeft flex items-center gap-5">
                {NoticeData.map((item, index) => (
                  <Link
                    href={item.url}
                    className="group relative py-5 px-8 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary capitalize text-white rounded-xl font-medium whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 border border-primary/20"
                    key={index}
                  >
                    <Bell className="w-5 h-5 group-hover:animate-pulse" />
                    <span>{item.title}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Accordion Section */}
          <div className="px-6 flex flex-col lg:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary/90 p-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Bell className="w-6 h-6" />
                    Recent Announcements
                  </h3>
                </div>

                <Accordion type="single" collapsible className="px-6 py-4">
                  {NoticeData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className="border-b border-gray-200 last:border-0"
                      >
                        <AccordionTrigger className="text-lg hover:no-underline group py-6">
                          <div className="flex flex-col items-start gap-2 text-left">
                            <div className="flex items-center gap-3 flex-wrap">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                {item.category}
                              </span>
                              <span className="flex items-center gap-1 text-sm text-gray-500">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                              </span>
                            </div>
                            <span className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                              {item.title}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary">
                            {item.message}
                          </div>
                          <Link
                            href={item.url}
                            className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:gap-3 transition-all"
                          >
                            Read More
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </motion.div>

            {/* Side Panel - Optional Featured Notice */}
            <motion.aside
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-80 space-y-6"
            >
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Bell className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Important</h4>
                </div>
                <p className="text-white/90 mb-4">
                  Stay updated with the latest announcements and notices from
                  the administration.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  View All Notices
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-bold text-gray-800 mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    'Academic Calendar',
                    'Exam Schedule',
                    'Event Registration',
                    'Contact Support',
                  ].map((link, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <Link
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-gray-700 group-hover:text-primary transition-colors">
                          {link}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticeBoard;
