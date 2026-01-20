export interface IResult {
  id: string;
  studentId: string;
  subjectId: string;
  classId: string;
  marks: number;
  grade: string;
  term: string;
  year: number;
  student: {
    firstName: string;
    lastName: string;
    rollNo?: string;
  };
  subject: {
    name: string;
  };
}
