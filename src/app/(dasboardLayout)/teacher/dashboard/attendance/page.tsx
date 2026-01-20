import { getClasses } from '@/app/services/class/getAllClasses';
import AttendanceTable from '../../../../components/module/dashboard/teacher/attendance/AttendanceTable';
import { IClass } from '@/types/class.interface';

export const dynamic = 'force-dynamic';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ classId?: string }>;
}) => {
  const params = await searchParams;
  const classId = params.classId;

  const classRes = await getClasses();
  const classes: IClass[] = classRes?.classes || [];

  return (
    <div>
      <AttendanceTable selectedClassId={classId || ''} classes={classes} />
    </div>
  );
};

export default page;
