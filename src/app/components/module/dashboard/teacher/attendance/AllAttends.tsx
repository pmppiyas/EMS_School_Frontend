/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useMemo } from 'react';
import dayjs from 'dayjs';
import MonthSelector from '../../../../shared/MonthSelector';
import MonthlyAttendanceTable from '../../admin/attendance/MonthlyAttendanceTable';

const AllAttends = ({ attendance }: { attendance: any[] }) => {
  const [month, setMonth] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().year());

  const attendByMonth = useMemo(() => {
    return attendance.map((person) => {
      const monthlyAttendances =
        person?.user?.attendances?.filter((att: any) => {
          const d = dayjs(att.createdAt);
          return d.month() === month && d.year() === year;
        }) || [];

      return {
        ...person,
        user: {
          ...person.user,
          attendances: monthlyAttendances,
        },
      };
    });
  }, [attendance, month, year]);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <MonthSelector
          month={month}
          year={year}
          onChange={(m, y) => {
            setMonth(m);
            setYear(y);
          }}
        />
      </div>

      <MonthlyAttendanceTable
        data={attendByMonth}
        isTeacherMode={false}
        month={month}
        year={year}
      />
    </div>
  );
};

export default AllAttends;
