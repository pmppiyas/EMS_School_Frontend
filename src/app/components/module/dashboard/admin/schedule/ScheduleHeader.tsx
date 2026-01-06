'use client';

import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';

const ScheduleHeader = ({
  selectOption,
  selectDayClass,
}: {
  selectOption: React.ReactNode;
  selectDayClass: React.ReactNode;
}) => {
  return (
    <ManagementPageHeader
      title="Schedule Management"
      description="Manage schedules information and details"
      actions={[selectDayClass, selectOption]}
    />
  );
};

export default ScheduleHeader;
