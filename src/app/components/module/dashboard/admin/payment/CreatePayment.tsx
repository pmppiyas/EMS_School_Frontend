/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
  CheckCircle2,
  DollarSign,
  FileText,
  GraduationCap,
  Loader2,
  User,
  XCircle,
} from 'lucide-react';

interface Student {
  id: string;
  name: string;
  roll: string;
}

interface FeeType {
  id: string;
  name: string;
  amount: number;
  description: string;
}

interface PaymentSummary {
  className: string;
  student: Student | null;
  feeType: FeeType | null;
  amount: number;
}

const CreatePayment: React.FC = () => {
  // State management
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedFeeType, setSelectedFeeType] = useState<FeeType | null>(null);
  const [paymentAmount, setPaymentAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [students, setStudents] = useState<Student[]>([]);

  // Sample data
  const classes = [
    { value: 'class-1', label: 'Class 1' },
    { value: 'class-2', label: 'Class 2' },
    { value: 'class-3', label: 'Class 3' },
    { value: 'class-4', label: 'Class 4' },
    { value: 'class-5', label: 'Class 5' },
    { value: 'class-6', label: 'Class 6' },
    { value: 'class-7', label: 'Class 7' },
    { value: 'class-8', label: 'Class 8' },
    { value: 'class-9', label: 'Class 9' },
    { value: 'class-10', label: 'Class 10' },
  ];

  const studentsData: Record<string, Student[]> = {
    'class-1': [
      { id: 'S001', name: 'Rahim Ahmed', roll: '001' },
      { id: 'S002', name: 'Fatima Khan', roll: '002' },
      { id: 'S003', name: 'Karim Hassan', roll: '003' },
      { id: 'S004', name: 'Ayesha Rahman', roll: '004' },
    ],
    'class-2': [
      { id: 'S005', name: 'Mehedi Hasan', roll: '005' },
      { id: 'S006', name: 'Nusrat Jahan', roll: '006' },
      { id: 'S007', name: 'Shakib Ali', roll: '007' },
      { id: 'S008', name: 'Sadia Islam', roll: '008' },
    ],
    'class-3': [
      { id: 'S009', name: 'Tanvir Mahmud', roll: '009' },
      { id: 'S010', name: 'Lamia Sultana', roll: '010' },
      { id: 'S011', name: 'Sabbir Ahmed', roll: '011' },
      { id: 'S012', name: 'Riya Chowdhury', roll: '012' },
    ],
    'class-4': [
      { id: 'S013', name: 'Fahim Rahman', roll: '013' },
      { id: 'S014', name: 'Tasnim Akter', roll: '014' },
      { id: 'S015', name: 'Nazmul Huda', roll: '015' },
    ],
    'class-5': [
      { id: 'S016', name: 'Sajid Khan', roll: '016' },
      { id: 'S017', name: 'Mim Akter', roll: '017' },
      { id: 'S018', name: 'Raihan Ahmed', roll: '018' },
    ],
    'class-6': [
      { id: 'S019', name: 'Farhan Islam', roll: '019' },
      { id: 'S020', name: 'Bristy Roy', roll: '020' },
    ],
    'class-7': [
      { id: 'S021', name: 'Rakib Hassan', roll: '021' },
      { id: 'S022', name: 'Sumaya Khan', roll: '022' },
    ],
    'class-8': [
      { id: 'S023', name: 'Anik Das', roll: '023' },
      { id: 'S024', name: 'Jarin Tasnim', roll: '024' },
    ],
    'class-9': [
      { id: 'S025', name: 'Arif Hossain', roll: '025' },
      { id: 'S026', name: 'Nadia Rahman', roll: '026' },
    ],
    'class-10': [
      { id: 'S027', name: 'Shakil Ahmed', roll: '027' },
      { id: 'S028', name: 'Priya Sharma', roll: '028' },
    ],
  };

  const feeTypes: FeeType[] = [
    {
      id: 'tuition',
      name: 'Tuition Fee',
      amount: 5000,
      description: 'Monthly tuition fee',
    },
    {
      id: 'admission',
      name: 'Admission Fee',
      amount: 10000,
      description: 'One-time admission fee',
    },
    {
      id: 'exam',
      name: 'Exam Fee',
      amount: 1500,
      description: 'Examination fee',
    },
    {
      id: 'transport',
      name: 'Transport Fee',
      amount: 2000,
      description: 'Monthly transport fee',
    },
    {
      id: 'library',
      name: 'Library Fee',
      amount: 500,
      description: 'Library access fee',
    },
    {
      id: 'sports',
      name: 'Sports Fee',
      amount: 800,
      description: 'Sports activities fee',
    },
  ];

  // Load students when class changes
  useEffect(() => {
    if (selectedClass) {
      setStudents(studentsData[selectedClass] || []);
      setSelectedStudent(null);
    } else {
      setStudents([]);
    }
  }, [selectedClass]);

  // Handle class selection
  const handleClassChange = (value: string) => {
    setSelectedClass(value);
    setSelectedStudent(null);
    setMessage(null);
  };

  // Handle student selection
  const handleStudentChange = (value: string) => {
    const student = students.find((s) => s.id === value) || null;
    setSelectedStudent(student);
    setMessage(null);
  };

  // Handle fee type selection
  const handleFeeTypeChange = (feeType: FeeType) => {
    setSelectedFeeType(feeType);
    setPaymentAmount(feeType.amount.toString());
    setMessage(null);
  };

  // Handle amount change
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setPaymentAmount(value);
    }
  };

  // Validate form
  const isFormValid = (): boolean => {
    return !!(
      selectedClass &&
      selectedStudent &&
      selectedFeeType &&
      paymentAmount &&
      parseFloat(paymentAmount) > 0
    );
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) return;

    setIsProcessing(true);
    setMessage(null);

    // Simulate API call
    setTimeout(() => {
      const success = Math.random() > 0.1; // 90% success rate

      if (success) {
        const txnId = `TXN${Date.now()}`;
        setMessage({
          type: 'success',
          text: `Payment successful! Transaction ID: ${txnId}. Amount: ৳${parseFloat(
            paymentAmount
          ).toFixed(2)}`,
        });

        // Reset form after 3 seconds
        setTimeout(() => {
          resetForm();
        }, 3000);
      } else {
        setMessage({
          type: 'error',
          text: 'Payment failed. Please try again or contact support.',
        });
      }

      setIsProcessing(false);
    }, 2000);
  };

  // Reset form
  const resetForm = () => {
    setSelectedClass('');
    setSelectedStudent(null);
    setSelectedFeeType(null);
    setPaymentAmount('');
    setMessage(null);
    setStudents([]);
  };

  // Get payment summary
  const getPaymentSummary = (): PaymentSummary => {
    return {
      className: classes.find((c) => c.value === selectedClass)?.label || '',
      student: selectedStudent,
      feeType: selectedFeeType,
      amount: parseFloat(paymentAmount) || 0,
    };
  };

  const summary = getPaymentSummary();

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto space-y-2">
        {/* Main Card */}
        <Card className="shadow-lg">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex ">
                {/* Class Selection */}
                <div className="space-y-2">
                  <Label htmlFor="class" className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Select Class
                  </Label>
                  <Select
                    value={selectedClass}
                    onValueChange={handleClassChange}
                  >
                    <SelectTrigger id="class" className="w-full">
                      <SelectValue placeholder="Choose a class..." />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls.value} value={cls.value}>
                          {cls.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Student Selection */}
                <div className="space-y-2">
                  <Label htmlFor="student" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Select Student
                  </Label>
                  <Select
                    value={selectedStudent?.id || ''}
                    onValueChange={handleStudentChange}
                    disabled={!selectedClass}
                  >
                    <SelectTrigger id="student" className="w-full">
                      <SelectValue
                        placeholder={
                          selectedClass
                            ? 'Choose a student...'
                            : 'Select a class first'
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {students.map((student) => (
                        <SelectItem key={student.id} value={student.id}>
                          {student.name} (Roll: {student.roll})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Fee Type Selection */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Select Fee Type
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {feeTypes.map((fee) => (
                    <Card
                      key={fee.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedFeeType?.id === fee.id
                          ? 'border-primary bg-primary/5 ring-2 ring-primary'
                          : 'hover:border-primary/50'
                      }`}
                      onClick={() => handleFeeTypeChange(fee)}
                    >
                      <CardContent className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-start justify-between">
                            <h4 className="font-semibold text-sm">
                              {fee.name}
                            </h4>
                            {selectedFeeType?.id === fee.id && (
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {fee.description}
                          </p>
                          <Badge variant="secondary" className="mt-2">
                            ৳{fee.amount.toLocaleString()}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Payment Amount */}
              <div className="space-y-2">
                <Label htmlFor="amount" className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Payment Amount (৳)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                    ৳
                  </span>
                  <Input
                    id="amount"
                    type="text"
                    placeholder="0.00"
                    value={paymentAmount}
                    onChange={handleAmountChange}
                    className="pl-8 text-lg font-semibold"
                    disabled={!selectedFeeType}
                  />
                </div>
              </div>

              {/* Payment Summary */}
              {isFormValid() && (
                <Card className="bg-muted/50 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-lg">Payment Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Class:
                      </span>
                      <span className="font-medium">{summary.className}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Student:
                      </span>
                      <span className="font-medium">
                        {summary.student?.name} ({summary.student?.id})
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Fee Type:
                      </span>
                      <span className="font-medium">
                        {summary.feeType?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t">
                      <span className="font-semibold">Total Amount:</span>
                      <span className="text-xl font-bold text-primary">
                        ৳{summary.amount.toFixed(2)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Message Alert */}
              {/* {message && (
                <Alert
                  variant={
                    message.type === 'success' ? 'default' : 'destructive'
                  }
                >
                  {message.type === 'success' ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  <AlertDescription>{message.text}</AlertDescription>
                </Alert>
              )} */}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={!isFormValid() || isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Process Payment'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatePayment;
