/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { IStudent } from '@/types/student.interface';
import ManagementTable from '@/app/components/module/dashboard/ManagementTable';
import StudentFormDialog from './StudentFormDialog';
import { IClass } from '../../../../../../types/attendance.interface';
import StudentColumns from './StudentColumns';
import DeleteConfirmationDialog from '../../../../shared/DeleteConformationDiolog';
import { deleteStudent } from '../../../../../services/student/deleteStudent';

const StudentTable = ({
  students,
  classes,
}: {
  students: IStudent[];
  classes: IClass[];
}) => {
  const router = useRouter();

  const [deletingStudent, setDeletingStudent] = useState<IStudent | null>(null);
  const [isDeletingDialog, setIsDeletingDialog] = useState(false);
  const [editingStudent, setEditingStudent] = useState<IStudent | undefined>(
    undefined
  );

  const handleRefresh = () => {
    router.refresh();
  };

  const handleView = (student: IStudent) => {
    if (student.id) {
      router.push(`/admin/dashboard/students/${student.id}`);
    } else {
      toast.error('Student ID not found');
    }
  };

  const handleEdit = (student: IStudent) => {
    setEditingStudent(student);
  };

  const handleDelete = (student: IStudent) => {
    setDeletingStudent(student);
    setIsDeletingDialog(true);
  };

  const confirmDelete = async () => {
    if (!deletingStudent) return;
    try {
      const result = await deleteStudent(deletingStudent.id);

      if (result?.success) {
        handleRefresh();
        router.refresh();
        setIsDeletingDialog(false);
        setDeletingStudent(null);
        toast.success(result.message || 'Student deleted successfully');
      } else {
        toast.error(result.message || 'Failed to delete student');
      }

      setIsDeletingDialog(false);
      setDeletingStudent(null);
      handleRefresh();
    // eslint-disable-next-line no-unused-vars
    } catch (err: any) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <ManagementTable
        isAdmin={true}
        data={students}
        columns={StudentColumns}
        getRowKey={(student) => student.id}
        onView={handleView}
        onDelete={handleDelete}
        onEdit={handleEdit}
        emptyMessage="No Students Found."
      />

      <StudentFormDialog
        open={!!editingStudent}
        student={editingStudent}
        classes={classes}
        onClose={() => {
          setEditingStudent(undefined);
        }}
        onSuccess={() => {
          setEditingStudent(undefined);
          handleRefresh();
        }}
      />

      <DeleteConfirmationDialog
        open={isDeletingDialog}
        onOpenChange={setIsDeletingDialog}
        onConfirm={confirmDelete}
        title="Delete Student"
        description={`Are you sure you want to delete ${deletingStudent?.firstName}? This action cannot be undone.`}
      />
    </>
  );
};

export default StudentTable;
