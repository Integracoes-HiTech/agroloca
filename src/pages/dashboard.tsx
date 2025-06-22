import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import RevenueChart from '@/components/RevenueChart';
import MachineStatus from '@/components/MachineStatus';
import ActivityFeed from '@/components/ActivityFeed';
import MaintenanceAlerts from '@/components/MaintenanceAlerts';
import { Truck, MapPin, Users, DollarSign } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total de Máquinas"
              value="5"
              subtitle="5 disponíveis"
              icon={Truck}
              iconColor="text-blue-600"
              iconBg="bg-blue-100"
            />
            <StatsCard
              title="Locações Ativas"
              value="1"
              subtitle="1 máquinas locadas"
              icon={MapPin}
              iconColor="text-green-600"
              iconBg="bg-green-100"
            />
            <StatsCard
              title="Total de Clientes"
              value="3"
              subtitle="clientes cadastrados"
              icon={Users}
              iconColor="text-purple-600"
              iconBg="bg-purple-100"
            />
            <StatsCard
              title="Receita Total"
              value="R$ 3.500,00"
              subtitle="valor faturado"
              icon={DollarSign}
              iconColor="text-orange-600"
              iconBg="bg-orange-100"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <MachineStatus />
            <RevenueChart />
          </div>

          {/* Activity and Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ActivityFeed />
            <MaintenanceAlerts />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
  