import DiaryHeader from '@/app/components/module/dashboard/teacher/diery/DiaryHeader';
import DiaryPage from '@/app/components/module/dashboard/teacher/diery/DiaryPage';
import { getClasses } from '@/app/services/class/getAllClasses';
import { getDiaries } from '@/app/services/diary/getAllDiaries';
import { getCookie } from '@/lib/cookies';
import { BookOpen } from 'lucide-react';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ date?: string }>;
}) => {
  const params = await searchParams;
  const selectedDate = params.date;
  const classId = await getCookie('selectedClassId');

  const today =
    selectedDate ||
    new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' });

  const { classes } = await getClasses();
  const data = await getDiaries(classId as string, today);

  return (
    <div className="min-h-screen">
      <DiaryHeader classes={classes} />
      <div className="container mx-auto">
        {classId ? (
          <DiaryPage data={data} />
        ) : (
          <div className="mt-20 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-foreground" />
            <h3 className="mt-2 text-sm font-semibold text-foreground">
              No class selected
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
