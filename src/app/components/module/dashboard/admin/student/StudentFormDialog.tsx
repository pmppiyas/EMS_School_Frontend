/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
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
import { IGender } from '@/types/shared.interface';
import { IStudent } from '@/types/student.interface';
import { updateStudent } from '@/app/services/student/updateStudent';
import { createStudent } from '@/app/services/student/createStudent';
import { useRouter } from 'next/navigation';
import { IClass } from '@/types/class.interface';

interface IStudentFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  student?: IStudent;
  classes?: IClass[];
}

const StudentFormDialog = ({
  open,
  onClose,
  onSuccess,
  student,
  classes = [],
}: IStudentFormDialogProps) => {
  const router = useRouter();
  const isEdit = !!student;
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState<IGender>(IGender.MALE);
  const [classId, setClassId] = useState<string>('');
  const [apiErrors, setApiErrors] = useState<
    { field: string; message: string }[] | null
  >(null);

  useEffect(() => {
    if (open) {
      setGender((student?.gender as IGender) ?? IGender.MALE);
      setClassId(student?.classId ?? classes[0]?.id ?? '');
      setApiErrors(null);
    }
  }, [open, student, classes]);

  const handleSubmit = async (form: HTMLFormElement) => {
    setLoading(true);
    setApiErrors(null);

    try {
      const formData = new FormData(form);

      formData.set('gender', gender);
      formData.set('classId', classId);

      const dob = formData.get('dateOfBirth') as string;
      if (dob) {
        formData.set('dateOfBirth', new Date(dob).toISOString());
      }

      let response: any;

      if (isEdit && student?.id) {
        response = await updateStudent(student.id, formData);
      } else {
        response = await createStudent(formData);
      }

      if (!response) throw new Error('No response from server');

      if (response.success) {
        toast.success(
          response.message ||
            `Student ${isEdit ? 'updated' : 'created'} successfully`
        );
        onSuccess();
        onClose();
        router.refresh();
      } else {
        setApiErrors(response.errors || []);
        toast.error(response.message || 'Validation failed');
      }
    } catch (err: any) {
      toast.error(err.message || 'Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[80vw] max-w-2xl h-[90vh] flex flex-col p-0 max-h-[90vh]">
        <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b shrink-0">
          <DialogTitle className="text-lg sm:text-xl font-bold">
            {isEdit ? 'Edit Student Profile' : 'Register New Student'}
          </DialogTitle>
        </DialogHeader>

        <form
          className="flex flex-col flex-1 min-h-0"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e.currentTarget);
          }}
        >
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel>First Name</FieldLabel>
                <Input
                  name="firstName"
                  defaultValue={student?.firstName || ''}
                  placeholder="e.g. Md Rahim"
                  required
                />
                <FieldError errors={apiErrors} field="firstName" />
              </Field>

              <Field>
                <FieldLabel>Last Name</FieldLabel>
                <Input
                  name="lastName"
                  defaultValue={student?.lastName || ''}
                  placeholder="e.g. Uddin"
                  required
                />
                <FieldError errors={apiErrors} field="lastName" />
              </Field>
            </div>

            {/* Roll, Class, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Roll Number</FieldLabel>
                <Input
                  name="roll"
                  defaultValue={student?.roll || ''}
                  placeholder="e.g. 101"
                  required
                />
                <FieldError errors={apiErrors} field="roll" />
              </Field>

              <Field>
                <FieldLabel>Select Class</FieldLabel>
                <Select value={classId} onValueChange={(v) => setClassId(v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls.id} value={cls.id as string}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError errors={apiErrors} field="class" />
              </Field>
            </div>

            <Field>
              <FieldLabel>Email Address</FieldLabel>
              <Input
                name="email"
                type="email"
                disabled={isEdit}
                defaultValue={student?.email || ''}
                placeholder="student@school.com"
                required
              />
              <FieldError errors={apiErrors} field="email" />
            </Field>

            {/* Password only for new students */}
            {!isEdit && (
              <Field>
                <FieldLabel>Account Password</FieldLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="Min 6 characters"
                  required
                />
                <FieldError errors={apiErrors} field="password" />
              </Field>
            )}

            {/* Contact & Personal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Phone Number</FieldLabel>
                <Input
                  name="phoneNumber"
                  defaultValue={student?.phoneNumber || ''}
                  placeholder="01XXXXXXXXX"
                />
                <FieldError errors={apiErrors} field="phoneNumber" />
              </Field>

              <Field>
                <FieldLabel>Date of Birth</FieldLabel>
                <Input
                  name="dateOfBirth"
                  type="date"
                  defaultValue={
                    student?.dateOfBirth
                      ? String(student.dateOfBirth).slice(0, 10)
                      : ''
                  }
                />
                <FieldError errors={apiErrors} field="dateOfBirth" />
              </Field>
            </div>

            <Field>
              <FieldLabel>Address</FieldLabel>
              <Input
                name="address"
                defaultValue={student?.address || ''}
                placeholder="Enter full address"
              />
              <FieldError errors={apiErrors} field="address" />
            </Field>

            {/* Gender */}
            <Field>
              <FieldLabel>Gender *</FieldLabel>
              <Select
                value={gender}
                onValueChange={(v) => setGender(v as IGender)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={IGender.MALE}>Male</SelectItem>
                  <SelectItem value={IGender.FEMALE}>Female</SelectItem>
                </SelectContent>
              </Select>
              <FieldError errors={apiErrors} field="gender" />
            </Field>

            <Field>
              <FieldLabel>Profile Photo</FieldLabel>
              <Input
                name="photo"
                type="file"
                accept="image/*"
                className="cursor-pointer"
              />
              <FieldError errors={apiErrors} field="photo" />
            </Field>
          </div>

          {/* Dialog Footer */}
          <div className="flex justify-end gap-3 px-4 sm:px-6 py-4 border-t bg-slate-50/50 shrink-0">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="min-w-[120px]">
              {loading
                ? 'Processing...'
                : isEdit
                  ? 'Update Student'
                  : 'Register Student'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StudentFormDialog;
