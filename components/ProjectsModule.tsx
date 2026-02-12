import React from 'react';
import { MOCK_PROJECTS } from '../constants';
import { Calendar, DollarSign, MapPin } from 'lucide-react';

export const ProjectsModule: React.FC = () => {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Development Projects</h2>
         <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition">
          + New PC-1
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_PROJECTS.map((project) => (
              <div key={project.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                      <div>
                          <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2
                              ${project.status === 'On Track' ? 'bg-emerald-100 text-emerald-700' : 
                                project.status === 'Delayed' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                              {project.status}
                          </span>
                          <h3 className="text-lg font-bold text-slate-800">{project.name}</h3>
                          <div className="flex items-center text-sm text-slate-500 mt-1">
                              <MapPin size={14} className="mr-1" /> {project.location}
                          </div>
                      </div>
                      <div className="text-right">
                          <p className="text-xs text-slate-400">Total Cost</p>
                          <p className="text-lg font-bold text-slate-800">{project.budget} M</p>
                      </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                       <div className="bg-slate-50 p-3 rounded-lg">
                           <p className="text-xs text-slate-500 mb-1">Timeline</p>
                           <div className="flex items-center text-sm font-medium text-slate-700">
                               <Calendar size={14} className="mr-2 text-slate-400" />
                               {project.endDate}
                           </div>
                       </div>
                       <div className="bg-slate-50 p-3 rounded-lg">
                           <p className="text-xs text-slate-500 mb-1">Type</p>
                           <div className="flex items-center text-sm font-medium text-slate-700">
                               {project.type}
                           </div>
                       </div>
                  </div>

                  <div className="space-y-4">
                      <div>
                          <div className="flex justify-between text-xs mb-1">
                              <span className="font-medium text-slate-600">Physical Progress</span>
                              <span className="font-bold text-slate-800">{project.physicalProgress}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2.5">
                              <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: `${project.physicalProgress}%` }}></div>
                          </div>
                      </div>
                      <div>
                          <div className="flex justify-between text-xs mb-1">
                              <span className="font-medium text-slate-600">Financial Utilization</span>
                              <span className="font-bold text-slate-800">{project.financialProgress}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2.5">
                              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${project.financialProgress}%` }}></div>
                          </div>
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};
