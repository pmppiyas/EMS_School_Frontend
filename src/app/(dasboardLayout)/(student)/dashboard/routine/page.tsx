import { Suspense } from 'react';
import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';
import RoutineTableSkeleton from '@/app/components/module/dashboard/student/routine/RoutineTableSkeleton';
import RoutineDataWrapper from '@/app/components/module/dashboard/student/routine/RoutineDataWrapper';
import DaySelector from '@/app/components/shared/DaySelector';
import { days } from '@/constant';
import { CalendarDays } from 'lucide-react';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ day?: string }>;
}) => {
  const params = await searchParams;

  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long' })
    .format(new Date())
    .toUpperCase();

  const selectedDay = params.day || today || days[0].name;

  return (
    <div className="space-y-6">
      <ManagementPageHeader
        title={`${selectedDay} Routine`}
        description={`Class routine for ${selectedDay}.`}
        icon={<CalendarDays size={24} />}
        actions={[<DaySelector key={selectedDay} />]}
      />

      <Suspense key={selectedDay} fallback={<RoutineTableSkeleton />}>
        <RoutineDataWrapper day={selectedDay} />
      </Suspense>
    </div>
  );
};

export default page;
