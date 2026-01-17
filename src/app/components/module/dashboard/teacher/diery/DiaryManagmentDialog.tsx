/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import FieldError from '@/app/components/shared/FieldError';
import { IDiarySlot } from '@/types/diary.interface';
import { saveDiary } from '@/app/services/diary/saveDiary';
import { editDiary } from '@/app/services/diary/editDiary'; // editDiary ইমপোর্ট করুন

interface IDiaryManagementDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  selectedSlot: IDiarySlot | null;
  date: string;
  classId: string;
}

const DiaryManagementDialog = ({
  open,
  onClose,
  onSuccess,
  selectedSlot,
  date,
}: IDiaryManagementDialogProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [apiErrors, setApiErrors] = useState<
    { field: string; message: string }[] | null
  >(null);

  const isEdit = !!selectedSlot?.isEntryExist;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setApiErrors(null);

    const formData = new FormData(e.currentTarget);
    const note = formData.get('note') as string;

    const basePayload: any = {
      classId: selectedSlot?.classId,
      subjectId: selectedSlot?.subjectId,
      periodId: selectedSlot?.periodId,
      teacherId: selectedSlot?.teacherId,
      date: date,
      note: note,
    };

    try {
      let response;

      if (isEdit && selectedSlot?.diaryId) {
        response = await editDiary(selectedSlot.diaryId, basePayload);
      } else {
        response = await saveDiary(basePayload);
      }

      if (response.success) {
        toast.success(
          response.message || (isEdit ? 'Diary updated' : 'Diary saved')
        );
        onSuccess();
        onClose();
        router.refresh();
      } else {
        setApiErrors(response.errors);
        toast.error(response.message || 'Failed to process request');
      }
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isEdit ? 'Update' : 'Add'} Diary Entry -{' '}
            {selectedSlot?.subjectName}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid gap-4">
            <Field>
              <FieldLabel>Class Activity / Note *</FieldLabel>
              <Textarea
                name="note"
                defaultValue={selectedSlot?.note || ''}
                placeholder="What was taught in this period?"
                className="min-h[70px]"
                required
              />
              <FieldError errors={apiErrors} field="note" />
            </Field>

            {/* <Field>
              <FieldLabel>Additional Comment (Internal)</FieldLabel>
              <Textarea
                name="comment"
                defaultValue={selectedSlot?.comment || ''}
                placeholder="Any specific observations or issues..."
                className="min-h[50px]"
              />
              <FieldError errors={apiErrors} field="comment" />
            </Field> */}
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="min-w-[100px]">
              {loading ? 'Saving...' : isEdit ? 'Update' : 'Save Entry'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DiaryManagementDialog;
