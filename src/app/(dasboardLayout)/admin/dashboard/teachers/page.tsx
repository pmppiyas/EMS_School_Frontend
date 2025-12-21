import TeacherHeader from '@/app/components/module/dashboard/admin/tecaher/TeacherHeader';
import TeachersTable from '@/app/components/module/dashboard/admin/tecaher/TeachersTable';
import { getTeachers } from '@/app/services/tecaher/getTeachers';

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
