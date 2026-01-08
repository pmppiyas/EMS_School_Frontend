export interface IFeeType {
  id: string;
  amount: number;
  category: string;
  classId?: string;
}

export interface FeeTypeFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  feeType?: IFeeType;
}
