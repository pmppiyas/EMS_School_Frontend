import ClassTimeHeader from '../../../../components/module/dashboard/admin/classtime/ClassTimeHeader';
import ClassTimeTable from '../../../../components/module/dashboard/admin/classtime/ClassTimeTable';
import { getAllClassTimes } from '../../../../services/classTime/getAllClassTimes';

const ClassTimesPage = async () => {
  const { classtimes } = await getAllClassTimes();

  return (
    <div>
      <ClassTimeHeader />
      <ClassTimeTable ClassTimes={classtimes} />
    </div>
  );
};

export default ClassTimesPage;
