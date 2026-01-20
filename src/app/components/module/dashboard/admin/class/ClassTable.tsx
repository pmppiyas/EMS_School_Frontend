import EmptyComp from '@/app/components/shared/EmptyComp';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IClass } from '@/types/class.interface';

const ClassTable = ({ classes }: { classes: IClass[] }) => {
  return (
    <>
      {classes && classes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {classes.map((cls) => (
            <Card
              key={cls.id}
              className="cursor-pointer transition-all hover:shadow-md"
            >
              <CardContent className="p-4">
                <div className="space-y-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-sm">{cls.name}</h4>

                    <Badge variant="outline" className="text-[10px]">
                      {cls._count?.students || 0} Students
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyComp />
      )}
    </>
  );
};

export default ClassTable;
