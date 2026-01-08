export interface IDay {
  id: string;
  name: string;
}

export const days: IDay[] = [
  { id: '1', name: 'SATURDAY' },
  { id: '2', name: 'SUNDAY' },
  { id: '3', name: 'MONDAY' },
  { id: '4', name: 'TUESDAY' },
  { id: '5', name: 'WEDNESDAY' },
  { id: '6', name: 'THURSDAY' },
  { id: '7', name: 'FRIDAY' },
];

export const DAYS = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

export const PERIODS = ['1', '2', '3', '4', '5', '6'];

export const FeeCategories = [
  'ADMISSION',
  'SESSION',
  'MONTHLY',
  'TUITION',
  'EXAM',
  'TRANSPORT',
  'LAB',
  'OTHER',
] as const;
