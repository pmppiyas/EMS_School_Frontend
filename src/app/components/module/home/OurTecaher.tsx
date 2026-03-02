import TeacherMagnetCard from '@/app/components/module/home/TeacherCard';
import Header from '@/app/components/shared/Header';
import { getTeachers } from '@/app/services/teacher/getTeachers';
import { ITeacher } from '@/types/teacher.interface';
import * as motion from 'framer-motion/client';
import { Award, GraduationCap, Users } from 'lucide-react';

export default async function OurTeacher() {
  const { teachers = [] }: { teachers: ITeacher[] } = await getTeachers();

  return (
    <div className="bg-background text-foreground w-full mx-auto overflow-hidden">
      <section className="py-16 lg:w-11/12 mx-auto">
        <div className="container mx-auto px-4">
          {/* Header Animation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Header
              title="আমাদের"
              title2=" শিক্ষকবৃন্দ"
              sub="আমাদের দক্ষ ও অভিজ্ঞ শিক্ষকগণ প্রতিটি শিক্ষার্থীকে মানসম্মত শিক্ষা প্রদান এবং শিখতে উৎসাহিত করতে নিবেদিত। প্রতিটি শিক্ষক নিজস্ব দক্ষতা ও উদ্দীপনা নিয়ে তৈরি করেন একটি প্রেরণাদায়ক শিক্ষামূলক পরিবেশ।"
            />
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 bg-primary p-6 md:p-8 rounded-2xl text-white shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">
                    {teachers.length}+
                  </div>
                  <div className="text-white/90 font-medium">দক্ষ শিক্ষক</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">১৫+</div>
                  <div className="text-white/90 font-medium">
                    বছরের অভিজ্ঞতা
                  </div>
                </div>
              </div>

              {/* Stat 3: Success Rate */}
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">৯৮%</div>
                  <div className="text-white/90 font-medium">সফলতার হার</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {teachers.map((teacher, index) => (
              <TeacherMagnetCard
                key={teacher.id}
                teacher={teacher}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
