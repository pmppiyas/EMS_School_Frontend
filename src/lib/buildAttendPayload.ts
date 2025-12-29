/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAttendance } from '../types/attendance.interface';

export const buildPayloadRecords = (
  attendance: IAttendance[],
  initialAttendance: any
) => {
  const records: any[] = [];
  attendance.forEach((current) => {
    const initial = initialAttendance.current.find(
      (i) => i.userId === current.userId
    );
    if (!initial) return;

    if (initial.isInChecked !== current.isInChecked) {
      records.push({
        userId: current.userId,
        status: current.isInChecked ? 'PRESENT' : 'ABSENT',
        inTime: current.isInChecked ? current.inTime : null,
      });
    }

    if (initial.isOutChecked !== current.isOutChecked) {
      records.push({
        userId: current.userId,
        outTime: current.isOutChecked ? current.outTime : null,
      });
    }
  });
  return records;
};
