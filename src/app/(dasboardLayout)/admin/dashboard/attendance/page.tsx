import AttendanceTable from '../../../../components/module/dashboard/admin/attendance/AttendanceTable';
import { getAllClasses } from '../../../../services/class/getAllClasses';

interface IClass {
  id: string;
  name: string;
}

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ classId?: string }>;
}) => {
  const params = await searchParams;
  const classId = params.classId;

  const res = await getAllClasses();
  const classes: IClass[] = res?.classes || [];

  return (
    <div>
      <AttendanceTable selectedClassId={classId || ''} classes={classes} />
    </div>
  );
};

export default page;
