/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import AttendanceHeader from '@/app/components/module/dashboard/admin/attendance/AttendanceHeader';
import AttendanceModeSelect from '@/app/components/module/dashboard/admin/attendance/AttendanceModeSelect';
import MarkAttendance from '@/app/components/module/dashboard/admin/attendance/MarkAttendance';
import MonthlyAttendanceTable from '@/app/components/module/dashboard/admin/attendance/MonthlyAttendanceTable';
import TodayAttends from '@/app/components/module/dashboard/teacher/attendance/TodayAttends';
import ClassSelector from '@/app/components/shared/ClassSelector';
import { IClass } from '@/types/attendance.interface';
import { useState } from 'react';

const AttendanceContent = ({
  classes,
  users,
  attendance,
  classId,
}: {
  classes: IClass[];
  users: any;
  attendance: any;
  classId: string;
}) => {
  const [mode, setMode] = useState<'mark' | 'today' | 'month'>('mark');
  return (
    <div>
      <AttendanceHeader
        selectDayClass={
          <div className="flex items-center justify-between gap-3">
            <ClassSelector classes={classes} withTeacher={true} />
          </div>
        }
        selectMode={<AttendanceModeSelect mode={mode} onChange={setMode} />}
      />

      {mode === 'mark' && (
        <MarkAttendance data={users} isTeacherMode={classId === 'teacher'} />
      )}

      {mode === 'today' && <TodayAttends attendance={attendance} />}
      {mode === 'month' && (
        <MonthlyAttendanceTable
          attendance={attendance}
          isTeacherMode={classId === 'teacher'}
        />
      )}
    </div>
  );
};

export default AttendanceContent;
