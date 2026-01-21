/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  Loader2,
  Printer,
  Check,
  CheckCircle,
} from 'lucide-react';
import { toast } from 'sonner';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { IStudent } from '@/types/student.interface';
import { IFeeType, PaidFee, Term } from '@/types/fee.interface';
import ClassSelector from '@/app/components/shared/ClassSelector';
import { setPaysClassId } from '@/app/services/fee/setPaysClassIs';
import { makeFee } from '@/app/services/fee/makeFee';
import { MONTHS, TERMS } from '@/constant';
import PaymentSlip from '@/app/components/module/dashboard/admin/payment/PaymentSlip';
import { IClass } from '@/types/class.interface';
import { myPaidFees } from '@/app/services/fee/paidFees';

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 10 }, (_, i) => CURRENT_YEAR - i);

const CreatePayment = ({
  classes,
  students,
  feetypes,
}: {
  classes: IClass[];
  students: IStudent[];
  feetypes: IFeeType[];
}) => {
  const [selectedStudent, setSelectedStudent] = useState<IStudent | null>(null);
  const [selectedFeeTypes, setSelectedFeeTypes] = useState<IFeeType[]>([]);
  const [selectedClassId, setSelectedClassId] = useState<string>('');

  const [paymentAmount, setPaymentAmount] = useState('');
  const [tuitionMonths, setTuitionMonths] = useState<string[]>([]);
  const [monthlyMonths, setMonthlyMonths] = useState<string[]>([]);
  const [examTerm, setExamTerm] = useState<Term | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(CURRENT_YEAR);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paidFees, setPaidFees] = useState<PaidFee[]>([]);
  const [loadingPaidFees, setLoadingPaidFees] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const hasTuition = selectedFeeTypes.some((fee) => fee.category === 'TUITION');
  const hasMonthly = selectedFeeTypes.some((fee) => fee.category === 'MONTHLY');
  const hasExam = selectedFeeTypes.some((fee) => fee.category === 'EXAM');

  useEffect(() => {
    const fetchPaidFees = async () => {
      if (!selectedStudent?.id || !selectedYear) {
        setPaidFees([]);
        return;
      }

      setLoadingPaidFees(true);
      try {
        const data = await myPaidFees(
          selectedStudent.id,
          selectedYear.toString()
        );
        setPaidFees(data || []);
      } catch (error) {
        setPaidFees([]);
      } finally {
        setLoadingPaidFees(false);
      }
    };

    fetchPaidFees();
  }, [selectedStudent?.id, selectedYear]);

  const filteredFeeTypes = useMemo(() => {
    if (!selectedClassId) return [];

    return feetypes.filter((fee) => {
      if (fee.classId) {
        return fee.classId === selectedClassId;
      }
      if (fee.class?.id) {
        return fee.class.id === selectedClassId;
      }

      return true;
    });
  }, [feetypes, selectedClassId]);

  const getPaidMonthsByCategory = (category: string): Set<string> => {
    if (!selectedYear) return new Set();

    const paidMonthsSet = new Set<string>();

    paidFees.forEach((pf) => {
      if (pf.feeType?.category === category && pf.month) {
        paidMonthsSet.add(pf.month);
      }
    });

    return paidMonthsSet;
  };

  const getPaidTermsByCategory = (category: string): Set<Term> => {
    if (!selectedYear) return new Set();

    const paidTermsSet = new Set<Term>();

    paidFees.forEach((pf) => {
      if (pf.feeType?.category === category && pf.term) {
        paidTermsSet.add(pf.term);
      }
    });

    return paidTermsSet;
  };

  const isFeeTypePaid = (feeType: IFeeType): boolean => {
    if (!selectedYear) return false;

    const paidForCategory = paidFees.filter((pf) => {
      return pf.feeType?.category === feeType.category;
    });

    if (paidForCategory.length === 0) return false;

    if (feeType.category === 'TUITION' || feeType.category === 'MONTHLY') {
      const paidMonths = getPaidMonthsByCategory(feeType.category);
      return paidMonths.size === 12;
    }

    if (feeType.category === 'EXAM') {
      const paidTerms = getPaidTermsByCategory(feeType.category);
      return paidTerms.size === TERMS.length;
    }
    return paidForCategory.some((pf) => !pf.month && !pf.term);
  };

  const calculatedBreakdown = useMemo(() => {
    const breakdown: {
      name: string;
      amount: number;
      months?: string;
      term?: string;
    }[] = [];
    let total = 0;

    selectedFeeTypes.forEach((fee) => {
      if (fee.category === 'TUITION') {
        const monthCount = tuitionMonths.length || 1;
        const feeTotal = fee.amount * monthCount;
        breakdown.push({
          name: `Tuition Fee`,
          amount: feeTotal,
          months:
            tuitionMonths.length > 0 ? tuitionMonths.join(', ') : undefined,
        });
        total += feeTotal;
      } else if (fee.category === 'MONTHLY') {
        const monthCount = monthlyMonths.length || 1;
        const feeTotal = fee.amount * monthCount;
        breakdown.push({
          name: `Monthly Fee`,
          amount: feeTotal,
          months:
            monthlyMonths.length > 0 ? monthlyMonths.join(', ') : undefined,
        });
        total += feeTotal;
      } else if (fee.category === 'EXAM') {
        breakdown.push({
          name: `Exam Fee`,
          amount: fee.amount,
          term: examTerm || undefined,
        });
        total += fee.amount;
      } else {
        breakdown.push({
          name: fee.category,
          amount: fee.amount,
        });
        total += fee.amount;
      }
    });

    return { breakdown, total };
  }, [selectedFeeTypes, tuitionMonths, monthlyMonths, examTerm]);

  React.useEffect(() => {
    if (selectedFeeTypes.length > 0) {
      setPaymentAmount(String(calculatedBreakdown.total));
    }
  }, [calculatedBreakdown.total, selectedFeeTypes]);

  const isFormValid =
    !!selectedStudent &&
    selectedFeeTypes.length > 0 &&
    Number(paymentAmount) > 0 &&
    (!hasTuition || tuitionMonths.length > 0) &&
    (!hasMonthly || monthlyMonths.length > 0) &&
    (!hasExam || examTerm) &&
    selectedYear;

  const handleClassChange = async (classId: string) => {
    setSelectedClassId(classId);
    setSelectedStudent(null);
    setSelectedFeeTypes([]);
    setTuitionMonths([]);
    setMonthlyMonths([]);
    setExamTerm(null);
    setPaymentAmount('');
    setPaidFees([]);
    await setPaysClassId(classId);
  };

  const toggleTuitionMonth = (month: string) => {
    setTuitionMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  const toggleMonthlyMonth = (month: string) => {
    setMonthlyMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    );
  };

  const toggleFeeType = (fee: IFeeType) => {
    if (isFeeTypePaid(fee)) {
      toast.info('This fee has already been fully paid for the selected year');
      return;
    }

    setSelectedFeeTypes((prev) => {
      const isSelected = prev.some((f) => f.id === fee.id);

      if (isSelected) {
        const newSelection = prev.filter((f) => f.id !== fee.id);

        if (
          fee.category === 'TUITION' &&
          !newSelection.some((f) => f.category === 'TUITION')
        ) {
          setTuitionMonths([]);
        }
        if (
          fee.category === 'MONTHLY' &&
          !newSelection.some((f) => f.category === 'MONTHLY')
        ) {
          setMonthlyMonths([]);
        }
        if (
          fee.category === 'EXAM' &&
          !newSelection.some((f) => f.category === 'EXAM')
        ) {
          setExamTerm(null);
        }

        return newSelection;
      } else {
        const newSelection = [...prev, fee];

        if (
          fee.category === 'TUITION' &&
          !prev.some((f) => f.category === 'TUITION')
        ) {
          const paidMonths = getPaidMonthsByCategory('TUITION');
          const availableMonths = MONTHS.filter((m) => !paidMonths.has(m));
          setTuitionMonths(
            availableMonths.length > 0 ? [availableMonths[0]] : []
          );
        }
        if (
          fee.category === 'MONTHLY' &&
          !prev.some((f) => f.category === 'MONTHLY')
        ) {
          const paidMonths = getPaidMonthsByCategory('MONTHLY');
          const availableMonths = MONTHS.filter((m) => !paidMonths.has(m));
          setMonthlyMonths(
            availableMonths.length > 0 ? [availableMonths[0]] : []
          );
        }
        if (
          fee.category === 'EXAM' &&
          !prev.some((f) => f.category === 'EXAM')
        ) {
          const paidTerms = getPaidTermsByCategory('EXAM');
          const availableTerm = TERMS.find((t) => !paidTerms.has(t));
          setExamTerm(availableTerm || null);
        }

        return newSelection;
      }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsProcessing(true);

    const promises = selectedFeeTypes.map((feeType) => {
      let months: string[] | undefined = undefined;
      let term: Term | undefined = undefined;

      if (feeType.category === 'TUITION') {
        months = tuitionMonths;
      } else if (feeType.category === 'MONTHLY') {
        months = monthlyMonths;
      } else if (feeType.category === 'EXAM') {
        term = examTerm || undefined;
      }

      const payload = {
        studentId: selectedStudent!.id,
        feeTypeId: feeType.id,
        amount: feeType.amount,
        year: selectedYear!,
        month: months,
        term: term,
      };
      return makeFee(payload);
    });

    try {
      const results = await Promise.all(promises);

      const allSuccess = results.every((res) => res.success);

      if (allSuccess) {
        if (selectedStudent?.id && selectedYear) {
          const data = await myPaidFees(
            selectedStudent.id,
            selectedYear.toString()
          );
          setPaidFees(data || []);
        }

        setShowSuccessModal(true);
      } else {
        const failedCount = results.filter((res) => !res.success).length;
        toast.error(`${failedCount} payment(s) failed`);
      }
    } catch {
      toast.error('Payment processing failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const resetForm = () => {
    setSelectedStudent(null);
    setSelectedFeeTypes([]);
    setPaymentAmount('');
    setTuitionMonths([]);
    setMonthlyMonths([]);
    setExamTerm(null);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    resetForm();
  };

  const selectedClass = classes.find((c) => c.id === selectedClassId);

  return (
    <>
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }

          .print-slip,
          .print-slip * {
            visibility: visible;
          }

          .print-slip {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            page-break-inside: avoid;
            page-break-after: avoid;
            page-break-before: avoid;
          }

          @page {
            size: A4;
            margin: 10mm;
          }

          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Success Modal */}
        <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-950">
                <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <DialogTitle className="text-center text-2xl font-bold text-green-600 dark:text-green-400">
                Payment Successful!
              </DialogTitle>
              <DialogDescription className="text-center space-y-3 pt-4">
                <p className="text-base font-semibold text-foreground">
                  Payment of{' '}
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    ৳{paymentAmount}
                  </span>{' '}
                  has been recorded
                </p>
                <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Student:</span>
                    <span className="font-semibold text-foreground">
                      {selectedStudent?.firstName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Class:</span>
                    <span className="font-semibold text-foreground">
                      {selectedClass?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span className="font-semibold text-foreground">
                      {selectedYear}
                    </span>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-3 mt-4">
              <Button
                onClick={handleCloseSuccessModal}
                className="flex-1"
                size="lg"
              >
                New Payment
              </Button>
              <Button
                onClick={() => {
                  handlePrint();
                  handleCloseSuccessModal();
                }}
                variant="outline"
                className="flex-1"
                size="lg"
              >
                <Printer className="w-4 h-4 mr-2" />
                Print Receipt
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-sm border-t-4 border-t-primary no-print">
            <CardHeader>
              <CardTitle className="text-sm font-bold">Selection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Class</Label>
                <ClassSelector classes={classes} onChange={handleClassChange} />
              </div>
              <div className="space-y-2">
                <Label>Student</Label>

                <Select
                  value={selectedStudent?.id || ''}
                  onValueChange={(id) =>
                    setSelectedStudent(
                      students.find((s) => s.id === id) || null
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>

                  <SelectContent>
                    {students.length === 0 ? (
                      <div className="p-2 text-sm text-center text-muted-foreground">
                        No students in this class!
                      </div>
                    ) : (
                      students.map((s) => (
                        <SelectItem key={s.id} value={s.id}>
                          {s.firstName} (Roll: {s.roll})
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm flex flex-col items-center justify-center p-6 text-center bg-muted no-print">
            {selectedStudent ? (
              <div className="space-y-3">
                <Image
                  src={selectedStudent.photo || '/avatar.png'}
                  alt="st"
                  width={150}
                  height={200}
                  className="rounded-full mx-auto border-4 border-background shadow"
                />
                <h3 className="text-lg font-bold">
                  {selectedStudent.firstName}
                </h3>
                <p className="text-primary text-sm font-medium">
                  {selectedClass?.name}
                </p>
                <Badge variant="outline">Roll: {selectedStudent.roll}</Badge>
              </div>
            ) : (
              <p className="text-muted-foreground text-sm italic">
                Select a student
              </p>
            )}
          </Card>

          {/* 3. Slip */}
          <Card className="shadow-sm border-dashed bg-background print-slip">
            <CardContent className="pt-4">
              {selectedStudent && selectedFeeTypes.length > 0 ? (
                <PaymentSlip
                  student={{ ...selectedStudent, class: selectedClass }}
                  year={selectedYear}
                  breakdown={calculatedBreakdown.breakdown}
                  total={paymentAmount}
                  receiptNo={''}
                />
              ) : (
                <p className="text-center text-muted-foreground py-10">
                  No Slip Generated
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Fee Types Section */}
        <form onSubmit={handleSubmit} className="no-print">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-3">
                <Label className="font-bold">
                  Select Fee Type(s)
                  {selectedFeeTypes.length > 0 && (
                    <span className="text-primary ml-2">
                      ({selectedFeeTypes.length} selected)
                    </span>
                  )}
                </Label>
                {loadingPaidFees && (
                  <p className="text-xs text-muted-foreground">
                    Loading paid fees...
                  </p>
                )}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {filteredFeeTypes.map((fee) => {
                    const isSelected = selectedFeeTypes.some(
                      (f) => f.id === fee.id
                    );
                    const isPaid = isFeeTypePaid(fee);

                    return (
                      <div
                        key={fee.id}
                        onClick={() => !isPaid && toggleFeeType(fee)}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-all relative ${
                          isPaid
                            ? 'border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 cursor-not-allowed opacity-75'
                            : isSelected
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <p className="text-xs font-bold uppercase text-foreground">
                          {fee.category}
                        </p>
                        <p className="text-lg font-black mt-1 text-foreground">
                          ৳{fee.amount}
                        </p>
                        {isPaid && (
                          <div className="absolute top-2 right-2 bg-green-500 dark:bg-green-600 rounded-full p-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                        {isSelected && !isPaid && (
                          <CheckCircle2 className="w-4 h-4 text-primary absolute top-2 right-2" />
                        )}
                        {isPaid && (
                          <p className="text-[9px] text-green-600 dark:text-green-400 font-semibold mt-1">
                            FULLY PAID
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Months Selection */}
              {hasMonthly && (
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border-2 border-green-200 dark:border-green-900">
                  <div className="space-y-3">
                    <Label className="font-bold text-green-900 dark:text-green-100">
                      Monthly Fee Months
                    </Label>
                    <div className="flex flex-wrap gap-1">
                      {MONTHS.map((m) => {
                        const paidMonths = getPaidMonthsByCategory('MONTHLY');
                        const isMonthPaid = paidMonths.has(m);

                        return (
                          <Button
                            key={m}
                            type="button"
                            size="sm"
                            variant={
                              isMonthPaid
                                ? 'secondary'
                                : monthlyMonths.includes(m)
                                  ? 'default'
                                  : 'outline'
                            }
                            onClick={() =>
                              !isMonthPaid && toggleMonthlyMonth(m)
                            }
                            className={`h-7 text-[9px] relative ${
                              isMonthPaid
                                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900 cursor-not-allowed'
                                : ''
                            }`}
                            disabled={isMonthPaid}
                          >
                            {m}
                            {isMonthPaid && (
                              <Check className="w-3 h-3 ml-1 text-green-600 dark:text-green-400" />
                            )}
                          </Button>
                        );
                      })}
                    </div>
                    {monthlyMonths.length > 0 && (
                      <p className="text-xs text-green-700 dark:text-green-300">
                        Selected: {monthlyMonths.length} month(s) × ৳
                        {
                          selectedFeeTypes.find((f) => f.category === 'MONTHLY')
                            ?.amount
                        }{' '}
                        = ৳
                        {monthlyMonths.length *
                          (selectedFeeTypes.find(
                            (f) => f.category === 'MONTHLY'
                          )?.amount || 0)}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Tuition Months Selection */}
              {hasTuition && (
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-900">
                  <div className="space-y-3">
                    <Label className="font-bold text-blue-900 dark:text-blue-100">
                      Tuition Fee Months
                    </Label>
                    <div className="flex flex-wrap gap-1">
                      {MONTHS.map((m) => {
                        const paidMonths = getPaidMonthsByCategory('TUITION');
                        const isMonthPaid = paidMonths.has(m);

                        return (
                          <Button
                            key={m}
                            type="button"
                            size="sm"
                            variant={
                              isMonthPaid
                                ? 'secondary'
                                : tuitionMonths.includes(m)
                                  ? 'default'
                                  : 'outline'
                            }
                            onClick={() =>
                              !isMonthPaid && toggleTuitionMonth(m)
                            }
                            className={`h-7 text-[9px] relative ${
                              isMonthPaid
                                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900 cursor-not-allowed'
                                : ''
                            }`}
                            disabled={isMonthPaid}
                          >
                            {m}
                            {isMonthPaid && (
                              <Check className="w-3 h-3 ml-1 text-green-600 dark:text-green-400" />
                            )}
                          </Button>
                        );
                      })}
                    </div>
                    {tuitionMonths.length > 0 && (
                      <p className="text-xs text-blue-700 dark:text-blue-300">
                        Selected: {tuitionMonths.length} month(s) × ৳
                        {
                          selectedFeeTypes.find((f) => f.category === 'TUITION')
                            ?.amount
                        }{' '}
                        = ৳
                        {tuitionMonths.length *
                          (selectedFeeTypes.find(
                            (f) => f.category === 'TUITION'
                          )?.amount || 0)}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Exam Term Selection */}
              {hasExam && (
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl border-2 border-orange-200 dark:border-orange-900">
                  <div className="space-y-3">
                    <Label className="font-bold text-orange-900 dark:text-orange-100">
                      Exam Fee Term
                    </Label>
                    <Select
                      value={examTerm || ''}
                      onValueChange={(v) => setExamTerm(v as Term)}
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        {TERMS.map((term) => {
                          const paidTerms = getPaidTermsByCategory('EXAM');
                          const isTermPaid = paidTerms.has(term);

                          return (
                            <SelectItem
                              key={term}
                              value={term}
                              disabled={isTermPaid}
                              className={
                                isTermPaid
                                  ? 'text-green-600 dark:text-green-400'
                                  : ''
                              }
                            >
                              {term} {isTermPaid && '✓ (Paid)'}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    {examTerm && (
                      <p className="text-xs text-orange-700 dark:text-orange-300">
                        Selected: {examTerm} Term - ৳
                        {selectedFeeTypes.find((f) => f.category === 'EXAM')
                          ?.amount || 0}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Year Selection - Always show */}
              <div className="space-y-2">
                <Label>Year</Label>
                <Select
                  value={selectedYear?.toString()}
                  onValueChange={(v) => setSelectedYear(Number(v))}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {YEARS.map((y) => (
                      <SelectItem key={y} value={y.toString()}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 space-y-2">
                  <Label>Total Amount</Label>
                  <Input
                    type="number"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="font-bold text-lg"
                    disabled={selectedFeeTypes.length === 0}
                  />
                </div>
                <Button
                  size="lg"
                  className="mt-6"
                  disabled={!isFormValid || isProcessing}
                  type="submit"
                >
                  {isProcessing ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    'Confirm Payment'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </>
  );
};

export default CreatePayment;
