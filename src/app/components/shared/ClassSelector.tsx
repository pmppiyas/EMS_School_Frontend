/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

import { getCookie, setCookie } from '@/lib/cookies';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { IClass } from '@/types/class.interface';

interface ClassSelectProps {
  withTeacher?: boolean;
  classes: IClass[];
  cookieName?: string;
  onChange?: (classId: string) => void;
}

const ClassSelector = ({
  withTeacher = false,
  classes,
  cookieName = 'selectedClassId',
  onChange,
}: ClassSelectProps) => {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initValue = async () => {
      const urlClassId = searchParams.get('classId');
      const cookieValue = await getCookie(cookieName);

      if (urlClassId) {
        setSelectedClass(urlClassId);

        if (urlClassId !== cookieValue) {
          await setCookie(cookieName, urlClassId);
        }
      } else if (cookieValue && classes.some((c) => c.id === cookieValue)) {
        setSelectedClass(cookieValue as string);
        updateUrl(cookieValue as string);
      } else if (classes.length > 0) {
        const defaultId = classes[0].id as string;
        setSelectedClass(defaultId);
        await setCookie(cookieName, defaultId);
        updateUrl(defaultId);
      }
    };

    initValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUrl = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('classId', value);
    params.set('page', '1');
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleChange = (value: string) => {
    setSelectedClass(value);
    setCookie(cookieName, value);
    updateUrl(value);

    if (onChange) onChange(value);
  };

  return (
    <div className="relative">
      <Select value={selectedClass} onValueChange={handleChange}>
        <SelectTrigger className="bg-primary text-primary-foreground font-medium border-primary/20 shadow-sm min-w-[140px]">
          <SelectValue placeholder="Choose Class" />
        </SelectTrigger>
        <SelectContent>
          {withTeacher && <SelectItem value="teacher">Teacher</SelectItem>}
          {classes?.map((c) => (
            <SelectItem key={c.id} value={c.id as string}>
              {c.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ClassSelector;
