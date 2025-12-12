import TeacherMagnetCard from '@/app/components/module/home/TeacherCard';
import Header from '@/app/components/shared/Header';
import { getTeachers } from '@/app/services/tecaher/getTeachers';

export default async function OurTeacher() {

  type Teacher = {
    id: string;
    firstName: string;
    lastName: string;
    designation?: string | null;
    email: string;
    phoneNumber?: string | null;
    gender?: string | null;
  };
  const { teachers }: { teachers: Teacher[] } = await getTeachers();

  return (
    <div className='bg-primary-foreground w-full mx-auto'>
      <section className="py-16  lg:w-11/12 mx-auto ">
        <div className="container mx-auto px-4">
          <Header title='Our' title2=' Teachers' />

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teachers.map((teacher) => (
              <TeacherMagnetCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}