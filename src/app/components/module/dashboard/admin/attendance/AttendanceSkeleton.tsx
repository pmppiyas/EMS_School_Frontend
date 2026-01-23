import { Skeleton } from '@/components/ui/skeleton';

const AttendanceSkeleton = () => {
  return (
    <div className="space-y-6 w-full animate-in fade-in duration-500">
      {/* Table Skeleton */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="p-4 border-b bg-muted/30">
          <Skeleton className="h-6 w-48" />
        </div>

        <div className="space-y-0">
          {/* Table Header Placeholder */}
          <div className="flex px-4 py-3 bg-muted/50 gap-4">
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-20 ml-auto" />
            <Skeleton className="h-4 w-20" />
          </div>

          {/* Table Rows Placeholder */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center px-4 py-4 border-t gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
              <Skeleton className="h-8 w-24 rounded-full ml-auto" />
              <Skeleton className="h-8 w-12 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceSkeleton;
