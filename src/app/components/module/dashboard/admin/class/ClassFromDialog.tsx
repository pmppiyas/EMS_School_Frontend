/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createClass } from '@/app/services/class/createClass';

interface IClassFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ClassFormDialog: React.FC<IClassFormDialogProps> = ({
  open,
  onClose,
  onSuccess,
}) => {
  const [className, setClassName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await createClass({ name: className });

      if (response.success) {
        toast.success(response.message);
        onSuccess();
        onClose();
        setClassName('');
      } else {
        setError(response.message);
        toast.error(response.message);
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message || 'Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[80vw] max-w-md p-6">
        <DialogHeader>
          <DialogTitle>Create New Class</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
          <Field>
            <FieldLabel>Class Name</FieldLabel>
            <Input
              name="name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              placeholder="e.g. Grade 5"
              required
            />
          </Field>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-end gap-2 mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Creating...' : 'Create Class'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClassFormDialog;
