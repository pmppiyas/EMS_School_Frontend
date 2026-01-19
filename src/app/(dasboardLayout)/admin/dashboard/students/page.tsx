import { getCookie } from '@/lib/cookies';
import StudentHeader from '../../../../components/module/dashboard/admin/student/StudentHeader';
import { getClasses } from '../../../../services/class/getAllClasses';
import { Suspense } from 'react';
import { TableSkeleton } from '@/app/components/shared/TableSkeleton';
import StudentTableWrapper from '@/app/components/module/dashboard/admin/student/StudentTableWrapper';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    searchTerm?: string;
    page?: string;
    classId?: string;
  }>;
}) => {
  const params = await searchParams;
  const searchTerm = params.searchTerm || '';

  const cookieClassId = await getCookie('selectedClassId');
  const classId = params.classId || (cookieClassId as string) || '';

  const cookiePage = await getCookie('studentPage');
  const currentPage = Number(params.page || cookiePage || 1);

  const { classes } = await getClasses();

  return (
    <div className="space-y-6">
      <StudentHeader classes={classes} />

      <Suspense
        key={classId + searchTerm + currentPage}
        fallback={<TableSkeleton columnCount={7} rowCount={7} />}
      >
        <StudentTableWrapper
          classId={classId}
          searchTerm={searchTerm}
          currentPage={currentPage}
          classes={classes}
        />
      </Suspense>
    </div>
  );
};

export default page;
