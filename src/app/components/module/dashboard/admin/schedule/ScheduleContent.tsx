'use client';

import { useState } from 'react';
import ScheduleHeader from '@/app/components/module/dashboard/admin/schedule/ScheduleHeader';
import ScheduleRoom from '@/app/components/module/dashboard/admin/schedule/ScheduleRoom';
import { ITeacher } from '@/types/teacher.interface';
import { IClass, ISubject } from '@/types/class.interface';
import { IClassTime } from '@/types/classTime.interface';
import DaySelector from '@/app/components/shared/DaySelector';
import ClassSelector from '@/app/components/shared/ClassSelector';
import ScheduleTable from '@/app/components/module/dashboard/admin/schedule/ScheduleTable';
import { IScheduleRow } from '@/types/schedule.interface';
import ModeSelect from '@/app/components/shared/ModeSelect';

interface IScheduleContentProps {
  schedules: IScheduleRow[];
  teachers: ITeacher[];
  classes: IClass[];
  subjects: ISubject[];
  classTimes: IClassTime[];
}

const ScheduleContent = ({
  schedules,
  teachers,
  classes,
  subjects,
  classTimes,
}: IScheduleContentProps) => {
  const [mode, setMode] = useState<'view' | 'edit'>('view');
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedClass, setSeletedClass] = useState<string>('');

  return (
    <div>
      <ScheduleHeader
        selectDayClass={
          <div className="flex items-center justify-between gap-3">
            <DaySelector onChange={setSelectedDay} />
            {mode === 'edit' && (
              <ClassSelector classes={classes} onChange={setSeletedClass} />
            )}
          </div>
        }
        selectOption={<ModeSelect mode={mode} onChange={setMode} />}
      />

      {mode === 'view' && <ScheduleTable data={schedules} />}

      {mode === 'edit' && (
        <ScheduleRoom
          selectedDay={selectedDay}
          selectedClass={selectedClass}
          teachers={teachers}
          classes={classes}
          subjects={subjects}
          classTimes={classTimes}
        />
      )}
    </div>
  );
};

export default ScheduleContent;
