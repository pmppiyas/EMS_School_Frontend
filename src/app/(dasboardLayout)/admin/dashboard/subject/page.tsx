import SubjectContent from '@/app/components/module/dashboard/admin/subject/SubjectContent';
import { getClasses } from '@/app/services/class/getAllClasses';
import { getSubjects } from '@/app/services/subject/getSubjects';
import { getCookie } from '@/lib/cookies';

const page = async () => {
  const classId = await getCookie('selectedClassId');
  const { classes } = await getClasses();
  const { subjects } = await getSubjects(classId as string);

  return (
    <div>
      <SubjectContent
        classes={classes}
        subjects={subjects}
        classId={classId as string}
      />
    </div>
  );
};

export default page;
