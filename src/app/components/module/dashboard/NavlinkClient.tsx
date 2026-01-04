/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import * as Icons from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinkClient({
  href,
  title,
  iconName,
}: {
  href: string;
  title: string;
  iconName: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const Icon = (Icons as any)[iconName] || Icons.IconCircle;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-md transition
          hover:bg-muted
          ${
            isActive
              ? 'bg-muted font-semibold text-primary'
              : 'text-muted-foreground'
          }
        `}
    >
      <Icon size={18} />
      {title}
    </Link>
  );
}
