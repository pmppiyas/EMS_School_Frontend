/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { DAYS, days, IDay } from '@/constant';
import { getCookie, setCookie } from '@/lib/cookies';

interface DaySelectorProps {
  cookieName?: string;
  onChange?: (dayName: string) => void;
}

const DaySelector = ({
  cookieName = 'selectedDay',
  onChange,
}: DaySelectorProps) => {
  const [selectedDay, setSelectedDay] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initValue = async () => {
      const urlDay = searchParams.get('day');
      const cookieValue = await getCookie(cookieName);

      if (urlDay) {
        setSelectedDay(urlDay);
      } else if (cookieValue) {
        setSelectedDay(cookieValue as string);

        router.replace(`${pathname}?day=${cookieValue}`, { scroll: false });
      } else {
        const todayIndex = new Date().getDay();
        const todayName = DAYS[todayIndex];
        const defaultDay =
          days.find((d) => d.name === todayName)?.name || days[0].name;

        setSelectedDay(defaultDay);
        await setCookie(cookieName, defaultDay);
        router.replace(`${pathname}?day=${defaultDay}`, { scroll: false });
      }
    };

    initValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async (value: string) => {
    setSelectedDay(value);

    // Update URL Params
    const params = new URLSearchParams(searchParams.toString());
    params.set('day', value);

    // Update Cookie
    await setCookie(cookieName, value);

    // Navigate
    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    if (onChange) onChange(value);
  };

  return (
    <div className="relative">
      <Select value={selectedDay} onValueChange={handleChange}>
        <SelectTrigger className="bg-primary text-primary-foreground font-medium border-primary/20 shadow-sm">
          <SelectValue placeholder="Select Day" />
        </SelectTrigger>

        <SelectContent>
          {days.map((day: IDay) => (
            <SelectItem key={day.id} value={day.name}>
              {day.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DaySelector;
