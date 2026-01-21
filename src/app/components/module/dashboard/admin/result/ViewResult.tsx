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
import { Printer, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ViewResultProps {
  results: any[];
}

const ViewResult = ({ results }: ViewResultProps) => {
  const [printMode, setPrintMode] = useState<'all' | 'individual'>('all');

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
        rollNo: Number(curr.student.rollNo) || 0,
        scores: {},
      };
    }
    acc[studentId].scores[curr.subject.name] = curr.marks;
    return acc;
  }, {});

  const studentsList = Object.values(groupedResults).sort(
    (a: any, b: any) => b.rollNo - a.rollNo
  );

  const handlePrint = (mode: 'all' | 'individual') => {
    setPrintMode(mode);

    setTimeout(() => {
      window.print();
    }, 100);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-3 print:hidden">
        <Button
          onClick={() => handlePrint('all')}
          variant="outline"
          className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
        >
          <Printer size={16} />
          Print Full List
        </Button>
        <Button
          onClick={() => handlePrint('individual')}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90"
        >
          <FileText size={16} />
          Print Individual Marksheets
        </Button>
      </div>

      <div id="print-section" className="relative">
        {printMode === 'individual' ? (
          studentsList.map((student: any, idx) => (
            <div
              key={idx}
              className="individual-page relative bg-background print:bg-white p-8 mb-4 border rounded-xl print:border-none print:m-0 print:p-10"
            >
              <div className="hidden print:flex absolute inset-0 items-center justify-center pointer-events-none opacity-[0.05] z-0">
                <div className="border-4 border-background p-6 -rotate-12">
                  <h2 className="text-4xl font-bold uppercase text-center">
                    Dharmopur Model <br /> School & College
                  </h2>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-6 border-b-2 mb-8 relative z-10">
                <h1 className="text-2xl font-bold uppercase text-foreground">
                  Academic Transcript
                </h1>
                <p className="text-md font-medium text-muted-foreground mt-1 text-center">
                  Dharmopur Model School And College <br />
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                <p className="text-lg">
                  <strong>Student Name:</strong> {student.name}
                </p>
                <p className="text-lg text-right">
                  <strong>Roll No:</strong> {student.rollNo}
                </p>
              </div>

              <Table className="relative z-10 border">
                <TableHeader className="bg-background">
                  <TableRow>
                    <TableHead className="font-bold border">Subject</TableHead>
                    <TableHead className="text-center font-bold border">
                      Marks Obtained
                    </TableHead>
                    <TableHead className="text-center font-bold border">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <motion.tbody
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {uniqueSubjects.map((sub: any, sIdx) => {
                    const mark = student.scores[sub];
                    return (
                      <TableRow key={sIdx} className="border">
                        <TableCell className="font-medium border">
                          {sub}
                        </TableCell>
                        <TableCell className="text-center border font-mono">
                          {mark ?? '-'}
                        </TableCell>
                        <TableCell className="text-center border">
                          {mark >= 33 ? (
                            <span className="text-green-600 font-bold">
                              PASS
                            </span>
                          ) : (
                            <span className="text-destructive font-bold">
                              FAIL
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </motion.tbody>
              </Table>

              <div className="flex justify-between mt-32 px-4 relative z-10">
                <div className="text-center">
                  <div className="border-t-2 border-foreground w-32 mb-1"></div>
                  <p className="text-xs font-bold uppercase">Secretary</p>
                </div>
                <div className="text-center">
                  <div className="border-t-2 border-foreground w-32 mb-1"></div>
                  <p className="text-xs font-bold uppercase">Headmaster</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden print:border-none print:shadow-none print:bg-white">
            <div className="hidden print:flex absolute inset-0 items-center justify-center pointer-events-none opacity-[0.05] z-0">
              <h1 className="text-[60px] font-black uppercase -rotate-12 text-slate-900 border-4 border-slate-900 p-8">
                Dharmopur Model School
              </h1>
            </div>
            {/* Table Content (Same as your previous code) */}
            <div className="hidden print:flex flex-col items-center justify-center p-8 border-b-2 mb-6 relative z-10">
              <h1 className="text-3xl font-bold uppercase tracking-widest text-foreground">
                Academic Result Sheet
              </h1>
              <p className="text-lg font-medium text-muted-foreground mt-2 tracking-widest text-center">
                ESTD: 2010 | Dharmopur Model School And College
              </p>
            </div>
            <Table>
              <TableHeader className="bg-background print:bg-slate-100">
                <TableRow>
                  <TableHead className="font-bold">Roll</TableHead>
                  <TableHead className="font-bold">Student Name</TableHead>
                  {uniqueSubjects.map((sub) => (
                    <TableHead key={sub} className="text-center font-bold">
                      {sub}
                    </TableHead>
                  ))}
                  <TableHead className="text-right font-bold text-primary">
                    Total
                  </TableHead>
                </TableRow>
              </TableHeader>
              <tbody>
                {studentsList.map((student: any, index) => (
                  <tr key={index} className="border-b">
                    <TableCell className="p-4 font-bold">
                      {student.rollNo}
                    </TableCell>
                    <TableCell className="p-4 font-semibold">
                      {student.name}
                    </TableCell>
                    {uniqueSubjects.map((sub) => (
                      <TableCell key={sub} className="text-center">
                        {student.scores[sub] ?? '-'}
                      </TableCell>
                    ))}
                    <TableCell className="text-right font-bold">
                      {
                        Object.values(student.scores).reduce(
                          (a: any, b: any) => a + (b || 0),
                          0
                        ) as any
                      }
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-section,
          #print-section * {
            visibility: visible;
          }
          #print-section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .individual-page {
            page-break-after: always;
            break-after: page;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewResult;
