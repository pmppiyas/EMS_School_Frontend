import { IStudent } from '@/types/student.interface';

import Link from 'next/link';
import { ChevronLeft, Mail, Phone, MapPin } from 'lucide-react';
import { getStudentById } from '../../../../../services/student/getStudentById';

type Params = Promise<{ studentId: string }>;

export default async function StudentProfile(props: { params: Params }) {
  const params = await props.params;
  const studentId = params.studentId;

  const response = await getStudentById(studentId);
  const student: IStudent = response.data;

  if (!student) {
    return (
      <div className="flex h-screen items-center justify-center text-muted-foreground">
        Student not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Navigation Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/dashboard/students"
          className="p-2 rounded-full hover:bg-accent text-muted-foreground transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {student.firstName} {student.lastName}
          </h1>
          <p className="text-primary font-medium">Roll: {student.roll}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-card-foreground mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                value={student.email || 'N/A'}
              />
              <ContactItem
                icon={<Phone className="w-4 h-4" />}
                label="Phone"
                value={student.phoneNumber || 'N/A'}
              />
              <ContactItem
                icon={<MapPin className="w-4 h-4" />}
                label="Address"
                value={student.address || 'N/A'}
              />
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-card-foreground mb-4">
              Account Status
            </h2>
          </section>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 border-b border-border pb-2">
              Profile Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              <DetailBox label="Gender" value={student.gender ?? undefined} />
              <DetailBox
                label="Birthday"
                value={
                  student.dateOfBirth
                    ? new Date(student.dateOfBirth).toLocaleDateString()
                    : undefined
                }
              />
              <DetailBox label="System ID" value={student.id} />
              <DetailBox label="User ID" value={student.userId} />
              <DetailBox
                label="Joined On"
                value={new Date(student.createdAt!).toLocaleDateString()}
              />
              <DetailBox label="Class" value={student.class?.name ?? 'N/A'} />
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Academic Info</h3>
            <p className="text-sm text-muted-foreground italic">
              Currently no ClassTimes assigned for this term.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="mt-1 text-primary">{icon}</div>
      <div>
        <p className="text-xs text-muted-foreground uppercase leading-none mb-1">
          {label}
        </p>
        <p className="text-sm font-medium break-all text-foreground">{value}</p>
      </div>
    </div>
  );
}

function DetailBox({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) {
  return (
    <div className="py-2 border-b border-border/50 last:border-0 sm:border-0">
      <p className="text-xs text-muted-foreground font-medium mb-1">{label}</p>
      <p className="text-sm text-foreground">{value || 'N/A'}</p>
    </div>
  );
}
