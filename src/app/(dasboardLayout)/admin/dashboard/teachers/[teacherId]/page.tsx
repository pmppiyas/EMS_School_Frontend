import { ITeacher } from '@/types/teacher.interface';
import { getTeacherById } from '@/app/services/teacher/getById';
import Link from 'next/link';
import { ChevronLeft, Mail, Phone, MapPin } from 'lucide-react';

export const dynamic = 'force-dynamic';

type Params = Promise<{ teacherId: string }>;

export default async function TeacherProfile(props: { params: Params }) {
  const params = await props.params;
  const teacherId = params.teacherId;

  const response = await getTeacherById(teacherId);
  const teacher: ITeacher = response.data;

  if (!teacher) {
    return (
      <div className="flex h-screen items-center justify-center text-muted-foreground">
        Teacher not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Navigation Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/dashboard/teachers"
          className="p-2 rounded-full hover:bg-accent text-muted-foreground transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {teacher.firstName} {teacher.lastName}
          </h1>
          <p className="text-primary font-medium">{teacher.designation}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Essential Info */}
        <div className="lg:col-span-1 space-y-6">
          <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-card-foreground mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                value={teacher.email || 'N/A'}
              />
              <ContactItem
                icon={<Phone className="w-4 h-4" />}
                label="Phone"
                value={teacher.phoneNumber || 'N/A'}
              />
              <ContactItem
                icon={<MapPin className="w-4 h-4" />}
                label="Address"
                value={teacher.address || 'N/A'}
              />
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-card-foreground mb-4">
              Account Status
            </h2>
            <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
              <span className="text-sm font-medium">Status</span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {teacher.user?.status}
              </span>
            </div>
          </section>
        </div>

        {/* Right Column: Detailed Bio & Stats */}
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 border-b border-border pb-2">
              Profile Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              <DetailBox label="Gender" value={teacher.gender ?? undefined} />
              <DetailBox
                label="Birthday"
                value={
                  teacher.dateOfBirth
                    ? new Date(teacher.dateOfBirth).toLocaleDateString()
                    : undefined
                }
              />
              <DetailBox label="System ID" value={teacher.id} />
              <DetailBox label="User ID" value={teacher.userId} />
              <DetailBox
                label="Joined On"
                value={new Date(teacher.createdAt!).toLocaleDateString()}
              />
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Academic ClassTime</h3>
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
