import React from 'react';
import { IColumn } from '../../ManagementTable';
import { ITeacher } from '@/types/teacher.interface';
import { UserInfoCell } from '@/app/components/shared/cell/UserInfoCell';

const TeacherColumns: IColumn<ITeacher>[] = [
  {
    header: 'Name',
    accessor: (teacher: ITeacher) => (
      <UserInfoCell
        name={teacher.firstName + ' ' + teacher.lastName}
        email={teacher.email!}
        photo={teacher.photo}
      />
    ),
  },
  {
    header: 'Designation',
    accessor: (teacher: ITeacher) => teacher.designation,
  },
  {
    header: 'Phone Number',
    accessor: (teacher: ITeacher) => teacher.phoneNumber,
  },
  {
    header: 'Address',
    accessor: (teacher: ITeacher) => teacher.address,
  },
];

export default TeacherColumns;
