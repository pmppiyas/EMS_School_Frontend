/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  Trophy,
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface IResultEntry {
  subjectName: string;
  marks: number;
  grade: string;
  point: number;
}

interface ResultViewProps {
  results: IResultEntry[];
  year: string;
  term: string;
}

const ResultView = ({ results, year, term }: ResultViewProps) => {
  const totalPoints = results.reduce((acc, curr) => acc + curr.point, 0);
  const gpa = (totalPoints / results.length).toFixed(2);

  return (
    <div className="space-y-6">
      {/* Summary Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Trophy size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Average GPA
              </p>
              <h3 className="text-2xl font-bold text-primary">{gpa}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Subjects
              </p>
              <h3 className="text-2xl font-bold text-primary">
                {results.length}
              </h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Examination
              </p>
              <h3 className="text-2xl font-bold text-primary capitalize">
                {term} {year}
              </h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Marks Table */}
      <Card className="overflow-hidden border-border shadow-md">
        <CardHeader className="bg-muted/50 border-b flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-bold flex items-center gap-2">
            <ClipboardCheck className="text-primary" size={20} />
            Detailed Marksheet
          </CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Download size={14} /> Download PDF
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/30 text-muted-foreground uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Subject Name</th>
                  <th className="px-6 py-4 text-center">Marks</th>
                  <th className="px-6 py-4 text-center">Grade</th>
                  <th className="px-6 py-4 text-center">Point</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {results.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-foreground">
                      {item.subjectName}
                    </td>
                    <td className="px-6 py-4 text-center font-medium">
                      {item.marks}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Badge
                        variant={
                          item.grade === 'F' ? 'destructive' : 'secondary'
                        }
                        className="font-bold px-3"
                      >
                        {item.grade}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-center font-mono text-primary font-bold">
                      {item.point.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-primary/5 font-bold border-t">
                <tr>
                  <td className="px-6 py-4 text-foreground" colSpan={3}>
                    Result Summary (GPA)
                  </td>
                  <td className="px-6 py-4 text-center text-primary text-lg">
                    {gpa}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Footer Info */}
      <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs italic py-2">
        <GraduationCap size={14} />
        This is an auto-generated marksheet for the {term} examination, {year}.
      </div>
    </div>
  );
};

export default ResultView;
