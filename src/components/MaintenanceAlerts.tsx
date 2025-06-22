
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const alerts = [
  {
    id: 1,
    machine: "Plantadeira New Holland PDM 1113",
    status: "Em manutenção",
    statusColor: "bg-orange-100 text-orange-800",
    badge: "Manutenção"
  }
];

const MaintenanceAlerts = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-6">
        <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
        Alertas e Manutenções
      </h3>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{alert.machine}</h4>
                <p className="text-sm text-orange-600">{alert.status}</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
              {alert.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceAlerts;
