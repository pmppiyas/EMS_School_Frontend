import { Skeleton } from '@/components/ui/skeleton';

const ResultSkeleton = () => {
  return (
    <div className="w-full space-y-4 border rounded-xl p-6 bg-card">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-10 w-24 rounded-full" />
      </div>

      <div className="space-y-3">
        <div className="flex gap-4 border-b pb-4">
          <Skeleton className="h-6 flex-1" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-20" />
        </div>


        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-4 py-2 items-center">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultSkeleton;
