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
import { IStudent } from '@/types/student.interface';
import { IGender } from '../../../../../../types/shared.interface';
import { createStudent } from '../../../../../services/student/createStudent';
import { updateStudent } from '../../../../../services/student/updateStudent';

interface IStudentFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  student?: IStudent;
  classes?: { id: string; name: string }[];
}

const StudentFormDialog = ({
  open,
  onClose,
  onSuccess,
  student,
  classes,
}: IStudentFormDialogProps) => {
  console.log(classes);
  const isEdit = !!student;
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState<IGender>(
    (student?.gender as IGender) ?? IGender.MALE
  );

  const [apiErrors, setApiErrors] = useState<
    { field: string; message: string }[] | null
  >(null);

  useEffect(() => {
    if (student) {
      setGender(student.gender as IGender);
    }
  }, [student]);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    setApiErrors(null);

    formData.set('gender', gender);
    formData.set('class', 'ade00077-4cea-4632-a160-5d44ac6b89ef');
    try {
      let response;
      if (isEdit && student?.id) {
        response = await updateStudent(student.id, {
          firstName: formData.get('firstName') as string,
          lastName: formData.get('lastName') as string,
          phoneNumber: formData.get('phoneNumber') as string,
          address: formData.get('address') as string,
          roll: formData.get('roll') as string,
          gender: gender,
          dateOfBirth: formData.get('dateOfBirth')
            ? new Date(formData.get('dateOfBirth') as string)
            : null,
        });
        toast.error('Student update functionality not implemented yet.');
      } else {
        response = await createStudent(formData);
      }

      if (response.success) {
        toast.success(
          response.message ||
            `Student ${isEdit ? 'updated' : 'created'} successfully`
        );
        onSuccess();
        onClose();
      } else {
        console.error('API Errors:', response.errors);
        setApiErrors(response.errors || []);
        toast.error(response.message || 'Validation failed');
      }
    } catch (err: any) {
      console.error(err);
      toast.error('An unexpected error occurred');
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
            handleSubmit(new FormData(e.currentTarget));
          }}
        >
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <Field>
                <FieldLabel>First Name</FieldLabel>
                <Input
                  name="firstName"
                  defaultValue={student?.firstName || ''}
                  placeholder="e.g. Md Rahim"
                />
                <FieldError errors={apiErrors} field="firstName" />
              </Field>

              {/* Last Name */}
              <Field>
                <FieldLabel>Last Name</FieldLabel>
                <Input
                  name="lastName"
                  defaultValue={student?.lastName || ''}
                  placeholder="e.g. Uddin"
                />
                <FieldError errors={apiErrors} field="lastName" />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Roll Number */}
              <Field>
                <FieldLabel>Roll Number</FieldLabel>
                <Input
                  name="roll"
                  defaultValue={student?.roll || ''}
                  placeholder="e.g. 101"
                />
                <FieldError errors={apiErrors} field="roll" />
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel>Email Address</FieldLabel>
                <Input
                  name="email"
                  type="email"
                  disabled={isEdit}
                  defaultValue={student?.email || ''}
                  placeholder="student@school.com"
                />
                <FieldError errors={apiErrors} field="email" />
              </Field>
            </div>

            {/* Password - Only for New Students */}
            {!isEdit && (
              <Field>
                <FieldLabel>Account Password</FieldLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="Min 6 characters"
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
              <Input name="address" defaultValue={student?.address || ''} />
              <FieldError errors={apiErrors} field="address" />
            </Field>

            {/* Gender Selection */}
            <Field>
              <FieldLabel>Gender</FieldLabel>
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

            {/* Profile Photo - Only for New Registration */}
            {!isEdit && (
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
            )}
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
