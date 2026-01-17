import { getCookie } from '@/lib/cookies';
import StudentHeader from '../../../../components/module/dashboard/admin/student/StudentHeader';
import StudentTable from '../../../../components/module/dashboard/admin/student/StudentTable';
import Pagination from '../../../../components/shared/Pagination';
import { getClasses } from '../../../../services/class/getAllClasses';
import { getAllStudents } from '../../../../services/student/getAllStudents';

export const dynamic = 'force-dynamic';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    searchTerm?: string;
    page?: string;
  }>;
}) => {
  const params = await searchParams;
  const searchTerm = params.searchTerm;
  const currentPage = await getCookie('studentPage');
  const classId = await getCookie('selectedClassId');

  const studentRes = await getAllStudents(
    classId as string,
    searchTerm,
    Number(currentPage)
  );
  const { classes } = await getClasses();

  return (
    <div>
      <StudentHeader classes={classes} />

      <StudentTable students={studentRes.students} classes={classes} />

      <Pagination total={studentRes.meta.total} limit={studentRes.meta.limit} />
    </div>
  );
};

export default page;
