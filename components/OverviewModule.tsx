import React from 'react';
import { MOCK_PARKS, MOCK_COMPLAINTS, MOCK_PROJECTS } from '../constants';
import { TrendingUp, AlertCircle, DollarSign, Activity, Calendar, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export const OverviewModule: React.FC = () => {
  const totalBudget = MOCK_PROJECTS.reduce((acc, p) => acc + p.budget, 0);
  const pendingComplaints = MOCK_COMPLAINTS.filter(c => c.status === 'Pending').length;
  
  const revenueData = [
    { name: 'Jan', revenue: 4.0, expense: 2.4 },
    { name: 'Feb', revenue: 3.5, expense: 2.1 },
    { name: 'Mar', revenue: 5.2, expense: 2.8 },
    { name: 'Apr', revenue: 6.1, expense: 3.2 },
    { name: 'May', revenue: 5.8, expense: 3.5 },
    { name: 'Jun', revenue: 4.9, expense: 3.1 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Executive Overview</h2>
      
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-slate-500 text-sm font-medium">Active Projects Budget</h3>
            <DollarSign className="text-emerald-500 bg-emerald-100 p-1.5 rounded-lg w-8 h-8" />
          </div>
          <p className="text-2xl font-bold text-slate-800">{totalBudget} M</p>
          <p className="text-xs text-emerald-600 flex items-center mt-1"><TrendingUp size={12} className="mr-1" /> +12% vs last year</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-slate-500 text-sm font-medium">Pending Complaints</h3>
            <AlertCircle className="text-red-500 bg-red-100 p-1.5 rounded-lg w-8 h-8" />
          </div>
          <p className="text-2xl font-bold text-slate-800">{pendingComplaints}</p>
          <p className="text-xs text-red-600 flex items-center mt-1"><Activity size={12} className="mr-1" /> Requires attention</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-slate-500 text-sm font-medium">Total Parks</h3>
            <TreesIcon className="text-blue-500 bg-blue-100 p-1.5 rounded-lg w-8 h-8" />
          </div>
          <p className="text-2xl font-bold text-slate-800">{MOCK_PARKS.length}</p>
          <p className="text-xs text-slate-500 flex items-center mt-1">Across 5 major cities</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-slate-500 text-sm font-medium">Staff Attendance</h3>
            <CheckCircle2 className="text-purple-500 bg-purple-100 p-1.5 rounded-lg w-8 h-8" />
          </div>
          <p className="text-2xl font-bold text-slate-800">94%</p>
          <p className="text-xs text-emerald-600 flex items-center mt-1">Normal levels</p>
        </div>
      </div>

      {/* Middle Row: Charts & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Financial Chart */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Revenue Generation vs Maintenance</h3>
            <select className="text-sm border-slate-200 rounded-md text-slate-600"><option>Last 6 Months</option></select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{fontSize: 12}} />
                <YAxis unit="M" />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="revenue" name="Revenue (Marketing)" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expense" name="Maintenance Cost" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Critical Alerts Feed */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">Critical Alerts</h3>
          <div className="space-y-4">
            <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
               <AlertCircle className="shrink-0 text-red-600" size={20} />
               <div>
                 <p className="text-sm font-bold text-red-800">Dengue Larva Detected</p>
                 <p className="text-xs text-red-600 mt-1">Larva found in Jilani Park fountain area. Immediate spray required.</p>
                 <span className="text-[10px] text-slate-400 mt-2 block">2 hours ago</span>
               </div>
            </div>
            
            <div className="flex gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
               <Activity className="shrink-0 text-amber-600" size={20} />
               <div>
                 <p className="text-sm font-bold text-amber-800">Water Pump Failure</p>
                 <p className="text-xs text-amber-600 mt-1">Tube well #4 in Gulshan-e-Iqbal is down.</p>
                 <span className="text-[10px] text-slate-400 mt-2 block">5 hours ago</span>
               </div>
            </div>

             <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
               <Calendar className="shrink-0 text-blue-600" size={20} />
               <div>
                 <p className="text-sm font-bold text-blue-800">Spring Festival Prep</p>
                 <p className="text-xs text-blue-600 mt-1">Meeting with Director General scheduled.</p>
                 <span className="text-[10px] text-slate-400 mt-2 block">Tomorrow, 10:00 AM</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Helper component for icon
const TreesIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 5.3-2.1" />
    <path d="M7 16v6" />
    <path d="M13 19v3" />
    <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .6-1.7L13 3l-1.4 1.5" />
  </svg>
)
