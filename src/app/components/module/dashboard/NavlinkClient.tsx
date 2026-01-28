/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import * as Icons from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'; // useSearchParams যুক্ত করা হয়েছে
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  title: string;
  iconName: string;
}

const NavLinkClient = ({ href, title, iconName }: NavLinkProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // বর্তমান ব্রাউজারের পূর্ণ URL তৈরি করা হচ্ছে (পাথ + কুয়েরি প্যারামস)
  const fullCurrentPath = searchParams.toString()
    ? `${pathname}?${searchParams.toString()}`
    : pathname;

  // চেক করা হচ্ছে বর্তমান URL টি লিঙ্কের href এর সাথে হুবহু মিলে কি না
  // অথবা সাধারণ পাথের সাথে মিলে কি না
  const isActive = fullCurrentPath === href || pathname === href;

  const Icon = (Icons as any)[iconName] as LucideIcon;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group ${
        isActive
          ? 'bg-primary text-primary-foreground shadow-sm'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      }`}
    >
      <div
        className={`${isActive ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'}`}
      >
        {Icon ? (
          <Icon size={18} />
        ) : (
          <Icons.Circle size={18} className="opacity-20" />
        )}
      </div>

      <span className="text-sm font-medium tracking-wide">{title}</span>
    </Link>
  );
};

export default NavLinkClient;
