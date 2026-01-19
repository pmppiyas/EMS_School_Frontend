import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface ITableSkeletonProps {
  columnCount: number;
  rowCount?: number;
}

export const TableSkeleton = ({
  columnCount,
  rowCount = 5,
}: ITableSkeletonProps) => {
  return (
    <div className="w-full border rounded-md max-w-7xl mx-auto overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            {Array.from({ length: columnCount }).map((_, i) => (
              <TableHead key={i} className="text-center">
                <Skeleton className="h-4 w-24 mx-auto" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: columnCount }).map((_, colIndex) => (
                <TableCell key={colIndex} className="py-4">
                  <Skeleton className="h-4 w-full max-w-[120px] mx-auto" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
