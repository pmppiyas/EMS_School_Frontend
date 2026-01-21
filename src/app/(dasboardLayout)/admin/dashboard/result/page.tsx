import ResultHeader from '@/app/components/module/dashboard/admin/result/ResultHeader';
import ResultUploadPage from '@/app/components/module/dashboard/admin/result/UploadExcelResult';
import { TableSkeleton } from '@/app/components/shared/TableSkeleton';
import ClassSelector from '@/app/components/shared/ClassSelector';
import TabSelector from '@/app/components/shared/TabSelector';
import TermSelector from '@/app/components/shared/TermSelector';
import YearSelector from '@/app/components/shared/YearSelector';
import { getClasses } from '@/app/services/class/getAllClasses';
import { getAllStudents } from '@/app/services/student/getAllStudents';
import { getSubjects } from '@/app/services/subject/getSubjects';
import { Suspense } from 'react';
import ResultTableWrapper from '@/app/components/module/dashboard/admin/result/ResultTableWrapper';
import { getCookie } from '@/lib/cookies';

const ResultPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    tabs: string;
    classId: string;
    year: string;
    term: string;
  }>;
}) => {
  const params = await searchParams;

  const cookieClassId = await getCookie('selectedClassId');
  const classId = params.classId || (cookieClassId as string) || '';
  const term = params.term || 'FIRST_TERM';
  const currentYear = new Date().getFullYear().toString();
  const year = params.year || currentYear;
  const tab = params.tabs ?? 'view';

  const { classes } = await getClasses();

  const { subjects } =
    tab === 'upload' ? await getSubjects(classId) : { subjects: [] };
  const { students } =
    tab === 'upload' ? await getAllStudents(classId) : { students: [] };

  const resultTabs = [
    { label: 'View Results', value: 'view' },
    { label: 'Upload Excel', value: 'upload' },
  ];

  return (
    <div className="space-y-6">
      <ResultHeader
        classSelector={<ClassSelector classes={classes} />}
        tabSelector={<TabSelector tabs={resultTabs} />}
        termSelector={<TermSelector />}
        yearSelector={<YearSelector />}
        tab={tab}
      />

      <div className="mt-4">
        {tab === 'upload' && (
          <ResultUploadPage
            subjects={subjects}
            students={students}
            term={term}
            year={year}
          />
        )}

        {tab === 'view' && (
          <Suspense
            key={classId + term + year}
            fallback={<TableSkeleton columnCount={6} rowCount={10} />}
          >
            <ResultTableWrapper classId={classId} term={term} year={year} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
