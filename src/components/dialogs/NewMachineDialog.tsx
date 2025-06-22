
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

interface NewMachineDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewMachineDialog = ({ open, onOpenChange }: NewMachineDialogProps) => {
  const [formData, setFormData] = useState({
    nomeMaquina: '',
    tipo: '',
    marca: '',
    modelo: '',
    ano: '',
    chassi: '',
    valorOferta: '',
    horasTrabalhadas: '',
    localizacao: '',
    longitude: '',
    latitude: '',
    combustivel: '',
    tipoManutencao: '',
    ultimaManutencao: '',
    proximaManutencao: '',
    descricao: '',
    urlImagem: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  const handleSubmit = () => {
    console.log('Nova máquina:', formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Cadastrar Nova Máquina</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Informações Básicas */}
          <div>
            <h3 className="text-lg font-medium mb-4">Informações Básicas</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nomeMaquina">Nome da Máquina</Label>
                <Input
                  id="nomeMaquina"
                  placeholder="Ex: Trator John Deere 5075E"
                  value={formData.nomeMaquina}
                  onChange={(e) => handleInputChange('nomeMaquina', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="tipo">Tipo</Label>
                <Input
                  id="tipo"
                  placeholder="Trator"
                  value={formData.tipo}
                  onChange={(e) => handleInputChange('tipo', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="marca">Marca</Label>
                <Input
                  id="marca"
                  placeholder="John Deere"
                  value={formData.marca}
                  onChange={(e) => handleInputChange('marca', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="modelo">Modelo</Label>
                <Input
                  id="modelo"
                  placeholder="5075E"
                  value={formData.modelo}
                  onChange={(e) => handleInputChange('modelo', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="ano">Ano</Label>
                <Input
                  id="ano"
                  placeholder="2020"
                  value={formData.ano}
                  onChange={(e) => handleInputChange('ano', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="chassi">Chassi</Label>
                <Input
                  id="chassi"
                  placeholder="Opcional"
                  value={formData.chassi}
                  onChange={(e) => handleInputChange('chassi', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Informações Financeiras */}
          <div>
            <h3 className="text-lg font-medium mb-4">Informações Financeiras</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="valorOferta">Valor da Oferta R$</Label>
                <Input
                  id="valorOferta"
                  placeholder="R$ 350,00"
                  value={formData.valorOferta}
                  onChange={(e) => handleInputChange('valorOferta', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="horasTrabalhadas">Horas Trabalhadas</Label>
                <Input
                  id="horasTrabalhadas"
                  placeholder="1250"
                  value={formData.horasTrabalhadas}
                  onChange={(e) => handleInputChange('horasTrabalhadas', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Localização */}
          <div>
            <h3 className="text-lg font-medium mb-4">Localização</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="localizacao">Endereço</Label>
                <Input
                  id="localizacao"
                  placeholder="Fazenda São João - Goiânia, GO"
                  value={formData.localizacao}
                  onChange={(e) => handleInputChange('localizacao', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="longitude">Longitude</Label>
                  <Input
                    id="longitude"
                    placeholder="-49.2648"
                    value={formData.longitude}
                    onChange={(e) => handleInputChange('longitude', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="latitude">Latitude</Label>
                  <Input
                    id="latitude"
                    placeholder="-16.6799"
                    value={formData.latitude}
                    onChange={(e) => handleInputChange('latitude', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Especificações Técnicas */}
          <div>
            <h3 className="text-lg font-medium mb-4">Especificações Técnicas</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="combustivel">Potência</Label>
                <Input
                  id="combustivel"
                  placeholder="Ex: 75 CV"
                  value={formData.combustivel}
                  onChange={(e) => handleInputChange('combustivel', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="tipoManutencao">Tipo de Combustível</Label>
                <Input
                  id="tipoManutencao"
                  placeholder="Ex: Diesel"
                  value={formData.tipoManutencao}
                  onChange={(e) => handleInputChange('tipoManutencao', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Manutenção */}
          <div>
            <h3 className="text-lg font-medium mb-4">Manutenção</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ultimaManutencao">Última Manutenção</Label>
                <Input
                  id="ultimaManutencao"
                  placeholder="14/10/2024"
                  value={formData.ultimaManutencao}
                  onChange={(e) => handleInputChange('ultimaManutencao', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="proximaManutencao">Próxima Manutenção</Label>
                <Input
                  id="proximaManutencao"
                  placeholder="14/04/2025"
                  value={formData.proximaManutencao}
                  onChange={(e) => handleInputChange('proximaManutencao', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Imagens */}
          <div>
            <h3 className="text-lg font-medium mb-4">Imagens</h3>
            <div>
              <Label htmlFor="urlImagem">URL da Imagem</Label>
              <Input
                id="urlImagem"
                placeholder="https://exemplo.com/imagem.jpg"
                value={formData.urlImagem}
                onChange={(e) => handleInputChange('urlImagem', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-6">
          <Button variant="outline" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600">
            Cadastrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewMachineDialog;
