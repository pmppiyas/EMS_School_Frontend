import PaymentContent from '@/app/components/module/dashboard/admin/payment/PaymentContent';
import { getClasses } from '@/app/services/class/getAllClasses';
import { getAllFeeTypes } from '@/app/services/fee/getFeetypes';
import { getAllStudents } from '@/app/services/student/getAllStudents';
import { getCookie } from '@/lib/cookies';

const PaymentPage = async () => {
  const { classes } = await getClasses();
  const classId = await getCookie('selectedClassId');
  const { students } = await getAllStudents(classId as string);

  const feetypes = await getAllFeeTypes();
  return (
    <div>
      <PaymentContent
        classes={classes}
        students={students}
        feetypes={feetypes}
      />
    </div>
  );
};

export default PaymentPage;
