
import Featured from '@/app/components/module/home/Featured';
import HeroSection from '@/app/components/module/home/hero';
import Information from '@/app/components/module/home/Information';
import NoticeBoard from '@/app/components/module/home/Notice';
import OurTeacher from '@/app/components/module/home/OurTecaher';
import Testimonial from '@/app/components/module/home/Testimonial';



export default function Home() {
  return (
    <div className='flex flex-col items-center  justify-center  w-full mx-auto space-y-6  bg-primary/10'>
      <HeroSection />
      <NoticeBoard />
      <Information />
      <OurTeacher />
      <Featured />
      <Testimonial />
    </div>
  );
}
