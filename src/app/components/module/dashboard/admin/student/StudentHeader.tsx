'use client';

import ManagementPageHeader from '../../ManagementPageHeader';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import StudentFormDialog from './StudentFormDialog';
import { IClass } from '../../../../../../types/attendance.interface';
import SearchField from '../../../../shared/SearchField';
import ClassSelector from '@/app/components/shared/ClassSelector';

const StudentHeader = ({ classes }: { classes: IClass[] }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        title="Student Management"
        description="Manage students information and details"
        searchField={<SearchField />}
        showSearch={true}
        classSelector={<ClassSelector classes={classes} />}
        actions={[
          {
            label: 'Add Student',
            icon: Plus,
            onClick: () => setIsDialogOpen(true),
          },
        ]}
      />

      <StudentFormDialog
        classes={classes}
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSuccess={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default StudentHeader;
