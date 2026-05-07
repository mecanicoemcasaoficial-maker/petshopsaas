import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Tabs } from '../../components/ui/Tabs';
import { User, Lock, Bell, CreditCard } from 'lucide-react';

export function Profile() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meu Perfil</h1>
          <p className="text-gray-600 mt-1">Gerencie suas informações pessoais</p>
        </div>

        <Tabs
          tabs={[
            { id: 'personal', label: 'Dados Pessoais', icon: <User className="w-4 h-4" /> },
            { id: 'security', label: 'Segurança', icon: <Lock className="w-4 h-4" /> },
            { id: 'notifications', label: 'Notificações', icon: <Bell className="w-4 h-4" /> },
            { id: 'payment', label: 'Pagamento', icon: <CreditCard className="w-4 h-4" /> }
          ]}
        >
          {(activeTab) => (
            <>
              {activeTab === 'personal' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="flex items-center gap-6 mb-6">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=maria"
                          alt="Avatar"
                          className="w-24 h-24 rounded-full"
                        />
                        <div>
                          <Button size="sm">Alterar Foto</Button>
                          <p className="text-xs text-gray-500 mt-2">JPG, PNG ou GIF. Máx 2MB</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Nome completo" defaultValue="Maria Santos" />
                        <Input label="Email" type="email" defaultValue="maria@email.com" />
                        <Input label="Telefone" defaultValue="(11) 91234-5678" />
                        <Input label="CPF" defaultValue="123.456.789-00" />
                        <Input label="Data de nascimento" type="date" defaultValue="1990-05-15" />
                        <Input label="CEP" defaultValue="01234-567" />
                      </div>
                      <Input label="Endereço" defaultValue="Rua das Flores, 123" />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input label="Cidade" defaultValue="São Paulo" />
                        <Input label="Estado" defaultValue="SP" />
                        <Input label="Bairro" defaultValue="Jardim Paulista" />
                      </div>
                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline">Cancelar</Button>
                        <Button>Salvar Alterações</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'security' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Segurança da Conta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <Input label="Senha Atual" type="password" />
                      <Input label="Nova Senha" type="password" />
                      <Input label="Confirmar Nova Senha" type="password" />
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-900">
                          <strong>Dica:</strong> Use uma senha forte com letras, números e símbolos.
                        </p>
                      </div>
                      <div className="flex justify-end pt-4">
                        <Button>Alterar Senha</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'notifications' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Preferências de Notificação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Promoções e ofertas</h4>
                          <p className="text-sm text-gray-600">Receber ofertas exclusivas por email</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Lembretes de agendamento</h4>
                          <p className="text-sm text-gray-600">Lembrar sobre próximos agendamentos</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Atualizações de pedidos</h4>
                          <p className="text-sm text-gray-600">Notificar sobre status dos pedidos</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'payment' && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Métodos de Pagamento</CardTitle>
                      <Button size="sm">Adicionar Cartão</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                              <CreditCard className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                              <p className="text-sm text-gray-600">Expira em 12/2027</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Padrão</span>
                            <Button variant="outline" size="sm">Editar</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
