/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { updateClassTime } from '../../../../../services/classTime/updateClassTime';

export interface IClassTimeTableProps {
  id: string;
  period: string;
  startTime: string;
  endTime: string;
  classId?: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  classTime: IClassTimeTableProps | null;
  classes?: { id: string; name: string }[];
}

const EditClassTimeDialog = ({
  open,
  onClose,
  onSuccess,
  classTime,
  classes = [],
}: Props) => {
  const [loading, setLoading] = useState(false);

  const [period, setPeriod] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [classId, setClassId] = useState('');

  useEffect(() => {
    if (classTime) {
      setPeriod(classTime.period);
      setStartTime(classTime.startTime);
      setEndTime(classTime.endTime);
      setClassId(classTime.classId || '');
    }
  }, [classTime]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!classTime?.id) return;

    try {
      setLoading(true);

      await updateClassTime(classTime.id, {
        period,
        startTime,
        endTime,
        ...(classId && { classId }),
      });

      toast.success('Class time updated successfully');
      onSuccess();
      onClose();
    } catch (err: any) {
      toast.error(err?.message || 'Failed to update class time');
    } finally {
      setLoading(false);
    }
  };

  if (!classTime) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle>Edit Class Time</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {classes.length > 0 && (
            <Field>
              <FieldLabel>Class</FieldLabel>
              <Select value={classId} onValueChange={setClassId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls.id} value={cls.id}>
                      {cls.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          )}

          <Field>
            <FieldLabel>Period</FieldLabel>
            <Input
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              disabled

            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel>Start Time</FieldLabel>
              <Input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel>End Time</FieldLabel>
              <Input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </Field>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Updating...' : 'Update'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditClassTimeDialog;
