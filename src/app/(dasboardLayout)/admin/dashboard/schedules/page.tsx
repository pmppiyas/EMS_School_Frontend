import ScheduleContent from '@/app/components/module/dashboard/admin/schedule/ScheduleContent';
import { getAllClasses } from '@/app/services/class/getAllClasses';
import { getAllClassTimes } from '@/app/services/classTime/getAllClassTimes';
import { getSubjects } from '@/app/services/subject/getSubjects';
import { getTeachers } from '@/app/services/teacher/getTeachers';
import { getCookie } from '@/lib/cookies';
import { getSchedulesByDay } from '@/app/services/schedule/get.schedule';

const SchedulesPage = async () => {
  const { teachers } = await getTeachers();
  const { classes } = await getAllClasses();
  const { subjects } = await getSubjects();
  const { classtimes } = await getAllClassTimes();
  const day = await getCookie('selectedDay');
  const schedules = await getSchedulesByDay(day ? day : 'SUTURDAY');

  return (
    <ScheduleContent
      schedules={schedules}
      teachers={teachers}
      classes={classes}
      subjects={subjects}
      classTimes={classtimes}
    />
  );
};

export default SchedulesPage;
