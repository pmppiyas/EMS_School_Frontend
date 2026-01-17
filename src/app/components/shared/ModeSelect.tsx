'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface Props {
  mode: 'view' | 'edit';
  onChange: (mode: 'view' | 'edit') => void;
}

const ModeSelect = ({ mode, onChange }: Props) => {
  const router = useRouter();

  const handleModeChange = (newMode: 'view' | 'edit') => {
    onChange(newMode);
    router.refresh();
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <Button
        onClick={() => handleModeChange('view')}
        className={`px-4 py-2 rounded ${
          mode === 'view' ? 'bg-foreground' : 'bg-primary'
        }`}
      >
        View
      </Button>

      <Button
        onClick={() => handleModeChange('edit')}
        className={`px-4 py-2 rounded ${
          mode === 'edit' ? 'bg-foreground' : 'bg-primary'
        }`}
      >
        Manage
      </Button>
    </div>
  );
};

export default ModeSelect;
