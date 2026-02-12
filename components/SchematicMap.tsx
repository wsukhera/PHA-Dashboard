import React, { useMemo } from 'react';
import { Park, ParkCategory } from '../types';
import { MapPin, Trees, LandPlot } from 'lucide-react';

interface SchematicMapProps {
  parks: Park[];
  selectedParkId: string | null;
  onParkSelect: (park: Park) => void;
  showHeatmap?: boolean;
}

export const SchematicMap: React.FC<SchematicMapProps> = ({ 
  parks, 
  selectedParkId, 
  onParkSelect
}) => {
  // We use a schematic representation where lat/lng 0-100 maps to % of the container
  // This simulates a GIS view without external dependencies
  
  const getPinColor = (category: ParkCategory) => {
    switch (category) {
      case ParkCategory.FAMILY_PARK: return 'text-emerald-600';
      case ParkCategory.GREEN_BELT: return 'text-lime-600';
      case ParkCategory.SPORTS_COMPLEX: return 'text-blue-600';
      case ParkCategory.HISTORICAL_SITE: return 'text-amber-700';
      default: return 'text-teal-600';
    }
  };

  const getPinIcon = (category: ParkCategory) => {
     if (category === ParkCategory.GREEN_BELT) return <Trees size={20} fill="currentColor" className="opacity-80" />;
     if (category === ParkCategory.BOTANICAL_GARDEN) return <LandPlot size={20} fill="currentColor" className="opacity-80" />;
     return <MapPin size={24} fill="currentColor" className="drop-shadow-md" />;
  };

  return (
    <div className="relative w-full h-full bg-slate-100 overflow-hidden rounded-xl border border-slate-200 shadow-inner group">
      {/* Map Background Pattern - GIS Grid Look */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Simulated Geography (Rivers/Roads) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
         <path d="M0,80 Q20,70 40,85 T100,60" fill="none" stroke="#3b82f6" strokeWidth="8" />
         <path d="M60,0 Q65,40 55,100" fill="none" stroke="#94a3b8" strokeWidth="6" strokeDasharray="10,5" />
      </svg>

      {/* Map Pins */}
      {parks.map((park) => (
        <button
          key={park.id}
          onClick={(e) => {
            e.stopPropagation();
            onParkSelect(park);
          }}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 focus:outline-none z-10
            ${selectedParkId === park.id ? 'scale-125 z-20' : 'scale-100'}
            ${getPinColor(park.category)}
          `}
          style={{ 
            left: `${park.location.lng}%`, 
            top: `${100 - park.location.lat}%` 
          }}
          aria-label={`Select ${park.name}`}
        >
          {getPinIcon(park.category)}
          
          {/* Tooltip on Hover */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30">
            {park.name}
          </div>
          
          {selectedParkId === park.id && (
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rounded-full animate-ping"></div>
          )}
        </button>
      ))}

      {/* Map Controls (Visual Only) */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <div className="bg-white p-2 rounded shadow text-slate-600 hover:bg-slate-50 cursor-pointer" title="Zoom In">+</div>
        <div className="bg-white p-2 rounded shadow text-slate-600 hover:bg-slate-50 cursor-pointer" title="Zoom Out">-</div>
      </div>
      
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded shadow border border-slate-200 text-xs text-slate-600">
        <div className="font-semibold mb-1">Legend</div>
        <div className="flex items-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> Family Park</div>
        <div className="flex items-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-lime-500"></span> Green Belt</div>
        <div className="flex items-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-blue-500"></span> Sports Complex</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-600"></span> Historical</div>
      </div>
    </div>
  );
};