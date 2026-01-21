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

const YearSelector = () => {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentYear = new Date().getFullYear().toString();
  const years = Array.from({ length: 5 }, (_, i) => {
    const y = (new Date().getFullYear() - 2 + i).toString();
    return { label: y, value: y };
  });

  useEffect(() => {
    const initValue = () => {
      const urlYear = searchParams.get('year');

      if (urlYear) {
        setSelectedYear(urlYear);
      } else {
        setSelectedYear(currentYear);
        const params = new URLSearchParams(searchParams.toString());
        params.set('year', currentYear);
        params.set('page', '1');

        router.replace(`${pathname}?${params.toString()}`, {
          scroll: false,
        });
      }
    };

    initValue();
  }, [searchParams, pathname, router, currentYear]);

  const handleChange = (value: string) => {
    setSelectedYear(value);

    const params = new URLSearchParams(searchParams.toString());
    params.set('year', value);
    params.set('page', '1');

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative min-w-[120px]">
      <Select value={selectedYear} onValueChange={handleChange}>
        <SelectTrigger className="bg-background text-primary font-medium border-input shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((y) => (
            <SelectItem key={y.value} value={y.value}>
              {y.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default YearSelector;
