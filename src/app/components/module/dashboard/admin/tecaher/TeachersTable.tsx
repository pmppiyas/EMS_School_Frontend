'use client';

import ManagementTable from '@/app/components/module/dashboard/ManagementTable';
import { ITeacher } from '@/types/teacher.interface';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import TeacherColumns from './TeacherColumns';

const TeachersTable = ({ teachers }: { teachers: ITeacher[] }) => {
  const router = useRouter();

  const [_, startTransition] = useTransition();
  const [deletingTeacher, setDeletingTeacher] = useState<ITeacher | null>(null);
  const [viewingTeacher, setViewingTeacher] = useState<ITeacher | null>(null);
  const [editingTeacher, setEditingTeacher] = useState<ITeacher | null>(null);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleDelete = (teacher: ITeacher) => {
    setDeletingTeacher(teacher);
  };

  const handleView = (teacher: ITeacher) => {
    setViewingTeacher(teacher);
  };
  const handleEdit = (teacher: ITeacher) => {
    setEditingTeacher(teacher);
  };

  return (
    <>
      <ManagementTable
        data={teachers}
        columns={TeacherColumns}
        getRowKey={(teacher) => teacher.id!}
        onView={handleView}
        onDelete={handleDelete}
        onEdit={handleEdit}
        emptyMessage="No Teachers Found."
      />
    </>
  );
};

export default TeachersTable;
