import { IStudent } from '@/types/student.interface';

const TestimonialCard = ({
  student,
  year,
}: {
  student: IStudent;
  year: number;
}) => {
  return (
    <div className="print-area w-full min-h-[200mm] landscape:min-h-[210mm] bg-white p-6 print:p-0 flex items-center justify-center">
      {/* Outer Border: Shadcn border logic and professional look */}
      <div className="relative w-full h-full max-w-[290mm] border-10 border-double border-slate-900 p-6 print:p-8 bg-white shadow-sm overflow-hidden">
        {/* Corner Decorations - Highlighting with Primary color */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-primary/40"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-primary/40"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-8 border-l-8 border-primary/40"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-primary/40"></div>

        <div className="flex flex-col h-full justify-between">
          {/* Header Section - Optimized for width */}
          <div className="text-center border-b-2 border-slate-300 pb-4 mb-6">
            <h1 className="text-4xl font-extrabold text-slate-900 uppercase mb-1">
              ধর্মপুর মডেল স্কুল অ্যান্ড কলেজ
            </h1>
            <h2 className="text-xl font-serif italic text-slate-700 mb-3">
              Dhormopur Model School & College
            </h2>
            <div className="flex justify-center items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Est: 2010
              </span>
              <div className="px-10 py-2 bg-slate-900 text-white rounded-full font-bold uppercase text-md">
                Character Certificate / চারিত্রিক সনদপত্র
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Gaibandha, BD
              </span>
            </div>
          </div>

          {/* Student Info Bar - Landscape orientation e upore thakbe */}
          <div className="grid grid-cols-4 gap-4 mb-8 text-sm">
            <div className="border-b border-dotted border-slate-400">
              <span className="text-[10px] text-muted-foreground uppercase font-bold block">
                Student Name
              </span>
              <span className="font-bold">
                {student.firstName} {student.lastName}
              </span>
            </div>
            <div className="border-b border-dotted border-slate-400">
              <span className="text-[10px] text-muted-foreground uppercase font-bold block">
                Class / Roll
              </span>
              <span className="font-bold">
                {student.class?.name} / {student.roll}
              </span>
            </div>
            <div className="border-b border-dotted border-slate-400">
              <span className="text-[10px] text-muted-foreground uppercase font-bold block">
                Academic Year
              </span>
              <span className="font-bold">{year}</span>
            </div>
            <div className="border-b border-dotted border-slate-400 text-right">
              <span className="text-[10px] text-muted-foreground uppercase font-bold block">
                Date
              </span>
              <span className="font-bold">
                {new Date().toLocaleDateString('en-GB')}
              </span>
            </div>
          </div>

          {/* Main Content - Two columns or stacked text */}
          <div className="space-y-6 flex-1 px-4">
            {/* English Content */}
            <p className="text-base leading-relaxed text-justify text-slate-800">
              This is to certify that{' '}
              <strong>
                {student.firstName} {student.lastName}
              </strong>
              , son/daughter of{' '}
              <strong>{student.fatherName || '___________'}</strong>, was a
              student of this institution. During his/her academic session{' '}
              <strong>{year}</strong>, he/she has maintained an excellent moral
              character. His/her conduct and behavior have been satisfactory.
            </p>

            {/* Bengali Content */}
            <p className="text-base leading-relaxed text-justify text-slate-800 font-sans">
              এই মর্মে প্রত্যয়ন করা যাচ্ছে যে,{' '}
              <strong>
                {student.firstName} {student.lastName}
              </strong>
              , পিতা/মাতা:{' '}
              <strong>{student.fatherName || '___________'}</strong>, এই
              প্রতিষ্ঠানের একজন নিয়মিত ছাত্র/ছাত্রী ছিলেন।
              <strong>{year}</strong> শিক্ষাবর্ষে অধ্যয়নকালে তার চারিত্রিক
              বৈশিষ্ট্য ও শৃঙ্খলা সন্তোষজনক ছিল। আমি তার জীবনের সর্বাঙ্গীণ
              সাফল্য কামনা করি।
            </p>
          </div>

          {/* Signatures - Spread out for landscape */}
          <div className="mt-12 flex justify-between items-end px-10">
            <div className="text-center w-56">
              <div className="border-t border-slate-900 pt-1">
                <p className="text-sm font-bold uppercase">Class Teacher</p>
                <p className="text-[10px] text-muted-foreground">
                  শ্রেণী শিক্ষকের স্বাক্ষর
                </p>
              </div>
            </div>

            {/* School Seal Placeholder */}
            <div className="h-20 w-20 border-2 border-dashed border-slate-200 rounded-full flex items-center justify-center opacity-30">
              <span className="text-[10px] font-bold rotate-12">SEAL</span>
            </div>

            <div className="text-center w-56">
              <div className="border-t border-slate-900 pt-1">
                <p className="text-sm font-bold uppercase">Principal</p>
                <p className="text-[10px] text-muted-foreground">
                  প্রধান শিক্ষকের স্বাক্ষর ও সীল
                </p>
              </div>
            </div>
          </div>

          {/* Small Footer */}
          <p className="text-[9px] text-center text-muted-foreground mt-4">
            Computer generated certificate. No physical signature required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
