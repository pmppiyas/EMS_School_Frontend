'use client';
import CreatePayment from '@/app/components/module/dashboard/admin/payment/CreatePayment';
import PaymentHeader from '@/app/components/module/dashboard/admin/payment/PaymentHeader';
import PaymentModeSelect from '@/app/components/module/dashboard/admin/payment/PaymentModeSelect';
import { useState } from 'react';

const PaymentContent = () => {
  const [mode, setMode] = useState<'create' | 'view'>('create');
  return (
    <div>
      <PaymentHeader
        selectMode={<PaymentModeSelect mode={mode} onChange={setMode} />}
      />

      {mode === 'create' && <CreatePayment />}
      {mode === 'view' && <p>View</p>}
    </div>
  );
};

export default PaymentContent;
