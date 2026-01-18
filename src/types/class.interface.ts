export interface IClass {
  id?: string;
  name: string;
  _count?: {
    students: number;
  };
}

export interface ISubject {
  id?: string;
  name: string;
  code?: string;
  classId: string;
}
