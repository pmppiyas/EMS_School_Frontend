import DiaryTable from '@/app/components/module/dashboard/teacher/diery/DiaryTable';
import { getDiaries } from '@/app/services/diary/getAllDiaries';
import { getMe } from '@/app/services/shared/getMe';

const DiaryDataWrapper = async ({ date }: { date: string }) => {
  const { student: me } = await getMe();
  const data = await getDiaries(me.classId, date);

  return <DiaryTable data={data} />;
};

export default DiaryDataWrapper;
