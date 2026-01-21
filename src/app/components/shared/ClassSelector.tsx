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
      } else if (cookieValue) {
        setSelectedClass(cookieValue as string);

        router.replace(`${pathname}?classId=${cookieValue}&page=1`, {
          scroll: false,
        });
      } else if (classes && classes.length > 0) {
        const defaultId = classes[0].id as string;
        setSelectedClass(defaultId);
        await setCookie(cookieName, defaultId);
        router.replace(`${pathname}?classId=${defaultId}&page=1`, {
          scroll: false,
        });
      }
    };

    initValue();
  });

  const handleChange = (value: string) => {
    setSelectedClass(value);

    const params = new URLSearchParams(searchParams.toString());
    params.set('classId', value);
    params.set('page', '1');

    setCookie(cookieName, value);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    if (onChange) onChange(value);
  };

  return (
    <div className="relative ">
      <Select value={selectedClass} onValueChange={handleChange}>
        <SelectTrigger className="bg-primary text-primary-foreground font-medium border-primary/20 shadow-sm">
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
