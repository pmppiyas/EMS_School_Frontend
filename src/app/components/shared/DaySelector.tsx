/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState, useTransition } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { DAYS, days, IDay } from '@/constant';
import { setCookie } from '@/lib/cookies';

const DaySelector = ({
  cookieName = 'selectedDay',
  onChange,
}: {
  cookieName?: string;
  onChange?: (dayName: string) => void;
}) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [, startTransition] = useTransition();

  useEffect(() => {
    if (!selectedDay && days.length > 0) {
      const todayIndex = new Date().getDay();
      const todayName = DAYS[todayIndex];

      const validDay =
        days.find((d) => d.name === todayName)?.name || days[0].name;

      setSelectedDay(validDay);
      onChange?.(validDay);
    }
  }, [selectedDay, onChange]);

  const handleChange = async (value: string) => {
    setSelectedDay(value);
    onChange?.(value);

    startTransition(async () => {
      try {
        await setCookie(cookieName, value);
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <Select value={selectedDay} onValueChange={handleChange}>
      <SelectTrigger className="bg-primary text-background rounded-sm">
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
  );
};

export default DaySelector;
