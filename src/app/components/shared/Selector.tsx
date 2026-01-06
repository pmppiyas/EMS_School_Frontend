import ClassSelect from '@/app/components/shared/ClassSelector';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from 'recharts';

const Selector = () => {
  return (
    <div>
      {/* Header with ClassSelect & Day */}
      <Card className="bg-primary/40">
        <CardContent>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2 flex-1 flex flex-col justify-end text-center">
              <Label className="text-slate-100">Select Class</Label>
              <ClassSelect
                classes={classes}
                cookieName="selectedClass"
                onChange={setSelectedClass}
              />
            </div>

            <div className="space-y-2 flex-1  flex flex-col justify-end max-w-min">
              <Label className="text-slate-100 text-left">Select Day</Label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className=" bg-slate-900 text-slate-100 border border-slate-700 p-2 rounded-md "
              >
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Selector;
