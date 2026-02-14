'use client';

import EmptyComp from '@/app/components/shared/EmptyComp';
import { PERIODS } from '@/constant';
import { IScheduleRow } from '@/types/schedule.interface';

const ScheduleTable = ({ data }: { data: IScheduleRow[] }) => {
  return (
    <div className="overflow-x-auto mt-6">
      {data.length === 0 ?
<EmptyComp /> : (
        <table className="w-full border border-primary-foreground text-sm">
          <thead className="bg-background">
            <tr>
              <th className="border px-4 py-2 text-left">Class</th>
              {PERIODS.map((p) => (
                <th key={p} className="border px-4 py-2 text-center">
                  Period {p}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row) => {
              const periodMap = new Map(
                row.schedules.map((s) => [s.classTime.period, s])
              );

              return (
                <tr key={row.class.id}>
                  {/* Class Name */}
                  <td className="border px-4 py-2 font-semibold  whitespace-nowrap">
                    {row.class.name}
                  </td>

                  {PERIODS.map((p) => {
                    const schedule = periodMap.get(p);

                    return (
                      <td key={p} className="border align-top ">
                        {schedule ? (
                          <div className=" h-full rounded bg-foreground text-background p-2 text-xs space-y-1 ">
                            <div className="font-semibold">
                              {schedule.subject.name}
                            </div>
                            <div className="opacity-80">
                              {schedule.teacher.firstName}{' '}
                              {schedule.teacher.lastName}
                            </div>
                            <div className="text-[10px] opacity-70">
                              {schedule.classTime.startTime} -{' '}
                              {schedule.classTime.endTime}
                            </div>
                          </div>
                        ) : (
                          <div className="h-full flex items-center justify-center text-muted-foreground">
                            —
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ScheduleTable;
