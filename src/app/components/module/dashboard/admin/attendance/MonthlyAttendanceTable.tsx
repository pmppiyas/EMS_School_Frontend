'use client';

import dayjs from 'dayjs';

const STATUS_COLOR: Record<string, string> = {
  PRESENT: 'bg-green-500',
  LATE: 'bg-yellow-500',
  LEAVE: 'bg-blue-500',
  ABSENT: 'bg-gray-200',
};

const MonthlyAttendanceTable = ({
  attendance,
  isTeacherMode,
  month = dayjs().month(),
  year = dayjs().year(),
}: {
  attendance: any;
  isTeacherMode: boolean;
  month?: number;
  year?: number;
}) => {
  const startOfMonth = dayjs(new Date(year, month, 1));
  const daysInMonth = startOfMonth.daysInMonth();

  const reports = [
    ...(attendance?.present?.list ?? []),
    ...(attendance?.late?.list ?? []),
    ...(attendance?.absent?.list ?? []),
    ...(attendance?.leave?.list ?? []),
  ];

  const studentMap = new Map<string, any>();

  reports.forEach((item) => {
    if (!studentMap.has(item.userId)) {
      studentMap.set(item.userId, {
        userId: item.userId,
        name: item.name,
        roll: item.roll,
        attendances: [],
      });
    }

    studentMap.get(item.userId).attendances.push(item);
  });

  const students = Array.from(studentMap.values());

  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="w-full border-collapse">
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
          {students.map((student) => {
            const attendanceMap: Record<number, string> = {};

            student.attendances.forEach((att: any) => {
              const day = dayjs(att.createdAt).date();
              attendanceMap[day] = att.status;
            });

            return (
              <tr key={student.userId} className="border-t">
                {!isTeacherMode && (
                  <td className="px-3 py-2 text-sm">{student.roll ?? '-'}</td>
                )}

                <td className="px-3 py-2 text-sm font-medium whitespace-nowrap">
                  {student.name}
                </td>

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const status = attendanceMap[day] ?? 'ABSENT';

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
        <Legend label="Leave" color="bg-blue-500" />
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
