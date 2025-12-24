'use client';
import ManagementPageHeader from '../../ManagementPageHeader';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import StudentFormDialog from './StudentFormDialog';

const StudentHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <ManagementPageHeader
        title="Student Management"
        description="Manage students information and details"
        actions={[
          {
            label: 'Add Student',
            icon: Plus,
            onClick: () => setIsDialogOpen(true),
          },
        ]}
      />

      <StudentFormDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSuccess={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default StudentHeader;
