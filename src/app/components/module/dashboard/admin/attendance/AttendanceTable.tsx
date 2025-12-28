import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MarkAttendance from './MarkAttendance';
import AttendanceRecords from './AttendanceRecords';
import ClassSelector from './ClassSelector';
import { getAllStudents } from '../../../../../services/student/getAllStudents';
import { IStudent } from '../../../../../../types/student.interface';
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
  let students: IStudent[] = [];

  if (selectedClassId) {
    const studentRes = await getAllStudents(selectedClassId);
    students = studentRes?.students || [];
  }

  return (
    <div>
      <Tabs defaultValue="attendance">
        <div className="flex flex-col md:flex-row space-y-4 justify-between ">
          <TabsList>
            <TabsTrigger value="attendance">Attendance Book</TabsTrigger>
            <TabsTrigger value="records">Today's Records</TabsTrigger>
          </TabsList>
          <ClassSelector classes={classes} selectedClassId={selectedClassId} />
        </div>

        <TabsContent value="attendance">
          <MarkAttendance students={students} />
        </TabsContent>

        <TabsContent value="records">
          <AttendanceRecords />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceTable;
