import React from 'react';
import { MOCK_LEDS } from '../constants';
import { MonitorPlay, DollarSign, MapPin, Activity } from 'lucide-react';

export const MarketingModule: React.FC = () => {
  const totalRevenue = MOCK_LEDS.reduce((acc, l) => acc + l.revenueGenerated, 0);

  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Digital Banners & LED Screens</h2>
           <p className="text-sm text-slate-500">Public Awareness & Revenue Generation (Module 8)</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition">
           Manage Content
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-blue-100">Total Ad Revenue</h3>
                  <DollarSign size={24} className="opacity-80"/>
              </div>
              <p className="text-3xl font-bold">PKR {totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-blue-200 mt-1">This Month</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-500">Active Screens</h3>
                  <MonitorPlay size={24} className="text-emerald-500"/>
              </div>
              <p className="text-3xl font-bold text-slate-800">{MOCK_LEDS.filter(l => l.status === 'Active').length} / {MOCK_LEDS.length}</p>
              <p className="text-sm text-emerald-600 mt-1">100% Uptime</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-500">Public Campaigns</h3>
                  <Activity size={24} className="text-amber-500"/>
              </div>
              <p className="text-3xl font-bold text-slate-800">4</p>
              <p className="text-sm text-slate-500 mt-1">Running Now (Dengue, Polio)</p>
          </div>
      </div>

      {/* Screen List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h3 className="font-bold text-slate-700">Screen Inventory & Status</h3>
        </div>
        <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-white">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Playing Content</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Revenue</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
                {MOCK_LEDS.map((screen) => (
                    <tr key={screen.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <MapPin size={16} className="text-slate-400 mr-2" />
                                <span className="text-sm font-medium text-slate-900">{screen.locationName}</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{screen.size}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                ${screen.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                                {screen.status}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`text-xs px-2 py-1 rounded border
                                ${screen.currentContent === 'Advertisement' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                                  'bg-amber-50 text-amber-700 border-amber-200'}`}>
                                {screen.currentContent}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-700">
                            {screen.revenueGenerated > 0 ? `PKR ${screen.revenueGenerated.toLocaleString()}` : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-800">Schedule</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};
