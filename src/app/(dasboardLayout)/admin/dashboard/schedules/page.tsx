import { Suspense } from 'react';
import ScheduleHeader from '@/app/components/module/dashboard/admin/schedule/ScheduleHeader';
import TabSelector from '@/app/components/shared/TabSelector';
import DaySelector from '@/app/components/shared/DaySelector';
import ClassSelector from '@/app/components/shared/ClassSelector';
import { getClasses } from '@/app/services/class/getAllClasses';
import ViewScheduleWrapper from '@/app/components/module/dashboard/admin/schedule/ViewScheduleWrapper';
import EditScheduleWrapper from '@/app/components/module/dashboard/admin/schedule/EditScheduleWrapper';
import { ScheduleLoadingSkeleton } from '@/app/components/module/dashboard/admin/schedule/ScheduleLoadingSkeleton';
const SchedulesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ tabs: string; day?: string; classId?: string }>;
}) => {
  const params = await searchParams;
  const tab = params.tabs ?? 'view';

  const classesData = await getClasses();
  const classes = classesData?.classes || [];

  const scheduleTabs = [
    { label: 'View Schedule', value: 'view' },
    { label: 'Edit/Manage', value: 'edit' },
  ];

  return (
    <div className="space-y-6">
      <ScheduleHeader
        selectOption={<TabSelector tabs={scheduleTabs} />}
        selectDayClass={
          <div className="flex items-center gap-3">
            <DaySelector />
            {tab === 'edit' && <ClassSelector classes={classes} />}
          </div>
        }
      />

      <div className="mt-4">
        {tab === 'view' && (
          <Suspense key={params.day} fallback={<ScheduleLoadingSkeleton />}>
            <ViewScheduleWrapper day={params.day} />
          </Suspense>
        )}

        {tab === 'edit' && (
          <Suspense
            key={`${params.day}-${params.classId}`}
            fallback={<ScheduleLoadingSkeleton />}
          >
            <EditScheduleWrapper
              day={params.day}
              classId={params.classId}
              classes={classes}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default SchedulesPage;
