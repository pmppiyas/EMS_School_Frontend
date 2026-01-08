'use client';

import EmptyComp from '@/app/components/shared/EmptyComp';
import { Card, CardContent } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { IFeeType } from '@/types/fee.interface';
const FeeTypeTable = ({ feetypes }: { feetypes: IFeeType[] }) => {
  return (
    <>
      {feetypes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {feetypes.map((ft) => (
            <Card
              key={ft.id}
              className="cursor-pointer transition-all hover:shadow-md"
            >
              <CardContent className="p-4">
                <div className="space-y-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-sm">{ft.category}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {ft?.classId}
                  </p>
                  <Badge variant="secondary" className="mt-2 text-primary">
                    ৳{ft.amount.toLocaleString()}
                  </Badge>
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

export default FeeTypeTable;
