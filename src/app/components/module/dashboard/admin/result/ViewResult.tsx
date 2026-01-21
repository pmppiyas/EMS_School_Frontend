'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
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
  results: {
    studentId: string;
    name: string;
    className: string;
    term?: string;
    results: Record<string, number>;
    totalMarks: number;
    rollNo?: number;
  }[];
}

const ViewResult = ({ results }: ViewResultProps) => {
  const [printMode, setPrintMode] = useState<'all' | 'individual'>('all');

  if (!results || results.length === 0) {
    return <EmptyComp />;
  }

  const firstRecord = results[0];

  const uniqueSubjects = Array.from(
    new Set(results.flatMap((s) => Object.keys(s.results)))
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
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between print:hidden">
        <h2 className="text-xl font-medium uppercase">
          {' '}
          {firstRecord.className}
        </h2>
        <div className="flex justify-end gap-3">
          <Button
            onClick={() => handlePrint('all')}
            variant="outline"
            className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10"
          >
            <Printer size={16} /> Print Full List
          </Button>
          <Button
            onClick={() => handlePrint('individual')}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            <FileText size={16} /> Print Individual Marksheets
          </Button>
        </div>
      </div>

      <div id="print-section" className="relative mt-2">
        <AnimatePresence mode="wait">
          {printMode === 'individual' ? (
            <motion.div
              key="individual"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {results.map((student) => (
                <motion.div
                  key={student.studentId}
                  variants={rowVariants}
                  className="individual-page p-8 mb-6 border rounded-xl print:m-0 print:p-10 bg-background shadow-sm"
                >
                  <div className="text-center border-b-2 pb-4 mb-6">
                    <h1 className="text-2xl font-bold uppercase tracking-tight">
                      Academic Transcript
                    </h1>
                    {student.term && (
                      <p className="text-primary font-bold uppercase text-sm mt-1">
                        {student.term.replace('_', ' ')}
                      </p>
                    )}
                    <p className="text-muted-foreground font-medium">
                      Dharmopur Model School And College
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm md:text-base border p-4 rounded-lg bg-slate-50/50">
                    <div className="space-y-1">
                      <p>
                        <strong>Name:</strong> {student.name}
                      </p>
                      <p>
                        <strong>Class:</strong> {student.className}
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-lg">
                        <strong>Position:</strong>{' '}
                        <span className="text-primary font-bold">
                          {student.rollNo}
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground italic">
                        Academic Year: 2026
                      </p>
                    </div>
                  </div>

                  <Table className="border">
                    <TableHeader className="bg-slate-100">
                      <TableRow>
                        <TableHead className="border font-bold text-black">
                          Subject
                        </TableHead>
                        <TableHead className="text-center border font-bold text-black w-32">
                          Marks
                        </TableHead>
                        <TableHead className="text-center border font-bold text-black w-32">
                          Status
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <tbody>
                      {uniqueSubjects.map((sub) => (
                        <TableRow key={sub}>
                          <TableCell className="border font-medium">
                            {sub}
                          </TableCell>
                          <TableCell className="text-center border">
                            {student.results[sub] ?? '-'}
                          </TableCell>
                          <TableCell className="text-center border font-bold">
                            {(student.results[sub] || 0) >= 33 ? (
                              <span className="text-green-600">PASS</span>
                            ) : (
                              <span className="text-red-600">FAIL</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-primary/5 font-bold">
                        <TableCell className="border text-right text-primary">
                          Grand Total Marks
                        </TableCell>
                        <TableCell
                          className="text-center border text-primary"
                          colSpan={2}
                        >
                          {student.totalMarks}
                        </TableCell>
                      </TableRow>
                    </tbody>
                  </Table>

                  <div className="hidden print:flex justify-between mt-20">
                    <div className="border-t border-black px-8 pt-2 text-sm">
                      Class Teacher
                    </div>
                    <div className="border-t border-black px-8 pt-2 text-sm">
                      Principal Signature
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="all-list"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="rounded-xl border bg-card overflow-hidden print:border-none shadow-sm"
            >
              {/* ফুল লিস্ট হেডারে ক্লাস, ইয়ার এবং টার্ম যোগ করা হয়েছে */}
              <div className="hidden print:block text-center p-6 border-b-2">
                <h1 className="text-2xl font-bold uppercase tracking-wide">
                  Academic Result Sheet
                </h1>
                <p className="text-lg font-semibold text-primary mt-1">
                  Dharmopur Model School And College
                </p>
                <div className="flex justify-center gap-6 mt-2 text-sm font-medium border-t pt-2">
                  <p>
                    <strong>Class:</strong> {firstRecord.className}
                  </p>
                  <p>
                    <strong>Term:</strong> {firstRecord.term?.replace('_', ' ')}
                  </p>
                  <p>
                    <strong>Year:</strong> 2026
                  </p>
                </div>
              </div>

              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-16 text-center border-b">
                      Roll
                    </TableHead>
                    <TableHead className="border-b">Student Name</TableHead>
                    {uniqueSubjects.map((sub) => (
                      <TableHead key={sub} className="text-center border-b">
                        {sub}
                      </TableHead>
                    ))}
                    <TableHead className="text-right font-bold text-primary border-b">
                      Total
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <motion.tbody>
                  {results.map((student) => (
                    <motion.tr
                      key={student.studentId}
                      variants={rowVariants}
                      className="border-b transition-colors hover:bg-muted/30"
                    >
                      <TableCell className="font-bold text-primary p-4 text-center">
                        {student.rollNo}
                      </TableCell>
                      <TableCell className="font-semibold p-4">
                        {student.name}
                      </TableCell>
                      {uniqueSubjects.map((sub) => (
                        <TableCell key={sub} className="text-center p-4">
                          {student.results[sub] ?? '-'}
                        </TableCell>
                      ))}
                      <TableCell className="text-right font-bold text-primary p-4">
                        {student.totalMarks}
                      </TableCell>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </Table>

              {/* ফুল লিস্টের শেষেও সিগনেচার সেকশন থাকলে ভালো দেখায় */}
              <div className="hidden print:flex justify-between mt-12 p-10">
                <div className="border-t border-black px-8 pt-1 text-xs">
                  Prepared By
                </div>
                <div className="border-t border-black px-8 pt-1 text-xs">
                  Principal
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ViewResult;
