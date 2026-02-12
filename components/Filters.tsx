import React from 'react';
import { CITIES } from '../constants';
import { ParkCategory } from '../types';
import { Search, Filter } from 'lucide-react';

interface FiltersProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  selectedCity,
  onCityChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 items-center">
      <div className="flex-1 w-full relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search parks by name..." 
          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
        <div className="min-w-[150px]">
           <label className="block text-xs font-semibold text-slate-500 mb-1 ml-1">City / Zone</label>
           <select 
             className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
             value={selectedCity}
             onChange={(e) => onCityChange(e.target.value)}
           >
             <option value="All">All Cities</option>
             {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
           </select>
        </div>

        <div className="min-w-[150px]">
           <label className="block text-xs font-semibold text-slate-500 mb-1 ml-1">Park Type</label>
           <select 
             className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
             value={selectedCategory}
             onChange={(e) => onCategoryChange(e.target.value)}
           >
             <option value="All">All Types</option>
             {Object.values(ParkCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
           </select>
        </div>
      </div>
    </div>
  );
};