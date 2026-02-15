import ManagePageHeader from '@/app/components/module/dashboard/admin/manage/ManageHeader';
import ManagePageWrapper from '@/app/components/module/dashboard/admin/manage/ManagePageWrapper';
import { PaymentLoadingSkeleton } from '@/app/components/module/dashboard/admin/payment/Paymentloadingskeleton';
import { Suspense } from 'react';

const page = () => {
  return (
    <div>
      <ManagePageHeader />

      <Suspense key={''} fallback={<PaymentLoadingSkeleton />}>
        <ManagePageWrapper />
      </Suspense>
    </div>
  );
};

export default page;
