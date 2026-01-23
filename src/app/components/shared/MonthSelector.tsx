'use client';

import { useState, useEffect } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { MONTHS } from '@/constant';
import { getCookie, setCookie } from '@/lib/cookies';

const MonthSelector = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initValue = async () => {
      const urlMonth = searchParams.get('month');
      const cookieMonth = await getCookie('month');

      if (urlMonth) {
        setSelectedMonth(urlMonth.toUpperCase());
      } else if (cookieMonth) {
        const val = (cookieMonth as string).toUpperCase();
        setSelectedMonth(val);
        router.replace(`${pathname}?month=${val}&page=1`, { scroll: false });
      } else {
        const currentMonthName = MONTHS[new Date().getMonth()];
        setSelectedMonth(currentMonthName);
        await setCookie('month', currentMonthName);
        router.replace(`${pathname}?month=${currentMonthName}&page=1`, {
          scroll: false,
        });
      }
    };

    initValue();
  }, [searchParams, pathname, router]);

  const handleChange = (value: string) => {
    setSelectedMonth(value);

    const params = new URLSearchParams(searchParams.toString());
    params.set('month', value);
    params.set('page', '1');
    setCookie('month', value);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative min-w[160px]">
      <Select value={selectedMonth} onValueChange={handleChange}>
        <SelectTrigger className="bg-background text-primary font-medium border-input shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
          <SelectValue placeholder="SELECT MONTH" />
        </SelectTrigger>
        <SelectContent>
          {MONTHS.map((month) => (
            <SelectItem key={month} value={month}>
              {month}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default MonthSelector;
