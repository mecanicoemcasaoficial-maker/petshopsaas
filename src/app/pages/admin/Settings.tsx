import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Textarea } from '../../components/ui/Textarea';
import { Select } from '../../components/ui/Select';
import { Tabs } from '../../components/ui/Tabs';
import { Settings as SettingsIcon, Store, Bell, CreditCard, Users } from 'lucide-react';

export function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
          <p className="text-gray-600 mt-1">Gerencie as configurações do seu petshop</p>
        </div>

        <Tabs
          tabs={[
            { id: 'general', label: 'Geral', icon: <Store className="w-4 h-4" /> },
            { id: 'notifications', label: 'Notificações', icon: <Bell className="w-4 h-4" /> },
            { id: 'payments', label: 'Pagamentos', icon: <CreditCard className="w-4 h-4" /> },
            { id: 'team', label: 'Equipe', icon: <Users className="w-4 h-4" /> }
          ]}
        >
          {(activeTab) => (
            <>
              {activeTab === 'general' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Informações do PetShop</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Nome do PetShop" defaultValue="PetShop Premium" />
                        <Input label="CNPJ" defaultValue="12.345.678/0001-90" />
                        <Input label="Email" type="email" defaultValue="contato@petshop.com" />
                        <Input label="Telefone" defaultValue="(11) 3456-7890" />
                      </div>
                      <Input label="Endereço" defaultValue="Rua das Flores, 123" />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input label="Cidade" defaultValue="São Paulo" />
                        <Input label="Estado" defaultValue="SP" />
                        <Input label="CEP" defaultValue="01234-567" />
                      </div>
                      <Textarea label="Descrição" rows={3} defaultValue="O melhor petshop da região, com serviços completos para seu pet." />
                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline">Cancelar</Button>
                        <Button>Salvar Alterações</Button>
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
                          <h4 className="font-medium text-gray-900">Novos agendamentos</h4>
                          <p className="text-sm text-gray-600">Receber notificação quando houver novo agendamento</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Estoque baixo</h4>
                          <p className="text-sm text-gray-600">Alertar quando produtos estiverem acabando</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Novos clientes</h4>
                          <p className="text-sm text-gray-600">Notificar quando houver novo cadastro de cliente</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Pagamentos recebidos</h4>
                          <p className="text-sm text-gray-600">Confirmar quando pagamentos forem processados</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'payments' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações de Pagamento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <Select
                        label="Gateway de Pagamento"
                        options={[
                          { value: '', label: 'Selecione' },
                          { value: 'stripe', label: 'Stripe' },
                          { value: 'mercadopago', label: 'Mercado Pago' },
                          { value: 'pagseguro', label: 'PagSeguro' }
                        ]}
                      />
                      <Input label="Chave Pública" type="text" placeholder="pk_live_..." />
                      <Input label="Chave Privada" type="password" placeholder="sk_live_..." />
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-900">
                          <strong>Importante:</strong> Suas chaves de API são criptografadas e armazenadas com segurança.
                        </p>
                      </div>
                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline">Testar Conexão</Button>
                        <Button>Salvar</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'team' && (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Membros da Equipe</CardTitle>
                      <Button size="sm">
                        <Users className="w-4 h-4 mr-2" />
                        Convidar Membro
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: 'João Silva', email: 'joao@petshop.com', role: 'Administrador', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=joao' },
                        { name: 'Maria Santos', email: 'maria@petshop.com', role: 'Atendente', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria' },
                        { name: 'Pedro Costa', email: 'pedro@petshop.com', role: 'Veterinário', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pedro' }
                      ].map((member, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                            <div>
                              <p className="font-medium text-gray-900">{member.name}</p>
                              <p className="text-sm text-gray-600">{member.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600">{member.role}</span>
                            <Button variant="outline" size="sm">Gerenciar</Button>
                          </div>
                        </div>
                      ))}
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
