'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Youtube,
} from 'lucide-react';

const ContactPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In Touch
          </motion.h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Have questions about admissions or school activities? We are here to
            help you. Reach out to us anytime.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              {...fadeIn}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Info
              </h3>

              <div className="space-y-6">
                <ContactInfoItem
                  icon={<MapPin className="text-primary" />}
                  title="Location"
                  detail="Dharmopur, Gobindaganj, Gaibandha, Rangpur, Bangladesh"
                />
                <ContactInfoItem
                  icon={<Phone className="text-primary" />}
                  title="Phone"
                  detail="+880 1700-000000"
                />
                <ContactInfoItem
                  icon={<Mail className="text-primary" />}
                  title="Email"
                  detail="info@dhormopurschool.edu.bd"
                />
                <ContactInfoItem
                  icon={<Clock className="text-primary" />}
                  title="Office Hours"
                  detail="Sat - Thu: 9:00 AM - 4:00 PM"
                />
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <SocialIcon icon={<Facebook size={20} />} href="#" />
                  <SocialIcon icon={<Twitter size={20} />} href="#" />
                  <SocialIcon icon={<Youtube size={20} />} href="#" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                Send us a Message
              </h3>
              <form
                className="grid md:grid-cols-2 gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Student/Parent Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="example@mail.com"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Admission Inquiry"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg active:scale-95"
                  >
                    <Send size={18} />
                    Submit Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section - Focused on Plus Code: 5CFW+2QR */}
      <section className="h-[450px] w-full bg-gray-200 relative mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.123!2d89.431!3d25.123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzE4LjAiTiA4OcKwMjUnNTIuOCJF!5e0!3m2!1sen!2sbd!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="School Location"
        ></iframe>
      </section>
    </div>
  );
};

const ContactInfoItem = ({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) => (
  <div className="flex gap-4 group">
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
    </div>
  </div>
);

const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all shadow-sm"
  >
    {icon}
  </a>
);

export default ContactPage;
