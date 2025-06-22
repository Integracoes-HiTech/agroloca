import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Plus, Search, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewClientDialog from '@/components/dialogs/NewClientDialog';

const clients = [
  {
    id: 1,
    name: "João Carlos Silva",
    document: "123.456.789-10",
    email: "joao.silva@fazenda.com.br",
    phone: "(62) 99999-1234",
    location: "Goiânia, GO",
    farm: "Fazenda São Pedro",
    area: "250 hectares",
    crops: ["soja", "milho", "sorgo"],
    creditLimit: "R$ 15.000,00",
    status: "Ativo",
    statusColor: "bg-green-100 text-green-800",
    avatar: "J"
  },
  {
    id: 2,
    name: "Maria Fernanda",
    company: "Agropecuária LTDA",
    document: "12.345.678/0001-90",
    email: "contato@mfagro.com.br",
    phone: "(62) 3333-5678",
    location: "Rio Verde, GO",
    farm: "Fazenda Boa Esperança",
    area: "850 hectares",
    crops: ["soja", "milho", "algodão"],
    creditLimit: "R$ 35.000,00",
    status: "Ativo",
    statusColor: "bg-green-100 text-green-800",
    avatar: "M"
  },
  {
    id: 3,
    name: "Roberto Santos",
    document: "987.654.321-00",
    email: "roberto@fazendaverde.com",
    phone: "(64) 98888-7777",
    location: "Cristalina, GO",
    farm: "Fazenda Monte Verde",
    area: "420 hectares",
    crops: ["soja", "feijão"],
    creditLimit: "R$ 20.000,00",
    status: "Ativo",
    statusColor: "bg-green-100 text-green-800",
    avatar: "R"
  }
];

const statusTabs = [
  { label: "Todos (3)", value: "all" },
  { label: "Ativos (3)", value: "active" },
  { label: "Inativos (0)", value: "inactive" },
  { label: "Bloqueados (0)", value: "blocked" }
];

const Clients = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showClientDialog, setShowClientDialog] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex w-full">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
                <p className="text-gray-600 mt-1">Gerencie seus clientes e produtores rurais</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => setShowClientDialog(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Cadastrar Cliente
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

            {/* Search */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por nome, documento, email ou propriedade..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {clients.map((client) => (
                <div key={client.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                        {client.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{client.name}</h3>
                        {client.company && (
                          <p className="text-sm text-green-600 font-medium">{client.company}</p>
                        )}
                        <p className="text-sm text-gray-600">{client.document}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${client.statusColor}`}>
                        {client.status}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2">📧</span>
                      <span>{client.email}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2">📞</span>
                      <span>{client.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-4 h-4 mr-2">📍</span>
                      <span>{client.location}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="mb-3">
                      <span className="w-4 h-4 mr-2 inline-block">🏞️</span>
                      <span className="font-medium text-gray-900">{client.farm}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Área: {client.area}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {client.crops.map((crop, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {crop}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Limite de Crédito</span>
                      <span className="font-medium text-blue-600">{client.creditLimit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <NewClientDialog 
        open={showClientDialog} 
        onOpenChange={setShowClientDialog} 
      />
    </>
  );
};

export default Clients;
