
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface NewRentalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewRentalDialog = ({ open, onOpenChange }: NewRentalDialogProps) => {
  const [formData, setFormData] = useState({
    clienteEmpresa: '',
    contratoPrincipal: '',
    contratoEstendido: '',
    valorDiaria: '',
    valorTotal: '',
    valorOferta: '0',
    dataInicio: '',
    dataFim: '',
    enderecoEntrega: '',
    latitude: '',
    longitude: '',
    enderecoRetirada: '',
    latitudeRetirada: '',
    longitudeRetirada: '',
    observacoes: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  const handleSubmit = () => {
    console.log('Nova locação:', formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Nova Locação</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Informações da Locação */}
          <div>
            <h3 className="text-lg font-medium mb-4">Informações da Locação</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="clienteEmpresa">Cliente / Empresa</Label>
                <Input
                  id="clienteEmpresa"
                  placeholder="Selecione o cliente"
                  value={formData.clienteEmpresa}
                  onChange={(e) => handleInputChange('clienteEmpresa', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="contratoPrincipal">Contrato Principal</Label>
                <Input
                  id="contratoPrincipal"
                  placeholder="Selecione o produto"
                  value={formData.contratoPrincipal}
                  onChange={(e) => handleInputChange('contratoPrincipal', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="contratoEstendido">Contrato Estendido</Label>
                <Input
                  id="contratoEstendido"
                  placeholder="ID"
                  value={formData.contratoEstendido}
                  onChange={(e) => handleInputChange('contratoEstendido', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="valorDiaria">Valor por Diária R$</Label>
                <Input
                  id="valorDiaria"
                  placeholder="R$ 0,00"
                  value={formData.valorDiaria}
                  onChange={(e) => handleInputChange('valorDiaria', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Cálculo da Locação */}
          <div>
            <h3 className="text-lg font-medium mb-4">Cálculo da Locação</h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Label>Valor Diária</Label>
                  <p className="text-lg font-semibold text-green-600">R$ 0,00</p>
                </div>
                <div>
                  <Label>Valor Oferta</Label>
                  <p className="text-lg font-semibold text-green-600">R$ 0,00</p>
                </div>
                <div>
                  <Label>Valor Total</Label>
                  <p className="text-lg font-semibold text-green-600">R$ 0,00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Local de Entrega */}
          <div>
            <h3 className="text-lg font-medium mb-4">Local de Entrega</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="enderecoEntrega">Endereço de Entrega</Label>
                <Input
                  id="enderecoEntrega"
                  placeholder="Endereço completo para entrega"
                  value={formData.enderecoEntrega}
                  onChange={(e) => handleInputChange('enderecoEntrega', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="latitude">Latitude</Label>
                  <Input
                    id="latitude"
                    placeholder="-16.6799"
                    value={formData.latitude}
                    onChange={(e) => handleInputChange('latitude', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="longitude">Longitude</Label>
                  <Input
                    id="longitude"
                    placeholder="-49.2648"
                    value={formData.longitude}
                    onChange={(e) => handleInputChange('longitude', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Local de Retirada */}
          <div>
            <h3 className="text-lg font-medium mb-4">Local de Retirada</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="enderecoRetirada">Endereço de Retirada</Label>
                <Input
                  id="enderecoRetirada"
                  placeholder="Endereço completo para retirada"
                  value={formData.enderecoRetirada}
                  onChange={(e) => handleInputChange('enderecoRetirada', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="latitudeRetirada">Latitude</Label>
                  <Input
                    id="latitudeRetirada"
                    placeholder="-16.6799"
                    value={formData.latitudeRetirada}
                    onChange={(e) => handleInputChange('latitudeRetirada', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="longitudeRetirada">Longitude</Label>
                  <Input
                    id="longitudeRetirada"
                    placeholder="-49.2648"
                    value={formData.longitudeRetirada}
                    onChange={(e) => handleInputChange('longitudeRetirada', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Observações */}
          <div>
            <h3 className="text-lg font-medium mb-4">Observações</h3>
            <div>
              <Label htmlFor="observacoes">Observação Geral</Label>
              <textarea
                id="observacoes"
                className="w-full h-20 px-3 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Informações adicionais sobre a locação..."
                value={formData.observacoes}
                onChange={(e) => handleInputChange('observacoes', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-6">
          <Button variant="outline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600">
            Criar Locação
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewRentalDialog;
