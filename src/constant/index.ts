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

export const MONTHS = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

export const PERIODS = ['1', '2', '3', '4', '5', '6'];

export const FeeCategories = [
  'ADMISSION',
  'SESSION',
  'MONTHLY',
  'TUITION',
  'EXAM',
  'TRANSPORT',
  'PICNIC',
  'SPORTS',
  'CULTURAL',
  'LAB',
  'OTHER',
] as const;

export const TERMS = ['FIRST', 'SECOND', 'THIRD', 'FINAL', 'MONTHLY'] as const;

export const terms = [
  { label: 'Monthly', value: 'MONTHLY' },
  { label: 'First Term', value: 'FIRST' },
  { label: 'Second Term', value: 'SECOND' },
  { label: 'Third Term', value: 'THIRD' },
  { label: 'Final Term', value: 'FINAL' },
];
