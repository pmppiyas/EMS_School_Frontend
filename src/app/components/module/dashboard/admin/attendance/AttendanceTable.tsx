import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MarkAttendance from './MarkAttendance';
import AttendanceRecords from './AttendanceRecords';
import ClassSelector from './ClassSelector';
import { getAllStudents } from '../../../../../services/student/getAllStudents';
import { getTeachers } from '../../../../../services/teacher/getTeachers';

interface IClass {
  id: string;
  name: string;
}

const AttendanceTable = async ({
  selectedClassId,
  classes,
}: {
  selectedClassId: string;
  classes: IClass[];
}) => {
  let displayData = [];

  if (selectedClassId) {
    if (selectedClassId === 'teacher') {
      const teacherRes = await getTeachers();
      displayData = teacherRes?.teachers || [];
    } else {
      const studentRes = await getAllStudents(selectedClassId);
      displayData = studentRes?.students || [];
    }
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="attendance" className="w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
          <TabsList>
            <TabsTrigger value="attendance">Attendance Book</TabsTrigger>
            <TabsTrigger value="records">Today's Records</TabsTrigger>
          </TabsList>
          <ClassSelector classes={classes} selectedClassId={selectedClassId} />
        </div>

        <TabsContent value="attendance" className="mt-0 outline-none">
          <MarkAttendance
            data={displayData}
            isTeacherMode={selectedClassId === 'teacher'}
          />
        </TabsContent>

        <TabsContent value="records" className="mt-0 outline-none">
          <AttendanceRecords attendance={displayData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceTable;
