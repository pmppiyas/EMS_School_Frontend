'use client';

import ManagementTable from '@/app/components/module/dashboard/ManagementTable';
import { ITeacher } from '@/types/teacher.interface';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import TeacherColumns from './TeacherColumns';
import DeleteConfirmationDialog from '../../../../shared/DeleteConformationDiolog';
import { deleteTeacher } from '@/app/services/teacher/deleteTeacher';
import { toast } from 'sonner';
import TeacherFormDialog from './TeacherFormData';

const TeachersTable = ({ teachers }: { teachers: ITeacher[] }) => {
  const router = useRouter();

  const [_, startTransition] = useTransition();
  const [deletingTeacher, setDeletingTeacher] = useState<ITeacher | null>(null);
  const [isDeletingDialog, setIsDeletingDialog] = useState(false);

  const [editingTeacher, setEditingTeacher] = useState<ITeacher | undefined>(
    undefined
  );

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleDelete = (teacher: ITeacher) => {
    setDeletingTeacher(teacher);
    setIsDeletingDialog(true);
  };

  const confirmDelete = async () => {
    if (!deletingTeacher) return;
    try {
      setIsDeletingDialog(true);
      const result = await deleteTeacher(deletingTeacher.id!);
      setIsDeletingDialog(false);
      if (result?.success) {
        toast.success(result.message);
        setDeletingTeacher(null);
        handleRefresh();
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.log('Error deleting teacher:', err);
      toast.error('Failed to delete teacher. Please try again.');
    }
  };

  const handleView = (teacher: ITeacher) => {
    if (teacher.id) {
      router.push(`/admin/dashboard/teachers/${teacher.id}`);
    } else {
      toast.error('Teacher ID not found');
    }
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
      {/* Edit Doctor Details*/}
      <TeacherFormDialog
        open={!!editingTeacher}
        teacher={editingTeacher}
        onClose={() => setEditingTeacher(undefined)}
        onSuccess={() => {
          setEditingTeacher(undefined);
          handleRefresh();
        }}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={isDeletingDialog}
        onOpenChange={setIsDeletingDialog}
        onConfirm={confirmDelete}
        title="Delete Teacher"
        description="Are you sure you want to delete this teacher?"
      />
    </>
  );
};

export default TeachersTable;
