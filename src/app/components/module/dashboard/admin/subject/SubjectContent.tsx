'use client';

import SubjectsManage from '@/app/components/module/dashboard/admin/subject/SubjaentManage';
import SubjectHeader from '@/app/components/module/dashboard/admin/subject/SubjectHeader';
import SubjectTable from '@/app/components/module/dashboard/admin/subject/SubjectTable';
import ClassSelector from '@/app/components/shared/ClassSelector';
import ModeSelect from '@/app/components/shared/ModeSelect';
import { IClass, ISubject } from '@/types/class.interface';
import { useState } from 'react';

const SubjectContent = ({
  classes,
  subjects,
  classId,
}: {
  classes: IClass[];
  subjects: ISubject[];
  classId: string;
}) => {
  const [mode, setMode] = useState<'view' | 'edit'>('view');
  return (
    <div>
      <SubjectHeader
        classSelector={<ClassSelector classes={classes} />}
        modeSelector={<ModeSelect mode={mode} onChange={setMode} />}
      />

      {mode === 'view' && <SubjectTable subjects={subjects} />}
      {mode === 'edit' && (
        <SubjectsManage classId={classId} onSuccess={() => setMode('view')} />
      )}
    </div>
  );
};

export default SubjectContent;
