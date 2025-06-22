import React from 'react';
import Sidebar from '@/components/Sidebar';
import { BarChart3, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Reports = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Relatórios</h1>
              <p className="text-gray-600 mt-1">Análise de dados e desempenho do sistema</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Select defaultValue="30days">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Selecionar período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Últimos 7 dias</SelectItem>
                  <SelectItem value="30days">Últimos 30 dias</SelectItem>
                  <SelectItem value="90days">Últimos 3 meses</SelectItem>
                  <SelectItem value="year">Este ano</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <BarChart3 className="w-4 h-4 mr-2" />
                Gerar Relatório
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 45.231,89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% em relação ao mês anterior
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Máquinas Alugadas</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">
                  +12% em relação ao mês anterior
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Ocupação</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">
                  +5.2% em relação ao mês anterior
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Novos Contratos</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +3 em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Relatório de Receitas</CardTitle>
                <CardDescription>
                  Análise detalhada das receitas por período
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Janeiro 2024</h4>
                      <p className="text-sm text-gray-600">23 locações ativas</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ 15.450,00</p>
                      <p className="text-sm text-green-600">+15%</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Fevereiro 2024</h4>
                      <p className="text-sm text-gray-600">28 locações ativas</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ 18.320,00</p>
                      <p className="text-sm text-green-600">+18%</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Ver Relatório Completo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Relatório de Máquinas</CardTitle>
                <CardDescription>
                  Performance e utilização das máquinas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Tratores</h4>
                      <p className="text-sm text-gray-600">15 unidades</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">92% ocupação</p>
                      <p className="text-sm text-green-600">Alta demanda</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Colheitadeiras</h4>
                      <p className="text-sm text-gray-600">8 unidades</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">75% ocupação</p>
                      <p className="text-sm text-yellow-600">Média demanda</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Ver Relatório Completo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Relatório de Clientes</CardTitle>
                <CardDescription>
                  Análise do comportamento dos clientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Clientes Ativos</h4>
                      <p className="text-sm text-gray-600">Com contratos vigentes</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">45</p>
                      <p className="text-sm text-green-600">+8 este mês</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Cliente Premium</h4>
                      <p className="text-sm text-gray-600">João Silva Agro</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ 5.420,00</p>
                      <p className="text-sm text-gray-600">Faturamento mensal</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Ver Relatório Completo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Relatório de Manutenção</CardTitle>
                <CardDescription>
                  Custos e agendamentos de manutenção
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Manutenções Realizadas</h4>
                      <p className="text-sm text-gray-600">Este mês</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">8</p>
                      <p className="text-sm text-blue-600">R$ 3.250,00</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Manutenções Pendentes</h4>
                      <p className="text-sm text-gray-600">Requer atenção</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">3</p>
                      <p className="text-sm text-red-600">Urgente</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Ver Relatório Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
