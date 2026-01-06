import StudentHeader from '../../../../components/module/dashboard/admin/student/StudentHeader';
import StudentTable from '../../../../components/module/dashboard/admin/student/StudentTable';
import { getAllClasses } from '../../../../services/class/getAllClasses';
import { getAllStudents } from '../../../../services/student/getAllStudents';
export const dynamic = 'force-dynamic';
const page = async () => {
  const { students } = await getAllStudents();
  const { classes } = await getAllClasses();

  return (
    <div>
      <StudentHeader classes={classes} />
      <StudentTable students={students} classes={classes} />
    </div>
  );
};

export default page;
