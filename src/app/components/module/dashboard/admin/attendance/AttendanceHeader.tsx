import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';

const AttendanceHeader = ({
  selectDayClass,
  selectMode,
}: {
  selectDayClass: React.ReactNode;
  selectMode: React.ReactNode;
}) => {
  return (
    <div>
      <ManagementPageHeader
        title="Attendance Management"
        description="Manage attendances information and details"
        actions={[selectMode, selectDayClass]}
      />
    </div>
  );
};

export default AttendanceHeader;
