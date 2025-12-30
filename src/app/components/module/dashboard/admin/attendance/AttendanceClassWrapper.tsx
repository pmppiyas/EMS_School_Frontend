'use client';

import { useEffect, startTransition } from 'react';
import { useRouter } from 'next/navigation';
import AttendanceTable from './AttendanceTable';
import { IClass } from '../../../../../../types/attendance.interface';

const AttendanceTableWrapper = ({
  selectedClassId,
  classes,
}: {
  selectedClassId: string;
  classes: IClass[];
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!selectedClassId) return;

    startTransition(() => {
      router.refresh();
    });
  }, [selectedClassId, router]);

  return (
    <AttendanceTable selectedClassId={selectedClassId} classes={classes} />
  );
};

export default AttendanceTableWrapper;
