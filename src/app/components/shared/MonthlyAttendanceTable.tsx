/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { cn } from '@/lib/utils';
import {
  CheckCircle2,
  XCircle,
  Clock,
  CalendarOff,
  PlaneTakeoff,
} from 'lucide-react';

const STATUS_CONFIG: Record<
  string,
  { color: string; icon: any; label: string }
> = {
  PRESENT: {
    color: 'text-green-600 bg-green-50 border-green-200',
    icon: CheckCircle2,
    label: 'Present',
  },
  LATE: {
    color: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    icon: Clock,
    label: 'Late',
  },
  LEAVE: {
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    icon: PlaneTakeoff,
    label: 'Leave',
  },
  ABSENT: {
    color: 'text-destructive bg-destructive/10 border-destructive/20',
    icon: XCircle,
    label: 'Absent',
  },
  'N/A': {
    color: 'text-muted-foreground bg-secondary border-border',
    icon: CalendarOff,
    label: 'No Data',
  },
};

const MonthlyAttendanceTable = ({ attendance }: { attendance: any }) => {
  const reports = attendance?.records?.list ?? [];
  const monthName = attendance?.month;
  const year = attendance?.year;

  return (
    <div className="w-full space-y-4">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 border-b">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-foreground uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left font-bold text-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-bold text-foreground uppercase tracking-wider">
                  Check In
                </th>
                <th className="px-4 py-3 text-left font-bold text-foreground uppercase tracking-wider">
                  Check Out
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {reports.map((item: any) => {
                const config =
                  STATUS_CONFIG[item.status] || STATUS_CONFIG['N/A'];
                const Icon = config.icon;

                return (
                  <tr
                    key={item.date}
                    className="group hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-bold text-foreground">
                          {String(item.dayNumber).padStart(2, '0')} {monthName}
                        </span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-tighter">
                          {year}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div
                        className={cn(
                          'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-black uppercase tracking-wide',
                          config.color
                        )}
                      >
                        <Icon size={14} />
                        {config.label}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground font-medium">
                      {item.status === 'LATE' || item.status === 'PRESENT'
                        ? item.inTime !== '--:--'
                          ? new Date(item.inTime).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })
                          : '--:--'
                        : '--:--'}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground font-medium">
                      {item.outTime !== '--:--'
                        ? new Date(item.outTime).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })
                        : '--:--'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend / Summary Footer */}
      <div className="flex flex-wrap items-center gap-6 p-4 rounded-lg border bg-muted/20">
        <h4 className="text-xs font-bold uppercase text-muted-foreground mr-2">
          Legend:
        </h4>
        {Object.entries(STATUS_CONFIG).map(([key, config]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className={cn(
                'h-3 w-3 rounded-full border',
                config.color.split(' ')[1]
              )}
            />
            <span className="text-[11px] font-bold text-foreground uppercase tracking-tight">
              {config.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyAttendanceTable;
