'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

// Aliased Imports
import { IStudent } from '@/types/student.interface';
import ManagementTable from '@/app/components/module/dashboard/ManagementTable';
import StudentColumns from './StudentColumns';
import DeleteConfirmationDialog from '../../../../shared/DeleteConformationDiolog';
import { deleteStudent } from '../../../../../services/student/deleteStudent';
import StudentFormDialog from './StudentFormDialog';

const StudentTable = ({
  students,
  classes,
}: {
  students: IStudent[];
  classes: { id: string; name: string }[];
}) => {
  const router = useRouter();
  const [_, startTransition] = useTransition();

  const [deletingStudent, setDeletingStudent] = useState<IStudent | null>(null);
  const [isDeletingDialog, setIsDeletingDialog] = useState(false);
  const [editingStudent, setEditingStudent] = useState<IStudent | undefined>(
    undefined
  );

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
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

      console.log('Delete student result:', result);
      if (result?.success) {
        toast.success(result.message || 'Student deleted successfully');
        setIsDeletingDialog(false);
        setDeletingStudent(null);
        handleRefresh();
      } else {
        toast.error(result.message || 'Failed to delete student');
      }

      toast.success('Delete student functionality not implemented yet.');
      setIsDeletingDialog(false);
      setDeletingStudent(null);
      handleRefresh();
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <ManagementTable
        data={students}
        columns={StudentColumns}
        getRowKey={(student) => student.id}
        onView={handleView}
        onDelete={handleDelete}
        onEdit={handleEdit}
        emptyMessage="No Students Found."
      />

      {/* Student Edit Dialog - If you have one */}
      <StudentFormDialog
        open={!!editingStudent}
        student={editingStudent}
        classes={classes}
        onClose={() => setEditingStudent(undefined)}
        onSuccess={() => {
          setEditingStudent(undefined);
          handleRefresh();
        }}
      />

      {/* Delete Confirmation Dialog */}
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
