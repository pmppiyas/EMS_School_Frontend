export interface IDiarySlot {
  periodId: string;
  periodName: string;
  startTime: string;
  subjectName: string;
  subjectId: string;
  teacherName: string;
  teacherId: string;
  classId: string;
  note: string;
  comment?: string;
  isEntryExist: boolean;
  diaryId: string | null;
}

export interface IDiaryResponse {
  class: string;
  classId: string;
  date: string;
  day: string;
  diary: IDiarySlot[];
}
