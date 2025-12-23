'use client';
import ManagementPageHeader from '../../ManagementPageHeader';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const StudentHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <ManagementPageHeader
        title="Student Management"
        description="Manage students information and details"
        actions={[
          {
            label: 'Add student',
            icon: Plus,
            onClick: () => setIsDialogOpen(true),
          },
        ]}
      />
    </div>
  );
};

export default StudentHeader;
