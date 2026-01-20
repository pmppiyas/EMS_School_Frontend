import { ISubject } from '@/types/class.interface';

interface ISubjectFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  subject?: ISubject;
}

const SubjectFormDIalog = ({}: ISubjectFormDialogProps) => {
  return <div>SubjectFormDIalog</div>;
};

export default SubjectFormDIalog;
