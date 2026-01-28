import AdmitGenerate from '@/app/components/module/dashboard/admin/generate/AdmitGenerate';
import TestimonialGenerate from '@/app/components/module/dashboard/admin/generate/TestimonialGenerate';
import { IStudent } from '@/types/student.interface';

const GenerateBox = ({
  tab,
  students,
}: {
  tab: string;
  students: IStudent[];
}) => {
  if (tab === 'admit') {
    return <AdmitGenerate students={students} />;
  }

  if (tab === 'testimonial') {
    return <TestimonialGenerate students={students} />;
  }

  return (
    <div className="flex items-center justify-center py-20 border-2 border-dashed rounded-2xl text-muted-foreground">
      Please select a valid tab to generate documents.
    </div>
  );
};

export default GenerateBox;
