import { Skeleton } from '@/components/ui/skeleton';

const AttendanceSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="border rounded-xl p-4 space-y-4">
        <Skeleton className="h-12 w-full" />
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    </div>
  );
};

export default AttendanceSkeleton;
