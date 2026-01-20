/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';

import { IDiaryResponse } from '@/types/diary.interface';
import DiaryManagementDialog from './DiaryManagmentDialog';
import DiaryTable from '@/app/components/module/dashboard/teacher/diery/DiaryTable';

const DiaryPage = ({ data }: { data: IDiaryResponse }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);

  if (!data) return null;

  const { date, classId } = data;

  const handleOpenDialog = (item: any) => {
    setSelectedSlot(item);
    setIsDialogOpen(true);
  };

  return (
    <>
      <DiaryTable data={data} onOpenDialog={handleOpenDialog} />

      <DiaryManagementDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSuccess={() => setIsDialogOpen(false)}
        selectedSlot={selectedSlot}
        date={date}
        classId={classId as string}
      />
    </>
  );
};

export default DiaryPage;
