/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Loader2, Printer } from 'lucide-react';
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
import { IStudent } from '@/types/student.interface';
import { IFeeType } from '@/types/fee.interface';
import ClassSelector from '@/app/components/shared/ClassSelector';
import { setPaysClassId } from '@/app/services/fee/setPaysClassIs';
import { makeFee } from '@/app/services/fee/makeFee';
import { MONTHS } from '@/constant';
import PaymentSlip from '@/app/components/module/dashboard/admin/payment/PaymentSlip';
import { IClass } from '@/types/class.interface';

const CURRENT_MONTH = MONTHS[new Date().getMonth()];
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 10 }, (_, i) => CURRENT_YEAR - i);
const TERMS = ['FIRST', 'SECOND', 'THIRD', 'FINAL'] as const;

type Term = (typeof TERMS)[number];

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

  const hasTuition = selectedFeeTypes.some((fee) => fee.category === 'TUITION');
  const hasMonthly = selectedFeeTypes.some((fee) => fee.category === 'MONTHLY');
  const hasExam = selectedFeeTypes.some((fee) => fee.category === 'EXAM');

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
          setTuitionMonths([CURRENT_MONTH]);
        }
        if (
          fee.category === 'MONTHLY' &&
          !prev.some((f) => f.category === 'MONTHLY')
        ) {
          setMonthlyMonths([CURRENT_MONTH]);
        }
        if (
          fee.category === 'EXAM' &&
          !prev.some((f) => f.category === 'EXAM')
        ) {
          setExamTerm('FIRST');
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
        toast.success('All payments completed successfully!');
        resetForm();
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

  const selectedClass = classes.find((c) => c.id === selectedClassId);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. Selection Card */}
        <Card className="shadow-sm border-t-4 border-t-primary">
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
                  setSelectedStudent(students.find((s) => s.id === id) || null)
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

        {/* 2. Preview Card */}
        <Card className="shadow-sm flex flex-col items-center justify-center p-6 text-center bg-slate-50/50">
          {selectedStudent ? (
            <div className="space-y-3">
              <Image
                src={selectedStudent.photo || '/avatar.png'}
                alt="st"
                width={150}
                height={200}
                className="rounded-full mx-auto border-4 border-white shadow"
              />
              <h3 className="text-lg font-bold">{selectedStudent.firstName}</h3>
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
        <Card className="shadow-sm border-2 border-dashed bg-white">
          <CardHeader className="pb-2 flex flex-row items-center justify-between border-b mx-4 px-0 text-xs font-bold uppercase">
            <span>Payment Slip</span>
            {isFormValid && (
              <Button size="icon" variant="ghost" onClick={handlePrint}>
                <Printer className="w-4 h-4" />
              </Button>
            )}
          </CardHeader>
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
              <p className="text-center text-slate-400 py-10">
                No Slip Generated
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Fee Types Section */}
      <form onSubmit={handleSubmit}>
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
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {filteredFeeTypes.map((fee) => {
                  const isSelected = selectedFeeTypes.some(
                    (f) => f.id === fee.id
                  );

                  return (
                    <div
                      key={fee.id}
                      onClick={() => toggleFeeType(fee)}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all relative ${
                        isSelected
                          ? 'border-primary bg-primary/5'
                          : 'border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <p className="text-xs font-bold uppercase">
                        {fee.category}
                      </p>
                      <p className="text-lg font-black mt-1">৳{fee.amount}</p>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-primary absolute top-2 right-2" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Monthly Months Selection */}
            {hasMonthly && (
              <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
                <div className="space-y-3">
                  <Label className="font-bold text-green-900">
                    Monthly Fee Months
                  </Label>
                  <div className="flex flex-wrap gap-1">
                    {MONTHS.map((m) => (
                      <Button
                        key={m}
                        type="button"
                        size="sm"
                        variant={
                          monthlyMonths.includes(m) ? 'default' : 'outline'
                        }
                        onClick={() => toggleMonthlyMonth(m)}
                        className="h-7 text-[9px]"
                      >
                        {m}
                      </Button>
                    ))}
                  </div>
                  {monthlyMonths.length > 0 && (
                    <p className="text-xs text-green-700">
                      Selected: {monthlyMonths.length} month(s) × ৳
                      {
                        selectedFeeTypes.find((f) => f.category === 'MONTHLY')
                          ?.amount
                      }{' '}
                      = ৳
                      {monthlyMonths.length *
                        (selectedFeeTypes.find((f) => f.category === 'MONTHLY')
                          ?.amount || 0)}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Tuition Months Selection */}
            {hasTuition && (
              <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                <div className="space-y-3">
                  <Label className="font-bold text-blue-900">
                    Tuition Fee Months
                  </Label>
                  <div className="flex flex-wrap gap-1">
                    {MONTHS.map((m) => (
                      <Button
                        key={m}
                        type="button"
                        size="sm"
                        variant={
                          tuitionMonths.includes(m) ? 'default' : 'outline'
                        }
                        onClick={() => toggleTuitionMonth(m)}
                        className="h-7 text-[9px]"
                      >
                        {m}
                      </Button>
                    ))}
                  </div>
                  {tuitionMonths.length > 0 && (
                    <p className="text-xs text-blue-700">
                      Selected: {tuitionMonths.length} month(s) × ৳
                      {
                        selectedFeeTypes.find((f) => f.category === 'TUITION')
                          ?.amount
                      }{' '}
                      = ৳
                      {tuitionMonths.length *
                        (selectedFeeTypes.find((f) => f.category === 'TUITION')
                          ?.amount || 0)}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Exam Term Selection */}
            {hasExam && (
              <div className="p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
                <div className="space-y-3">
                  <Label className="font-bold text-orange-900">
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
                      {TERMS.map((term) => (
                        <SelectItem key={term} value={term}>
                          {term}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {examTerm && (
                    <p className="text-xs text-orange-700">
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
  );
};

export default CreatePayment;
