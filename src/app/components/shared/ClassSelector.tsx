/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect, useTransition } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { IClass } from '@/types/attendance.interface';
import { setCookie } from '@/lib/cookies';

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
  const [selectedClass, setSelectedClass] = useState('');
  const [, startTransition] = useTransition();

  useEffect(() => {
    if (classes.length > 0 && !selectedClass) {
      setSelectedClass(classes[0].id);
      onChange?.(classes[0].id);
    }
  }, [classes, selectedClass, onChange]);

  const handleChange = async (value: string) => {
    setSelectedClass(value);
    onChange?.(value);

    startTransition(async () => {
      try {
        await setCookie(cookieName, value);
      } catch (err: any) {
        console.error(err);
      }
    });
  };

  return (
    <Select value={selectedClass} onValueChange={handleChange}>
      <SelectTrigger className="bg-primary text-background">
        <SelectValue placeholder="Choose Class" />
      </SelectTrigger>
      <SelectContent>
        {withTeacher && <SelectItem key="teacher" value="teacher" >Teacher</SelectItem>}
        {classes.map((c) => (
          <SelectItem key={c.id} value={c.id}>
            {c.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ClassSelector;
