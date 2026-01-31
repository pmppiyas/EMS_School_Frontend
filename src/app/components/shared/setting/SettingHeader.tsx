import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';
import { User } from 'lucide-react';


const SettingHeader = () => {
  return (
    <div>
      <ManagementPageHeader
        icon={<User className="w-5 h-5 text-primary" />}
        title="Account Settings"
        description="Manage your profile information, security preferences, and account configurations."
      />
    </div>
  );
};

export default SettingHeader;
