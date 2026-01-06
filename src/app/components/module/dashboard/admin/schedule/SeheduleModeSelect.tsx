'use client';

import { Button } from '@/components/ui/button';

interface Props {
  mode: 'view' | 'edit';
  onChange: (mode: 'view' | 'edit') => void;
}

const ScheduleModeSelect = ({ mode, onChange }: Props) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <Button
        onClick={() => onChange('view')}
        className={`px-4 py-2 rounded ${
          mode === 'view' ? 'bg-foreground' : 'bg-primary'
        }`}
      >
        View
      </Button>

      <Button
        onClick={() => onChange('edit')}
        className={`px-4 py-2 rounded ${
          mode === 'edit' ? 'bg-foreground ' : 'bg-primary '
        }`}
      >
        Manage
      </Button>
    </div>
  );
};

export default ScheduleModeSelect;
