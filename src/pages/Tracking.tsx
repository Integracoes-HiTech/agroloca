
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Search, Filter, MapPin, Truck, Clock, AlertTriangle } from 'lucide-react';
import StatsCard from '@/components/StatsCard';

const machines = [
  {
    id: 1,
    name: "Trator John Deere 5075E",
    model: "John Deere 5075E",
    location: "Fazenda São João - Goiânia, GO",
    coordinates: "16.686400, -49.264300",
    lastUpdate: "agora",
    status: "Disponível",
    statusColor: "bg-green-500",
    statusIcon: "⬤"
  },
  {
    id: 2,
    name: "Colheitadeira Case IH 2166", 
    model: "Case IH 2166",
    location: "Fazenda Boa Vista - Rio Verde, GO",
    coordinates: "17.798100, -50.931700", 
    lastUpdate: "agora",
    status: "Em Operação",
    statusColor: "bg-blue-500",
    statusIcon: "⬤"
  }
];

const mapLegend = [
  { color: "bg-green-500", label: "Disponível" },
  { color: "bg-blue-500", label: "Locada" },
  { color: "bg-orange-500", label: "Manutenção" },
  { color: "bg-gray-500", label: "Inativa" }
];

const Tracking = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredMachines = machines.filter(machine => 
    machine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    machine.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Rastreamento</h1>
              <p className="text-gray-600 mt-1">Monitore a localização das suas máquinas em tempo real</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">Última atualização: agora</span>
            </div>
          </div>
        </div>

        <main className="flex-1 p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Rastreadas"
              value="5"
              subtitle=""
              icon={MapPin}
              iconColor="text-blue-600"
              iconBg="bg-blue-100"
            />
            <StatsCard
              title="Em Operação"
              value="1"
              subtitle=""
              icon={Truck}
              iconColor="text-green-600"
              iconBg="bg-green-100"
            />
            <StatsCard
              title="Disponíveis"
              value="3"
              subtitle=""
              icon={Clock}
              iconColor="text-gray-600"
              iconBg="bg-gray-100"
            />
            <StatsCard
              title="Manutenção"
              value="1"
              subtitle=""
              icon={AlertTriangle}
              iconColor="text-orange-600"
              iconBg="bg-orange-100"
            />
          </div>

          {/* Search and Filter */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por máquina ou localização..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-96"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select 
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">Todos os Status</option>
                <option value="available">Disponível</option>
                <option value="operating">Em Operação</option>
                <option value="maintenance">Manutenção</option>
                <option value="inactive">Inativa</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <MapPin className="w-5 h-5 text-green-500 mr-2" />
                    Mapa de Localização
                  </h3>
                  <div className="text-sm text-pink-600">
                    📍 Mapa simulado - Integrado com GPS em desenvolvimento
                  </div>
                </div>
                
                {/* Simulated Map */}
                <div className="bg-green-50 rounded-lg h-96 relative border-2 border-dashed border-green-200 flex items-center justify-center">
                  <div className="absolute inset-4 bg-green-100 rounded-lg">
                    {/* Simulated machine markers */}
                    <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute top-3/4 left-1/4 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                  <div className="text-center z-10">
                    <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-gray-600">Mapa de Localização em Tempo Real</p>
                    <p className="text-sm text-gray-500 mt-1">5 máquinas sendo monitoradas</p>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Legenda</h4>
                  <div className="flex flex-wrap gap-4">
                    {mapLegend.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                        <span className="text-sm text-gray-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Machine List */}
            <div className="space-y-4">
              {filteredMachines.map((machine) => (
                <div key={machine.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 ${machine.statusColor} rounded-full mr-3 flex-shrink-0`}></div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{machine.name}</h4>
                        <p className="text-xs text-gray-600">{machine.model}</p>
                      </div>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">{machine.status}</span>
                  </div>
                  
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="w-3 h-3 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{machine.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>{machine.coordinates}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span>Última atualização</span>
                      <span className="font-medium">{machine.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tracking;
