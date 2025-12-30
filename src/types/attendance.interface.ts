export interface IAttendance {
  userId: string;
  isInChecked: boolean;
  isOutChecked: boolean;
  inTime?: string;
  outTime?: string;
}

export interface IUserAttend {
  user: any;
  userId: string;
  firstName: string;
  lastName: string;
  roll?: number;
}

export interface IClass {
  id: string;
  name: string;
}
