import { FeeCategories } from '@/constant';
import { IClass } from '@/types/class.interface';
import { IFeeType } from '@/types/fee.interface';
import { z } from 'zod';

export type FeeCategory = (typeof FeeCategories)[number];

export interface FeeTypeFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  feeType?: IFeeType;
  classes: IClass[];
}

export const feeTypeSchema = z.object({
  amount: z
    .number({ error: 'Amount must be a number' })
    .min(0, 'Amount must be positive'),
  category: z.enum(FeeCategories, { error: 'Select a category' }),
  classId: z.string().optional(),
});

export type FeeTypeFormValues = z.infer<typeof feeTypeSchema>;
