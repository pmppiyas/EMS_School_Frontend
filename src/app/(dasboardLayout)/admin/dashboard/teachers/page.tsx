import TeacherHeader from '../../../../components/module/dashboard/admin/teacher/TeacherHeader';
import TeachersTable from '../../../../components/module/dashboard/admin/teacher/TeachersTable';
import { getTeachers } from '../../../../services/teacher/getTeachers';

const TeacherManagement = async () => {
  const { teachers } = await getTeachers();
  return (
    <div>
      <TeacherHeader />
      <TeachersTable teachers={teachers} />
    </div>
  );
};

export default TeacherManagement;
