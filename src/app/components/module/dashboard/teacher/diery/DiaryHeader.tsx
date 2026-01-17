import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';
import ClassSelector from '@/app/components/shared/ClassSelector';
import { DateSelector } from '@/app/components/shared/DateSelector';
import { IClass } from '@/types/attendance.interface';

const DiaryHeader = ({ classes }: { classes: IClass[] }) => {
  return (
    <div>
      <ManagementPageHeader
        title="Daily Diary"
        description="Manage daily every period's diary and class activities."
        actions={[
          <DateSelector key="date-picker" withNavigation={true} />,
          <ClassSelector classes={classes} key="class-selector" />,
        ]}
      />
    </div>
  );
};

export default DiaryHeader;
