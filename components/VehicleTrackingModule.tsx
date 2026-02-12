import React from 'react';
import { MOCK_VEHICLES } from '../constants';
import { Truck, Droplets, Map, Fuel, Clock, MapPin } from 'lucide-react';

export const VehicleTrackingModule: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Vehicle Tracking System</h2>
           <p className="text-sm text-slate-500">GPS Integration & Fuel Monitoring (Module 4)</p>
        </div>
        <div className="flex gap-2">
            <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-slate-50 flex items-center">
               <Clock size={16} className="mr-2"/> Trip Logs
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition flex items-center">
               <Map size={16} className="mr-2"/> Live View
            </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Total Fleet</span>
                  <Truck className="text-slate-400" size={20} />
              </div>
              <p className="text-2xl font-bold text-slate-800">{MOCK_VEHICLES.length}</p>
              <p className="text-xs text-slate-500">3 Types of vehicles</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Active Now</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>
              <p className="text-2xl font-bold text-emerald-600">{MOCK_VEHICLES.filter(v => v.status === 'Moving').length}</p>
              <p className="text-xs text-emerald-600">On Route</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Fuel Efficiency</span>
                  <Fuel className="text-amber-500" size={20} />
              </div>
              <p className="text-2xl font-bold text-slate-800">8.2 <span className="text-sm font-normal text-slate-500">km/L</span></p>
              <p className="text-xs text-red-500 flex items-center">↓ 2% this week</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-cyan-500">
              <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Water Distributed</span>
                  <Droplets className="text-cyan-500" size={20} />
              </div>
              <p className="text-2xl font-bold text-slate-800">3,500 <span className="text-sm font-normal text-slate-500">L</span></p>
              <p className="text-xs text-slate-500">Efficiency: 85%</p>
          </div>
      </div>

      {/* Fleet Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h3 className="font-bold text-slate-700">Fleet Status & Telemetry</h3>
        </div>
        <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-white">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Vehicle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Driver</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Daily Usage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Fuel Level</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Location (GPS)</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
                {MOCK_VEHICLES.map((vehicle) => (
                    <tr key={vehicle.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-bold text-slate-900">{vehicle.registrationNumber}</div>
                            <div className="text-xs text-slate-500">{vehicle.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{vehicle.driverName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                ${vehicle.status === 'Moving' ? 'bg-emerald-100 text-emerald-800' : 
                                  vehicle.status === 'Idle' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-800'}`}>
                                {vehicle.status}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                             <div>{vehicle.dailyDistanceKm} km today</div>
                             {vehicle.waterCapacityLiters && (
                                 <div className="text-xs text-cyan-600 mt-1 flex items-center">
                                     <Droplets size={10} className="mr-1"/> {vehicle.waterDistributedLiters} / {vehicle.waterCapacityLiters} L
                                 </div>
                             )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                                <div className="w-16 bg-slate-200 rounded-full h-2">
                                    <div className={`h-2 rounded-full ${vehicle.fuelLevel < 20 ? 'bg-red-500' : 'bg-blue-500'}`} style={{width: `${vehicle.fuelLevel}%`}}></div>
                                </div>
                                <span className="text-xs text-slate-600">{vehicle.fuelLevel}%</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                            <div className="flex items-center text-blue-600 hover:underline cursor-pointer">
                                <MapPin size={14} className="mr-1"/> View on Map
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};