import React from 'react';
import { LayoutDashboard, Map, FileText, Settings, Trees, Menu, HardHat, Users, Truck, Wrench, MonitorPlay, Handshake } from 'lucide-react';
import { ViewModule } from '../types';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeModule: ViewModule;
  onModuleChange: (module: ViewModule) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, activeModule, onModuleChange }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 bg-slate-900 text-white transition-all duration-300 z-50 flex flex-col
      ${isOpen ? 'w-64' : 'w-20'}
    `}>
      <div className="h-20 flex items-center px-4 border-b border-slate-700 bg-slate-950">
        {/* PHA Logo */}
        <div className="flex items-center">
            <img 
                src="https://upload.wikimedia.org/wikipedia/en/9/9d/Parks_%26_Horticulture_Authority_Lahore_Logo.png" 
                alt="PHA Logo" 
                className="w-10 h-10 object-contain mr-3"
            />
            {isOpen && (
                <div className="flex flex-col">
                    <span className="font-bold text-lg leading-tight tracking-tight text-emerald-400">PHA</span>
                    <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Punjab</span>
                </div>
            )}
        </div>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        <SidebarItem 
            icon={<LayoutDashboard size={20} />} 
            label="Field Operations" 
            isOpen={isOpen} 
            active={activeModule === 'dashboard'} 
            onClick={() => onModuleChange('dashboard')}
        />
        <SidebarItem 
            icon={<Map size={20} />} 
            label="Parks Mapping" 
            isOpen={isOpen} 
            active={activeModule === 'mapping'}
            onClick={() => onModuleChange('mapping')}
        />
        <SidebarItem 
            icon={<FileText size={20} />} 
            label="Complaints (1399/QR)" 
            isOpen={isOpen} 
            active={activeModule === 'complaints'}
            onClick={() => onModuleChange('complaints')}
        />
        <SidebarItem 
            icon={<Trees size={20} />} 
            label="Inventory & Nurseries" 
            isOpen={isOpen} 
            active={activeModule === 'inventory'}
            onClick={() => onModuleChange('inventory')}
        />
        <SidebarItem 
            icon={<HardHat size={20} />} 
            label="Development Projects" 
            isOpen={isOpen} 
            active={activeModule === 'projects'}
            onClick={() => onModuleChange('projects')}
        />
        <SidebarItem 
            icon={<Truck size={20} />} 
            label="Vehicle Tracking" 
            isOpen={isOpen} 
            active={activeModule === 'vehicles'}
            onClick={() => onModuleChange('vehicles')}
        />
        <SidebarItem 
            icon={<Wrench size={20} />} 
            label="Equipment" 
            isOpen={isOpen} 
            active={activeModule === 'equipment'}
            onClick={() => onModuleChange('equipment')}
        />
        <SidebarItem 
            icon={<Users size={20} />} 
            label="Workforce" 
            isOpen={isOpen} 
            active={activeModule === 'workforce'}
            onClick={() => onModuleChange('workforce')}
        />
        <SidebarItem 
            icon={<MonitorPlay size={20} />} 
            label="Digital Screens" 
            isOpen={isOpen} 
            active={activeModule === 'marketing'}
            onClick={() => onModuleChange('marketing')}
        />
        <SidebarItem 
            icon={<Handshake size={20} />} 
            label="Collaborations" 
            isOpen={isOpen} 
            active={activeModule === 'collaborations'}
            onClick={() => onModuleChange('collaborations')}
        />
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={toggleSidebar}
          className="flex items-center justify-center w-full p-2 hover:bg-slate-800 rounded-lg transition"
        >
          <Menu size={20} />
        </button>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
    icon: React.ReactNode; 
    label: string; 
    isOpen: boolean; 
    active?: boolean;
    onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, label, isOpen, active, onClick 
}) => {
  return (
    <button 
        onClick={onClick}
        className={`flex items-center w-full px-3 py-3 rounded-lg transition group text-left
            ${active ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
    `}>
      <div className="shrink-0">{icon}</div>
      {isOpen && <span className="ml-3 font-medium whitespace-nowrap text-sm">{label}</span>}
      {!isOpen && (
        <div className="absolute left-16 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap">
          {label}
        </div>
      )}
    </button>
  );
};