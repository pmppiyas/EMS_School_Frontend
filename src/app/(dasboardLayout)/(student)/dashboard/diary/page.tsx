import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';
import DiaryTable from '@/app/components/module/dashboard/teacher/diery/DiaryTable';
import { DateSelector } from '@/app/components/shared/DateSelector';
import { getDiaries } from '@/app/services/diary/getAllDiaries';
import { getMe } from '@/app/services/shared/getMe';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ date?: string }>;
}) => {
  const params = await searchParams;
  const selectedDate = params.date;

  const today = selectedDate || new Date().toISOString().split('T')[0];

  const { student: me } = await getMe();

  const data = await getDiaries(me.classId, today);

  return (
    <div>
      <ManagementPageHeader
        title="Daily Diary"
        description="Manage daily every period's diary and class activities."
        actions={[<DateSelector key="date-picker" withNavigation={true} />]}
      />
      <DiaryTable data={data} />
    </div>
  );
};

export default page;
