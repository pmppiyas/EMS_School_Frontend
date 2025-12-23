import { IColumn } from '../../ManagementTable';
import { IStudent } from '../../../../../../types/student.interface';
import { formatDate } from '../../../../../../lib/formatter';

const StudentColumns: IColumn<IStudent>[] = [
  {
    header: 'Name',
    accessor: (student: IStudent) => `${student.firstName} ${student.lastName}`,
  },
  {
    header: 'Class',
    accessor: (student: IStudent) => student.class?.name || 'N/A',
  },
  {
    header: 'Roll',
    accessor: (student: IStudent) => student.roll,
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
