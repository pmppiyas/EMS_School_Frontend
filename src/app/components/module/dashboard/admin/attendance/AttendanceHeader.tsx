'use client';

import ManagementPageHeader from '../../ManagementPageHeader';
import { useState } from 'react';
import { Plus } from 'lucide-react';

const AttendanceHeader = () => {
  const [isDialogopen, setIsDialogOpen] = useState(false);
  return (
    <div>
      <ManagementPageHeader
        title="Attendance Management"
        description="Manage attendance information and details"
        actions={[
          {
            label: 'Add Attendance',
            icon: Plus,
            onClick: () => setIsDialogOpen(true),
          },
        ]}
      />
    </div>
  );
};

export default AttendanceHeader;
