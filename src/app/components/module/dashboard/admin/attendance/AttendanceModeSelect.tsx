/* eslint-disable no-unused-vars */
'use client';

import { Button } from '@/components/ui/button';

interface Props {
  mode: 'mark' | 'today' | 'month';
  onChange: (mode: 'mark' | 'today' | 'month') => void;
}

const AttendanceModeSelect = ({ mode, onChange }: Props) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <Button
        onClick={() => onChange('mark')}
        className={`px-4 py-2 rounded ${
          mode === 'mark' ? 'bg-foreground' : 'bg-primary'
        }`}
      >
        Mark
      </Button>

      <Button
        onClick={() => onChange('today')}
        className={`px-4 py-2 rounded ${
          mode === 'today' ? 'bg-foreground ' : 'bg-primary '
        }`}
      >
        Today
      </Button>

      <Button
        onClick={() => onChange('month')}
        className={`px-4 py-2 rounded ${
          mode === 'month' ? 'bg-foreground ' : 'bg-primary '
        }`}
      >
        Month
      </Button>
    </div>
  );
};

export default AttendanceModeSelect;
