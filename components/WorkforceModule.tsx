import React from 'react';
import { MOCK_STAFF } from '../constants';
import { UserCheck, Users, Phone, ShieldCheck, Shovel, Camera, MapPin } from 'lucide-react';

export const WorkforceModule: React.FC = () => {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Attendance Management</h2>
           <p className="text-sm text-slate-500">GPS & Photographic Evidence (Module 6)</p>
        </div>
         <div className="flex gap-2">
            <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-slate-50">
            View Map
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition">
            Generate Report
            </button>
        </div>
      </div>

       {/* Staff KPIs */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
               <div>
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">Total Strength</p>
                   <p className="text-3xl font-bold text-slate-800 mt-1">452</p>
               </div>
               <Users className="text-blue-500 h-10 w-10 opacity-20" />
           </div>
           <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
               <div>
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">Present Today</p>
                   <p className="text-3xl font-bold text-emerald-600 mt-1">410</p>
               </div>
               <UserCheck className="text-emerald-500 h-10 w-10 opacity-20" />
           </div>
           <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
               <div>
                   <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">On Leave</p>
                   <p className="text-3xl font-bold text-amber-500 mt-1">42</p>
               </div>
               <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">L</div>
           </div>
       </div>

       {/* Detailed List */}
       <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between">
                <h3 className="font-bold text-slate-700">Real-time Attendance Log</h3>
                <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded border">Zone A Selected</span>
            </div>
            <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-white">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Staff Details</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Check-in Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Verification</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
                {MOCK_STAFF.map((staff) => (
                    <tr key={staff.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-bold text-slate-900">{staff.name}</div>
                            <div className="text-xs text-slate-500">{staff.role} • {staff.assignedZone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                ${staff.status === 'Present' ? 'bg-emerald-100 text-emerald-800' : 
                                  staff.status === 'Absent' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'}`}>
                                {staff.status}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                             {staff.checkInTime || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                             {staff.status === 'Present' ? (
                                 <div className="flex gap-2">
                                     <span className="flex items-center text-xs bg-slate-100 px-2 py-1 rounded text-slate-600"><Camera size={12} className="mr-1"/> Photo</span>
                                     <span className="flex items-center text-xs bg-slate-100 px-2 py-1 rounded text-slate-600"><MapPin size={12} className="mr-1"/> GPS</span>
                                 </div>
                             ) : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-800">View Log</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
       </div>
    </div>
  );
};
