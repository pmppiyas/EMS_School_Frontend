import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';
import React from 'react';

const ResultHeader = ({
  tabSelector,
  classSelector,
}: {
  tabSelector: React.ReactNode;
  classSelector: React.ReactNode;
}) => {
  return (
    <div>
      <ManagementPageHeader
        title="Result Management"
        description="Manage results information and details"
        actions={[tabSelector, classSelector]}
      />
    </div>
  );
};

export default ResultHeader;
