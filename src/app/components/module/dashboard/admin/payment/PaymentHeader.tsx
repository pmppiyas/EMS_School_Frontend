import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';

const PaymentHeader = ({ selectMode }: { selectMode: React.ReactNode }) => {
  return (
    <div>
      <ManagementPageHeader
        title="Payment Management"
        description="Manage payments information and details"
        actions={[selectMode]}
      />
    </div>
  );
};

export default PaymentHeader;
