'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { ISubject } from '@/types/class.interface';
import { IClass } from '@/types/shared.interface';
import { ITeacher } from '@/types/teacher.interface';
import { IClassTime } from '@/types/classTime.interface';
import { postSchedule } from '@/app/services/schedule/post.schedule';
import { toast } from 'sonner';

interface ScheduleRoomProps {
  teachers?: ITeacher[];
  classes?: IClass[];
  subjects?: ISubject[];
  classTimes?: IClassTime[];
  selectedDay: string;
  selectedClass: string;
}

interface ScheduleSlot {
  classTimeId: string;
  subjectId: string;
  teacherId: string;
}

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
  const [tempSelection, setTempSelection] = useState({
    subjectId: '',
    teacherId: '',
  });

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

    const payload = { dayOfWeek: selectedDay, slots };
    const post = await postSchedule(selectedClass, payload);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    post.success ? toast.success(post.message) : toast.error(post.message);
  };

  const selectedClassName = classes.find((c) => c.id === selectedClass)?.name;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-4">
      {selectedClass && (
        <>
          <Card className="bg-[linear-gradient(49deg,#1a2980,#1c3e8a,#1d5394,#1f689d,#207da7,#2291b1,#23a6bb,#25bbc4,#26d0ce)]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-background underline underline-offset-3">
                {selectedClassName} — {selectedDay}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {classTimes.map((time) => {
                const slot = getSlotForPeriod(time.id);
                const isEditing = editingPeriod === time.id;

                return (
                  <div
                    key={time.id}
                    className="rounded-lg border  p-4 space-y-3  "
                  >
                    {/* Period header */}
                    <div className="flex items-center justify-between">
                      <div className="text-background flex items-center gap-4">
                        <h4 className="font-semibold text-lg text-backgroundd">
                          Period {time.period}
                        </h4>
                        <p className="text-lg text-background">
                          {`( ${time.startTime} – ${time.endTime} )`}
                        </p>
                      </div>

                      {slot && !isEditing && (
                        <button
                          onClick={() => handleRemoveSlot(time.id)}
                          className="rounded-md border p-2 hover:bg-destructive hover:text-destructive-foreground transition"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>

                    {/* Editing mode */}
                    {isEditing ? (
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label className="text-background">Subject</Label>
                          <select
                            value={tempSelection.subjectId}
                            onChange={(e) =>
                              setTempSelection((prev) => ({
                                ...prev,
                                subjectId: e.target.value,
                              }))
                            }
                            className="w-full rounded-md border bg-background p-2"
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
                          <Label className="text-background">Teacher</Label>
                          <select
                            value={tempSelection.teacherId}
                            onChange={(e) =>
                              setTempSelection((prev) => ({
                                ...prev,
                                teacherId: e.target.value,
                              }))
                            }
                            className="w-full rounded-md border bg-background p-2"
                          >
                            <option value="">Select Teacher</option>
                            {teachers.map((t) => (
                              <option key={t.id} value={t.id}>
                                {t.firstName} {t.lastName}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex gap-2">
                          <Button onClick={handleSaveSlot} className="flex-1">
                            Save
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setEditingPeriod(null)}
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : slot ? (
                      <div
                        onClick={() => handlePeriodClick(time.id)}
                        className="cursor-pointer rounded-md border bg-muted p-3 hover:bg-muted/70 transition"
                      >
                        <div className="font-medium">
                          {getSubjectName(slot.subjectId)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {getTeacherName(slot.teacherId)}
                        </div>
                      </div>
                    ) : (
                      <Button
                        onClick={() => handlePeriodClick(time.id)}
                        variant="outline"
                        className="w-full border-dashed"
                      >
                        + Add Subject & Teacher
                      </Button>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Button
            onClick={handleSubmit}
            disabled={slots.length === 0}
            className="w-full py-6 text-base font-semibold"
          >
            Save Schedule
          </Button>
        </>
      )}
    </div>
  );
};

export default ScheduleRoom;
