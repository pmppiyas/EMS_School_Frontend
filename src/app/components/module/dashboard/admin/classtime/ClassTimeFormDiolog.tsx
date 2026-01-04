/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import FieldError from '@/app/components/shared/FieldError';
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
import { Plus, Trash2 } from 'lucide-react';
import { AddClassTime } from '../../../../../services/classTime/addClassTime';

export interface IClassTimeTableProps {
  id?: string;
  period: string;
  startTime: string;
  endTime: string;
  classId?: string;
}

interface IClassTimeFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  classTime?: IClassTimeTableProps;
  classes?: { id: string; name: string }[];
}

interface TimeSlot {
  period: string;
  startTime: string;
  endTime: string;
}

const ClassTimeFormDialog = ({
  open,
  onClose,
  onSuccess,
  classTime,
  classes = [],
}: IClassTimeFormDialogProps) => {
  const isEdit = !!classTime;
  const [loading, setLoading] = useState(false);
  const [apiErrors, setApiErrors] = useState<
    { field: string; message: string }[] | null
  >(null);

  const [selectedClass, setSelectedClass] = useState<string>(
    classTime?.classId || ''
  );

  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(
    classTime
      ? [
          {
            period: classTime.period,
            startTime: classTime.startTime,
            endTime: classTime.endTime,
          },
        ]
      : [{ period: '', startTime: '', endTime: '' }]
  );

  const addTimeSlot = () => {
    setTimeSlots([...timeSlots, { period: '', startTime: '', endTime: '' }]);
  };

  const removeTimeSlot = (index: number) => {
    if (timeSlots.length > 1) {
      setTimeSlots(timeSlots.filter((_, i) => i !== index));
    }
  };

  const updateTimeSlot = (
    index: number,
    field: keyof TimeSlot,
    value: string
  ) => {
    const updated = [...timeSlots];
    updated[index][field] = value;
    setTimeSlots(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setApiErrors(null);

    try {
      const hasEmptyFields = timeSlots.some(
        (slot) => !slot.period || !slot.startTime || !slot.endTime
      );

      if (hasEmptyFields) {
        toast.error('Please fill in all fields');
        setLoading(false);
        return;
      }

      const payload = timeSlots.map((slot) => ({
        period: slot.period,
        startTime: slot.startTime,
        endTime: slot.endTime,
        ...(selectedClass && { classId: selectedClass }),
      }));

      if (isEdit && classTime?.id) {
        toast.info('Update functionality - implement updateClassTime');
      } else {
        await AddClassTime(payload);
        toast.success(
          `Successfully added ${payload.length} class period${
            payload.length > 1 ? 's' : ''
          }`
        );

        onSuccess();
        onClose();
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-2xl flex flex-col p-0 overflow-hidden max-h-[90vh]">
        <DialogHeader className="px-6 py-4 border-b shrink-0">
          <DialogTitle className="text-xl font-bold">
            {isEdit ? 'Edit Schedule' : 'Add Class Period(s)'}
          </DialogTitle>
        </DialogHeader>

        <form
          className="flex flex-col flex-1 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="p-6 space-y-5 overflow-y-auto flex-1">
            {/* Class Selection */}
            {classes.length > 0 && (
              <Field>
                <FieldLabel>Class / Standard</FieldLabel>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
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
                <FieldError errors={apiErrors} field="classId" />
              </Field>
            )}

            {/* Time Slots */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <FieldLabel className="mb-0">Time Periods</FieldLabel>
                {!isEdit && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addTimeSlot}
                    disabled={loading}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Period
                  </Button>
                )}
              </div>

              {timeSlots.map((slot, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg space-y-4 relative bg-white"
                >
                  {!isEdit && timeSlots.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => removeTimeSlot(index)}
                      disabled={loading}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}

                  {/* Period Name */}
                  <Field>
                    <FieldLabel>Period Name / Number</FieldLabel>
                    <Input
                      placeholder="e.g. 1st Period, Break, or Mathematics"
                      value={slot.period}
                      onChange={(e) =>
                        updateTimeSlot(index, 'period', e.target.value)
                      }
                      required
                    />
                  </Field>

                  {/* Time Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel>Start Time</FieldLabel>
                      <Input
                        type="time"
                        value={slot.startTime}
                        onChange={(e) =>
                          updateTimeSlot(index, 'startTime', e.target.value)
                        }
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel>End Time</FieldLabel>
                      <Input
                        type="time"
                        value={slot.endTime}
                        onChange={(e) =>
                          updateTimeSlot(index, 'endTime', e.target.value)
                        }
                        required
                      />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 px-6 py-4 border-t bg-slate-50 shrink-0">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading
                ? 'Saving...'
                : isEdit
                ? 'Update Period'
                : `Save ${timeSlots.length} Period${
                    timeSlots.length > 1 ? 's' : ''
                  }`}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClassTimeFormDialog;
