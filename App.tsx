import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardStats } from './components/DashboardStats';
import { Filters } from './components/Filters';
import { SchematicMap } from './components/SchematicMap';
import { ParkDetailDrawer } from './components/ParkDetailDrawer';
import { ChartsSection } from './components/ChartsSection';
import { ParkListTable } from './components/ParkListTable';
import { FieldOperationsDashboard } from './components/FieldOperationsDashboard';
import { ComplaintsModule } from './components/ComplaintsModule';
import { InventoryModule } from './components/InventoryModule';
import { ProjectsModule } from './components/ProjectsModule';
import { WorkforceModule } from './components/WorkforceModule';
import { VehicleTrackingModule } from './components/VehicleTrackingModule';
import { EquipmentModule } from './components/EquipmentModule';
import { MarketingModule } from './components/MarketingModule';
import { CollaborationsModule } from './components/CollaborationsModule';

import { MOCK_PARKS } from './constants';
import { Park, ViewModule } from './types';
import { Bell } from 'lucide-react';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState<ViewModule>('dashboard');
  
  // Mapping Module State
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);

  // Filter Logic for Mapping
  const filteredParks = useMemo(() => {
    return MOCK_PARKS.filter(park => {
      const cityMatch = selectedCity === 'All' || park.city === selectedCity;
      const categoryMatch = selectedCategory === 'All' || park.category === selectedCategory;
      const searchMatch = park.name.toLowerCase().includes(searchQuery.toLowerCase());
      return cityMatch && categoryMatch && searchMatch;
    });
  }, [selectedCity, selectedCategory, searchQuery]);

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        activeModule={activeModule}
        onModuleChange={setActiveModule}
      />
      
      <main className={`flex-1 flex flex-col transition-all duration-300 relative ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm z-30 shrink-0">
           <div className="flex items-center gap-3">
             <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Parks_%26_Horticulture_Authority_Lahore_Logo.png" alt="PHA" className="h-10 w-auto" />
             <div>
               <h1 className="text-xl font-bold text-slate-800 leading-tight">GIS & Operations Center</h1>
               <p className="text-xs text-slate-500 font-medium">Parks & Horticulture Authority, Punjab</p>
             </div>
           </div>
           
           <div className="flex items-center gap-4">
             <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition">
               <Bell size={20} />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
             </button>
             <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
               <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                 AD
               </div>
               <div className="hidden md:block">
                 <p className="text-sm font-semibold text-slate-700">Admin User</p>
                 <p className="text-xs text-slate-500">Director IT</p>
               </div>
             </div>
           </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-6 pb-0 min-h-[calc(100vh-140px)]">
            
            {activeModule === 'dashboard' && <FieldOperationsDashboard />}

            {activeModule === 'complaints' && <ComplaintsModule />}

            {activeModule === 'inventory' && <InventoryModule />}

            {activeModule === 'projects' && <ProjectsModule />}

            {activeModule === 'workforce' && <WorkforceModule />}

            {activeModule === 'vehicles' && <VehicleTrackingModule />}

            {activeModule === 'equipment' && <EquipmentModule />}

            {activeModule === 'marketing' && <MarketingModule />}

            {activeModule === 'collaborations' && <CollaborationsModule />}

            {activeModule === 'mapping' && (
              <>
                <DashboardStats parks={filteredParks} />
                <Filters 
                  selectedCity={selectedCity} 
                  onCityChange={setSelectedCity}
                  selectedCategory={selectedCategory} 
                  onCategoryChange={setSelectedCategory}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
                
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                        <span className="w-2 h-6 bg-emerald-600 rounded-sm mr-2"></span>
                        Parks & Green Belts GIS
                    </h3>
                    <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg border border-slate-200">
                        <SchematicMap 
                            parks={filteredParks} 
                            selectedParkId={selectedPark?.id || null} 
                            onParkSelect={setSelectedPark} 
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-slate-200 text-sm">
                            <span className="font-bold text-slate-800">{filteredParks.length}</span> Parks visible in current view
                        </div>
                    </div>
                </div>

                <ChartsSection parks={filteredParks} />
                <ParkListTable parks={filteredParks} onViewDetails={setSelectedPark} />
              </>
            )}

          </div>

          {/* Footer */}
          <footer className="bg-slate-900 text-slate-400 py-6 px-8 mt-6 border-t border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/PITB_Logo.png" alt="PITB" className="h-10 w-auto bg-white rounded-full border-2 border-slate-600 p-0.5" />
                 <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Powered By</span>
                    <span className="text-sm font-bold text-white">Punjab Information Technology Board</span>
                 </div>
              </div>
              <div className="text-xs text-right">
                <p>&copy; {new Date().getFullYear()} Parks & Horticulture Authority.</p>
                <p>Government of The Punjab. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>

        {/* Detail Drawer (Only valid for mapping view technically, but kept global if needed) */}
        {activeModule === 'mapping' && (
           <>
            <ParkDetailDrawer 
              park={selectedPark} 
              onClose={() => setSelectedPark(null)} 
            />
            {selectedPark && (
              <div 
                className="absolute inset-0 bg-black/20 z-30 pointer-events-none backdrop-blur-[1px]" 
                aria-hidden="true"
              />
            )}
           </>
        )}
      </main>
    </div>
  );
};

export default App;
