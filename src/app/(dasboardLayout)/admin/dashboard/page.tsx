import AttendanceCharts from '../../../components/module/dashboard/admin/overview/AttendanceCharts';
import { getStudentAttendance } from '../../../services/attendance/getStudentAttendance';
import { getTeacherAttendance } from '../../../services/attendance/getTeacherAttendance';

const page = async () => {
  const studentRes = await getStudentAttendance();

  const studentAttendData = studentRes.data.student;

  const teacherRes = await getTeacherAttendance();
  const teacherAttendData = teacherRes.data.teacher;

  const stats = [
    {
      title: 'Present Teacher',
      value: teacherAttendData.present.total + teacherAttendData.late.total,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Students',
      value: studentAttendData.total,
      color: 'bg-emerald-500',
    },
    {
      title: 'Present Student',
      value: studentAttendData.present.total + studentAttendData.late.total,
      color: 'bg-green-500',
    },
    {
      title: 'Absent Student',
      value: studentAttendData.absent.total,
      color: 'bg-red-500',
    },
    {
      title: 'Leave Studnet',
      value: studentAttendData.leave.total,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-5 text-white shadow-md ${item.color}`}
          >
            <p className="text-sm opacity-90">{item.title}</p>
            <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      <AttendanceCharts student={studentAttendData} />
    </div>
  );
};

export default page;
