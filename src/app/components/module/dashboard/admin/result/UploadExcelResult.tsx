/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Upload, FileSpreadsheet, X, Download } from 'lucide-react';
import * as XLSX from 'xlsx';
import { toast } from 'sonner';
import { IStudent } from '@/types/student.interface';
import { generateResultTemplate } from '@/lib/generateResultTemplate';
import { uploadExcelResult } from '@/app/services/result/uploadExcelResult';
import { Button } from '@/components/ui/button';

interface ISubject {
  id: string;
  name: string;
  code: string;
  classId: string;
}

const ResultUploadPage = ({
  subjects,
  students,
  term,
  year,
}: {
  subjects: ISubject[];
  students: IStudent[];
  term: string;
  year: string;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const onDownloadClick = () => {
    try {
      generateResultTemplate(students, subjects);
      toast.success('মাস্টার টেমপ্লেট ডাউনলোড হয়েছে!');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleFile = (file: File) => {
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      return toast.error('অনুগ্রহ করে একটি এক্সেল ফাইল (.xlsx) আপলোড করুন।');
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json: any[] = XLSX.utils.sheet_to_json(sheet);

        if (json.length === 0) {
          return toast.error('ফাইলটি খালি বা ভুল ফরম্যাটে আছে।');
        }

        setPreviewData(json);
        setFile(file);
        toast.success('ফাইলটি সফলভাবে পড়া হয়েছে।');
      } catch (err) {
        toast.error('ফাইল পড়তে সমস্যা হয়েছে।');
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleUploadSubmit = async () => {
    if (!term) return toast.error('অনুগ্রহ করে টার্ম সিলেক্ট করুন।');
    if (!year) return toast.error('অনুগ্রহ করে বছর সিলেক্ট করুন।');

    setLoading(true);
    try {
      const formattedPayload: any[] = [];

      previewData.forEach((row) => {
        subjects.forEach((subject) => {
          const marks = row[subject.name];
          if (marks !== undefined && marks !== '') {
            formattedPayload.push({
              studentId: row['Student ID'],
              subjectId: subject.id,
              classId: subject.classId,
              marks: Number(marks),
              term,
              year,
            });
          }
        });
      });

      if (formattedPayload.length === 0) {
        setLoading(false);
        return toast.error('কোনো নম্বর খুঁজে পাওয়া যায়নি।');
      }

      await uploadExcelResult({
        results: formattedPayload,
        term,
        year: Number(year),
      });

      toast.success('সব বিষয়ের নম্বর সফলভাবে সেভ করা হয়েছে!');
      setFile(null);
      setPreviewData([]);
    } catch (error: any) {
      toast.error(error?.message || 'সেভ করতে সমস্যা হয়েছে।');
    } finally {
      setLoading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-3 print:hidden">
        <Button
          onClick={onDownloadClick}
          variant="outline"
          className="flex items-center gap-2 bg-primary text-background hover:bg-primary/90"
        >
          <Download size={18} /> Excel Template
        </Button>
      </div>

      {!file ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById('fileInput')?.click()}
          className={`border-2 border-muted-foreground border-dashed rounded-2xl p-16 text-center transition-all cursor-pointer ${
            dragActive
              ? 'border-primary bg-muted-foreground scale-[1.01]'
              : 'border-muted hover:border-primary/70 hover:bg-muted/30'
          }`}
        >
          <Upload
            className={`mx-auto mb-4 ${dragActive ? 'text-primary' : 'text-muted-foreground'}`}
            size={48}
          />
          <p className="text-lg font-semibold">
            ফাইলটি ড্রপ করুন অথবা এখানে ক্লিক করুন
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            .xlsx অথবা .xls ফাইল সাপোর্ট করে
          </p>
          <input
            type="file"
            id="fileInput"
            hidden
            accept=".xlsx, .xls"
            onChange={(e) =>
              e.target.files?.[0] && handleFile(e.target.files[0])
            }
          />
        </div>
      ) : (
        <div className="border rounded-xl overflow-hidden shadow-sm bg-card">
          <div className="p-4 bg-muted/30 border-b flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-background p-2 rounded-lg">
                <FileSpreadsheet size={20} className="text-primary" />
              </div>
              <div>
                <span className="block font-bold text-sm">{file.name}</span>
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                  {term} • {year}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                setFile(null);
                setPreviewData([]);
              }}
              className="p-2 hover:bg-muted-background text-muted-foreground hover:text-destructive rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="max-h-[500px] overflow-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-muted/50 sticky top-0 z-10 border-b">
                <tr>
                  <th className="p-4 text-left font-bold">Student ID</th>
                  <th className="p-4 text-left font-bold">Student Name</th>
                  {subjects.map((sub) => (
                    <th
                      key={sub.id}
                      className="p-4 text-center border-l font-bold min-w-[100px]"
                    >
                      {sub.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {previewData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-mono text-xs text-muted-foreground">
                      {row['Student ID']}
                    </td>
                    <td className="p-4 font-semibold text-foreground">
                      {row['Student Name']}
                    </td>
                    {subjects.map((sub) => (
                      <td
                        key={sub.id}
                        className="p-4 border-l text-center font-bold text-primary"
                      >
                        {row[sub.name] ?? '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 bg-muted/30 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-sm text-muted-foreground">
              মোট{' '}
              <span className="font-bold text-foreground">
                {previewData.length}
              </span>{' '}
              জন শিক্ষার্থীর ডাটা পাওয়া গেছে।
            </span>
            <button
              onClick={handleUploadSubmit}
              disabled={loading || !term || !year}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-3 rounded-xl font-bold shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  সেভ হচ্ছে...
                </span>
              ) : (
                'সব নম্বর সেভ করুন'
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultUploadPage;
