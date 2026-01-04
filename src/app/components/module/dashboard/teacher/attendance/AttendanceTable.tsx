import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { getAllStudents } from '../../../../../services/student/getAllStudents';
import { IClass } from '../../../../../../types/attendance.interface';
import { getStudentAttendance } from '../../../../../services/attendance/getStudentAttendance';
import TodayAttends from './TodayAttends';
import AllAttends from './AllAttends';
import ClassSelector from './ClassSelector';
import MarkAttendance from './MarkAttendance';

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
    const studentRes = await getAllStudents(selectedClassId);
    displayData = studentRes?.students || [];
    const studentAttendance = await getStudentAttendance();
    attendance = studentAttendance.data;
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="attendance" className="w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
          <TabsList>
            <TabsTrigger value="attendance">Attendance Book</TabsTrigger>
            <TabsTrigger value="todayrecords">Today&apos;s Records</TabsTrigger>
            <TabsTrigger value="allrecords">Monthly Records</TabsTrigger>
          </TabsList>
          <ClassSelector classes={classes} selectedClassId={selectedClassId} />
        </div>

        <TabsContent value="attendance" className="mt-0 outline-none">
          <MarkAttendance data={displayData} />
        </TabsContent>

        <TabsContent value="todayrecords" className="mt-0 outline-none">
          <TodayAttends attendance={attendance} />
        </TabsContent>
        <TabsContent value="allrecords" className="mt-0 outline-none">
          <AllAttends attendance={displayData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceTable;
