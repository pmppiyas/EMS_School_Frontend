// components/PaymentSlip.tsx
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { IStudent } from '@/types/student.interface';

interface PaymentSlipProps {
  student: IStudent;
  className?: string;
  year: number | null;
  breakdown: {
    name: string;
    amount: number;
    months?: string;
    term?: string;
  }[];
  total: string;
  receiptNo: string;
}

const PaymentSlip = ({
  student,
  year,
  breakdown,
  total,
  receiptNo,
}: PaymentSlipProps) => {
  if (!student) return null;

  const today = new Date().toLocaleDateString();

  return (
    <div id="printable-slip" className="invoice-wrapper">
      <div className="flex gap-4 items-center">
        <Image src="/school-logo.png" alt="DMSC" width={60} height={60} />
        <div>
          <h1 className="text-2xl ">Dharmopur Model School and College</h1>
          <p className="text-sm text-muted-foreground">
            Established 2010 · Gobindoganj, Gaibandha
          </p>
        </div>
      </div>

      <Separator />

      <div className="flex justify-between text-[13px] mt[10px]">
        <div>
          <p>
            <strong>Receipt No:</strong> {receiptNo}
          </p>
          <p>
            <strong>Date:</strong> {today}
          </p>
        </div>

        <div className="text-right">
          <p>
            <strong>Student:</strong> {student.firstName}
          </p>
          <p>
            <strong>Class:</strong> {student.class?.name}
          </p>
          <p>
            <strong>Year:</strong> {year}
          </p>
        </div>
      </div>

      <Separator />

      <div className="mt[12px]">
        {breakdown.map((item, idx) => (
          <div key={idx} className="flex justify-between mb[10px]">
            <div>
              <p className="font-semibold">{item.name}</p>
              {item.months && (
                <p className="text-sm text-muted-foreground">{item.months}</p>
              )}
              {item.term && (
                <p className="text-sm text-muted-foreground">
                  {item.term} TERM
                </p>
              )}
            </div>
            <p className="font-bold">৳{item.amount}</p>
          </div>
        ))}
      </div>

      <Separator />

      <div className="flex items-center justify-between font-bold">
        <span>Total Payable</span>
        <span>৳{total}</span>
      </div>

      <div className="flex  flex-col items-center justify-center mt-4 text-sm">
        <p>Thank you for your payment</p>
        <p className="muted-text">This is a system generated receipt</p>
      </div>
    </div>
  );
};

export default PaymentSlip;
