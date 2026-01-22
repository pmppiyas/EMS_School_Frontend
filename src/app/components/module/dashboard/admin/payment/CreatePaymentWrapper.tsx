import CreatePayment from '@/app/components/module/dashboard/admin/payment/CreatePayment';
import { getAllFeeTypes } from '@/app/services/fee/getFeetypes';
import { getAllStudents } from '@/app/services/student/getAllStudents';
import { getCookie } from '@/lib/cookies';
import { IClass } from '@/types/class.interface';

async function CreatePaymentWrapper({ classes }: { classes: IClass[] }) {
  const cookieClassId = await getCookie('selectedClassId');

  const defaultClassId = classes.length > 0 ? classes[0].id : '';
  const classId = (cookieClassId as string) || defaultClassId;

  const [studentsData, feetypes] = await Promise.all([
    classId ? getAllStudents(classId) : Promise.resolve({ students: [] }),
    getAllFeeTypes(classId),
  ]);

  return (
    <CreatePayment
      classes={classes}
      students={studentsData?.students || []}
      feetypes={feetypes || []}
    />
  );
}

export default CreatePaymentWrapper;
