/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { markAttendance } from '../../../../../services/attendance/markAttendance';
import { cn } from '@/lib/utils';

interface IStudent {
  userId: string;
  firstName: string;
  lastName: string;
  roll: number;
}

const MarkAttendance = ({ students }: { students: IStudent[] }) => {
  const searchParams = useSearchParams();
  const classId = searchParams.get('classId');

  const [attendance, setAttendance] = useState<
    { userId: string; isPresent: boolean }[]
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (students?.length > 0) {
      setAttendance(
        students.map((s) => ({ userId: s.userId, isPresent: true }))
      );
    }
  }, [students]);

  const toggleAttendance = (userId: string) => {
    setAttendance((prev) =>
      prev.map((item) =>
        item.userId === userId ? { ...item, isPresent: !item.isPresent } : item
      )
    );
  };

  const handleSubmit = async () => {
    if (!classId) {
      toast.error('Please select a class from the header first!');
      return;
    }

    setLoading(true);
    const now = new Date();
    const fixedInTime = new Date(
      Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0)
    );

    try {
      const payload = {
        classId,
        records: attendance.map((item) => ({
          userId: item.userId,
          inTime: item.isPresent ? fixedInTime.toISOString() : undefined,
        })),
      };
      const res = await markAttendance(payload);
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error.message || 'Failed to submit attendance');
    } finally {
      setLoading(false);
    }
  };

  if (!students || students.length === 0) {
    return (
      <div className="p-10 text-center border-2 border-dashed border-border rounded-xl mt-6 text-muted-foreground bg-card">
        No students found for the selected class.
      </div>
    );
  }

  return (
    <div className="mt-4 border border-border rounded-xl overflow-hidden shadow-sm bg-card">
      <div className="flex justify-between items-center p-4 md:p-6 border-b border-border bg-muted/30">
        <div>
          <h2 className="text-xl font-bold text-foreground tracking-tight">
            Attendance Sheet
          </h2>
          <p className="text-sm text-muted-foreground">
            Date:{' '}
            <span className="font-medium text-foreground">
              {new Date().toLocaleDateString('en-GB')}
            </span>
          </p>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 h-10 shadow-md font-semibold"
        >
          {loading ? 'Submitting...' : 'Confirm Attendance'}
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow className="hover:bg-transparent border-b border-border">
              <TableHead className="w-[100px] py-4 pl-6 text-primary font-bold">
                Roll
              </TableHead>
              <TableHead className="text-primary font-bold">
                Student Name
              </TableHead>
              <TableHead className="text-right py-4 pr-6 text-primary font-bold">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students.map((student) => {
              const isPresent = attendance.find(
                (a) => a.userId === student.userId
              )?.isPresent;

              return (
                <TableRow
                  key={student.userId}
                  className={cn(
                    'transition-colors border-b border-border/50',
                    isPresent
                      ? 'hover:bg-accent/50'
                      : 'bg-destructive/5 hover:bg-destructive/10'
                  )}
                >
                  <TableCell className="font-bold text-foreground/70 pl-6">
                    {student.roll}
                  </TableCell>
                  <TableCell className="font-medium text-foreground">
                    {student.firstName} {student.lastName}
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <div className="flex justify-end items-center gap-4">
                      <span
                        className={cn(
                          'text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md border',
                          isPresent
                            ? 'text-green-600 bg-green-50 border-green-200'
                            : 'text-destructive bg-destructive/10 border-destructive/20'
                        )}
                      >
                        {isPresent ? 'Present' : 'Absent'}
                      </span>

                      <Checkbox
                        checked={isPresent}
                        onCheckedChange={() => toggleAttendance(student.userId)}
                        className="h-6 w-6 rounded-md border-input data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-transform active:scale-90"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MarkAttendance;
