'use client';

import React, { useState } from 'react';
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
import { CheckCircle2, Loader2 } from 'lucide-react';
import Image from 'next/image';

import { IClass } from '@/types/attendance.interface';
import { IStudent } from '@/types/student.interface';
import { IFeeType } from '@/types/fee.interface';
import { setPaysClassId } from '@/app/services/fee/setPaysClassIs';
import ClassSelector from '@/app/components/shared/ClassSelector';
import { MONTHS } from '@/constant';

const YEARS = Array.from(
  { length: 10 },
  (_, i) => new Date().getFullYear() - i
);

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
  const [selectedFeeType, setSelectedFeeType] = useState<IFeeType | null>(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const isMonthly = selectedFeeType?.category === 'MONTHLY';
  const isFormValid =
    selectedStudent &&
    selectedFeeType &&
    Number(paymentAmount) > 0 &&
    (!isMonthly || (selectedMonth && selectedYear));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment Successful');
      resetForm();
    }, 1500);
  };

  const resetForm = () => {
    setSelectedStudent(null);
    setSelectedFeeType(null);
    setPaymentAmount('');
    setSelectedMonth('');
    setSelectedYear(null);
  };

  const handleClassChange = async (classId: string) => {
    setSelectedStudent(null);
    await setPaysClassId(classId);
  };

  const selectedClass = classes.find((c) => c.id === selectedStudent?.classId);

  return (
    <Card className="shadow-lg max-w-7xl">
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="w-full space-y-6">
            <div className="flex flex-col md:flex-row gap-6 justify-around w-full">
              {/* Class & Student Selection */}
              <Card>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Select Class</Label>
                    <ClassSelector
                      classes={classes}
                      onChange={handleClassChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Select Student</Label>
                    <Select
                      value={selectedStudent?.id || ''}
                      onValueChange={(id) =>
                        setSelectedStudent(
                          students.find((s) => s.id === id) || null
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose student" />
                      </SelectTrigger>
                      <SelectContent>
                        {students.length > 0 ? (
                          students.map((student) => (
                            <SelectItem key={student.id} value={student.id}>
                              {student.firstName} (Roll: {student.roll})
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="none" disabled>
                            No students found
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Profile Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedStudent ? (
                    <>
                      <div className="flex flex-col items-center gap-3">
                        <Image
                          height={400}
                          width={400}
                          src={selectedStudent.photo || '/avatar.png'}
                          alt="Student"
                          className="w-14 h-14 rounded-full object-cover border"
                        />
                        <div className="text-center">
                          <p className="font-semibold">
                            {selectedStudent.firstName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Roll: {selectedStudent.roll}
                          </p>
                          <p className="text-sm">
                            Class: {selectedClass?.name || '—'}
                          </p>
                          <p className="text-sm">
                            Fee: {selectedFeeType?.category || '—'}
                          </p>
                          {isMonthly && (
                            <p className="text-sm">
                              Month: {selectedMonth || '—'}, Year:{' '}
                              {selectedYear || '—'}
                            </p>
                          )}
                          <p className="font-bold">
                            Total: ৳{Number(paymentAmount || 0).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      Select a student to preview details
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Fee Types */}
            <div className="space-y-3">
              <Label>Fee Type</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {feetypes.map((fee) => (
                  <Card
                    key={fee.id}
                    onClick={() => {
                      setSelectedFeeType(fee);
                      setPaymentAmount(String(fee.amount));
                      if (fee.category !== 'MONTHLY') {
                        setSelectedMonth('');
                        setSelectedYear(null);
                      }
                    }}
                    className={`cursor-pointer ${
                      selectedFeeType?.id === fee.id
                        ? 'border-primary ring-2 ring-primary'
                        : ''
                    }`}
                  >
                    <CardContent className="p-3">
                      <div className="flex justify-between">
                        <span>{fee.category}</span>
                        {selectedFeeType?.id === fee.id && (
                          <CheckCircle2 className="text-primary w-4 h-4" />
                        )}
                      </div>
                      <Badge className="mt-2">৳{fee.amount}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Monthly selection */}
            {isMonthly && (
              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <Label>Select Month</Label>
                  <Select
                    value={selectedMonth}
                    onValueChange={(val) => setSelectedMonth(val)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose month" />
                    </SelectTrigger>
                    <SelectContent>
                      {MONTHS.map((month) => (
                        <SelectItem key={month} value={month}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 space-y-2">
                  <Label>Select Year</Label>
                  <Select
                    value={selectedYear?.toString() || ''}
                    onValueChange={(val) => setSelectedYear(Number(val))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose year" />
                    </SelectTrigger>
                    <SelectContent>
                      {YEARS.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Amount */}
            <div className="space-y-2">
              <Label>Amount</Label>
              <Input
                type="number"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                disabled={!selectedFeeType}
              />
            </div>

            <Button type="submit" disabled={!isFormValid || isProcessing}>
              {isProcessing ? (
                <>
                  <Loader2 className="animate-spin mr-2" /> Processing
                </>
              ) : (
                'Process Payment'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePayment;
