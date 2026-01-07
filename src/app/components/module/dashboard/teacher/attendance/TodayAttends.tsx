'use client';

import EmptyComp from '@/app/components/shared/EmptyComp';
import { RefreshButton } from '@/app/components/shared/RefreshButton';

/* eslint-disable @typescript-eslint/no-explicit-any */

const TodayAttends = ({ attendance }: { attendance: any }) => {
  const reports = [
    ...(attendance?.present?.list ?? []),
    ...(attendance?.late?.list ?? []),
    ...(attendance?.absent?.list ?? []),
    ...(attendance?.leave?.list ?? []),
  ];

  if (reports.length === 0) {
    return <EmptyComp subject="attendance" refreshButton={<RefreshButton />} />;
  }

  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="w-full table-fixed text-sm ">
        <tbody>
          {reports.map((t: any) => (
            <tr key={t.userId} className="border-b">
              <td className="px-4 py-2 whitespace-nowrap font-medium text-left border">
                <div>{t.name}</div>
                <div className="text-muted-foreground text-xs">
                  Roll: {t.roll ?? '-'}
                </div>
              </td>

              <td className="px-4 py-2 text-center border">
                <div>
                  {t.inTime ? (
                    <p>
                      In:{' '}
                      {new Date(t.inTime).toLocaleTimeString('en-BD', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  ) : null}

                  {t.outTime ? (
                    <p>
                      Out:{' '}
                      {new Date(t.outTime).toLocaleTimeString('en-BD', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  ) : null}

                  {!t.inTime && !t.outTime && (
                    <p>
                      Number:{' '}
                      <span className="text-foreground">{t.number}</span>
                    </p>
                  )}
                </div>
              </td>

              {/* Status (Right-aligned) */}
              <td className="px-4 py-2 text-center border">
                <span
                  className={`px-3 py-1 rounded text-white text-xs ${
                    t.status === 'PRESENT'
                      ? 'bg-green-500'
                      : t.status === 'LATE'
                      ? 'bg-yellow-500'
                      : t.status === 'LEAVE'
                      ? 'bg-blue-500'
                      : 'bg-red-500'
                  }`}
                >
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodayAttends;
