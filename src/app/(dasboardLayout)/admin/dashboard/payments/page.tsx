import PaymentHeader from '@/app/components/module/dashboard/admin/payment/PaymentHeader';
import TabSelector from '@/app/components/shared/TabSelector';
import { getClasses } from '@/app/services/class/getAllClasses';
import { getAllFees } from '@/app/services/fee/getAllfees';
import { getAllFeeTypes } from '@/app/services/fee/getFeetypes';
import { getAllStudents } from '@/app/services/student/getAllStudents';
import { getCookie } from '@/lib/cookies';
import CreatePayment from '@/app/components/module/dashboard/admin/payment/CreatePayment';
import ViewPayment from '@/app/components/module/dashboard/admin/payment/ViewPayment';
import { Suspense } from 'react';
import { TableSkeleton } from '@/app/components/shared/TableSkeleton';
import ClassSelector from '@/app/components/shared/ClassSelector';

const PaymentPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ tabs: string }>;
}) => {
  const params = await searchParams;
  const tab = params.tabs ?? 'create';

  const { classes } = await getClasses();
  const cookieClassId = await getCookie('selectedClassId');
  const classId = (cookieClassId as string) || '';

  const { students } = await getAllStudents(classId);
  const { fees } = await getAllFees();
  const feetypes = await getAllFeeTypes();

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
          <CreatePayment
            classes={classes}
            students={students}
            feetypes={feetypes}
          />
        )}

        {tab === 'view' && (
          <Suspense
            key={tab}
            fallback={<TableSkeleton columnCount={5} rowCount={10} />}
          >
            <ViewPayment fees={fees} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
