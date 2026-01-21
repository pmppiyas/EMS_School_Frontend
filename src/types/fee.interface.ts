import { TERMS } from '@/constant';
import { IClass } from '@/types/class.interface';

export interface IFeeType {
  id: string;
  amount: number;
  category: string;
  classId: string;
  class: IClass;
}

export interface FeeTypeFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  feeType?: IFeeType;
}

export interface IFee {
  student: {
    firstName: string;
    lastName: string;
    class: { name: string };
  };
  feeType: {
    category: string;
    amount: number;
  };
  term: string | null;
  month: string | null;
  year: number | null;
  paidDate: string;
  issuedBy: string;
}

export type Term = (typeof TERMS)[number];

export interface PaidFee {
  id?: string;
  feeTypeId?: string;
  month?: string | null;
  term?: Term | null;
  year?: number;
  amount?: number;
  feeType?: {
    id?: string;
    category: string;
  };
}
