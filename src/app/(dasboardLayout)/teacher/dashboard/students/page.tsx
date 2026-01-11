import { getClasses } from '@/app/services/class/getAllClasses';
import StudentHeader from '../../../../components/module/dashboard/admin/student/StudentHeader';
import StudentTable from '../../../../components/module/dashboard/admin/student/StudentTable';
import { getAllStudents } from '../../../../services/student/getAllStudents';
export const dynamic = 'force-dynamic';
const page = async () => {
  const { students } = await getAllStudents();
  const { classes } = await getClasses();

  return (
    <div>
      <StudentHeader classes={classes} />
      <StudentTable students={students} classes={classes} />
    </div>
  );
};

export default page;
