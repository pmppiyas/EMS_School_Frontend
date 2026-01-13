'use client';

import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';

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

import FieldError from '@/app/components/shared/FieldError';
import { toast } from 'sonner';
import { FeeCategories } from '@/constant';

import {
  FeeCategory,
  FeeTypeFormValues,
  feeTypeSchema,
  FeeTypeFormDialogProps,
} from '@/zod/fee.validation';
import { IClass } from '@/types/attendance.interface';
import { createFeeType } from '@/app/services/fee/addFeeType';

const FeeTypeFormDialog = ({
  open,
  onClose,
  onSuccess,
  feeType,
  classes,
}: FeeTypeFormDialogProps) => {
  const isEdit = !!feeType;
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FeeTypeFormValues>({
    resolver: zodResolver(feeTypeSchema),
    defaultValues: {
      amount: feeType?.amount ?? 0,
      category: (feeType?.category as FeeCategory) ?? 'ADMISSION',
      classId: feeType?.class?.id,
    },
  });

  const category = watch('category');

  // Clear classId when category is not MONTHLY or TUITION
  useEffect(() => {
    if (category !== 'MONTHLY' && category !== 'TUITION') {
      setValue('classId', undefined);
    }
  }, [category, setValue]);

  const onSubmit = async (data: FeeTypeFormValues) => {
    setLoading(true);

    try {
      const payload = {
        ...data,
        classId:
          data.category === 'MONTHLY' || data.category === 'TUITION'
            ? data.classId
            : undefined,
      };



      const res = await createFeeType(payload);

      if (res.success) {
        toast.success(res.message || 'Fee Type saved');
        onSuccess();
        onClose();
      } else {
        toast.error(res.message || 'Failed to save Fee Type');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[80vw] max-w-2xl flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle>{isEdit ? 'Edit Fee Type' : 'Add Fee Type'}</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col flex-1"
        >
          <div className="flex-1 px-6 py-4 space-y-4">
            {/* Category */}
            <Field>
              <FieldLabel>Category</FieldLabel>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(v) => field.onChange(v as FeeCategory)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {FeeCategories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.category && (
                <FieldError
                  field="category"
                  errors={[
                    { field: 'category', message: errors.category.message! },
                  ]}
                />
              )}
            </Field>

            {/* Class (ONLY when MONTHLY or TUITION) */}
            {(category === 'MONTHLY' || category === 'TUITION') && (
              <Field>
                <FieldLabel>Class</FieldLabel>
                <Controller
                  name="classId"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        {classes.map((cls: IClass) => (
                          <SelectItem key={cls.id} value={cls.id}>
                            {cls.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.classId && (
                  <FieldError
                    field="classId"
                    errors={[
                      {
                        field: 'classId',
                        message: errors.classId.message!,
                      },
                    ]}
                  />
                )}
              </Field>
            )}

            {/* Amount */}
            <Field>
              <FieldLabel>Amount</FieldLabel>
              <Input
                type="number"
                min={0}
                step="0.01"
                {...register('amount', { valueAsNumber: true })}
              />
              {errors.amount && (
                <FieldError
                  field="amount"
                  errors={[
                    { field: 'amount', message: errors.amount.message! },
                  ]}
                />
              )}
            </Field>
          </div>

          <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : isEdit ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeeTypeFormDialog;
