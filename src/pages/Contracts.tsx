import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { FileText, Plus, Search, Filter, Download, Eye, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contracts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const contracts = [
    {
      id: 'CT001',
      client: 'João Silva Agro',
      machine: 'Trator Case IH 7230',
      startDate: '15/01/2024',
      endDate: '15/06/2024',
      value: 'R$ 8.500,00',
      status: 'Ativo',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'CT002',
      client: 'Fazenda Santa Rita',
      machine: 'Colheitadeira John Deere S660',
      startDate: '01/02/2024',
      endDate: '30/04/2024',
      value: 'R$ 12.000,00',
      status: 'Ativo',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 'CT003',
      client: 'Agropecuária Campos',
      machine: 'Pulverizador Jacto Uniport 3030',
      startDate: '10/12/2023',
      endDate: '10/01/2024',
      value: 'R$ 3.200,00',
      status: 'Finalizado',
      statusColor: 'bg-gray-100 text-gray-800'
    },
    {
      id: 'CT004',
      client: 'Cooperativa Agrícola MS',
      machine: 'Plantadeira John Deere 2113',
      startDate: '20/02/2024',
      endDate: '20/03/2024',
      value: 'R$ 4.800,00',
      status: 'Pendente',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 'CT005',
      client: 'Fazenda Boa Vista',
      machine: 'Trator New Holland T7.245',
      startDate: '05/03/2024',
      endDate: '05/05/2024',
      value: 'R$ 7.200,00',
      status: 'Ativo',
      statusColor: 'bg-green-100 text-green-800'
    }
  ];

  const filteredContracts = contracts.filter(contract =>
    contract.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.machine.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Contratos</h1>
              <p className="text-gray-600 mt-1">Gerencie todos os contratos de locação</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Novo Contrato
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Contratos</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">
                  +3 novos este mês
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Contratos Ativos</CardTitle>
                <FileText className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">
                  65% do total
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Valor Total Ativo</CardTitle>
                <FileText className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 125.400</div>
                <p className="text-xs text-muted-foreground">
                  Contratos vigentes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vencendo em 30 dias</CardTitle>
                <FileText className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  Requer atenção
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Filtros</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Buscar por cliente, máquina ou número do contrato..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os Status</SelectItem>
                      <SelectItem value="active">Ativos</SelectItem>
                      <SelectItem value="pending">Pendentes</SelectItem>
                      <SelectItem value="finished">Finalizados</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtrar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contracts Table */}
          <Card>
            <CardHeader>
              <CardTitle>Lista de Contratos</CardTitle>
              <CardDescription>
                {filteredContracts.length} contratos encontrados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nº Contrato</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Máquina</TableHead>
                    <TableHead>Período</TableHead>
                    <TableHead>Valor Mensal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContracts.map((contract) => (
                    <TableRow key={contract.id}>
                      <TableCell className="font-medium">{contract.id}</TableCell>
                      <TableCell>{contract.client}</TableCell>
                      <TableCell>{contract.machine}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{contract.startDate}</div>
                          <div className="text-gray-500">até {contract.endDate}</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{contract.value}</TableCell>
                      <TableCell>
                        <Badge className={contract.statusColor}>
                          {contract.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Contract Templates */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Modelos de Contrato</CardTitle>
              <CardDescription>
                Templates pré-configurados para diferentes tipos de locação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-medium">Contrato Padrão</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Template básico para locação de equipamentos agrícolas
                  </p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Usar Template
                  </Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-medium">Contrato Sazonal</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Para locações durante períodos específicos de safra
                  </p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Usar Template
                  </Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-medium">Contrato Corporativo</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Para empresas e cooperativas com condições especiais
                  </p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Usar Template
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contracts;