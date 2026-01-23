import EmptyComp from '@/app/components/shared/EmptyComp';
import { CalendarCheck } from 'lucide-react';
import { getMyAttendance } from '@/app/services/attendance/getMyAttendance';
import MonthlyAttendanceTable from '@/app/components/shared/MonthlyAttendanceTable';

const AttendanceDataWrapper = async ({
  month,
  year,
}: {
  month: string;
  year: string;
}) => {
  const data = await getMyAttendance(month, year);

  if (!data || data.length === 0) {
    return (
      <EmptyComp
        subject={`Attendance for ${month} ${year}`}
        icon={CalendarCheck}
        description={`No attendance records were found for this period. If this is a mistake, please contact the office.`}
      />
    );
  }

  return <MonthlyAttendanceTable attendance={data} />;
};

export default AttendanceDataWrapper;
