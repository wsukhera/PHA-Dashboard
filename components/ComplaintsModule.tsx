import React from 'react';
import { MOCK_COMPLAINTS } from '../constants';
import { AlertCircle, CheckCircle2, Clock, Filter, QrCode, Phone, Smartphone, Star } from 'lucide-react';

export const ComplaintsModule: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h2 className="text-2xl font-bold text-slate-800">Grievance Redressal</h2>
            <p className="text-sm text-slate-500">Modules 2.1 (Helpline) & 2.2 (QR/App)</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition">
          + Manual Log
        </button>
      </div>

      {/* Source Breakdown (New for PDF) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full mr-4"><Phone size={24}/></div>
              <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Helpline 1399</p>
                  <p className="text-2xl font-bold text-slate-800">45% <span className="text-xs font-normal text-slate-400">of volume</span></p>
              </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full mr-4"><QrCode size={24}/></div>
              <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">QR Code Scans</p>
                  <p className="text-2xl font-bold text-slate-800">30% <span className="text-xs font-normal text-slate-400">of volume</span></p>
              </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full mr-4"><Smartphone size={24}/></div>
              <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Mobile App</p>
                  <p className="text-2xl font-bold text-slate-800">25% <span className="text-xs font-normal text-slate-400">of volume</span></p>
              </div>
          </div>
      </div>

      {/* Main Board */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h3 className="font-bold text-slate-700">Centralized Complaint Log</h3>
          <div className="flex gap-2">
             <button className="flex items-center text-sm text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded hover:bg-slate-50">
               <Filter size={14} className="mr-2"/> Filter by Zone
             </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Park / Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Assigned To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Issue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Proof</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {MOCK_COMPLAINTS.map((complaint) => (
                <tr key={complaint.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                     <span className="flex items-center text-xs font-bold text-slate-700">
                         {complaint.source === 'Helpline 1399' && <Phone size={14} className="mr-1 text-blue-500"/>}
                         {complaint.source === 'QR Code Scan' && <QrCode size={14} className="mr-1 text-purple-500"/>}
                         {complaint.source === 'Mobile App' && <Smartphone size={14} className="mr-1 text-emerald-500"/>}
                         {complaint.source}
                     </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-900">{complaint.parkName}</div>
                    <div className="text-xs text-slate-500">{complaint.dateFiled}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {complaint.assignedTeam}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-700 font-medium">{complaint.type}</div>
                    <div className="text-xs text-slate-500 truncate max-w-xs" title={complaint.description}>{complaint.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${complaint.priority === 'High' ? 'bg-red-100 text-red-800' : 
                        complaint.priority === 'Medium' ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
                      {complaint.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                     {complaint.status === 'Pending' && <span className="flex items-center text-xs text-red-600 font-medium"><Clock size={14} className="mr-1"/> Pending</span>}
                     {complaint.status === 'In Progress' && <span className="flex items-center text-xs text-amber-600 font-medium"><Clock size={14} className="mr-1"/> In Progress</span>}
                     {complaint.status === 'Resolved' && <span className="flex items-center text-xs text-emerald-600 font-medium"><CheckCircle2 size={14} className="mr-1"/> Resolved</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {complaint.imageProof ? 
                        <span className="text-blue-600 hover:underline cursor-pointer text-xs">View Image</span> : 
                        <span className="text-slate-400 text-xs">No Image</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Citizen Ratings Section (Module 2.2) */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center">
              <Star className="text-amber-400 mr-2" fill="currentColor"/>
              Recent Citizen Feedback (QR Scans)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="flex justify-between items-start">
                      <div>
                          <h4 className="font-bold text-sm text-slate-800">Jilani Park</h4>
                          <p className="text-xs text-slate-500">2 hours ago</p>
                      </div>
                      <div className="flex text-amber-400"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14}/></div>
                  </div>
                  <p className="text-sm text-slate-600 mt-2 italic">"Washrooms were very clean today, good job PHA!"</p>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                   <div className="flex justify-between items-start">
                      <div>
                          <h4 className="font-bold text-sm text-slate-800">Gulshan-e-Iqbal</h4>
                          <p className="text-xs text-slate-500">5 hours ago</p>
                      </div>
                      <div className="flex text-amber-400"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14}/><Star size={14}/><Star size={14}/></div>
                  </div>
                  <p className="text-sm text-slate-600 mt-2 italic">"Too much litter near the food court area."</p>
              </div>
          </div>
      </div>
    </div>
  );
};
