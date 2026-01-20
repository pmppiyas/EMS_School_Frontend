'use client';

import { ISubject } from '@/types/class.interface';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

const SubjectTable = ({ subjects }: { subjects: ISubject[] }) => {
  if (!subjects || subjects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg">
        <BookOpen className="w-10 h-10 text-muted-foreground mb-2" />
        <p className="text-muted-foreground">
          No subjects found for this class.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
      {subjects.map((subject) => (
        <Card
          key={subject.id}
          className="cursor-pointer transition-all hover:shadow-md"
        >
          <CardContent className="p-4">
            <div className="space-y-1">
              <div className="flex items-start justify-between">
                <h4 className="font-semibold text-sm">{subject.name}</h4>

                <Badge variant="outline" className="text-[10px]">
                  Code {subject.code ?? 'N/A'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SubjectTable;
