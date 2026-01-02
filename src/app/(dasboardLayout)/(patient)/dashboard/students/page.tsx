import StudentHeader from '../../../../components/module/dashboard/admin/student/StudentHeader';
import StudentTable from '../../../../components/module/dashboard/admin/student/StudentTable';
import { getAllClasses } from '../../../../services/class/getAllClasses';
import { getAllStudents } from '../../../../services/student/getAllStudents';

const page = async () => {
  const { students } = await getAllStudents();
  const { classes } = await getAllClasses();

  return (
    <div>
      <StudentHeader />
      <StudentTable students={students} classes={classes} />
    </div>
  );
};

export default page;
