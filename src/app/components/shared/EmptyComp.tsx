import { CalendarDays, LucideIcon } from 'lucide-react';
import React from 'react';

interface EmptyCompProps {
  subject?: string;
  description?: string;
  refreshButton?: React.ReactNode;
  icon?: LucideIcon;
}

const EmptyComp = ({
  subject,
  description,
  refreshButton,
  icon: Icon = CalendarDays,
}: EmptyCompProps) => {
  return (
    <div className="col-span-full py-24 flex flex-col items-center justify-center border-2 border-dashed rounded-3xl bg-muted/10 animate-in fade-in duration-500">
      <div className="p-5 bg-muted/20 rounded-full mb-4">
        <Icon size={48} className="text-muted-foreground/30" />
      </div>

      <h3 className="text-lg font-bold text-muted-foreground">
        No {subject ?? 'records'} found!
      </h3>

      <p className="text-sm text-muted-foreground/60 max-w-xs text-center mt-1">
        {description ??
          'There are no records found for this specific selection. Enjoy your time off!'}
      </p>

      {refreshButton && <div className="mt-6">{refreshButton}</div>}
    </div>
  );
};

export default EmptyComp;
