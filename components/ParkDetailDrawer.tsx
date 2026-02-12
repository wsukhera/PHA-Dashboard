import React from 'react';
import { Park } from '../types';
import { X, MapPin, Ruler, CheckCircle, AlertTriangle, Hammer, TreeDeciduous, LampFloor, Trash2, UserCheck, Utensils, Wifi, Car, Dumbbell, Smile } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ParkDetailDrawerProps {
  park: Park | null;
  onClose: () => void;
}

export const ParkDetailDrawer: React.FC<ParkDetailDrawerProps> = ({ park, onClose }) => {
  if (!park) return null;

  const assetData = [
    { name: 'Benches', count: park.assets.benches, color: '#10b981' }, // emerald-500
    { name: 'Lights', count: park.assets.lights, color: '#f59e0b' },   // amber-500
    { name: 'Dustbins', count: park.assets.dustbins, color: '#64748b' }, // slate-500
    { name: 'Trees', count: park.assets.trees, color: '#15803d' },    // green-700
  ];

  return (
    <div className="absolute inset-y-0 right-0 w-96 bg-white shadow-2xl border-l border-slate-200 transform transition-transform duration-300 ease-in-out z-40 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="relative h-48 bg-slate-200">
        <img src={park.imageUrl} alt={park.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <div>
            <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">{park.category}</span>
            <h2 className="text-2xl font-bold text-white leading-tight">{park.name}</h2>
            <div className="flex items-center text-slate-200 text-sm mt-1">
              <MapPin size={14} className="mr-1" />
              {park.city}
            </div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full backdrop-blur-sm transition"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        
        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div className="flex items-center text-slate-500 mb-1 text-xs uppercase font-semibold">
                    <Ruler size={14} className="mr-1" /> Area
                </div>
                <div className="text-xl font-bold text-slate-800">{park.areaAcres} <span className="text-sm font-normal text-slate-500">Acres</span></div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div className="flex items-center text-slate-500 mb-1 text-xs uppercase font-semibold">
                    Status
                </div>
                <div className={`text-sm font-bold px-2 py-1 rounded inline-block
                    ${park.status === 'Operational' ? 'bg-emerald-100 text-emerald-700' : 
                      park.status === 'Maintenance' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                    {park.status}
                </div>
            </div>
        </div>

        {/* Facilities */}
        <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">Available Facilities</h3>
            <div className="flex flex-wrap gap-2">
                {park.facilities.map((fac, idx) => (
                    <span key={idx} className="flex items-center bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full shadow-sm">
                        {fac === 'Canteen' && <Utensils size={12} className="mr-1.5" />}
                        {fac === 'Parking' && <Car size={12} className="mr-1.5" />}
                        {fac === 'Public Wi-Fi' && <Wifi size={12} className="mr-1.5" />}
                        {fac === 'Open Gym' && <Dumbbell size={12} className="mr-1.5" />}
                        {fac === 'Kids Play Area' && <Smile size={12} className="mr-1.5" />}
                        {fac}
                    </span>
                ))}
            </div>
        </div>

        {/* Asset Inventory Chart */}
        <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center justify-between">
                Asset Inventory
                <span className="text-xs font-normal text-slate-500 normal-case">Real-time Count</span>
            </h3>
            <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={assetData} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 20 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={60} tick={{fontSize: 12}} />
                        <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            cursor={{fill: 'transparent'}}
                        />
                        <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
                            {assetData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="flex flex-col items-center p-2 bg-slate-50 rounded">
                    <TreeDeciduous size={16} className="text-green-700 mb-1" />
                    <span className="text-lg font-bold text-slate-700">{park.assets.trees}</span>
                    <span className="text-[10px] text-slate-500">Trees</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-slate-50 rounded">
                    <LampFloor size={16} className="text-amber-500 mb-1" />
                    <span className="text-lg font-bold text-slate-700">{park.assets.lights}</span>
                    <span className="text-[10px] text-slate-500">Lights</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-slate-50 rounded">
                    <Trash2 size={16} className="text-slate-500 mb-1" />
                    <span className="text-lg font-bold text-slate-700">{park.assets.dustbins}</span>
                    <span className="text-[10px] text-slate-500">Dustbins</span>
                </div>
            </div>
        </div>

        {/* Maintenance Info */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="flex items-center text-blue-800 font-semibold mb-2">
                <UserCheck size={16} className="mr-2" /> Maintenance Record
            </h4>
            <p className="text-xs text-blue-700 mb-1">
                Last inspected on: <span className="font-medium">{park.lastInspection}</span>
            </p>
            <p className="text-xs text-blue-600">
                Next scheduled maintenance in 14 days.
            </p>
        </div>

      </div>
    </div>
  );
};