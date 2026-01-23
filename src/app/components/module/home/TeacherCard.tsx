/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ITeacher } from '@/types/teacher.interface';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Mail, Phone, User } from 'lucide-react';
import Image from 'next/image';

export default function TeacherHoverCard({ teacher }: { teacher: ITeacher }) {
  const navigate = useRouter();

  return (
    <motion.div
      onClick={() => navigate.push(`/teacher/${teacher.id}`)}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className="group relative w-full p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-xl hover:border-primary/20 cursor-pointer transition-all duration-300 overflow-hidden"
    >
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-primary/10" />

      {/* Teacher Image placeholder */}
      <div className="relative w-24 h-24 mx-auto mb-5">
        <div className="w-full h-full rounded-full bg-muted flex items-center justify-center border-2 border-background shadow-inner overflow-hidden group-hover:border-primary/30 transition-colors">
          <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border-2 border-background shadow-md">
            <Image
              src={teacher.photo || '/placeholder-avatar.png'}
              alt={teacher.firstName}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-card rounded-full" />
      </div>

      {/* Name & Title */}
      <div className="text-center space-y-1 mb-5">
        <h3 className="text-lg font-bold tracking-tight text-foreground uppercase">
          {teacher.firstName} {teacher.lastName}
        </h3>
        <p className="text-xs font-black text-primary/80 uppercase tracking-widest">
          {teacher.designation ?? 'Faculty Member'}
        </p>
      </div>

      <div className="h-px w-full bg-border mb-5" />

      {/* Contact Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <Phone size={14} />
          </div>
          <span className="font-medium">{teacher.phoneNumber ?? 'N/A'}</span>
        </div>

        {teacher.email && (
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <Mail size={14} />
            </div>
            <span className="truncate font-medium">{teacher.email}</span>
          </div>
        )}
      </div>

      {/* Hover Line Detail */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
