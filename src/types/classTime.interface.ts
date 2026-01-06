export interface IClassTime {
  id: string;
  period: string;
  startTime: string;
  endTime: string;
}

export interface IClassTimeTableComponentProps {
  ClassTimes: IClassTime[];
}
