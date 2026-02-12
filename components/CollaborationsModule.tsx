import React from 'react';
import { MOCK_COLLABORATIONS } from '../constants';
import { Handshake, Paintbrush, DollarSign, Image as ImageIcon } from 'lucide-react';

export const CollaborationsModule: React.FC = () => {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Collaborations & CSR</h2>
           <p className="text-sm text-slate-500">Public-Private Partnerships & Beautification (Module 9)</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition">
           + New Proposal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {MOCK_COLLABORATIONS.map((collab) => (
              <div key={collab.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                          <div>
                              <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">{collab.projectType}</span>
                                  <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase
                                      ${collab.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                      {collab.status}
                                  </span>
                              </div>
                              <h3 className="text-lg font-bold text-slate-800">{collab.location}</h3>
                              <div className="flex items-center text-slate-600 text-sm mt-1">
                                  <Handshake size={16} className="mr-1"/> Partner: {collab.partnerName}
                              </div>
                          </div>
                          <div className="text-right">
                              <p className="text-xs text-slate-500">Sponsorship</p>
                              <p className="text-lg font-bold text-emerald-600">PKR {(collab.sponsorshipAmount/1000).toFixed(0)}k</p>
                          </div>
                      </div>
                      
                      {/* Before / After Gallery */}
                      <div className="grid grid-cols-2 gap-2 mt-4">
                          <div className="relative group cursor-pointer">
                              <img src={collab.beforeImage} alt="Before" className="w-full h-32 object-cover rounded-lg border border-slate-200" />
                              <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">Before</div>
                          </div>
                          <div className="relative group cursor-pointer">
                              <img src={collab.afterImage} alt="After" className="w-full h-32 object-cover rounded-lg border border-slate-200" />
                              <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded">After</div>
                          </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                          <div className="flex -space-x-2">
                              {[1,2,3].map(i => (
                                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs text-slate-500">
                                      Std
                                  </div>
                              ))}
                              <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs text-slate-500 font-bold">
                                  +12
                              </div>
                          </div>
                          <button className="text-sm text-blue-600 font-medium hover:underline">View Project Details</button>
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};
