
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

interface NewClientDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewClientDialog = ({ open, onOpenChange }: NewClientDialogProps) => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpfCnpj: '',
    email: '',
    telefone: '',
    telefoneContato: '',
    endereco: '',
    logradouro: '',
    cidade: '',
    estado: '',
    cep: '',
    nomePropriedade: '',
    areaHectares: '',
    principaisCulturas: '',
    descricaoPropriedade: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  const handleSubmit = () => {
    console.log('Novo cliente:', formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Informações Básicas */}
          <div>
            <h3 className="text-lg font-medium mb-4">Informações Básicas</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nomeCompleto">Nome Completo</Label>
                <Input
                  id="nomeCompleto"
                  placeholder="Nome Completo aqui..."
                  value={formData.nomeCompleto}
                  onChange={(e) => handleInputChange('nomeCompleto', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="cpfCnpj">CPF / CNPJ</Label>
                <Input
                  id="cpfCnpj"
                  placeholder="Ex: xxx.xxx.xxx-xx ou xx.xxx.xxx/xxxx-xx"
                  value={formData.cpfCnpj}
                  onChange={(e) => handleInputChange('cpfCnpj', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  placeholder="(xx) xxxxx-xxxx"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="telefoneContato">Telefone de Contato</Label>
                <Input
                  id="telefoneContato"
                  placeholder="(xx) xxxxx-xxxx"
                  value={formData.telefoneContato}
                  onChange={(e) => handleInputChange('telefoneContato', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-lg font-medium mb-4">Endereço</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="logradouro">Logradouro</Label>
                <Input
                  id="logradouro"
                  placeholder="Rua, Avenida, etc."
                  value={formData.logradouro}
                  onChange={(e) => handleInputChange('logradouro', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input
                    id="cidade"
                    placeholder="Goiânia, Anápolis..."
                    value={formData.cidade}
                    onChange={(e) => handleInputChange('cidade', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="estado">Estado</Label>
                  <Input
                    id="estado"
                    placeholder="Goiás, Minas Gerais..."
                    value={formData.estado}
                    onChange={(e) => handleInputChange('estado', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="cep">CEP</Label>
                <Input
                  id="cep"
                  placeholder="xxxxx-xxx"
                  value={formData.cep}
                  onChange={(e) => handleInputChange('cep', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Informações da Propriedade */}
          <div>
            <h3 className="text-lg font-medium mb-4">Informações da Propriedade</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="nomePropriedade">Nome da Propriedade</Label>
                <Input
                  id="nomePropriedade"
                  placeholder="Ex: Fazenda São Pedro, Sítio Boa Vista"
                  value={formData.nomePropriedade}
                  onChange={(e) => handleInputChange('nomePropriedade', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="areaHectares">Área (Hectares)</Label>
                <Input
                  id="areaHectares"
                  placeholder="Ex: 250 hectares"
                  value={formData.areaHectares}
                  onChange={(e) => handleInputChange('areaHectares', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="principaisCulturas">Principais Culturas</Label>
                <Input
                  id="principaisCulturas"
                  placeholder="Ex: Soja, milho, feijão, cana-de-açúcar etc"
                  value={formData.principaisCulturas}
                  onChange={(e) => handleInputChange('principaisCulturas', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="descricaoPropriedade">Descrição da Propriedade</Label>
                <textarea
                  id="descricaoPropriedade"
                  className="w-full h-20 px-3 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Descrição detalhada..."
                  value={formData.descricaoPropriedade}
                  onChange={(e) => handleInputChange('descricaoPropriedade', e.target.value)}
                />
              </div>
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

export default NewClientDialog;
