import ClassHeader from '@/app/components/module/dashboard/admin/class/ClassHeader';
import ClassTable from '@/app/components/module/dashboard/admin/class/ClassTable';
import { getClasses } from '@/app/services/class/getAllClasses';

const page = async () => {
  const { classes } = await getClasses();

  return (
    <div>
      <ClassHeader />
      <ClassTable classes={classes} />
    </div>
  );
};

export default page;
