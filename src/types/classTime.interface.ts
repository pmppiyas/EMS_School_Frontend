export interface IClassTimeTableProps {
  id: string;
  period: string;
  startTime: string;
  endTime: string;
}

export interface IClassTimeTableComponentProps {
  ClassTimes: IClassTimeTableProps[];
}
