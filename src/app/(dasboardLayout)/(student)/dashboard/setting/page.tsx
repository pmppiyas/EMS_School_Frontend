import Setting from '@/app/components/shared/setting/Setting';
import SettingHeader from '@/app/components/shared/setting/SettingHeader';
import { getMe } from '@/app/services/shared/getMe';

const page = async () => {
  const user = await getMe();
  return (
    <div>
      <SettingHeader />

      <Setting user={user} />
    </div>
  );
};

export default page;
