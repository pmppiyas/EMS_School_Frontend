'use client';

const TodayAttends = ({ attendance }: { attendance: any }) => {
  const reports = [
    ...attendance.student.present.list,
    ...attendance.student.absent.list,
    ...attendance.student.late.list,
    ...attendance?.student?.leave?.list,
  ];

  return (
    <div className="space-y-3">
      {reports.map((t: any) => (
        <div
          key={t.userId}
          className="flex justify-between items-center border p-3 rounded-md"
        >
          {/* NAME */}
          <div>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.status}</p>
          </div>

          {/* TIME */}
          <div className="text-right text-sm">
            {t.inTime && (
              <p>
                In:{' '}
                {new Date(t.inTime).toLocaleTimeString('en-BD', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            )}

            {t.outTime && (
              <p>
                Out:{' '}
                {new Date(t.outTime).toLocaleTimeString('en-BD', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            )}
          </div>

          {/* STATUS BADGE */}
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
        </div>
      ))}
    </div>
  );
};

export default TodayAttends;
