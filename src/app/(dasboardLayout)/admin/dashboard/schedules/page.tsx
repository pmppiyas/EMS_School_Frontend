import ScheduleContent from '@/app/components/module/dashboard/admin/schedule/ScheduleContent';
import { getAllClasses } from '@/app/services/class/getAllClasses';
import { getAllClassTimes } from '@/app/services/classTime/getAllClassTimes';
import { getSubjects } from '@/app/services/subject/getSubjects';
import { getTeachers } from '@/app/services/teacher/getTeachers';

const SchedulesPage = async () => {
  const { teachers } = await getTeachers();
  const { classes } = await getAllClasses();
  const { subjects } = await getSubjects();
  const { classtimes } = await getAllClassTimes();

  return (
    <ScheduleContent
      teachers={teachers}
      classes={classes}
      subjects={subjects}
      classTimes={classtimes}
    />
  );
};

export default SchedulesPage;
