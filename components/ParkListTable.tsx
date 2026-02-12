import React from 'react';
import { Park, FacilityType } from '../types';
import { Eye, MapPin, Trees, Wifi, Car, Utensils, AlertCircle, CheckCircle2 } from 'lucide-react';

interface ParkListTableProps {
  parks: Park[];
  onViewDetails: (park: Park) => void;
}

export const ParkListTable: React.FC<ParkListTableProps> = ({ parks, onViewDetails }) => {
  
  const getStatusBadge = (status: string) => {
    if (status === 'Operational') return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"><CheckCircle2 size={12} className="mr-1"/> Operational</span>;
    if (status === 'Maintenance') return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800"><AlertCircle size={12} className="mr-1"/> Maintenance</span>;
    return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"><AlertCircle size={12} className="mr-1"/> Construction</span>;
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
      <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-800 flex items-center">
          <span className="w-2 h-6 bg-slate-700 rounded-sm mr-2"></span>
          Parks Directory & Asset List
        </h3>
        <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">Export Report</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Park Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">City / Zone</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Area</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Key Facilities</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {parks.map((park) => (
              <tr key={park.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-10 w-10 rounded-full object-cover" src={park.imageUrl} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-slate-900">{park.name}</div>
                      <div className="text-xs text-slate-500 flex items-center mt-0.5">
                        <Trees size={10} className="mr-1"/> {park.assets.trees} trees
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin size={14} className="mr-1.5 text-slate-400" />
                    {park.city}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-600">{park.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-slate-900 font-semibold">{park.areaAcres} <span className="font-normal text-slate-500">ac</span></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2 text-slate-400">
                    {park.facilities.includes(FacilityType.CANTEEN) && (
                      <span title="Canteen">
                        <Utensils size={16} className="text-slate-600" />
                      </span>
                    )}
                    {park.facilities.includes(FacilityType.WIFI) && (
                      <span title="Wifi">
                        <Wifi size={16} className="text-slate-600" />
                      </span>
                    )}
                    {park.facilities.includes(FacilityType.PARKING) && (
                      <span title="Parking">
                        <Car size={16} className="text-slate-600" />
                      </span>
                    )}
                    {park.facilities.length > 3 && <span className="text-xs font-medium text-slate-500">+{park.facilities.length - 3}</span>}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(park.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => onViewDetails(park)}
                    className="text-emerald-600 hover:text-emerald-900 flex items-center justify-end w-full"
                  >
                    View <Eye size={16} className="ml-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
