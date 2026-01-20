/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISubject } from '@/types/class.interface';
import { IStudent } from '@/types/student.interface';
import * as XLSX from 'xlsx';

export const generateResultTemplate = (
  students: IStudent[],
  subjects: ISubject[]
) => {
  if (!students.length || !subjects.length) {
    throw new Error('প্রয়োজনীয় ডাটা খুঁজে পাওয়া যায়নি!');
  }

  const templateData = students.map((student) => {
    const row: any = {
      'Student ID': student.id,
      'Student Name': `${student.firstName} ${student.lastName}`,
    };

    subjects.forEach((subject) => {
      row[subject.name] = '';
    });

    return row;
  });

  const worksheet = XLSX.utils.json_to_sheet(templateData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'All_Subject_Results');

  const columnWidths = [
    { wch: 15 },
    { wch: 25 },
    ...subjects.map(() => ({ wch: 15 })),
  ];
  worksheet['!cols'] = columnWidths;

  XLSX.writeFile(workbook, `Class_Result_Template_All_Subjects.xlsx`);
};
