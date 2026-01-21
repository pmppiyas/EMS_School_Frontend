import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';

const PaymentHeader = ({
  selectTab,
  classSelector,
  tab,
}: {
  selectTab: React.ReactNode;
  classSelector?: React.ReactNode;
  tab: string;
}) => {
  return (
    <div>
      <ManagementPageHeader
        title={tab === 'create' ? 'Make New Payment' : 'Payment Records'}
        description={
          tab === 'create'
            ? 'Process student fees and generate receipts'
            : 'View and manage all past transactions'
        }
        actions={[selectTab, classSelector]}
      />
    </div>
  );
};

export default PaymentHeader;
