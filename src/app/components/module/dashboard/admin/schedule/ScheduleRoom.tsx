/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { X, Loader2 } from 'lucide-react';
import { postSchedule } from '@/app/services/schedule/post.schedule';
import { toast } from 'sonner';
import { ScheduleRoomProps, ScheduleSlot } from '@/types/schedule.interface';

const ScheduleRoom = ({
  teachers = [],
  classes = [],
  subjects = [],
  classTimes = [],
  selectedDay,
  selectedClass,
}: ScheduleRoomProps) => {
  const [slots, setSlots] = useState<ScheduleSlot[]>([]);
  const [editingPeriod, setEditingPeriod] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [tempSelection, setTempSelection] = useState({
    subjectId: '',
    teacherId: '',
  });

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getSlotForPeriod = (periodId: string) =>
    slots.find((slot) => slot.classTimeId === periodId);

  const getSubjectName = (id: string) =>
    subjects.find((s) => s.id === id)?.name || '';

  const getTeacherName = (id: string) => {
    const t = teachers.find((t) => t.id === id);
    return t ? `${t.firstName} ${t.lastName}` : '';
  };

  const handlePeriodClick = (periodId: string) => {
    const existing = getSlotForPeriod(periodId);
    setTempSelection({
      subjectId: existing?.subjectId || '',
      teacherId: existing?.teacherId || '',
    });
    setEditingPeriod(periodId);
  };

  const handleSaveSlot = () => {
    if (!editingPeriod || !tempSelection.subjectId || !tempSelection.teacherId)
      return;

    setSlots((prev) => {
      const filtered = prev.filter((s) => s.classTimeId !== editingPeriod);
      return [...filtered, { classTimeId: editingPeriod, ...tempSelection }];
    });

    setEditingPeriod(null);
    setTempSelection({ subjectId: '', teacherId: '' });
  };

  const handleRemoveSlot = (periodId: string) => {
    setSlots((prev) => prev.filter((s) => s.classTimeId !== periodId));
  };

  const handleSubmit = async () => {
    if (!selectedClass) {
      toast.error('Please select a class');
      return;
    }

    try {
      setIsPending(true);
      const payload = { dayOfWeek: selectedDay, slots };
      const post = await postSchedule(selectedClass, payload);

      if (post.success) {
        toast.success(post.message);
        const params = new URLSearchParams(searchParams.toString());
        params.set('tabs', 'view');
        router.push(`${pathname}?${params.toString()}`);
      } else {
        toast.error(post.message);
      }
    } catch (error: any) {
      toast.error(error?.message || 'Something went wrong!');
    } finally {
      setIsPending(false);
    }
  };

  const selectedClassName = classes.find((c) => c.id === selectedClass)?.name;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-4">
      {selectedClass && (
        <>
          <Card className="border-primary shadow-md">
            <CardHeader className="bg-primary/5 border-b">
              <CardTitle className="text-lg font-semibold text-foreground flex justify-between items-center">
                <span>
                  {selectedClassName} —{' '}
                  <span className="text-primary">{selectedDay}</span>
                </span>
                <span className="text-xs font-normal text-muted-foreground uppercase tracking-widest">
                  Create Schedule
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 pt-6">
              {classTimes.map((time) => {
                const slot = getSlotForPeriod(time.id);
                const isEditing = editingPeriod === time.id;

                return (
                  <div
                    key={time.id}
                    className={`rounded-lg border p-4 space-y-3 transition-all ${
                      isEditing
                        ? 'border-primary ring-1 ring-primary/20 bg-background'
                        : 'bg-primary/5 hover:bg-primary/10'
                    }`}
                  >
                    {/* Period header */}
                    <div className="flex items-center justify-between">
                      <div className="text-foreground flex items-center gap-4">
                        <h4 className="font-bold text-lg">
                          Period {time.period}
                        </h4>
                        <p className="text-sm font-medium px-2 py-1 bg-background rounded border shadow-sm">
                          {time.startTime} – {time.endTime}
                        </p>
                      </div>

                      {slot && !isEditing && (
                        <button
                          onClick={() => handleRemoveSlot(time.id)}
                          className="rounded-full h-8 w-8 flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>

                    {/* Editing mode */}
                    {isEditing ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in zoom-in duration-200">
                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase">
                            Subject
                          </Label>
                          <select
                            value={tempSelection.subjectId}
                            onChange={(e) =>
                              setTempSelection((prev) => ({
                                ...prev,
                                subjectId: e.target.value,
                              }))
                            }
                            className="w-full rounded-md border text-sm p-2 bg-background focus:ring-2 focus:ring-primary outline-none"
                          >
                            <option value="">Select Subject</option>
                            {subjects.map((s) => (
                              <option key={s.id} value={s.id}>
                                {s.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase">
                            Teacher
                          </Label>
                          <select
                            value={tempSelection.teacherId}
                            onChange={(e) =>
                              setTempSelection((prev) => ({
                                ...prev,
                                teacherId: e.target.value,
                              }))
                            }
                            className="w-full rounded-md border text-sm p-2 bg-background focus:ring-2 focus:ring-primary outline-none"
                          >
                            <option value="">Select Teacher</option>
                            {teachers.map((t) => (
                              <option key={t.id} value={t.id}>
                                {t.firstName} {t.lastName}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="md:col-span-2 flex gap-2 pt-2">
                          <Button
                            onClick={handleSaveSlot}
                            size="sm"
                            className="flex-1"
                          >
                            Add to List
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setEditingPeriod(null)}
                            className="flex-1 border"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : slot ? (
                      <div
                        onClick={() => handlePeriodClick(time.id)}
                        className="cursor-pointer rounded-md border border-primary/20 bg-background p-3 hover:shadow-sm transition group"
                      >
                        <div className="font-semibold text-primary group-hover:underline">
                          {getSubjectName(slot.subjectId)}
                        </div>
                        <div className="text-sm text-muted-foreground italic">
                          By: {getTeacherName(slot.teacherId)}
                        </div>
                      </div>
                    ) : (
                      <Button
                        onClick={() => handlePeriodClick(time.id)}
                        variant="outline"
                        className="w-full border-dashed border-primary/40 text-primary/70 hover:text-primary hover:border-primary hover:bg-primary/5"
                      >
                        + Assign Subject & Teacher
                      </Button>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <div className="pt-4">
            <Button
              onClick={handleSubmit}
              disabled={slots.length === 0 || isPending}
              className="w-full py-7 text-lg font-bold shadow-lg"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing... Please Wait
                </>
              ) : (
                'Save Full Schedule'
              )}
            </Button>
            <p className="text-center text-[11px] text-muted-foreground mt-2 italic">
              Note: Saving will update the schedule for {selectedClassName} on{' '}
              {selectedDay}.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ScheduleRoom;
