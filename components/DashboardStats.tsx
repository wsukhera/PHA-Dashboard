import React from 'react';
import { Park } from '../types';
import { Leaf, Map, TreePine, Wrench } from 'lucide-react';

interface DashboardStatsProps {
  parks: Park[];
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({ parks }) => {
  const totalArea = parks.reduce((acc, p) => acc + p.areaAcres, 0);
  const totalTrees = parks.reduce((acc, p) => acc + p.assets.trees, 0);
  const operationalParks = parks.filter(p => p.status === 'Operational').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
        <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 mr-4">
          <Leaf size={24} />
        </div>
        <div>
          <p className="text-sm text-slate-500 font-medium">Total Parks</p>
          <p className="text-2xl font-bold text-slate-800">{parks.length}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
        <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
          <Map size={24} />
        </div>
        <div>
          <p className="text-sm text-slate-500 font-medium">Total Area</p>
          <p className="text-2xl font-bold text-slate-800">{totalArea} <span className="text-xs font-normal text-slate-400">Acres</span></p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
        <div className="p-3 rounded-full bg-lime-100 text-lime-600 mr-4">
          <TreePine size={24} />
        </div>
        <div>
          <p className="text-sm text-slate-500 font-medium">Total Trees</p>
          <p className="text-2xl font-bold text-slate-800">{totalTrees.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
        <div className="p-3 rounded-full bg-amber-100 text-amber-600 mr-4">
          <Wrench size={24} />
        </div>
        <div>
          <p className="text-sm text-slate-500 font-medium">Operational Status</p>
          <p className="text-2xl font-bold text-slate-800">{Math.round((operationalParks / parks.length) * 100)}%</p>
        </div>
      </div>
    </div>
  );
};