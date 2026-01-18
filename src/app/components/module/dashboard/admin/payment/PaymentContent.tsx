'use client';
import CreatePayment from '@/app/components/module/dashboard/admin/payment/CreatePayment';
import PaymentHeader from '@/app/components/module/dashboard/admin/payment/PaymentHeader';
import PaymentModeSelect from '@/app/components/module/dashboard/admin/payment/PaymentModeSelect';
import ViewPayment from '@/app/components/module/dashboard/admin/payment/ViewPayment';
import { IClass } from '@/types/class.interface';
import { IFee, IFeeType } from '@/types/fee.interface';
import { IStudent } from '@/types/student.interface';
import { useState } from 'react';

const PaymentContent = ({
  classes,
  students,
  feetypes,
  fees,
}: {
  classes: IClass[];
  students: IStudent[];
  feetypes: IFeeType[];
  fees: IFee[];
}) => {
  const [mode, setMode] = useState<'create' | 'view'>('create');
  return (
    <div>
      <PaymentHeader
        selectMode={<PaymentModeSelect mode={mode} onChange={setMode} />}
      />

      {mode === 'create' && (
        <CreatePayment
          classes={classes}
          students={students}
          feetypes={feetypes}
        />
      )}
      {mode === 'view' && <ViewPayment fees={fees} />}
    </div>
  );
};

export default PaymentContent;
