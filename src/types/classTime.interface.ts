export interface IClassTime {
  id: string;
  period: string;
  startTime: string;
  endTime: string;
}

export interface IClassTimeTableComponentProps {
  ClassTimes: IClassTime[];
}

export interface IClassTimeTableProps {
  id?: string;
  period: string;
  startTime: string;
  endTime: string;
  classId?: string;
}

export interface IClassTimeFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  classTime?: IClassTimeTableProps;
  classes?: { id: string; name: string }[];
}
export interface TimeSlot {
  period: string;
  startTime: string;
  endTime: string;
}
