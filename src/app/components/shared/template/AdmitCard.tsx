import { IStudent } from '@/types/student.interface';
import { Term } from '@/types/fee.interface';

const AdmitCard = ({
  student,
  term,
  year,
}: {
  student: IStudent;
  term: Term;
  year: number;
}) => {
  return (
    <div className="px-6 py-3 border-[3px] border-double border-black rounded-sm bg-white w-full max-w-[208mm] mx-auto text-black font-serif mt-1">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b-2 border-black  pb-2">
        <div className="w-16 h-16 border flex items-center justify-center text-[10px] text-center">
          School Logo
        </div>

        <div className="text-center flex-1">
          <h2 className="text-2xl font-bold uppercase leading-tight">
            ধর্মপুর মডেল স্কুল অ্যান্ড কলেজ
          </h2>
          <p className="text-xs font-semibold text-gray-700 mb-1">
            স্থাপিত: ২০১০ খ্রিষ্টাব্দ
          </p>
          <p className="text-sm font-medium mb-1">
            গোবিন্দগঞ্জ, গাইবান্ধা, বাংলাদেশ
          </p>
          <div className="inline-block px-4 py-1 mt-2 bg-black text-white rounded-full font-bold uppercase text-sm">
            Admit Card / প্রবেশপত্র
          </div>
        </div>

        <div className="w-16 h-16 border-2 border-black overflow-hidden bg-gray-50">
          <img
            src={student.photo || '/avatar.png'}
            alt="student"
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-y-4 text-[15px] mb-8">
        <p className="border-b border-dotted border-gray-400 pb-1">
          <strong>নাম (Name):</strong>{' '}
          <span className="ml-2">
            {student.firstName} {student.lastName}
          </span>
        </p>
        <p className="border-b border-dotted border-gray-400 pb-1 ml-4">
          <strong>রোল (Roll):</strong>{' '}
          <span className="ml-2 font-bold">{student.roll}</span>
        </p>
        <p className="border-b border-dotted border-gray-400 pb-1">
          <strong>শ্রেণী (Class):</strong>{' '}
          <span className="ml-2">{student.class?.name || 'N/A'}</span>
        </p>
        <p className="border-b border-dotted border-gray-400 pb-1 ml-4">
          <strong>পরীক্ষা (Exam):</strong>{' '}
          <span className="ml-2 uppercase font-bold text-blue-800">
            {term} TERM - {year}
          </span>
        </p>
      </div>

      <div className="border border-black p-3 rounded-md">
        <h4 className="text-xs font-bold underline mb-2 italic">
          নির্দেশাবলী (Instructions):
        </h4>
        <ul className="text-[11px] space-y-1 list-decimal ml-4">
          <li>
            পরীক্ষার্থীদের পরীক্ষা শুরুর ৩০ মিনিট আগে হলে উপস্থিত হতে হবে।
            (Students must arrive 30 mins early.)
          </li>
          <li>
            পরীক্ষা হলে এই প্রবেশপত্র অবশ্যই সঙ্গে আনতে হবে। (Must bring this
            admit card.)
          </li>
          <li>
            মোবাইল ফোন বা কোনো প্রকার ইলেকট্রনিক ডিভাইস আনা সম্পূর্ণ নিষিদ্ধ।
            (No electronic devices allowed.)
          </li>
          <li>
            উত্তরপত্রে কোনো প্রকার কাটাকাটি বা ঘষামাজা করা যাবে না। (Do not
            scratch or overwrite on answer sheets.)
          </li>
        </ul>
      </div>

      {/* Signatures */}
      <div className="flex justify-between items-end  px-4">
        <div className="text-center">
          <div className="w-36 border-t border-black pt-1">
            <p className="text-xs font-bold">Class Teacher</p>
            <p className="text-[10px]">শ্রেণী শিক্ষকের স্বাক্ষর</p>
          </div>
        </div>
        <div className="text-center">
          {/* Placeholder for Official Seal */}
          <div className="h-16 w-16 border-2 border-red-200 rounded-full mx-auto mb[-20px] opacity-20 flex items-center justify-center text-[8px] text-red-500 font-bold rotate-12">
            SCHOOL SEAL
          </div>
          <div className="w-40 border-t border-black pt-1">
            <p className="text-xs font-bold">Principal / Headmaster</p>
            <p className="text-[10px]">প্রধান শিক্ষকের স্বাক্ষর</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[9px] text-gray-500 pt-2 border-t border-gray-100">
        <p>Software Generated Admit Card</p>
        <p>Date: {new Date().toLocaleDateString('bn-BD')}</p>
      </div>
    </div>
  );
};

export default AdmitCard;
