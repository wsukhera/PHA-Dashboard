import React from 'react';
import { MOCK_INVENTORY, MOCK_NURSERY_SALES } from '../constants';
import { Flower, Box, Sprout, Tractor, Store, DollarSign } from 'lucide-react';

export const InventoryModule: React.FC = () => {
  return (
    <div className="space-y-8">
       <div className="flex justify-between items-center">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Inventory & Nurseries</h2>
           <p className="text-sm text-slate-500">Modules 3.1 (Plants) & 3.2 (Nursery Management)</p>
        </div>
        <div className="flex gap-2">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition">
            + Add Stock
            </button>
        </div>
      </div>

      {/* Module 3.2: Nursery Management & Revenue */}
      <section>
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
              <Store className="mr-2 text-emerald-600" size={20}/> 
              Nursery Operations & Revenue (Module 3.2)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                      <p className="text-slate-500 text-xs font-bold uppercase">Total Revenue (This Month)</p>
                      <p className="text-2xl font-bold text-slate-800 mt-1">PKR 57,500</p>
                  </div>
                  <div className="p-3 bg-emerald-100 rounded-full text-emerald-600"><DollarSign size={24}/></div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                      <p className="text-slate-500 text-xs font-bold uppercase">Plants Sold</p>
                      <p className="text-2xl font-bold text-slate-800 mt-1">234</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600"><Sprout size={24}/></div>
              </div>
               <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                      <p className="text-slate-500 text-xs font-bold uppercase">Ready for Distribution</p>
                      <p className="text-2xl font-bold text-slate-800 mt-1">14,200</p>
                  </div>
                  <div className="p-3 bg-amber-100 rounded-full text-amber-600"><Box size={24}/></div>
              </div>
          </div>
          
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
              <div className="px-6 py-3 bg-slate-50 border-b border-slate-200">
                  <h4 className="font-bold text-slate-700 text-sm">Recent Nursery Sales</h4>
              </div>
              <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-white">
                      <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Nursery Name</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Items Sold</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Revenue</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Date</th>
                      </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                      {MOCK_NURSERY_SALES.map((sale) => (
                          <tr key={sale.id}>
                              <td className="px-6 py-4 text-sm font-medium text-slate-900">{sale.nurseryName}</td>
                              <td className="px-6 py-4 text-sm text-slate-500">
                                  <span className={`px-2 py-1 rounded text-xs border ${sale.type === 'PHA Local' ? 'bg-slate-50 border-slate-200' : 'bg-purple-50 text-purple-700 border-purple-200'}`}>
                                      {sale.type}
                                  </span>
                              </td>
                              <td className="px-6 py-4 text-sm text-slate-600">{sale.itemsSold}</td>
                              <td className="px-6 py-4 text-sm font-bold text-emerald-600">PKR {sale.revenue.toLocaleString()}</td>
                              <td className="px-6 py-4 text-sm text-slate-500">{sale.date}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </section>

      {/* Module 3.1: Plants Inventory */}
      <section>
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
              <Flower className="mr-2 text-pink-600" size={20}/> 
              Plants Inventory (Module 3.1)
          </h3>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Common Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Botanical Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Location</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Health Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Planting Date</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                    {MOCK_INVENTORY.filter(i => i.category === 'Flora').map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{item.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 italic">{item.botanicalName || '-'}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 font-bold">{item.quantity} <span className="text-slate-500 font-normal text-xs">{item.unit}</span></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{item.location}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                    ${item.healthStatus === 'Healthy' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {item.healthStatus || 'N/A'}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{item.plantingDate || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
      </section>
    </div>
  );
};
