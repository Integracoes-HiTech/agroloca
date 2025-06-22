import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Plus, Search, Clock, Calendar, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsCard from '@/components/StatsCard';
import NewRentalDialog from '@/components/dialogs/NewRentalDialog';

const rentals = [
  {
    id: 1,
    status: "Em Atraso",
    statusColor: "bg-red-100 text-red-800",
    days: "189 dias em atraso",
    client: "Cliente não encontrado",
    machine: "Máquina não encontrada", 
    operator: "Operador: Carlos Machado",
    period: {
      start: "30/11/2024",
      end: "14/12/2024"
    },
    dailyRate: "R$ 850,00",
    totalDays: "15 dias",
    total: "R$ 12.750,00",
    location: "Fazenda Boa Esperança - Rio Verde, GO",
    observations: "Colheita de soja - talhão 05"
  },
  {
    id: 2,
    status: "Finalizada",
    statusColor: "bg-blue-100 text-blue-800",
    client: "Cliente não encontrado",
    machine: "Máquina não encontrada",
    operator: "Operador: João Silva Jr.",
    period: {
      start: "14/11/2024", 
      end: "24/11/2024",
      returned: "24/11/2024"
    },
    dailyRate: "R$ 350,00",
    totalDays: "10 dias", 
    total: "R$ 3.500,00",
    location: "Fazenda São Pedro - Goiânia, GO",
    observations: "Preparo do solo para plantio"
  }
];

const statusTabs = [
  { label: "Todas (2)", value: "all" },
  { label: "Ativas (1)", value: "active" },
  { label: "Finalizadas (1)", value: "finished" },
  { label: "Atrasadas (0)", value: "overdue" },
  { label: "Canceladas (0)", value: "cancelled" }
];

const Rentals = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showRentalDialog, setShowRentalDialog] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex w-full">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Locações</h1>
                <p className="text-gray-600 mt-1">Gerencie contratos e locações de máquinas</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => setShowRentalDialog(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Locação
                </Button>
              </div>
            </div>
          </div>

          <main className="flex-1 p-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Locações Ativas"
                value="1"
                subtitle=""
                icon={MapPin}
                iconColor="text-green-600"
                iconBg="bg-green-100"
              />
              <StatsCard
                title="Finalizadas"
                value="1"
                subtitle=""
                icon={Clock}
                iconColor="text-blue-600"
                iconBg="bg-blue-100"
              />
              <StatsCard
                title="Em Atraso"
                value="0"
                subtitle=""
                icon={Calendar}
                iconColor="text-orange-600"
                iconBg="bg-orange-100"
              />
              <StatsCard
                title="Receita Total"
                value="R$ 3.500,00"
                subtitle=""
                icon={DollarSign}
                iconColor="text-green-600"
                iconBg="bg-green-100"
              />
            </div>

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

            {/* Search */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por cliente, máquina ou operador..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Rentals List */}
            <div className="space-y-6">
              {rentals.map((rental) => (
                <div key={rental.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${rental.statusColor}`}>
                        {rental.status}
                      </span>
                      {rental.days && (
                        <span className="text-sm text-red-600">{rental.days}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="w-5 h-5 mr-2">👤</span>
                          <span className="font-medium text-gray-900">{rental.client}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <span className="w-5 h-5 mr-2">🚜</span>
                          <span className="text-gray-600">{rental.machine}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-5 h-5 mr-2">👷</span>
                          <span className="text-gray-600">{rental.operator}</span>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Período da Locação
                        </h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Início: {rental.period.start}</div>
                          <div>Fim: {rental.period.end}</div>
                          {rental.period.returned && (
                            <div className="text-green-600">Devolvida: {rental.period.returned}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Diária:</span>
                            <span className="font-medium">{rental.dailyRate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total de dias:</span>
                            <span className="font-medium">{rental.totalDays}</span>
                          </div>
                          <div className="border-t border-gray-200 pt-2 mt-2">
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-900">Total:</span>
                              <span className="font-bold text-green-600">{rental.total}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-sm font-medium">Local de Entrega</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">{rental.location}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">Observações</h4>
                        <p className="text-sm text-gray-600">{rental.observations}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <NewRentalDialog 
        open={showRentalDialog} 
        onOpenChange={setShowRentalDialog} 
      />
    </>
  );
};

export default Rentals;
