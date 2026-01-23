import { getAllClassTimes } from '@/app/services/classTime/getAllClassTimes';
import { getSubjects } from '@/app/services/subject/getSubjects';
import { getTeachers } from '@/app/services/teacher/getTeachers';
import ScheduleRoom from '@/app/components/module/dashboard/admin/schedule/ScheduleRoom';
import { IClass } from '@/types/class.interface';

export default async function EditScheduleWrapper({
  day,
  classId,
  classes,
}: {
  day?: string;
  classId?: string;
  classes: IClass[];
}) {
  const { teachers } = await getTeachers();
  const { classtimes } = await getAllClassTimes();

  const { subjects } = classId ? await getSubjects(classId) : { subjects: [] };

  return (
    <ScheduleRoom
      selectedDay={day || 'SATURDAY'}
      selectedClass={classId || ''}
      teachers={teachers}
      classes={classes}
      subjects={subjects}
      classTimes={classtimes}
    />
  );
}
