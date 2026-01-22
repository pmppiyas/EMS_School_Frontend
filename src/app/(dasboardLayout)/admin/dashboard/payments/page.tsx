import PaymentHeader from '@/app/components/module/dashboard/admin/payment/PaymentHeader';
import TabSelector from '@/app/components/shared/TabSelector';
import { getClasses } from '@/app/services/class/getAllClasses';
import { Suspense } from 'react';
import ClassSelector from '@/app/components/shared/ClassSelector';
import CreatePaymentWrapper from '@/app/components/module/dashboard/admin/payment/CreatePaymentWrapper';
import ViewPaymentWrapper from '@/app/components/module/dashboard/admin/payment/ViewPaymentWrapper';
import { PaymentLoadingSkeleton } from '@/app/components/module/dashboard/admin/payment/Paymentloadingskeleton';

const PaymentPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ tabs: string }>;
}) => {
  const params = await searchParams;
  const tab = params.tabs ?? 'create';
  const classesData = await getClasses();
  const classes = classesData?.classes || [];

  const paymentTabs = [
    { label: 'Make Payment', value: 'create' },
    { label: 'Payment Records', value: 'view' },
  ];

  return (
    <div className="space-y-6">
      <PaymentHeader
        selectTab={<TabSelector tabs={paymentTabs} />}
        tab={tab}
        classSelector={
          tab === 'view' ? <ClassSelector classes={classes} /> : undefined
        }
      />

      <div className="mt-4">
        {tab === 'create' && (
          <Suspense fallback={<PaymentLoadingSkeleton />}>
            <CreatePaymentWrapper classes={classes} />
          </Suspense>
        )}

        {tab === 'view' && (
          <Suspense key={tab} fallback={<PaymentLoadingSkeleton />}>
            <ViewPaymentWrapper />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
