import React, { useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';
import { Park, ParkCategory, FacilityType } from '../types';

interface ChartsSectionProps {
  parks: Park[];
}

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899'];

export const ChartsSection: React.FC<ChartsSectionProps> = ({ parks }) => {
  
  // Chart 1: Parks Distribution by City
  const cityData = useMemo(() => {
    const counts: Record<string, number> = {};
    parks.forEach(p => {
      counts[p.city] = (counts[p.city] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [parks]);

  // Chart 2: Park Categories Distribution (Pie)
  const categoryData = useMemo(() => {
    const counts: Record<string, number> = {};
    parks.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [parks]);

  // Chart 3: Facility Coverage (Percentage)
  const facilityData = useMemo(() => {
    const total = parks.length;
    const facilities = Object.values(FacilityType);
    return facilities.map(fac => {
      const count = parks.filter(p => p.facilities.includes(fac)).length;
      return {
        name: fac,
        percentage: Math.round((count / total) * 100),
        count
      };
    }).sort((a, b) => b.percentage - a.percentage);
  }, [parks]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      
      {/* City Distribution */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
          <span className="w-2 h-6 bg-emerald-500 rounded-sm mr-2"></span>
          Parks by Zone/City
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{fontSize: 12}} />
              <YAxis allowDecimals={false} />
              <Tooltip 
                cursor={{fill: '#f1f5f9'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="value" name="Number of Parks" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Distribution */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
          <span className="w-2 h-6 bg-blue-500 rounded-sm mr-2"></span>
          Category Distribution
        </h3>
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Facility Availability Area Chart */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm lg:col-span-2">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
          <span className="w-2 h-6 bg-purple-500 rounded-sm mr-2"></span>
          Facility Coverage Analytics
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={facilityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPercentage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{fontSize: 12}} />
              <YAxis unit="%" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Area type="monotone" dataKey="percentage" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorPercentage)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};