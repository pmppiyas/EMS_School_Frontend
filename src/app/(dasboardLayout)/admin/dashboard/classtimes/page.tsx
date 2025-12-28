import ClassTimeHeader from '../../../../components/module/dashboard/admin/classtime/ClassTimeHeader';
import ClassTimeTable from '../../../../components/module/dashboard/admin/classtime/ClassTimeTable';
import { getAllClassTimes } from '../../../../services/classTime/getAllClassTimes';

const ClassTimesPage = async () => {
  const res = await getAllClassTimes();
  const { classes } = res.data;

  return (
    <div>
      <ClassTimeHeader />
      <ClassTimeTable ClassTimes={classes} />
    </div>
  );
};

export default ClassTimesPage;
