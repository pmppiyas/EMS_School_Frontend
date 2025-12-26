'use client';

import { useTransition, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import ManagementTable from '../../ManagementTable';
import DeleteConfirmationDialog from '../../../../shared/DeleteConformationDiolog';
import { deleteClassTime } from '../../../../../services/classTime/deleteClassTime';

import ClassTimeColumns from './ClassTimeColumns';
import ClassTimeFormDialog from './ClassTimeFormDiolog';
import EditClassTimeDialog from './EditClassTimeDialog';

export interface IClassTimeTableProps {
  id: string;
  period: string;
  startTime: string;
  endTime: string;
}

interface IClassTimeTableComponentProps {
  ClassTimes: IClassTimeTableProps[];
}

const ClassTimeTable = ({ ClassTimes }: IClassTimeTableComponentProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  /** CREATE modal */
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  /** EDIT modal */
  const [editingClassTime, setEditingClassTime] =
    useState<IClassTimeTableProps | null>(null);

  /** DELETE modal */
  const [deletingClassTime, setDeletingClassTime] =
    useState<IClassTimeTableProps | null>(null);
  const [isDeletingDialog, setIsDeletingDialog] = useState(false);

  const handleRefresh = () => {
    startTransition(() => router.refresh());
  };

  const handleView = (classTime: IClassTimeTableProps) => {
    router.push(`/admin/dashboard/ClassTimes/${classTime.id}`);
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
      const result = await deleteClassTime(deletingClassTime.id);

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
        data={ClassTimes}
        columns={ClassTimeColumns}
        getRowKey={(row) => row.id}
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
