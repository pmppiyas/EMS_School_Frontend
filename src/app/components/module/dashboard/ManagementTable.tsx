import EmptyComp from '@/app/components/shared/EmptyComp';
import { RefreshButton } from '@/app/components/shared/RefreshButton';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Eye, MoreHorizontal, Trash } from 'lucide-react';
import React from 'react';

export interface IColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  className?: string;
}

interface IManagementTableProps<T> {
  data: T[];
  columns: IColumn<T>[];
  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  getRowKey: (row: T) => string;
  emptyMessage?: string;
  isAdmin?: boolean;
}

function ManagementTable<T>({
  data = [],
  columns = [],
  onView,
  onEdit,
  onDelete,
  getRowKey,
  isAdmin = false,
}: IManagementTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="w-full flex items-center justify-center border rounded-md max-w-7xl mx-auto">
        <EmptyComp refreshButton={<RefreshButton />} />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[300px] overflow-x-scroll border rounded-md max-w-7xl mx-auto px-2">
      <Table>
        <TableHeader>
          <TableRow className="text-center">
            {columns.map((column, colIdx) => (
              <TableHead key={colIdx} className="text-center whitespace-nowrap">
                {column.header}
              </TableHead>
            ))}
            {(isAdmin || onView) && (
              <TableHead className="text-center">Actions</TableHead>
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={getRowKey(item)} className="text-center">
              {columns.map((col, idx) => (
                <TableCell
                  key={idx}
                  className={`text-center ${col.className || ''}`}
                >
                  {typeof col.accessor === 'function'
                    ? col.accessor(item)
                    : String(item[col.accessor])}
                </TableCell>
              ))}

              {(isAdmin || onView) && (
                <TableCell className="text-center">
                  {isAdmin ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {onView && (
                          <DropdownMenuItem onClick={() => onView(item)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                        )}
                        {onEdit && (
                          <DropdownMenuItem onClick={() => onEdit(item)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                        )}
                        {onDelete && (
                          <DropdownMenuItem
                            onClick={() => onDelete(item)}
                            className="text-destructive"
                          >
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    onView && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onView(item)}
                      >
                        <Eye className="mr-1 h-4 w-4" />
                        View
                      </Button>
                    )
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ManagementTable;
