'use client';

import { useTransition, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import EditClassTimeDialog, { IClassTimeTableProps } from '@/app/components/module/dashboard/admin/classtime/EditClassTimeDialog';
import ManagementTable from '@/app/components/module/dashboard/ManagementTable';
import ClassTimeColumns from '@/app/components/module/dashboard/admin/classtime/ClassTimeColumns';
import ClassTimeFormDialog from '@/app/components/module/dashboard/admin/classtime/ClassTimeFormDiolog';
import { IClassTimeTableComponentProps } from '@/types/classTime.interface';
import { deleteClassTime } from '@/app/services/classTime/deleteClassTime';
import DeleteConfirmationDialog from '@/app/components/shared/DeleteConformationDiolog';

const ClassTimeTable = ({ ClassTimes }: IClassTimeTableComponentProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const [editingClassTime, setEditingClassTime] =
    useState<IClassTimeTableProps | null>(null);

  const [deletingClassTime, setDeletingClassTime] =
    useState<IClassTimeTableProps | null>(null);
  const [isDeletingDialog, setIsDeletingDialog] = useState(false);

  const handleRefresh = () => {
    startTransition(() => router.refresh());
  };

  const handleView = (classTime: IClassTimeTableProps) => {
    router.push(`/admin/dashboard/classtimes/${classTime.id}`);
  };

  const handleEdit = (classTime: IClassTimeTableProps) => {
    setEditingClassTime(classTime);
  };

  const handleDelete = (classTime: IClassTimeTableProps) => {
    setDeletingClassTime(classTime);
    setIsDeletingDialog(true);
  };

  const confirmDelete = async () => {
    if (!deletingClassTime) return;

    try {
      const result = await deleteClassTime(deletingClassTime.id as string);

      if (result?.success) {
        toast.success(result.message);
        setDeletingClassTime(null);
        setIsDeletingDialog(false);
        handleRefresh();
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error('Failed to delete Class Time');
    }
  };

  return (
    <div>
      <ManagementTable
        isAdmin={true}
        data={ClassTimes}
        columns={ClassTimeColumns}
        getRowKey={(row) => row.id as string}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage="No Class Times Found."
      />

      {/* CREATE MODAL */}
      <ClassTimeFormDialog
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onSuccess={() => {
          setIsCreateOpen(false);
          handleRefresh();
        }}
      />

      {/* EDIT MODAL */}
      <EditClassTimeDialog
        open={!!editingClassTime}
        classTime={editingClassTime!}
        onClose={() => setEditingClassTime(null)}
        onSuccess={() => {
          setEditingClassTime(null);
          handleRefresh();
        }}
      />

      {/* DELETE MODAL */}
      <DeleteConfirmationDialog
        open={isDeletingDialog}
        onOpenChange={setIsDeletingDialog}
        onConfirm={confirmDelete}
        title="Delete Class Time"
        description={`Are you sure you want to delete ${deletingClassTime?.period}?`}
      />
    </div>
  );
};

export default ClassTimeTable;
