/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import FieldError from '@/app/components/shared/FieldError';
import { createTeacher } from '@/app/services/teacher/addTeacher';
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
import { ITeacher } from '@/types/teacher.interface';
import { useState } from 'react';
import { toast } from 'sonner';
import { updateTeacher } from '@/app/services/teacher/updateTeacher';

interface ITeacherFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  teacher?: ITeacher;
}

const TeacherFormDialog = ({
  open,
  onClose,
  onSuccess,
  teacher,
}: ITeacherFormDialogProps) => {
  const isEdit = !!teacher;
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState<'MALE' | 'FEMALE'>(
    teacher?.gender || 'MALE'
  );

  const [apiErrors, setApiErrors] = useState<
    { field: string; message: string }[] | null
  >(null);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);

    formData.set('gender', gender);

    try {
      let response;
      if (isEdit && teacher?.id) {
        response = await updateTeacher(teacher.id, {
          firstName: formData.get('firstName') as string,
          lastName: formData.get('lastName') as string,
          phoneNumber: formData.get('phoneNumber') as string,
          address: formData.get('address') as string,
          designation: formData.get('designation') as string,
          gender: gender,
          dateOfBirth: formData.get('dateOfBirth')
            ? new Date(formData.get('dateOfBirth') as string)
            : null,
        });
      } else {
        response = await createTeacher(formData);
      }

      if (response.success) {
        toast.success(response.message || 'Teacher saved');
        onSuccess();
        onClose();
        setApiErrors(null);
      } else {
        setApiErrors(response.errors || []);
        toast.error(response.message || 'Validation error');
      }
    } catch (err: any) {
      console.error(err);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[80vw] max-w-2xl h-[90vh] flex flex-col p-0 max-h-[90vh]">
        <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b shrink-0">
          <DialogTitle className="text-lg sm:text-xl">
            {isEdit ? 'Edit Teacher' : 'Add New Teacher'}
          </DialogTitle>
        </DialogHeader>

        <form
          className="flex flex-col flex-1 min-h-0"
          encType="multipart/form-data"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(new FormData(e.currentTarget));
          }}
        >
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
            {/* First Name */}
            <Field>
              <FieldLabel>First Name</FieldLabel>
              <Input name="firstName" defaultValue={teacher?.firstName || ''} />
              <FieldError errors={apiErrors} field="firstName" />
            </Field>

            {/* Last Name */}
            <Field>
              <FieldLabel>Last Name</FieldLabel>
              <Input name="lastName" defaultValue={teacher?.lastName || ''} />
              <FieldError errors={apiErrors} field="lastName" />
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input
                name="email"
                type="email"
                disabled={isEdit}
                defaultValue={teacher?.email || ''}
              />
              <FieldError errors={apiErrors} field="email" />
            </Field>

            {/* Password (create only) */}
            {!isEdit && (
              <Field>
                <FieldLabel>Password</FieldLabel>
                <Input name="password" type="password" />
                <FieldError errors={apiErrors} field="password" />
              </Field>
            )}

            {/* Phone */}
            <Field>
              <FieldLabel>Phone Number</FieldLabel>
              <Input
                name="phoneNumber"
                defaultValue={teacher?.phoneNumber || ''}
              />
              <FieldError errors={apiErrors} field="phoneNumber" />
            </Field>

            {/* Address */}
            <Field>
              <FieldLabel>Address</FieldLabel>
              <Input name="address" defaultValue={teacher?.address || ''} />
              <FieldError errors={apiErrors} field="address" />
            </Field>

            {/* Date of Birth */}
            <Field>
              <FieldLabel>Date of Birth</FieldLabel>
              <Input
                name="dateOfBirth"
                type="date"
                defaultValue={
                  teacher?.dateOfBirth
                    ? new Date(teacher.dateOfBirth).toISOString().slice(0, 10)
                    : ''
                }
              />
              <FieldError errors={apiErrors} field="dateOfBirth" />
            </Field>

            {/* Designation */}
            <Field>
              <FieldLabel>Designation</FieldLabel>
              <Input
                name="designation"
                defaultValue={teacher?.designation || ''}
              />
              <FieldError errors={apiErrors} field="designation" />
            </Field>

            {/* Gender */}
            <Field>
              <FieldLabel>Gender</FieldLabel>
              <Input type="hidden" name="gender" value={gender} />
              <Select
                value={gender}
                onValueChange={(v) => setGender(v as 'MALE' | 'FEMALE')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MALE">Male</SelectItem>
                  <SelectItem value="FEMALE">Female</SelectItem>
                </SelectContent>
              </Select>
              <FieldError errors={apiErrors} field="gender" />
            </Field>

            {/* Photo */}
            {!isEdit && (
              <Field>
                <FieldLabel>Profile Photo</FieldLabel>
                <Input name="photo" type="file" accept="image/*" />
                <FieldError errors={apiErrors} field="photo" />
              </Field>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 px-4 sm:px-6 py-3 sm:py-4 border-t bg-gray-50 shrink-0">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
              className="px-3 sm:px-4"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="px-3 sm:px-4">
              {loading
                ? 'Saving...'
                : isEdit
                ? 'Update Teacher'
                : 'Create Teacher'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeacherFormDialog;
