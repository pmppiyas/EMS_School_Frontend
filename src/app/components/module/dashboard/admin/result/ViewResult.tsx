'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, Variants } from 'framer-motion';
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import EmptyComp from '@/app/components/shared/EmptyComp';

interface ViewResultProps {
  results: any[];
}

const ViewResult = ({ results }: ViewResultProps) => {
  if (!results || results.length === 0) {
    return <EmptyComp />;
  }

  const uniqueSubjects = Array.from(
    new Set(results.map((r) => r.subject.name))
  );

  const groupedResults = results.reduce((acc: any, curr) => {
    const studentId = curr.studentId;
    if (!acc[studentId]) {
      acc[studentId] = {
        name: `${curr.student.firstName} ${curr.student.lastName}`,
        rollNo: curr.student.rollNo || 'N/A',
        scores: {},
      };
    }
    acc[studentId].scores[curr.subject.name] = curr.marks;
    return acc;
  }, {});

  const studentsList = Object.values(groupedResults);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const rowVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-3 bg-background border-b"></div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-background">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[50px] font-bold">Roll</TableHead>
              <TableHead className="font-bold min-w-[200px]">
                Student Name
              </TableHead>
              {uniqueSubjects.map((subName) => (
                <TableHead
                  key={subName as string}
                  className="text-center font-bold"
                >
                  {subName as string}
                </TableHead>
              ))}
              <TableHead className="text-right font-bold text-primary-foreground">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>

          <motion.tbody
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="divide-y divide-border"
          >
            {studentsList.map((student: any, index) => {
              let studentTotal = 0;
              return (
                <motion.tr
                  key={index}
                  variants={rowVariants}
                  className="bg-background hover:bg-primary/10 transition-colors"
                  style={{ display: 'table-row' }}
                >
                  <TableCell className="p-4 font-mono text-xs text-muted-foreground">
                    {student.rollNo}
                  </TableCell>
                  <TableCell className="p-4 font-semibold ">
                    {student.name}
                  </TableCell>

                  {uniqueSubjects.map((subName) => {
                    const mark = student.scores[subName as string];
                    studentTotal += mark || 0;
                    return (
                      <TableCell
                        key={subName as string}
                        className="p-4 text-center tabular-nums"
                      >
                        {mark !== undefined ? (
                          <span
                            className={
                              mark < 33
                                ? 'text-destructive font-bold'
                                : 'text-muted-foreground font-medium'
                            }
                          >
                            {mark}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                    );
                  })}

                  <TableCell className="p-4 text-right font-bold text-indigo-700">
                    {studentTotal}
                  </TableCell>
                </motion.tr>
              );
            })}
          </motion.tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewResult;
