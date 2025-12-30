/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import dayjs from 'dayjs';

const STATUS_COLOR: Record<string, string> = {
  PRESENT: 'bg-green-500',
  LATE: 'bg-yellow-400',
  LEAVE: 'bg-red-500',
  ABSENT: 'bg-gray-200',
};

const MonthlyAttendanceTable = ({
  data,
  isTeacherMode,
  month = dayjs().month(),
  year = dayjs().year(),
}: {
  data: any[];
  isTeacherMode: boolean;
  month?: number;
  year?: number;
}) => {
  const startOfMonth = dayjs(new Date(year, month, 1));
  const daysInMonth = startOfMonth.daysInMonth();

  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="w-full border-collapse">
        {/* ===== HEADER ===== */}
        <thead className="bg-muted sticky top-0 z-10">
          <tr>
            {!isTeacherMode && (
              <th className="px-3 py-2 text-left text-sm font-semibold">
                Roll
              </th>
            )}
            <th className="px-3 py-2 text-left text-sm font-semibold">Name</th>

            {Array.from({ length: daysInMonth }).map((_, i) => (
              <th key={i} className="px-1 py-2 text-center text-xs font-medium">
                {i + 1}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((person) => {
            const attendanceMap: Record<string, string> = {};

            person?.user?.attendances?.forEach((att: any) => {
              const dayKey = dayjs(att.createdAt).date();
              attendanceMap[dayKey] = att.status;
            });

            return (
              <tr key={person.id} className="border-t">
                {!isTeacherMode && (
                  <td className="px-3 py-2 text-sm">{person.roll ?? '-'}</td>
                )}

                <td className=" py-2 text-sm font-medium whitespace-nowrap">
                  {person.firstName} {person.lastName}
                </td>

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const status = attendanceMap[day] || 'ABSENT';

                  return (
                    <td key={day} className="px-1 py-2">
                      <div
                        title={`Day ${day}: ${status}`}
                        className={`mx-auto h-4 w-4 rounded-sm ${STATUS_COLOR[status]}`}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex flex-wrap gap-4 p-3 text-xs">
        <Legend label="Present" color="bg-green-500" />
        <Legend label="Late" color="bg-yellow-400" />
        <Legend label="Leave" color="bg-red-500" />
        <Legend label="Absent" color="bg-gray-200" />
      </div>
    </div>
  );
};

const Legend = ({ label, color }: { label: string; color: string }) => (
  <div className="flex items-center gap-1">
    <span className={`h-3 w-3 rounded-sm ${color}`} />
    {label}
  </div>
);

export default MonthlyAttendanceTable;
