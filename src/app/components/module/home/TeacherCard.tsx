'use client';

import { useState } from 'react';
import { ITeacher } from '@/types/teacher.interface';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Mail, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function TeacherHoverCard({
  teacher,
  index,
}: {
  teacher: ITeacher;
  index: number;
}) {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);

  const fullName = `${teacher.firstName} ${teacher.lastName}`.trim();
  const initials = teacher.firstName ? teacher.firstName.charAt(0) : 'T';

  return (
    <motion.div
      onClick={() => router.push(teacher.id ? `/teacher/${teacher.id}` : '#')}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: (index % 4) * 0.07,
        ease: 'easeOut',
      }}
      whileHover={{ y: -6 }}
      className="group relative w-full p-5 sm:p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800/90 shadow-xs dark:shadow-xl hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/50 cursor-pointer transition-all duration-300 flex flex-col justify-between text-slate-900 dark:text-white backdrop-blur-md"
    >
      <div>
        {/* Top Header: Badge & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-sky-300 border border-transparent dark:border-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 dark:group-hover:bg-slate-700 transition-colors">
            শিক্ষক পরিষদ
          </span>

          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>সক্রিয়</span>
          </span>
        </div>

        {/* Center: Avatar Photo */}
        <div className="relative w-20 h-20 sm:w-22 sm:h-22 mx-auto mb-4">
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-100 to-blue-50 dark:bg-slate-950 flex items-center justify-center ring-4 ring-slate-50 dark:ring-white/10 group-hover:ring-blue-100 dark:group-hover:ring-sky-400/30 shadow-sm overflow-hidden transition-all duration-300">
            {teacher.photo && !imageError ? (
              <Image
                src={teacher.photo}
                alt={fullName}
                fill
                sizes="88px"
                onError={() => setImageError(true)}
                className="object-cover transition-transform duration-500 group-hover:scale-108"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-600 text-white font-extrabold text-2xl shadow-inner">
                {initials}
              </div>
            )}
          </div>
        </div>

        {/* Name & Designation */}
        <div className="text-center space-y-1 mb-4">
          <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors line-clamp-1 flex items-center justify-center gap-1">
            <span>{fullName}</span>
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
          </h3>

          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 line-clamp-1">
            {teacher.designation || 'সহকারী শিক্ষক'}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-100 dark:bg-slate-800 mb-3.5" />

        {/* Contact Snippets */}
        <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
          {teacher.phoneNumber && (
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-blue-600 dark:text-sky-400 shrink-0" />
              <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">
                {teacher.phoneNumber}
              </span>
            </div>
          )}

          {teacher.email && (
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-sky-400 shrink-0 transition-colors" />
              <span className="font-medium text-slate-500 dark:text-slate-400 truncate">
                {teacher.email}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Minimalist Action */}
      <div className="pt-3.5 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-sky-400 group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
        <span>প্রোফাইল দেখুন</span>
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </motion.div>
  );
}
