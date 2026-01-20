import { getMe } from '@/app/services/shared/getMe';
import { getTeacherAttendance } from '@/app/services/attendance/getTeacherAttendance';
import { BookOpen, Calendar, CheckCircle, Clock, Users } from 'lucide-react';
import { ISubject } from '@/types/class.interface';
import AttendanceCharts from '@/app/components/module/dashboard/admin/overview/AttendanceCharts';
import { getTeacherMeta } from '@/app/services/teacher/getTeacherMeta';

const TeacherDashboard = async () => {
  const { teacher } = await getMe();

  const { teacher: myAttendance } = await getTeacherAttendance();

  const stats = [
    {
      title: 'Total Classes',
      value: teacher?.classes?.length || 0,
      icon: <Users className="w-6 h-6" />,
      color: 'bg-indigo-500',
    },
    {
      title: 'My Subjects',
      value: teacher?.subjects?.length || 0,
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-emerald-500',
    },
    {
      title: 'Present Days',
      value: myAttendance.present.total + myAttendance.late.total,
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Late Entries',
      value: myAttendance.late.total,
      icon: <Clock className="w-6 h-6" />,
      color: 'bg-amber-500',
    },
  ];

  const meta = await getTeacherMeta(teacher.userId);

  return (
    <div className=" space-y-8 min-h-screen bg-gray-50/30">
      {/* Welcome Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Hello, {teacher?.user?.name}! 👋
          </h1>
          <p className="text-gray-500 text-sm">
            Here is what&#39;s happening with your classes today.
          </p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
            Academic Year
          </p>
          <p className="font-bold text-indigo-600">2025-2026</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4"
          >
            <div className={`p-3 rounded-xl text-white ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{item.title}</p>
              <h2 className="text-2xl font-bold text-gray-800">{item.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Attendance Chart (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-500" /> My Attendance
              Trend
            </h3>
            <AttendanceCharts student={myAttendance} />
          </div>
        </div>

        {/* Info Sidebar (1/3 width) */}
        <div className="space-y-6">
          {/* My Subjects List */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 italic">
              Assigned Subjects
            </h3>
            <div className="space-y-3">
              {teacher?.subjects?.length > 0 ? (
                teacher.subjects.map((sub: ISubject, idx: number) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="font-medium text-gray-700">
                      {sub.name}
                    </span>
                    <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-bold">
                      {sub.code}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400">
                  No subjects assigned yet.
                </p>
              )}
            </div>
          </div>

          {/* Quick Tasks */}
          <div className="bg-indigo-600 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="font-bold mb-2">Quick Actions</h3>
            <p className="text-xs opacity-80 mb-4">
              Manage your daily tasks efficiently.
            </p>
            <div className="grid grid-cols-1 gap-2">
              <button className="bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm transition">
                Update Daily Diary
              </button>
              <button className="bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm transition">
                Mark Student Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
