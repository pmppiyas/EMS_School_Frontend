'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { IStudent } from '../../../../../../types/student.interface';
import { toast } from 'sonner';
import ManagementTable from '../../ManagementTable';
import StudentColumns from './StudentColumns';

const StudentTable = ({ students }: { students: IStudent[] }) => {
  const router = useRouter();
  const [_, startTransition] = useTransition();
  const [deleteingStudent, setDeletingStudent] = useState<IStudent | null>(
    null
  );
  const [isDeletingDialog, setIsDeletingDialog] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<IStudent | undefined>(
    undefined
  );

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleDelete = (student: IStudent) => {
    setDeletingStudent(student);
    setIsDeletingDialog(true);
  };

  const handleEdit = (student: IStudent) => {
    setEditingTeacher(student);
  };

  const handleView = (student: IStudent) => {
    if (student.id) {
      router.push(`/admin/dashboard/students/${student.id}`);
    } else {
      toast.error('Teacher ID not found');
    }
  };

  return (
    <>
      <ManagementTable
        data={students}
        columns={StudentColumns}
        getRowKey={(student) => student.id!}
        onView={handleView}
        onDelete={handleDelete}
        onEdit={handleEdit}
        emptyMessage="No Students Found."
      />
    </>
  );
};

export default StudentTable;

// <ManagementTable
//     data={teachers}
//     columns={TeacherColumns}
//     getRowKey={(teacher) => teacher.id!}
//     onView={handleView}
//     onDelete={handleDelete}
//     onEdit={handleEdit}
//     emptyMessage="No Teachers Found."
//   />
