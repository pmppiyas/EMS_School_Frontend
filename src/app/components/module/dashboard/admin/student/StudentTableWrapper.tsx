import StudentTable from '@/app/components/module/dashboard/admin/student/StudentTable';
import Pagination from '@/app/components/shared/Pagination';
import { getAllStudents } from '@/app/services/student/getAllStudents';
import { IClass } from '@/types/class.interface';

export default async function StudentTableWrapper({
  classId,
  searchTerm,
  currentPage,
  classes,
}: {
  classId: string;
  searchTerm: string;
  currentPage: number;
  classes: IClass[];
}) {
  const studentRes = await getAllStudents(classId, searchTerm, currentPage);

  return (
    <>
      <StudentTable students={studentRes.students} classes={classes} />

      <Pagination total={studentRes.meta.total} limit={studentRes.meta.limit} />
    </>
  );
}
