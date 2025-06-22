import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Settings as SettingsIcon, User, Bell, Shield, Database, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [maintenanceAlerts, setMaintenanceAlerts] = useState(true);
  const [contractAlerts, setContractAlerts] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
              <p className="text-gray-600 mt-1">Gerencie as configurações do sistema Agroloca</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="general">Geral</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
              <TabsTrigger value="integrations">Integrações</TabsTrigger>
              <TabsTrigger value="backup">Backup</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Informações da Empresa
                  </CardTitle>
                  <CardDescription>
                    Configure as informações básicas da sua empresa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Nome da Empresa</Label>
                      <Input id="company-name" defaultValue="Agroloca Equipamentos" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input id="cnpj" defaultValue="12.345.678/0001-90" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input id="address" defaultValue="Rua das Máquinas, 123 - Centro" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" defaultValue="Campo Grande" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado</Label>
                      <Input id="state" defaultValue="MS" />
                    </div>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600">Salvar Alterações</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Configurações do Sistema</CardTitle>
                  <CardDescription>
                    Personalize o comportamento do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currency">Moeda Padrão</Label>
                      <Input id="currency" defaultValue="BRL - Real Brasileiro" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Fuso Horário</Label>
                      <Input id="timezone" defaultValue="America/Campo_Grande" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="working-hours">Horário de Funcionamento</Label>
                    <Input id="working-hours" defaultValue="Segunda a Sexta: 08:00 - 18:00" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Preferências de Notificação
                  </CardTitle>
                  <CardDescription>
                    Configure como e quando receber notificações
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Notificações por E-mail</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba notificações importantes por e-mail
                      </p>
                    </div>
                    <Switch 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Alertas de Manutenção</Label>
                      <p className="text-sm text-muted-foreground">
                        Seja notificado sobre manutenções programadas
                      </p>
                    </div>
                    <Switch 
                      checked={maintenanceAlerts} 
                      onCheckedChange={setMaintenanceAlerts}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Alertas de Contrato</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba lembretes sobre vencimento de contratos
                      </p>
                    </div>
                    <Switch 
                      checked={contractAlerts} 
                      onCheckedChange={setContractAlerts}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Configurações de E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail Principal</Label>
                    <Input id="email" type="email" defaultValue="admin@agroloca.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backup-email">E-mail Secundário</Label>
                    <Input id="backup-email" type="email" placeholder="E-mail de backup" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Configurações de Segurança
                  </CardTitle>
                  <CardDescription>
                    Gerencie a segurança da sua conta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600">Alterar Senha</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sessões Ativas</CardTitle>
                  <CardDescription>
                    Gerencie onde você está logado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Navegador Atual</p>
                        <p className="text-sm text-gray-600">Chrome - Windows • Ativo agora</p>
                      </div>
                      <Button variant="outline" size="sm">Atual</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Mobile App</p>
                        <p className="text-sm text-gray-600">Android • Há 2 horas</p>
                      </div>
                      <Button variant="outline" size="sm">Desconectar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Integrações Disponíveis</CardTitle>
                  <CardDescription>
                    Conecte o Agroloca com outros sistemas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">WhatsApp Business</p>
                      <p className="text-sm text-gray-600">Envie notificações via WhatsApp</p>
                    </div>
                    <Button variant="outline">Conectar</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Sistema Contábil</p>
                      <p className="text-sm text-gray-600">Integração com software de contabilidade</p>
                    </div>
                    <Button variant="outline">Conectar</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">API de Pagamentos</p>
                      <p className="text-sm text-gray-600">Processe pagamentos automaticamente</p>
                    </div>
                    <Button variant="outline">Conectar</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    Backup e Restauração
                  </CardTitle>
                  <CardDescription>
                    Gerencie backups dos seus dados
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div>
                      <p className="font-medium text-green-800">Backup Automático Ativo</p>
                      <p className="text-sm text-green-600">Último backup: Hoje às 03:00</p>
                    </div>
                    <Button variant="outline" className="border-green-600 text-green-600">
                      Configurar
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Frequência de Backup</Label>
                    <div className="grid grid-cols-3 gap-3">
                      <Button variant="outline" className="justify-start">Diário</Button>
                      <Button variant="outline" className="justify-start bg-green-50 border-green-500">Semanal</Button>
                      <Button variant="outline" className="justify-start">Mensal</Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Ações de Backup</Label>
                    <div className="flex space-x-3">
                      <Button className="bg-green-500 hover:bg-green-600">
                        Criar Backup Manual
                      </Button>
                      <Button variant="outline">
                        Restaurar Backup
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
