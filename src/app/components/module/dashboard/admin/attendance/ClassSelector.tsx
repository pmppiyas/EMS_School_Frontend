'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { GraduationCap } from 'lucide-react';

interface IClass {
  id: string;
  name: string;
}

const ClassSelector = ({
  classes,
  selectedClassId,
}: {
  classes: IClass[];
  selectedClassId: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const savedClassId = localStorage.getItem('selectedClassId');
    const currentClassId = searchParams.get('classId');

    if (!currentClassId && savedClassId) {
      const isClassExist = classes.find((cls) => cls.id === savedClassId);

      if (isClassExist) {
        router.push(`?classId=${savedClassId}`);
      }
    }
  }, [classes, router, searchParams]);

  const handleValueChange = (value: string) => {
    localStorage.setItem('selectedClassId', value);
    router.push(`?classId=${value}`);
  };

  if (!classes || classes.length === 0) {
    return (
      <div className="h-11 px-4 flex items-center bg-destructive/10 text-destructive rounded-xl border border-destructive/20 text-sm font-semibold">
        No Class Found
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Select
        onValueChange={handleValueChange}
        value={selectedClassId || undefined}
      >
        <SelectTrigger className="w-[220px] h-11 bg-card text-card-foreground border-border rounded-xl shadow-sm transition-all duration-200 hover:border-primary hover:shadow-md focus:ring-2 focus:ring-primary focus:outline-none">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="size-5 text-primary" />
            <SelectValue placeholder="Select Class" />
          </div>
        </SelectTrigger>

        <SelectContent className="bg-popover text-popover-foreground rounded-xl border-border shadow-xl overflow-hidden animate-in zoom-in-95 duration-200">
          <SelectItem
            key="teacher"
            value="teacher"
            className="py-2.5 px-3 focus:bg-accent focus:text-accent-foreground cursor-pointer transition-colors font-medium"
          >
            TEACHER
          </SelectItem>
          {classes.map((cls) => (
            <SelectItem
              key={cls.id}
              value={cls.id}
              className="py-2.5 px-3 focus:bg-accent focus:text-accent-foreground cursor-pointer transition-colors font-medium"
            >
              {cls.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ClassSelector;
