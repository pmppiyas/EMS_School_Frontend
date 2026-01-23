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
import { terms } from '@/constant';



const TermSelector = () => {
  const [selectedTerm, setSelectedTerm] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initValue = () => {
      const urlTerm = searchParams.get('term');

      if (urlTerm) {
        setSelectedTerm(urlTerm);
      } else {
        const defaultTerm = terms[0].value;
        setSelectedTerm(defaultTerm);

        const params = new URLSearchParams(searchParams.toString());
        params.set('term', defaultTerm);
        params.set('page', '1');

        router.replace(`${pathname}?${params.toString()}`, {
          scroll: false,
        });
      }
    };

    initValue();
  }, [searchParams, pathname, router]);

  const handleChange = (value: string) => {
    setSelectedTerm(value);

    const params = new URLSearchParams(searchParams.toString());
    params.set('term', value);
    params.set('page', '1');

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative ">
      <Select value={selectedTerm} onValueChange={handleChange}>
        <SelectTrigger className="bg-background text-primary font-medium border-input shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
          <SelectValue placeholder="Select Term" />
        </SelectTrigger>
        <SelectContent>
          {terms.map((t) => (
            <SelectItem key={t.value} value={t.value}>
              {t.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default TermSelector;
