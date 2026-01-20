import FeeTypeHeader from '@/app/components/module/dashboard/admin/feetype/FeeTypeHeader';
import FeeTypeTable from '@/app/components/module/dashboard/admin/feetype/FeeTypeTable';
import { getClasses } from '@/app/services/class/getAllClasses';
import { getAllFeeTypes } from '@/app/services/fee/getFeetypes';

const page = async () => {
  const { classes } = await getClasses();
  const feetypes = await getAllFeeTypes();

  return (
    <div>
      <FeeTypeHeader classes={classes} />
      <FeeTypeTable feetypes={feetypes} />
    </div>
  );
};

export default page;
