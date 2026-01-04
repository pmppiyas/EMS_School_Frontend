import StudentHeader from '../../../../components/module/dashboard/admin/student/StudentHeader';
import StudentTable from '../../../../components/module/dashboard/admin/student/StudentTable';
import Pagination from '../../../../components/shared/Pagination';
import { getAllClasses } from '../../../../services/class/getAllClasses';
import { getAllStudents } from '../../../../services/student/getAllStudents';

export const dynamic = 'force-dynamic';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    classId?: string;
    searchTerm?: string;
    page?: string;
  }>;
}) => {
  const params = await searchParams;
  const classId = params.classId;
  const searchTerm = params.searchTerm;
  const currentPage = params.page ? Number(params.page) : 1;

  const studentRes = await getAllStudents(classId, searchTerm, currentPage);

  const { classes } = await getAllClasses();

  return (
    <div>
      <StudentHeader classes={classes} selectedClassId={classId as string} />

      <StudentTable students={studentRes.students} classes={classes} />

      <Pagination
        page={studentRes.meta.page}
        total={studentRes.meta.total}
        limit={studentRes.meta.limit}
      />
    </div>
  );
};

export default page;
