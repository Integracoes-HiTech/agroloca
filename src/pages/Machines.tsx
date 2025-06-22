import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Plus, Search, Filter, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewMachineDialog from '@/components/dialogs/NewMachineDialog';

const machines = [
  {
    id: 1,
    name: "Trator John Deere 5075E",
    model: "John Deere 5075E (2020)",
    category: "Trator",
    dailyRate: "R$ 350,00",
    workingHours: "1250h trabalhadas",
    location: "Fazenda São João - Goiânia, GO",
    maintenance: "14/10/2024",
    power: "75 CV",
    fuel: "Diesel",
    status: "Disponível",
    statusColor: "bg-green-100 text-green-800",
    image: "/placeholder-machine.jpg"
  },
  {
    id: 2,
    name: "Colheitadeira Case IH 2166",
    model: "Case IH 2166 (2019)",
    category: "Colheitadeira",
    dailyRate: "R$ 850,00",
    workingHours: "2100h trabalhadas",
    location: "Fazenda Boa Vista - Rio Verde, GO",
    maintenance: "19/09/2024",
    power: "310 CV",
    fuel: "Diesel",
    status: "Locada",
    statusColor: "bg-blue-100 text-blue-800",
    image: "/placeholder-machine.jpg"
  },
  {
    id: 3,
    name: "Pulverizador Jacto Uniport 3030",
    model: "Jacto Uniport 3030 (2021)",
    category: "Pulverizador",
    dailyRate: "R$ 480,00",
    workingHours: "890h trabalhadas",
    location: "Fazenda Santa Maria - Cristalina, GO",
    maintenance: "31/10/2024",
    power: "210 CV",
    fuel: "Diesel",
    status: "Disponível",
    statusColor: "bg-green-100 text-green-800",
    image: "/placeholder-machine.jpg"
  },
  {
    id: 4,
    name: "Plantadeira New Holland PDM 1113",
    model: "New Holland PDM 1113 (2022)",
    category: "Plantadeira",
    dailyRate: "R$ 420,00",
    workingHours: "580h trabalhadas",
    location: "Fazenda Esperança - Planaltina, GO",
    maintenance: "Em manutenção: 20/10/2024",
    status: "Manutenção",
    statusColor: "bg-orange-100 text-orange-800",
    image: "/placeholder-machine.jpg"
  },
  {
    id: 5,
    name: "Trator Massey Ferguson 4275",
    model: "Massey Ferguson 4275 (2018)",
    category: "Trator",
    dailyRate: "R$ 320,00",
    workingHours: "1875h trabalhadas",
    location: "Fazenda Progresso - Itumbiara, GO",
    maintenance: "Manutenção: 08/09/2024",
    status: "Disponível",
    statusColor: "bg-green-100 text-green-800",
    image: "/placeholder-machine.jpg"
  }
];

const statusTabs = [
  { label: "Todas (5)", value: "all", count: 5 },
  { label: "Disponíveis (3)", value: "available", count: 3 },
  { label: "Locadas (1)", value: "rented", count: 1 },
  { label: "Manutenção (1)", value: "maintenance", count: 1 }
];

const Machines = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMachineDialog, setShowMachineDialog] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex w-full">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Máquinas Agrícolas</h1>
                <p className="text-gray-600 mt-1">Gerencie seus equipamentos e equipamentos</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => setShowMachineDialog(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Cadastrar Máquina
                </Button>
              </div>
            </div>
          </div>

          <main className="flex-1 p-8">
            {/* Tabs */}
            <div className="mb-6">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  {statusTabs.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setActiveTab(tab.value)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.value
                          ? 'border-green-500 text-green-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar por nome, marca ou modelo..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-96"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Todos os Tipos</option>
                  <option>Trator</option>
                  <option>Colheitadeira</option>
                  <option>Plantadeira</option>
                  <option>Pulverizador</option>
                </select>
              </div>
            </div>

            {/* Machines Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {machines.map((machine) => (
                <div key={machine.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${machine.statusColor}`}>
                      {machine.status}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="mb-4">
                    <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
                    <h3 className="font-semibold text-gray-900 mb-1">{machine.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{machine.model}</p>
                    <p className="text-sm text-gray-500">{machine.category}</p>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span>Diária:</span>
                      <span className="font-medium text-green-600">{machine.dailyRate}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{machine.workingHours}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      <span>{machine.location}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      <span>Manutenção: {machine.maintenance}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <span>{machine.power}</span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                      {machine.fuel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <NewMachineDialog 
        open={showMachineDialog} 
        onOpenChange={setShowMachineDialog} 
      />
    </>
  );
};

export default Machines;
