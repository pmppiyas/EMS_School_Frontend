import { Card } from '@/components/ui/card';

import { CalendarDays, ReceiptText } from 'lucide-react';
import { IFee } from '@/types/fee.interface';

const ViewPayment = ({ fees }: { fees: IFee[] }) => {
  return (
    <div className="flex flex-col gap-2 max-w-full mx-auto">
      {fees.map((fee, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:bg-primary-foreground transition-colors cursor-default"
        >
          <div className="px-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ReceiptText size={20} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-sm leading-none">
                  {fee.feeType.category}
                </h4>
                <p className="text-[12px] text-muted-foreground mt-1 uppercase font-medium">
                  {fee.student.firstName} • Class {fee.student.class.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-[11px] text-slate-500 flex items-center gap-1">
                    <CalendarDays size={12} />
                    {fee.month
                      ? `${fee.month} ${fee.year}`
                      : new Date(fee.paidDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-right shrink-0">
              <p className="font-bold text-primary text-sm">
                + ৳{fee.feeType.amount.toLocaleString()}
              </p>
              <p className="text-[10px] text-slate-400 mt-1">
                {new Date(fee.paidDate).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ViewPayment;
