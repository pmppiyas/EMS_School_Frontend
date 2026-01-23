import { IClass, ISubject } from '@/types/class.interface';
import { IClassTime } from '@/types/classTime.interface';
import { ITeacher } from '@/types/teacher.interface';

interface ISchedule {
  classTime: {
    period: string;
    startTime: string;
    endTime: string;
  };
  teacher: {
    firstName: string;
    lastName: string;
  };
  subject: {
    name: string;
  };
}

export interface IScheduleRow {
  class: {
    id: string;
    name: string;
  };
  schedules: ISchedule[];
}

export interface ScheduleTableProps {
  data: IScheduleRow[];
}

export interface ScheduleRoomProps {
  teachers?: ITeacher[];
  classes?: IClass[];
  subjects?: ISubject[];
  classTimes?: IClassTime[];
  selectedDay: string;
  selectedClass: string;
}

export interface ScheduleSlot {
  classTimeId: string;
  subjectId: string;
  teacherId: string;
}

export interface RoutineSlot {
  period: number;
  subjectName: string;
  teacherName: string;
  startTime: string;
  endTime: string;
}
