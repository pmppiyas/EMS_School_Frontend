/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Clock, User, CalendarDays, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import EmptyComp from '@/app/components/shared/EmptyComp';
import { RoutineSlot } from '@/types/schedule.interface';

const RoutineTable = ({ slots = [] }: { slots: RoutineSlot[] }) => {
  return (
    <div className="w-full space-y-6">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${slots.length} gap-5`}
      >
        {slots.length > 0 ? (
          slots.map((slot, index) => (
            <Card
              key={index}
              className="group relative border-muted-foreground/10 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full bg-muted group-hover:bg-primary transition-colors" />

              <div className="bg-muted/30 px-5 py-3 border-b flex justify-between items-center group-hover:bg-primary/5 transition-colors">
                <span className="text-[11px] font-black uppercase text-primary tracking-[0.2em]">
                  Period {slot.period}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <Clock size={14} className="text-primary/60" />
                  {slot.startTime} — {slot.endTime}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-bold text-xl leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {slot.subjectName}
                    </h3>

                    <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground font-medium">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User size={16} />
                      </div>
                      <span className="hover:text-foreground transition-colors truncate">
                        {slot.teacherName}
                      </span>
                    </div>
                  </div>

                  {/* Action or Indicator */}
                  <div className="mt-6 flex justify-end">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <EmptyComp subject="Class Routine" icon={CalendarDays} />
        )}
      </div>

      {/* Footer / Tip */}
      <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
        <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-widest">
          Please be on time for every period. Timing may vary on special
          occasions.
        </p>
      </div>
    </div>
  );
};

export default RoutineTable;
