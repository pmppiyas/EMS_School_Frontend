import AttendanceContent from '@/app/components/module/dashboard/admin/attendance/AttendanceContent';
import { getStudentAttendance } from '@/app/services/attendance/getStudentAttendance';
import { getTeacherAttendance } from '@/app/services/attendance/getTeacherAttendance';
import { getClasses } from '@/app/services/class/getAllClasses';
import { getAllStudents } from '@/app/services/student/getAllStudents';
import { getTeachers } from '@/app/services/teacher/getTeachers';
import { getCookie } from '@/lib/cookies';

export const dynamic = 'force-dynamic';

const page = async () => {
  const { classes } = await getClasses();
  const classId = await getCookie('selectedClassId');
  let users = [];
  let attendance = [];

  if (classId) {
    if (classId === 'teacher') {
      const { teachers } = await getTeachers();
      users = teachers;
      const { teacher } = await getTeacherAttendance();
      attendance = teacher;
    } else {
      const { students } = await getAllStudents(classId);
      users = students;
      const { student } = await getStudentAttendance(classId);
      attendance = student;
    }
  }

  return (
    <div>
      <AttendanceContent
        classes={classes}
        users={users}
        attendance={attendance}
        classId={classId as string}
      />
    </div>
  );
};

export default page;
