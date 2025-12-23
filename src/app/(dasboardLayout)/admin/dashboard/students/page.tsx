import StudentHeader from '../../../../components/module/dashboard/admin/student/StudentHeader';
import StudentTable from '../../../../components/module/dashboard/admin/student/StudentTable';
import { getAllStudents } from '../../../../services/student/getAllStudents';

const page = async () => {
  const { students } = await getAllStudents();
  return (
    <div>
      <StudentHeader />
      <StudentTable students={students} />
    </div>
  );
};

export default page;
