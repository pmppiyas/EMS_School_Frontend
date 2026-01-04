import { IClass } from '../../../../../types/attendance.interface';
import AttendanceTable from '../../../../components/module/dashboard/teacher/attendance/AttendanceTable';
import { getAllClasses } from '../../../../services/class/getAllClasses';

export const dynamic = 'force-dynamic';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ classId?: string }>;
}) => {
  const params = await searchParams;
  const classId = params.classId;

  const classRes = await getAllClasses();
  const classes: IClass[] = classRes?.classes || [];

  return (
    <div>
      <AttendanceTable selectedClassId={classId || ''} classes={classes} />
    </div>
  );
};

export default page;
