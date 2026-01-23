import { getAllStudents } from '@/app/services/student/getAllStudents';
import { getTeachers } from '@/app/services/teacher/getTeachers';
import { getStudentAttendance } from '@/app/services/attendance/getStudentAttendance';
import { getTeacherAttendance } from '@/app/services/attendance/getTeacherAttendance';
import MarkAttendance from './MarkAttendance';
import TodayAttends from '@/app/components/module/dashboard/teacher/attendance/TodayAttends';
import MonthlyAttendanceTable from './MonthlyAttendanceTable';

const AttendanceWrapper = async ({
  classId,
  mode,
}: {
  classId: string;
  mode: string;
}) => {
  if (!classId) {
    return (
      <div className="h-60 flex items-center justify-center border-2 border-dashed rounded-xl opacity-50 font-bold uppercase tracking-widest">
        Please select a class to view attendance
      </div>
    );
  }

  const isTeacher = classId === 'teacher';
  let users = [];
  let attendanceData = [];

  // Parallel data fetching for performance
  if (isTeacher) {
    const [{ teachers }, { teacher }] = await Promise.all([
      getTeachers(),
      getTeacherAttendance(),
    ]);
    users = teachers;
    attendanceData = teacher;
  } else {
    const [{ students }, { student }] = await Promise.all([
      getAllStudents(classId),
      getStudentAttendance(classId),
    ]);
    users = students;
    attendanceData = student;
  }

  return (
    <>
      {mode === 'mark' && (
        <MarkAttendance data={users} isTeacherMode={isTeacher} />
      )}

      {mode === 'today' && (
        <TodayAttends attendance={attendanceData} />
      )}
      
      {mode === 'month' && (
        <MonthlyAttendanceTable
          attendance={attendanceData}
          isTeacherMode={isTeacher}
        />
      )}
    </>
  );
};

export default AttendanceWrapper;
