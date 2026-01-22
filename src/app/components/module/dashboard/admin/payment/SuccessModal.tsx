import React from 'react';
import { CheckCircle, Printer } from 'lucide-react';
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
  onPrint: () => void;
}

const SuccessModal = ({ isOpen, onClose, onPrint }: SuccessModalProps) => {
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

        <div className="flex items-center justify-between gap-3 mt-6">
          <Button
            onClick={onClose}
            variant="default"
            className="flex-1 font-semibold"
          >
            New Payment
          </Button>
          <Button
            onClick={onPrint}
            variant="outline"
            className="flex-1 border-input bg-background hover:bg-accent"
          >
            <Printer className="w-4 h-4 mr-2" />
            Print Slip
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
