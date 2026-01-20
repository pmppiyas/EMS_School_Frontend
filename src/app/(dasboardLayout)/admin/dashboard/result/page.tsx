import ResultHeader from '@/app/components/module/dashboard/admin/result/ResultHeader';
import ResultUploadPreview from '@/app/components/module/dashboard/admin/result/ResultUploadPreview';
import ResultUploadPage from '@/app/components/module/dashboard/admin/result/UploadExcelResult';
import ViewResult from '@/app/components/module/dashboard/admin/result/ViewResult';
import ClassSelector from '@/app/components/shared/ClassSelector';
import TabSelector from '@/app/components/shared/TabSelector';
import { getClasses } from '@/app/services/class/getAllClasses';
import { getAllStudents } from '@/app/services/student/getAllStudents';
import { getSubjects } from '@/app/services/subject/getSubjects';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    tabs?: 'view' | 'upload';
    classId: string;
  }>;
}) => {
  const params = await searchParams;
  const tab = params.tabs ?? 'view';
  const classId = params.classId;

  const { classes } = await getClasses();
  const { subjects } = await getSubjects(classId);
  const { students } = await getAllStudents(classId);
  const resultTabs = [
    { label: 'View Results', value: 'view' },
    { label: 'Upload Excel', value: 'upload' },
  ];

  return (
    <div className="space-y-6">
      <ResultHeader
        tabSelector={<TabSelector tabs={resultTabs} />}
        classSelector={<ClassSelector classes={classes} />}
      />

      <div className="mt-4">
        {tab === 'upload' && (
          <ResultUploadPage subjects={subjects} students={students} />
        )}
        {tab === 'view' && <ViewResult />}
      </div>
    </div>
  );
};

export default page;
