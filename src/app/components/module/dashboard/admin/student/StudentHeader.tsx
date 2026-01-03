'use client';

import ManagementPageHeader from '../../ManagementPageHeader';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import StudentFormDialog from './StudentFormDialog';
import { IClass } from '../../../../../../types/attendance.interface';
import ClassSelector from '../../teacher/attendance/ClassSelector';
import SearchField from '../../../../shared/SearchField';

const StudentHeader = ({
  classes,
  selectedClassId,
}: {
  classes: IClass[];
  selectedClassId?: string;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <ManagementPageHeader
        title="Student Management"
        description="Manage students information and details"
        searchField={<SearchField />}
        showSearch={true}
        classSelector={
          <ClassSelector
            key="class-selector"
            classes={classes}
            selectedClassId={selectedClassId as string}
          />
        }
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
