import React from 'react';
import { CheckCircle, Printer, FileText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrintSlip: () => void;
  onPrintAdmit?: () => void;
  hasExamFee: boolean;
}

const SuccessModal = ({
  isOpen,
  onClose,
  onPrintSlip,
  onPrintAdmit,
  hasExamFee,
}: SuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md border-border bg-background">
        <DialogHeader>
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-center text-xl font-bold text-foreground">
            Payment Successful
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-muted-foreground mt-2">
            The transaction has been completed and recorded.
          </DialogDescription>
        </DialogHeader>

        <div className="flex   justify-between mt-6">
          <Button
            onClick={onClose}
            variant="default"
            className="w-full font-semibold"
          >
            New Payment
          </Button>

          <Button
            onClick={onPrintSlip}
            variant="outline"
            className="flex-1 border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary"
          >
            <Printer className="w-4 h-4 mr-2" />
            Pay Slip
          </Button>

          {hasExamFee && onPrintAdmit && (
            <Button
              onClick={onPrintAdmit}
              variant="outline"
              className="flex-1 border-orange-200 bg-orange-50 hover:bg-orange-100 text-orange-600"
            >
              <FileText className="w-4 h-4 mr-2" />
              Admit Card
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
