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
import { useRouter } from 'next/navigation';
import { createAdmin } from '@/app/services/admin/createAdmin';

interface IAdminFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  admin?: any;
}

const AdminFormDialog = ({
  open,
  onClose,
  onSuccess,
  admin,
}: IAdminFormDialogProps) => {
  const router = useRouter();
  const isEdit = !!admin;
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState<IGender>(IGender.MALE);
  const [apiErrors, setApiErrors] = useState<
    { field: string; message: string }[] | null
  >(null);

  useEffect(() => {
    if (open) {
      setGender((admin?.gender as IGender) ?? IGender.MALE);
      setApiErrors(null);
    }
  }, [open, admin]);

  const handleSubmit = async (form: HTMLFormElement) => {
    setLoading(true);
    setApiErrors(null);

    try {
      const formData = new FormData(form);
      formData.set('gender', gender);

      console.log(Object.fromEntries(formData.entries()));

      let response: any;

      if (isEdit && admin?.id) {
        // response = await updateAdmin(admin.id, formData);
        toast.info('Update service not linked yet');
      } else {
        response = await createAdmin(formData);
        toast.info(response.message);
      }

      if (response?.success) {
        toast.success(
          response.message ||
            `Admin ${isEdit ? 'updated' : 'created'} successfully`
        );
        onSuccess();
        onClose();
        router.refresh();
      } else if (response) {
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
            {isEdit ? 'Edit Admin Profile' : 'Add New Admin'}
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
                  defaultValue={admin?.firstName || ''}
                  placeholder="e.g. Abdullah"
                  required
                />
                <FieldError errors={apiErrors} field="firstName" />
              </Field>

              <Field>
                <FieldLabel>Last Name</FieldLabel>
                <Input
                  name="lastName"
                  defaultValue={admin?.lastName || ''}
                  placeholder="e.g. Al Mamun"
                  required
                />
                <FieldError errors={apiErrors} field="lastName" />
              </Field>
            </div>

            {/* Email and Designation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Email Address</FieldLabel>
                <Input
                  name="email"
                  type="email"
                  disabled={isEdit}
                  defaultValue={admin?.email || ''}
                  placeholder="admin@school.com"
                  required
                />
                <FieldError errors={apiErrors} field="email" />
              </Field>

              <Field>
                <FieldLabel>Designation</FieldLabel>
                <Input
                  name="designation"
                  defaultValue={admin?.designation || ''}
                  placeholder="e.g. System Administrator"
                />
                <FieldError errors={apiErrors} field="designation" />
              </Field>
            </div>

            {/* Password for new Admins */}
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

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel>Phone Number</FieldLabel>
                <Input
                  name="phoneNumber"
                  defaultValue={admin?.phoneNumber || ''}
                  placeholder="01XXXXXXXXX"
                />
                <FieldError errors={apiErrors} field="phoneNumber" />
              </Field>

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
            </div>

            <Field>
              <FieldLabel>Address</FieldLabel>
              <Input
                name="address"
                defaultValue={admin?.address || ''}
                placeholder="Enter workplace or home address"
              />
              <FieldError errors={apiErrors} field="address" />
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
                  ? 'Update Admin'
                  : 'Add Admin'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminFormDialog;
