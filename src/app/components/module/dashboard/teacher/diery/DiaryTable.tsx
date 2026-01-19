/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  PlusCircle,
  Clock,
  User2,
  Edit3,
  AlertCircle,
  CalendarOff,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IDiaryResponse, IDiarySlot } from '@/types/diary.interface';
import { useEffect, useState } from 'react';

interface DiaryTableProps {
  data: IDiaryResponse;
  academicYear?: string;
  onOpenDialog?: (item: IDiarySlot) => void;
}

const DiaryTable = ({
  data,
  academicYear = '2026',
  onOpenDialog,
}: DiaryTableProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const diary = data?.diary || [];
  const className = data?.class || 'N/A';
  const date = data?.date || 'N/A';
  const day = data?.day || 'N/A';

  if (!mounted) return null;

  return (
    <div className="mx-auto shadow-2xl rounded-lg overflow-hidden bg-background/70 border border-border">
      {/* Header Section */}
      <div className="bg-primary p-4 text-primary-foreground">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{className}</h1>
            <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-xs mt-1">
              Class Record Book
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-mono font-bold">{date}</h2>
            <p className="text-xs font-semibold opacity-90">{day}</p>
          </div>
        </div>
      </div>

      {/* Diary Content Area */}
      <div className="divide-y-2 divide-border min-h-[200px]">
        {diary && diary.length > 0 ? (
          diary.map((item, index) => (
            <div
              key={item.periodId || index}
              className="grid grid-cols-4 group hover:bg-muted/30 transition-colors"
            >
              {/* Left side: Period Info */}
              <div className="col-span-1 p-2 flex flex-col justify-center items-center border-r-2 border-border/40 bg-muted/50 group-hover:bg-muted transition-colors">
                <span className="text-xs font-black text-muted-foreground/60 uppercase">
                  Period {item.periodName}
                </span>
                <h4 className="text-md font-bold text-primary text-center mt-1 leading-tight">
                  {item.subjectName}
                </h4>
                <div className="flex items-center gap-1 mt-2 text-[10px] text-muted-foreground font-mono">
                  <Clock size={10} />
                  {item.startTime}
                </div>
              </div>

              {/* Right side: Content */}
              <div className="col-span-3 px-6 py-2 relative min-h-[100px] flex items-center">
                {item.isEntryExist ? (
                  <div className="w-full flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-serif text-foreground text-lg leading-relaxed italic border-l-4 border-primary/20 pl-4">
                        {item.note || 'No notes provided.'}
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground italic">
                        <User2 size={12} />
                        Teacher: {item.teacherName}
                      </div>
                    </div>

                    {onOpenDialog && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onOpenDialog(item)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-primary hover:text-primary hover:bg-primary/10"
                      >
                        <Edit3 size={18} />
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {onOpenDialog ? (
                      <div
                        className="w-full h-full flex items-center justify-center border-2 border-dashed border-border rounded-xl group-hover:border-primary/30 group-hover:bg-card transition-all py-8 cursor-pointer"
                        onClick={() => onOpenDialog(item)}
                      >
                        <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary font-bold text-sm">
                          <PlusCircle
                            size={20}
                            className="transition-transform group-hover:rotate-90"
                          />
                          Record Class Activity
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-muted-foreground/40 font-medium text-sm italic">
                        <AlertCircle size={18} />
                        No diary entries assigned for this period
                      </div>
                    )}
                  </div>
                )}
                {/* Decorative Notebook Lines */}
                <div className="absolute inset-0 z-[-1] opacity-[0.05] bg-[linear-gradient(var(--muted)_1px,transparent_1px)] bg[size:100%_1.5rem]" />
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <CalendarOff size={48} className="mb-4 opacity-20" />
            <p className="text-lg font-medium">
              No schedule found for this date
            </p>
            <p className="text-sm opacity-60">
              Check other dates or contact admin.
            </p>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-muted px-8 py-3 text-[10px] text-muted-foreground flex justify-between font-bold uppercase tracking-widest">
        <span>Academic Year {academicYear}</span>
        <span className="text-primary/70 italic underline">
          Official Teacher&lsquo;s Log
        </span>
      </div>
    </div>
  );
};

export default DiaryTable;
