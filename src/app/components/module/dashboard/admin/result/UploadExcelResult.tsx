/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Upload, FileSpreadsheet, X, Download } from 'lucide-react';
import * as XLSX from 'xlsx';
import { toast } from 'sonner';
import { IStudent } from '@/types/student.interface';
import { generateResultTemplate } from '@/lib/generateResultTemplate';
import { uploadExcelResult } from '@/app/services/result/uploadExcelResult';

interface ISubject {
  id: string;
  name: string;
  code: string;
  classId: string;
}

const ResultUploadPage = ({
  subjects,
  students,
}: {
  subjects: ISubject[];
  students: IStudent[];
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
            });
          }
        });
      });

      if (formattedPayload.length === 0) {
        setLoading(false);
        return toast.error('কোনো নম্বর খুঁজে পাওয়া যায়নি।');
      }

      await uploadExcelResult(formattedPayload);

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
    <div className="p-6 max-w-6xl mx-auto space-y-6 bg-background rounded-2xl shadow-sm border text-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b pb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Class-wide Result Upload
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            সব বিষয়ের নম্বর এক সাথে আপলোড করুন।
          </p>
        </div>
        <button
          onClick={onDownloadClick}
          className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition font-semibold shadow-md active:scale-95"
        >
          <Download size={18} /> মাস্টার টেমপ্লেট ডাউনলোড
        </button>
      </div>

      {!file ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById('fileInput')?.click()}
          className={`border-2 border-dashed rounded-2xl p-16 text-center transition-all cursor-pointer ${
            dragActive
              ? 'border-indigo-600 bg-indigo-50 scale-[1.01]'
              : 'border-gray-300 bg-gray-50 hover:border-indigo-400'
          }`}
        >
          <Upload
            className={`mx-auto mb-4 ${dragActive ? 'text-indigo-600' : 'text-gray-400'}`}
            size={48}
          />
          <p className="text-lg font-semibold text-gray-700">
            ফাইলটি এখানে ড্রপ করুন অথবা ক্লিক করুন
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
        <div className="border rounded-xl overflow-hidden shadow-lg">
          <div className="p-4 bg-indigo-50 border-b flex justify-between items-center">
            <span className="flex items-center gap-2 font-bold text-indigo-800">
              <FileSpreadsheet size={20} className="text-indigo-600" />{' '}
              {file.name}
            </span>
            <button
              onClick={() => {
                setFile(null);
                setPreviewData([]);
              }}
              className="text-gray-400 hover:text-red-500"
            >
              <X size={24} />
            </button>
          </div>

          <div className="max-h-[500px] overflow-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th className="p-4 border-b text-left bg-gray-100">
                    Student ID
                  </th>
                  <th className="p-4 border-b text-left bg-gray-100 shadow-sm">
                    Name
                  </th>
                  {subjects.map((sub) => (
                    <th
                      key={sub.id}
                      className="p-4 border-b border-l text-center min-w-[100px] bg-indigo-50/50"
                    >
                      {sub.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {previewData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30">
                    <td className="p-4 font-mono text-xs text-gray-400">
                      {row['Student ID']}
                    </td>
                    <td className="p-4 font-bold text-gray-700">
                      {row['Student Name']}
                    </td>
                    {subjects.map((sub) => (
                      <td
                        key={sub.id}
                        className="p-4 border-l text-center text-indigo-600 font-extrabold text-base"
                      >
                        {row[sub.name] !== undefined ? row[sub.name] : '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 bg-gray-50 border-t flex justify-end items-center gap-4">
            <span className="text-xs text-gray-500 italic">
              মোট {previewData.length} জন শিক্ষার্থীর ডাটা
            </span>
            <button
              onClick={handleUploadSubmit}
              disabled={loading}
              className="bg-indigo-600 text-white px-10 py-3 rounded-lg font-bold shadow-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? 'প্রসেসিং হচ্ছে...' : 'সব নম্বর সেভ করুন'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultUploadPage;
