import { getSchedulesByDay } from '@/app/services/schedule/get.schedule';
import ScheduleTable from '@/app/components/module/dashboard/admin/schedule/ScheduleTable';

export default async function ViewScheduleWrapper({ day }: { day?: string }) {
  const activeDay = day || 'SATURDAY';
  const schedules = await getSchedulesByDay(activeDay);

  return <ScheduleTable data={schedules} />;
}
