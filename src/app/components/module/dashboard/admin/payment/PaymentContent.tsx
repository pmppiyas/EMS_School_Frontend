'use client';
import CreatePayment from '@/app/components/module/dashboard/admin/payment/CreatePayment';
import PaymentHeader from '@/app/components/module/dashboard/admin/payment/PaymentHeader';
import PaymentModeSelect from '@/app/components/module/dashboard/admin/payment/PaymentModeSelect';
import { IClass } from '@/types/attendance.interface';
import { IFeeType } from '@/types/fee.interface';
import { IStudent } from '@/types/student.interface';
import { useState } from 'react';

const PaymentContent = ({
  classes,
  students,
  feetypes
}: {
  classes: IClass[];
  students: IStudent[];
    feetypes: IFeeType[];
}) => {
  const [mode, setMode] = useState<'create' | 'view'>('create');
  return (
    <div>
      <PaymentHeader
        selectMode={<PaymentModeSelect mode={mode} onChange={setMode} />}
      />

      {mode === 'create' && (
        <CreatePayment classes={classes} students={students}  feetypes={feetypes}/>
      )}
      {mode === 'view' && <p>View</p>}
    </div>
  );
};

export default PaymentContent;
