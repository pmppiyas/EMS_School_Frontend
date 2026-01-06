import { IColumn } from '../../ManagementTable';
import { IStudent } from '../../../../../../types/student.interface';
import { formatDate } from '../../../../../../lib/formatter';
import { UserInfoCell } from '@/app/components/shared/cell/UserInfoCell';

const StudentColumns: IColumn<IStudent>[] = [
  {
    header: 'Student',
    accessor: (student: IStudent) => (
      <UserInfoCell
        name={student.firstName + ' ' + student.lastName}
        photo={student.photo}
      />
    ),
  },
  {
    header: 'Roll',
    accessor: (student: IStudent) => student.roll,
  },
  {
    header: 'Class',
    accessor: (student: IStudent) => student.class?.name || 'N/A',
  },

  {
    header: 'Phone',
    accessor: (student: IStudent) => student.phoneNumber || 'N/A',
  },
  {
    header: 'Address',
    accessor: (student: IStudent) => student.address || 'N/A',
  },
  {
    header: 'Date Of Birth',
    accessor: (student: IStudent) => formatDate(student.dateOfBirth),
  },
];

export default StudentColumns;
