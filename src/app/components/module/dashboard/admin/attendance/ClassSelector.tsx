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

      if (isClassExist || savedClassId === 'teacher') {
        router.push(`?classId=${savedClassId}`);
      }
    }
  }, [classes, router, searchParams]);

  const handleValueChange = (value: string) => {
    localStorage.setItem('selectedClassId', value);
    router.push(`?classId=${value}`);
  };

  return (
    <div className="flex items-center">
      <Select
        onValueChange={handleValueChange}
        value={selectedClassId}
      >
        <SelectTrigger className="w-[220px] h-11 bg-card text-card-foreground border-border rounded-xl shadow-sm transition-all duration-200 hover:border-primary hover:shadow-md">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="size-5 text-primary" />
            <SelectValue placeholder="Select Class" />
          </div>
        </SelectTrigger>

        <SelectContent className="bg-popover text-popover-foreground rounded-xl border-border shadow-xl overflow-hidden">
          <SelectItem
            value="teacher"
            className="py-2.5 px-3 focus:bg-accent cursor-pointer font-medium"
          >
            TEACHER
          </SelectItem>
          {classes?.map((cls) => (
            <SelectItem
              key={cls.id}
              value={cls.id}
              className="py-2.5 px-3 focus:bg-accent cursor-pointer font-medium"
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
