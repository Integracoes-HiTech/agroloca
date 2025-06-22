import React from 'react';
import { Home, Settings, Truck, Users, MapPin, Activity, BarChart3, FileText, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Truck, label: 'Máquinas', path: '/machines' },
  { icon: Users, label: 'Clientes', path: '/clients' },
  { icon: MapPin, label: 'Locações', path: '/rentals' },
  { icon: Activity, label: 'Rastreamento', path: '/tracking' },
  { icon: BarChart3, label: 'Relatórios', path: '/reports' },
  { icon: Settings, label: 'Configurações', path: '/settings' },
  { icon: FileText, label: 'Contratos', path: '/contracts' },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({
      title: 'Você saiu do sistema.',
      description: 'Redirecionando para a página inicial...',
    });

    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center relative">
            <img 
              src="/lovable-uploads/d0f8a0e5-eb3f-4ea0-9b07-c6ad6c832291.png" 
              alt="Agroloca Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">Agroloca</h1>
            <p className="text-sm text-gray-500">Gestão Agrícola</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6 overflow-auto">
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            SISTEMA
          </h3>
          <nav className="space-y-1">
            {sidebarItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Status Section */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            STATUS DO SISTEMA
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Máquinas Ativas</span>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-900">Online</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Locações Hoje</span>
              <span className="text-sm font-medium text-blue-600">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* User Section + Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">A</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Administrador</p>
              <p className="text-xs text-gray-500">Sistema Agroloca</p>
            </div>
          </div>

          {/* Botão de sair */}
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-red-500 transition"
            title="Sair"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
