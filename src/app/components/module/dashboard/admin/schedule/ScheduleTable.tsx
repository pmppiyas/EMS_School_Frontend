import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { getSchedulesByDay } from '@/app/services/schedule/get.schedule';

interface Teacher {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface Subject {
  name: string;
  code: string;
}

interface ClassTime {
  period: number;
  startTime: string;
  endTime: string;
}

interface Class {
  id: number;
  name: string;
}

interface Schedule {
  classTime: ClassTime;
  teacher: Teacher;
  subject: Subject;
}

interface ClassSchedule {
  class: Class;
  schedules: Schedule[];
}

const ScheduleTable = () => {
  const [selectedDay, setSelectedDay] = useState('Saturday');
  const [schedules, setSchedules] = useState<ClassSchedule[]>([]);
  const [loading, setLoading] = useState(false);

  const days = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];

  useEffect(() => {
    fetchSchedules();
  }, [selectedDay]);

  const fetchSchedules = async () => {
    setLoading(true);
    try {
      const data = await getSchedulesByDay(selectedDay);
      console.log(data);
      setSchedules(data);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    } finally {
      setLoading(false);
    }
  };

  console.log(setSchedules);
  return (
    <div className="p-6 min-h-screen bg-slate-950">
      <div className="max-w-full mx-auto">
        {/* Day Selector */}
        <div className="space-y-2 mb-8">
          <Label className="text-slate-100 text-left text-lg">Select Day</Label>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="bg-slate-900 text-slate-100 border border-slate-700 p-3 rounded-lg w-full md:w-64"
          >
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="text-slate-100 text-center py-8">Loading...</div>
        ) : (
          <div className="space-y-6">
            {schedules.map((classSchedule) => (
              <div key={classSchedule.class.id} className="rounded-lg p-6">
                {/* Class Name */}
                <h2 className="text-2xl font-bold text-slate-100 mb-4">
                  {classSchedule.class.name}
                </h2>

                {/* Horizontal Scroll Container for Boxes */}
                <div className="overflow-x-auto pb-2">
                  <div className="flex gap-4 min-w-max">
                    {classSchedule.schedules.map((schedule, index) => (
                      <div
                        key={index}
                        className="bg-slate-800 border border-slate-700 rounded-lg p-2 hover:border-slate-600 transition-all shrink-0 space-y-2 w-36 flex  flex-col items-center justify-center"
                      >
                        <span className="text-xl font-bold text-blue-400 ">
                          {schedule.classTime.period}
                        </span>
                        {/* Period & Time */}
                        <div className="flex items-center justify-between  border-b border-slate-700">
                          <h3 className="text-lg font-medium text-slate-100 text-center">
                            {schedule.subject.name}
                          </h3>
                        </div>
                        {/* Subject */}
                        <div className="flex justify-between items-center">
                          <span className="text-lg text-slate-400">
                            {schedule.classTime.startTime} -{' '}
                            {schedule.classTime.endTime}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0 border-t border-slate-700">
                          <p className="text-sm font-medium text-slate-200 truncate">
                            {schedule.teacher.firstName}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && schedules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No schedules found for {selectedDay}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleTable;
