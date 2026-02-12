import React from 'react';
import { MOCK_EQUIPMENT } from '../constants';
import { Hammer, CheckCircle2, AlertTriangle, History } from 'lucide-react';

export const EquipmentModule: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Equipment Tracking</h2>
           <p className="text-sm text-slate-500">Asset Assignment & Operational Status (Module 5)</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition">
           + Register Equipment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_EQUIPMENT.map((item) => (
              <div key={item.id} className={`bg-white rounded-xl border shadow-sm p-6 relative overflow-hidden
                  ${item.status === 'Operational' ? 'border-slate-200' : 'border-red-200 bg-red-50'}`}>
                  
                  <div className="absolute top-0 right-0 p-4">
                       {item.status === 'Operational' ? 
                         <div className="bg-emerald-100 text-emerald-700 p-2 rounded-full"><CheckCircle2 size={20}/></div> : 
                         <div className="bg-red-100 text-red-700 p-2 rounded-full"><AlertTriangle size={20}/></div>
                       }
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-1">{item.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{item.type} • ID: {item.id}</p>

                  <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-slate-50 rounded border border-slate-100">
                          <span className="text-xs text-slate-500 uppercase font-semibold">Assigned To</span>
                          <span className="text-sm font-bold text-slate-800">{item.assignedLocation}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-slate-50 rounded border border-slate-100">
                          <span className="text-xs text-slate-500 uppercase font-semibold">Last Maint.</span>
                          <span className="text-sm text-slate-600">{item.lastMaintenance}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-slate-50 rounded border border-slate-100">
                          <span className="text-xs text-slate-500 uppercase font-semibold">Next Due</span>
                          <span className="text-sm text-slate-600">{item.nextMaintenance}</span>
                      </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-200 flex gap-2">
                       <button className="flex-1 bg-white border border-slate-300 text-slate-700 text-xs font-bold py-2 rounded hover:bg-slate-50">
                           Transfer
                       </button>
                       <button className="flex-1 bg-white border border-slate-300 text-slate-700 text-xs font-bold py-2 rounded hover:bg-slate-50 flex items-center justify-center">
                           <History size={14} className="mr-1"/> History
                       </button>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};
