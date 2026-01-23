import { Skeleton } from '@/components/ui/skeleton';

const DiaryTableSkeleton = () => {
  return (
    <div className="mx-auto shadow-2xl rounded-lg overflow-hidden bg-background/70 border border-border animate-pulse">
      <div className="bg-primary/20 p-4 border-b">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <Skeleton className="h-8 w-48 bg-primary/20" />
            <Skeleton className="h-3 w-32 bg-primary/10" />
          </div>
          <div className="text-right space-y-2">
            <Skeleton className="h-6 w-32 ml-auto bg-primary/20" />
            <Skeleton className="h-3 w-16 ml-auto bg-primary/10" />
          </div>
        </div>
      </div>

      <div className="divide-y-2 divide-border min-h-[200px]">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="grid grid-cols-4 min-h-[100px]">
            <div className="col-span-1 p-4 flex flex-col justify-center items-center border-r-2 border-border/40 bg-muted/30">
              <Skeleton className="h-3 w-16 mb-2" />
              <Skeleton className="h-5 w-24 mb-3" />
              <Skeleton className="h-3 w-14" />
            </div>

            <div className="col-span-3 px-6 py-6 flex flex-col justify-center space-y-3 relative">
              <div className="flex-1 space-y-2 border-l-4 border-muted pl-4">
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[70%]" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-28" />
              </div>

              <div className="absolute inset-0 z-[-1] opacity-[0.05] bg-[linear-gradient(var(--muted)_1px,transparent_1px)] bg[size:100%_1.5rem]" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted px-8 py-3 flex justify-between">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
  );
};

export default DiaryTableSkeleton;
