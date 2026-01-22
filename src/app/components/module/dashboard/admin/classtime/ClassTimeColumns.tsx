import { IColumn } from '@/app/components/module/dashboard/ManagementTable';
import { formatTime12h } from '@/lib/formatter';
import { IClassTimeTableProps } from '@/types/classTime.interface';


const ClassTimeColumns: IColumn<IClassTimeTableProps>[] = [
  {
    header: 'Period',
    accessor: (row) => row.period,
  },
  {
    header: 'Start Time',
    accessor: (row) => formatTime12h(row.startTime),
  },
  {
    header: 'End Time',
    accessor: (row) => formatTime12h(row.endTime),
  },
];

export default ClassTimeColumns;
