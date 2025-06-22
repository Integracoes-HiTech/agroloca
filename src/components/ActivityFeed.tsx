
import React from 'react';
import { Activity } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: "Cliente não encontrado",
    subtitle: "Máquina não encontrada",
    date: "30/11/2024",
    status: "ativa",
    statusColor: "bg-green-100 text-green-800"
  },
  {
    id: 2,
    title: "Cliente não encontrado", 
    subtitle: "Máquina não encontrada",
    date: "14/11/2024",
    status: "finalizada",
    statusColor: "bg-blue-100 text-blue-800"
  }
];

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-6">
        <Activity className="w-5 h-5 text-green-500 mr-2" />
        Atividade Recente
      </h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                  <Activity className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{activity.title}</h4>
                  <p className="text-sm text-gray-600">{activity.subtitle}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 ml-11">{activity.date}</p>
            </div>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${activity.statusColor}`}>
              {activity.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
