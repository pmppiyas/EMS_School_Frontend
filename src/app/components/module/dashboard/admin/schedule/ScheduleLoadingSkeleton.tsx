import { PERIODS } from '@/constant';
import { Skeleton } from '@/components/ui/skeleton';

export const ScheduleLoadingSkeleton = () => {
  return (
    <div className="overflow-x-auto mt-6 animate-pulse">
      <table className="w-full border border-primary-foreground text-sm">
        <thead className="bg-primary-foreground">
          <tr>
            <th className="border px-4 py-3 text-left w-32">
              <Skeleton className="h-4 w-16" />
            </th>
            {PERIODS.map((p) => (
              <th
                key={p}
                className="border px-4 py-3 text-center min-w-[120px]"
              >
                <Skeleton className="h-4 w-20 mx-auto" />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3, 4, 5].map((row) => (
            <tr key={row}>
              <td className="border px-4 py-4">
                <Skeleton className="h-5 w-24" />
              </td>

              {PERIODS.map((p) => (
                <td key={p} className="border p-2">
                  <div className="space-y-2 p-2 rounded bg-muted-foreground/10 ">
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                    <Skeleton className="h-2 w-2/3 opacity-50" />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
