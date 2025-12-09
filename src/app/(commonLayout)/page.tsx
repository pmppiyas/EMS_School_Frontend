
import HeroSection from '@/app/components/module/home/hero';
import Information from '@/app/components/module/home/Information';
import NoticeBoard from '@/app/components/module/home/Notice';


export default function Home() {
  return (
    <div className='flex flex-col items-center  justify-center  w-full mx-auto space-y-6'>
      <HeroSection />
      <Information />
      <NoticeBoard />
    </div>
  );
}
