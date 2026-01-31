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
import { useRouter } from 'next/navigation';
import { IUserProfile } from '@/types/user.inteface';
import { updateMe } from '@/app/services/user/updateMe';

interface IProfileFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  user: IUserProfile;
}

const ProfileFormDialog = ({
  open,
  onClose,
  onSuccess,
  user,
}: IProfileFormDialogProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState<string>(user?.gender || 'MALE');
  const [apiErrors, setApiErrors] = useState<
    { field: string; message: string }[] | null
  >(null);

  useEffect(() => {
    if (open) {
      setGender(user?.gender || 'MALE');
      setApiErrors(null);
    }
  }, [open, user]);

  const handleSubmit = async (form: HTMLFormElement) => {
    setLoading(true);
    setApiErrors(null);

    try {
      const formData = new FormData(form);
      formData.set('gender', gender);

      const photoFile = formData.get('photo') as File;
      if (photoFile && photoFile.size === 0) {
        formData.delete('photo');
      }

      const response = await updateMe(formData);

      if (response?.success) {
        toast.success(response.message || 'Profile updated successfully');
        router.refresh();
        onSuccess();
        onClose();
      } else {
        setApiErrors(response?.errors || []);
        toast.error(response?.message || 'Update failed');
      }
    } catch (err: any) {
      toast.error(err.message || 'Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-xl h-fit max-h-[90vh] flex flex-col p-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle className="text-xl font-bold">
            Edit Profile Information
          </DialogTitle>
        </DialogHeader>

        <form
          className="flex flex-col overflow-hidden"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e.currentTarget);
          }}
        >
          <div className="overflow-y-auto px-6 py-4 space-y-4">
            {/* Name Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>First Name</FieldLabel>
                <Input
                  name="firstName"
                  defaultValue={user?.firstName || ''}
                  required
                />
                <FieldError errors={apiErrors} field="firstName" />
              </Field>

              <Field>
                <FieldLabel>Last Name</FieldLabel>
                <Input
                  name="lastName"
                  defaultValue={user?.lastName || ''}
                  required
                />
                <FieldError errors={apiErrors} field="lastName" />
              </Field>
            </div>

            {/* Contact Info */}
            <Field>
              <FieldLabel>Phone Number</FieldLabel>
              <Input
                name="phoneNumber"
                defaultValue={user?.phoneNumber || ''}
                placeholder="01XXXXXXXXX"
              />
              <FieldError errors={apiErrors} field="phoneNumber" />
            </Field>

            <Field>
              <FieldLabel>Address</FieldLabel>
              <Input
                name="address"
                defaultValue={user?.address || ''}
                placeholder="Village, Post, Upazila"
              />
              <FieldError errors={apiErrors} field="address" />
            </Field>

            {/* Role Specific Fields */}
            {(user?.role === 'ADMIN' || user?.role === 'TEACHER') && (
              <Field>
                <FieldLabel>Designation</FieldLabel>
                <Input
                  name="designation"
                  defaultValue={(user as any)?.designation || ''}
                />
                <FieldError errors={apiErrors} field="designation" />
              </Field>
            )}

            {/* Gender and Photo */}
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Gender</FieldLabel>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MALE">Male</SelectItem>
                    <SelectItem value="FEMALE">Female</SelectItem>
                    <SelectItem value="OTHER">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FieldError errors={apiErrors} field="gender" />
              </Field>

              <Field>
                <FieldLabel>Update Photo</FieldLabel>
                <Input
                  name="photo"
                  type="file"
                  accept="image/*"
                  className="cursor-pointer"
                />
              </Field>
            </div>
          </div>

          <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving Changes...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileFormDialog;
