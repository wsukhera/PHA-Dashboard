import React, { useState } from 'react';
import { MOCK_PARKS, MOCK_COMPLAINTS, MOCK_VEHICLES, MOCK_STAFF } from '../constants';
import { TrendingUp, AlertCircle, Calendar, Truck, UserCheck, Wrench, Droplets, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Module 7: Field Operations Dashboard
export const FieldOperationsDashboard: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState('All');

  const filteredStaff = selectedZone === 'All' ? MOCK_STAFF : MOCK_STAFF.filter(s => s.assignedZone === selectedZone);
  const staffPresent = filteredStaff.filter(s => s.status === 'Present').length;
  
  const activeVehicles = MOCK_VEHICLES.filter(v => v.status === 'Moving').length;
  
  const pendingComplaints = MOCK_COMPLAINTS.filter(c => c.status === 'Pending').length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Field Operations Dashboard</h2>
           <p className="text-sm text-slate-500">Real-time zone-wise operational monitoring</p>
        </div>
        
        {/* Zone Selector (Crucial for Module 7) */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-slate-500 uppercase px-2">Monitor Zone:</span>
            <select 
                className="bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-md focus:ring-emerald-500 focus:border-emerald-500 block p-2"
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
            >
                <option value="All">All Zones</option>
                <option value="Zone A">Zone A (Gulberg)</option>
                <option value="Zone B">Zone B (Model Town)</option>
                <option value="Zone C">Zone C (DHA)</option>
            </select>
        </div>
      </div>
      
      {/* Real-time Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Staff Attendance */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-slate-500 text-sm font-medium">Field Staff Attendance</h3>
            <UserCheck className="text-purple-500 bg-purple-100 p-1.5 rounded-lg w-8 h-8" />
          </div>
          <div>
              <p className="text-3xl font-bold text-slate-800">{staffPresent} <span className="text-sm text-slate-400 font-normal">/ {filteredStaff.length}</span></p>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                  <div className="bg-purple-500 h-1.5 rounded-full" style={{width: `${(staffPresent/filteredStaff.length)*100}%`}}></div>
              </div>
          </div>
        </div>

        {/* Complaints Status */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-slate-500 text-sm font-medium">Pending Work Orders</h3>
            <AlertCircle className="text-red-500 bg-red-100 p-1.5 rounded-lg w-8 h-8" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-800">{pendingComplaints}</p>
            <p className="text-xs text-red-600 flex items-center mt-1">
                2 Critical Priorities
            </p>
          </div>
        </div>

        {/* Vehicle Status */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-slate-500 text-sm font-medium">Active Fleet</h3>
            <Truck className="text-blue-500 bg-blue-100 p-1.5 rounded-lg w-8 h-8" />
          </div>
          <div>
             <p className="text-3xl font-bold text-slate-800">{activeVehicles} <span className="text-sm text-slate-400 font-normal">/ {MOCK_VEHICLES.length}</span></p>
             <p className="text-xs text-emerald-600 mt-1">GPS Tracking Active</p>
          </div>
        </div>

        {/* Horticulture Activity */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-slate-500 text-sm font-medium">Daily Water Usage</h3>
            <Droplets className="text-cyan-500 bg-cyan-100 p-1.5 rounded-lg w-8 h-8" />
          </div>
          <div>
             <p className="text-3xl font-bold text-slate-800">12.5k <span className="text-sm text-slate-400 font-normal">Liters</span></p>
             <p className="text-xs text-slate-500 mt-1">Target: 15k Liters</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Operational Feed */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
           <h3 className="font-bold text-slate-800 mb-4 flex items-center">
             <MapPin className="mr-2 text-emerald-600" size={18} />
             Live Zone Activity Feed
           </h3>
           <div className="space-y-4">
             {MOCK_COMPLAINTS.slice(0, 3).map(c => (
                 <div key={c.id} className="flex gap-4 p-3 bg-slate-50 rounded-lg border-l-4 border-l-amber-500">
                     <div className="flex-1">
                         <div className="flex justify-between">
                            <h4 className="font-bold text-slate-800 text-sm">{c.type} Issue Reported</h4>
                            <span className="text-xs text-slate-500">{c.dateFiled}</span>
                         </div>
                         <p className="text-sm text-slate-600 mt-1">{c.description} at {c.parkName}</p>
                         <div className="mt-2 flex gap-2">
                             <span className="text-xs bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-500">Source: {c.source}</span>
                             <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">Assigned to: {c.assignedTeam}</span>
                         </div>
                     </div>
                 </div>
             ))}
             <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border-l-4 border-l-blue-500">
                  <div className="flex-1">
                       <div className="flex justify-between">
                          <h4 className="font-bold text-slate-800 text-sm">Vehicle Deployment</h4>
                          <span className="text-xs text-slate-500">10 mins ago</span>
                       </div>
                       <p className="text-sm text-slate-600 mt-1">Water Tanker LEG-4521 dispatched to Jilani Park Zone 2.</p>
                  </div>
             </div>
           </div>
        </div>

        {/* Maintenance Schedule */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                <Wrench className="mr-2 text-slate-600" size={18} />
                Maintenance Tasks
            </h3>
            <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="flex-1 text-slate-700">Mower Repair (Zone A)</span>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">Urgent</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="flex-1 text-slate-700">Tree Pruning (Gulberg)</span>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Pending</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="flex-1 text-slate-700">Seasonal Plantation</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">In Progress</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="flex-1 text-slate-700">Fountain Cleaning</span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Scheduled</span>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};
