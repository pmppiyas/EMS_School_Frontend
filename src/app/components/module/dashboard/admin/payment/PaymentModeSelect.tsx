import { Button } from '@/components/ui/button';
import React from 'react';

interface Props {
  mode: 'create' | 'view';
  onChange: (mode: 'create' | 'view') => void;
}

const PaymentModeSelect = ({ mode, onChange }: Props) => {
  return (
    <div className="flex items-center justify-between gap-5">
      <Button
        onClick={() => onChange('create')}
        className={`px-4 py-2 rounded ${
          mode === 'create' ? 'bg-foreground ' : 'bg-primary '
        }`}
      >
        Create
      </Button>
      <Button
        onClick={() => onChange('view')}
        className={`px-4 py-2 rounded ${
          mode === 'view' ? 'bg-foreground' : 'bg-primary'
        }`}
      >
        View
      </Button>
    </div>
  );
};

export default PaymentModeSelect;
