import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MarkAttendance from './MarkAttendance';
import { getAllStudents } from '../../../../../services/student/getAllStudents';
import { getTeachers } from '../../../../../services/teacher/getTeachers';
import { getTeacherAttendance } from '../../../../../services/attendance/getTeacherAttendance';
import { getStudentAttendance } from '../../../../../services/attendance/getStudentAttendance';
import TodayAttends from './TodayAttends';
import AllAttends from './AllAttends';
import ClassSelector from '@/app/components/shared/ClassSelector';
import { IClass } from '@/types/class.interface';

const AttendanceTable = async ({
  selectedClassId,
  classes,
}: {
  selectedClassId: string;
  classes: IClass[];
}) => {
  let displayData = [];
  let attendance = [];

  if (selectedClassId) {
    if (selectedClassId === 'teacher') {
      const teacherRes = await getTeachers();
      displayData = teacherRes?.teachers || [];
      const teacherAttendance = await getTeacherAttendance();
      attendance = teacherAttendance?.data;
    } else {
      const studentRes = await getAllStudents(selectedClassId);
      displayData = studentRes?.students || [];
      const studentAttendance = await getStudentAttendance();
      attendance = studentAttendance.data;
    }
  }

  return (
    <div>
      <div className="w-full">
        <Tabs defaultValue="attendance" className="w-full">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
            <TabsList>
              <TabsTrigger value="attendance">Attendance Book</TabsTrigger>
              <TabsTrigger value="todayrecords">
                Today&rsquo;s Records
              </TabsTrigger>
              <TabsTrigger value="allrecords">Monthly Records</TabsTrigger>
            </TabsList>
            <ClassSelector classes={classes} />
          </div>

          <TabsContent value="attendance" className="mt-0 outline-none">
            <MarkAttendance
              data={displayData}
              isTeacherMode={selectedClassId === 'teacher'}
            />
          </TabsContent>

          <TabsContent value="todayrecords" className="mt-0 outline-none">
            <TodayAttends
              attendance={attendance}
              isTeacherMode={selectedClassId === 'teacher'}
            />
          </TabsContent>
          <TabsContent value="allrecords" className="mt-0 outline-none">
            <AllAttends
              attendance={displayData}
              isTeacherMode={selectedClassId === 'teacher'}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AttendanceTable;
