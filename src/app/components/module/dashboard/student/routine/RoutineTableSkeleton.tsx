import { Skeleton } from '@/components/ui/skeleton';

const RoutineTableSkeleton = () => {
  return (
    <div className="w-full space-y-6 animate-pulse">
      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border overflow-hidden bg-card"
          >
            {/* Header section - Height doubled (h-10 to h-20) */}
            <div className="h-20 bg-muted/40 px-6 flex justify-between items-center border-b">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-28" />
            </div>

            {/* Content section - Padding and Skeleton size doubled */}
            <div className="p-10 flex gap-5 items-center">
              {/* Icon box size increased (h-10 to h-20) */}
              <Skeleton className="h-20 w-20 rounded-2xl" />

              <div className="flex-1 space-y-5">
                {/* Title and Subtitle height increased */}
                <Skeleton className="h-8 w-[90%]" />
                <Skeleton className="h-5 w-[60%]" />
              </div>
            </div>

            {/* Action/Footer area mockup */}
            <div className="px-10 pb-8 flex justify-end">
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutineTableSkeleton;
