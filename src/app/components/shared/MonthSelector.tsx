'use client';

import dayjs from 'dayjs';

const months = Array.from({ length: 12 }).map((_, i) =>
  dayjs().month(i).format('MMMM')
);

const MonthSelector = ({
  month,
  year,
  onChange,
}: {
  month: number;
  year: number;
  onChange: (month: number, year: number) => void;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <select
        value={month}
        onChange={(e) => onChange(Number(e.target.value), year)}
        className="border rounded-md px-3 py-1 text-sm"
      >
        {months.map((m, i) => (
          <option key={i} value={i}>
            {m}
          </option>
        ))}
      </select>

      <select
        value={year}
        onChange={(e) => onChange(month, Number(e.target.value))}
        className="border rounded-md px-3 py-1 text-sm"
      >
        {[year - 1, year, year + 1].map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
