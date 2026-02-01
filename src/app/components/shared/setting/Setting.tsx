import ProfileSection from '@/app/components/shared/setting/ProfileSection';
import SecuritySection from '@/app/components/shared/setting/SecuritySection';
import { IUserProfile } from '@/types/user.inteface';

const Setting = ({ user }: { user: IUserProfile }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-4 ">
      <ProfileSection user={user} />
      <SecuritySection user={user} />
    </div>
  );
};

export default Setting;
