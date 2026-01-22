import ViewPayment from '@/app/components/module/dashboard/admin/payment/ViewPayment';
import { getAllFees } from '@/app/services/fee/getAllfees';

async function ViewPaymentWrapper() {
  const { fees } = await getAllFees();
  return <ViewPayment fees={fees} />;
}

export default ViewPaymentWrapper;
