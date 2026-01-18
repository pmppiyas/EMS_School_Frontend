/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useTransition } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

import { getCookie, setCookie } from '@/lib/cookies';
import { useRouter } from 'next/navigation';
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
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    const fetchActiveValue = async () => {
      const activeValue = await getCookie(cookieName);

      if (activeValue) {
        setSelectedClass(activeValue as string);
      } else if (classes.length > 0) {
        const defaultId = classes[0].id;
        setSelectedClass(defaultId as string);
        await setCookie(cookieName, defaultId as string);
      }
    };

    fetchActiveValue();
  }, [classes, cookieName]);

  const handleChange = async (value: string) => {
    setSelectedClass(value);
    onChange?.(value);

    startTransition(async () => {
      try {
        await setCookie(cookieName, value);

        router.refresh();
      } catch (err: any) {
        console.error(err);
      }
    });
  };

  return (
    <Select
      value={selectedClass}
      onValueChange={handleChange}
      disabled={isPending}
    >
      <SelectTrigger className="bg-primary text-background ">
        <SelectValue placeholder="Choose Class" />
      </SelectTrigger>
      <SelectContent>
        {withTeacher && (
          <SelectItem key="teacher" value="teacher">
            Teacher
          </SelectItem>
        )}
        {classes.map((c) => (
          <SelectItem key={c.id} value={c.id as string}>
            {c.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ClassSelector;
