
import React, { useState } from 'react';
import { Plus, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewMachineDialog from './dialogs/NewMachineDialog';
import NewRentalDialog from './dialogs/NewRentalDialog';
import NewClientDialog from './dialogs/NewClientDialog';

const Header = () => {
  const [showMachineDialog, setShowMachineDialog] = useState(false);
  const [showRentalDialog, setShowRentalDialog] = useState(false);
  const [showClientDialog, setShowClientDialog] = useState(false);

  return (
    <>
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Visão geral do seu sistema Agroloca</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={() => setShowMachineDialog(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Nova Máquina
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300"
              onClick={() => setShowRentalDialog(true)}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Nova Locação
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300"
              onClick={() => setShowClientDialog(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Novo Cliente
            </Button>
          </div>
        </div>
      </div>

      <NewMachineDialog 
        open={showMachineDialog} 
        onOpenChange={setShowMachineDialog} 
      />
      <NewRentalDialog 
        open={showRentalDialog} 
        onOpenChange={setShowRentalDialog} 
      />
      <NewClientDialog 
        open={showClientDialog} 
        onOpenChange={setShowClientDialog} 
      />
    </>
  );
};

export default Header;
