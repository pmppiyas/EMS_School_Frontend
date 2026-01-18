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
