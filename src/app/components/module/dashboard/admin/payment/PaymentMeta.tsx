
import { feesMeta } from '@/app/services/fee/feesMeta';
import { Card } from '@/components/ui/card';
import { Banknote, History, CalendarRange } from 'lucide-react';


const Paymentdata = async () => {
  const {data} = await feesMeta();

  const stats = [
    {
      label: "Today's Collection",
      amount: data.today.total,
      count: data.today.count,
      color: "border-l-green-500",
      icon: <Banknote className="text-green-600" size={24} />,
      bg: "bg-green-100",
    },
    {
      label: "Last 7 Days",
      amount: data.lastWeek.total,
      count: data.lastWeek.count,
      color: "border-l-blue-500",
      icon: <History className="text-blue-600" size={24} />,
      bg: "bg-blue-100",
    },
    {
      label: "Last 30 Days",
      amount: data.lastMonth.total,
      count: data.lastMonth.count,
      color: "border-l-purple-500",
      icon: <CalendarRange className="text-purple-600" size={24} />,
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, i) => (
        <Card key={i} className={`p-4 flex items-center gap-4 border-l-4 ${stat.color} shadow-sm`}>
          <div className={`p-2 ${stat.bg} rounded-lg`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            <h3 className="text-xl font-bold text-slate-800">৳{stat.amount.toLocaleString()}</h3>
            <p className="text-[10px] text-slate-400">{stat.count} transactions</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Paymentdata;
