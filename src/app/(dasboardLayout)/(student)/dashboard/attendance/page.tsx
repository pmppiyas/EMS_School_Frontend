import { Suspense } from 'react';
import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';
import AttendanceSkeleton from '@/app/components/module/dashboard/student/attendance/AttendanceSkeleton';
import AttendanceDataWrapper from '@/app/components/module/dashboard/student/attendance/AttendanceDataWrapper';
import MonthSelector from '@/app/components/shared/MonthSelector';
import { CalendarCheck } from 'lucide-react';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ month?: string; year?: string }>;
}) => {
  const params = await searchParams;

  const currentMonth = new Date().getMonth().toString();
  const currentYear = new Date().getFullYear().toString();

  const selectedMonth = params.month || currentMonth;

  const selectedYear = params.year || currentYear;

  return (
    <div className="space-y-6">
      <ManagementPageHeader
        title="My Attendance"
        description="Track your daily presence and attendance percentage."
        icon={<CalendarCheck size={24} />}
        actions={[<MonthSelector key={selectedMonth} />]}
      />

      <Suspense
        key={`${selectedMonth}-${selectedYear}`}
        fallback={<AttendanceSkeleton />}
      >
        <AttendanceDataWrapper month={selectedMonth} year={selectedYear} />
      </Suspense>
    </div>
  );
};

export default page;
