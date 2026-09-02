import { getUserInfo } from '@/app/services/auth/userInfo';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

const DashboardHome = async () => {
  const user = await getUserInfo();

  if (user?.role === 'ADMIN') {
    redirect('/admin/dashboard');
  }

  if (user?.role === 'TEACHER') {
    redirect('/teacher/dashboard');
  }

  redirect('/dashboard/attendance');
};

export default DashboardHome;
