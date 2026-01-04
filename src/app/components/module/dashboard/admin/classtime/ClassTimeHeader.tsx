'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import ManagementPageHeader from '../../ManagementPageHeader';
import ClassTimeFormDialog from './ClassTimeFormDiolog';

const ClassTimeHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <ManagementPageHeader
        title="Class Time Management"
        description="Manage ClassTimes information and details"
        actions={[
          {
            label: 'Add ClassTime',
            icon: Plus,
            onClick: () => setIsDialogOpen(true),
          },
        ]}
      />

      <ClassTimeFormDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSuccess={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default ClassTimeHeader;
