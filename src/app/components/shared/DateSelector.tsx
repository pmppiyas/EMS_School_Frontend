'use client';

import {
  format,
  addDays,
  subDays,
  isToday,
  isAfter,
  startOfDay,
} from 'date-fns';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useRouter, useSearchParams } from 'next/navigation';

export function DateSelector({ withNavigation }: { withNavigation?: boolean }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const dateParam = searchParams.get('date');

  const currentDate = startOfDay(dateParam ? new Date(dateParam) : new Date());

  const updateUrl = (newDate: Date) => {
    const formattedDate = format(newDate, 'yyyy-MM-dd');
    const params = new URLSearchParams(searchParams.toString());
    params.set('date', formattedDate);
    router.push(`?${params.toString()}`);
  };

  const goToPrevDay = () => updateUrl(subDays(currentDate, 1));
  const goToNextDay = () => updateUrl(addDays(currentDate, 1));

  const showNextButton =
    !isToday(currentDate) && !isAfter(currentDate, new Date());

  return (
    <div className="flex items-center gap-2 rounded-lg max-w-fit">
      {withNavigation && (
        <Button
          size="icon"
          onClick={goToPrevDay}
          className="h-9 w-17 text-background hover:bg-primary/80"
        >
          <ChevronLeft className="h-5 w-5" /> Prev
        </Button>
      )}

      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              'h-9 justify-start text-left font-bold text-background',
              !currentDate && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {currentDate ? (
              format(currentDate, 'dd MMM, yyyy')
            ) : (
              <span>Pick date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            mode="single"
            selected={currentDate}
            onSelect={(date) => date && updateUrl(date)}
            disabled={(date) => date > new Date()}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {withNavigation && showNextButton && (
        <Button
          size="icon"
          onClick={goToNextDay}
          className="h-9  w-17 text-background hover:bg-primary/80"
        >
          <ChevronRight className="h-5 w-5" /> Next
        </Button>
      )}
    </div>
  );
}
