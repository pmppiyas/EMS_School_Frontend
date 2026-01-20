import ResultHeader from '@/app/components/module/dashboard/admin/result/ResultHeader';
import ResultUploadPage from '@/app/components/module/dashboard/admin/result/UploadExcelResult';
import ViewResult from '@/app/components/module/dashboard/admin/result/ViewResult';
import ClassSelector from '@/app/components/shared/ClassSelector';
import TabSelector from '@/app/components/shared/TabSelector';
import { getClasses } from '@/app/services/class/getAllClasses';
import { getResults } from '@/app/services/result/getAllResults';
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

  const fetchedResults = await getResults(classId);

  const demoResults = [
    {
      studentId: 'demo-1',
      student: { firstName: 'Arif', lastName: 'Hossain', rollNo: '101' },
      subject: { name: 'Bangla' },
      marks: 85,
    },
    {
      studentId: 'demo-1',
      student: { firstName: 'Arif', lastName: 'Hossain', rollNo: '101' },
      subject: { name: 'English' },
      marks: 78,
    },
    {
      studentId: 'demo-2',
      student: { firstName: 'Rahim', lastName: 'Uddin', rollNo: '102' },
      subject: { name: 'Bangla' },
      marks: 92,
    },
    {
      studentId: 'demo-2',
      student: { firstName: 'Rahim', lastName: 'Uddin', rollNo: '102' },
      subject: { name: 'English' },
      marks: 30,
    },
  ];

  const finalResults =
    fetchedResults?.data || fetchedResults?.results || demoResults;

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
        {tab === 'view' && <ViewResult results={finalResults} />}
      </div>
    </div>
  );
};

export default page;
