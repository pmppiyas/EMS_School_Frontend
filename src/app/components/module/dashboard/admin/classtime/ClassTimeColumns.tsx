import { formatTime12h } from '../../../../../../lib/formatter';
import { IColumn } from '../../ManagementTable';
import { IClassTimeTableProps } from './ClassTimeFormDiolog';

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
