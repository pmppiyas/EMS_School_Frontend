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
