import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Tabs } from '../../components/ui/Tabs';
import { Settings, DollarSign, Mail, Shield } from 'lucide-react';

export function SuperAdminSettings() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Configurações da Plataforma</h1>
          <p className="text-gray-600 mt-1">Gerencie configurações globais do sistema</p>
        </div>

        <Tabs
          tabs={[
            { id: 'general', label: 'Geral', icon: <Settings className="w-4 h-4" /> },
            { id: 'billing', label: 'Planos e Preços', icon: <DollarSign className="w-4 h-4" /> },
            { id: 'email', label: 'Email', icon: <Mail className="w-4 h-4" /> },
            { id: 'security', label: 'Segurança', icon: <Shield className="w-4 h-4" /> }
          ]}
        >
          {(activeTab) => (
            <>
              {activeTab === 'general' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações Gerais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <Input label="Nome da Plataforma" defaultValue="PetShop SaaS" />
                      <Input label="Email de Suporte" type="email" defaultValue="suporte@petshopsaas.com" />
                      <Input label="URL da Plataforma" defaultValue="https://petshopsaas.com" />
                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline">Cancelar</Button>
                        <Button>Salvar Alterações</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'billing' && (
                <div className="space-y-4">
                  {[
                    { name: 'Plano Starter', price: 'R$ 99,90', features: '100 clientes, 1 usuário, Suporte básico' },
                    { name: 'Plano Pro', price: 'R$ 199,90', features: '500 clientes, 5 usuários, Suporte prioritário' },
                    { name: 'Plano Enterprise', price: 'R$ 399,90', features: 'Ilimitado, Usuários ilimitados, Suporte 24/7' }
                  ].map((plan, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{plan.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{plan.features}</p>
                            <p className="text-xl font-bold text-blue-600">{plan.price}/mês</p>
                          </div>
                          <Button variant="outline">Editar Plano</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === 'email' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações de Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <Input label="Servidor SMTP" defaultValue="smtp.gmail.com" />
                      <Input label="Porta" type="number" defaultValue="587" />
                      <Input label="Usuário SMTP" type="email" defaultValue="noreply@petshopsaas.com" />
                      <Input label="Senha SMTP" type="password" placeholder="••••••••" />
                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline">Testar Conexão</Button>
                        <Button>Salvar</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'security' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações de Segurança</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Autenticação de 2 Fatores</h4>
                          <p className="text-sm text-gray-600">Exigir 2FA para todos os administradores</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">Logs de Auditoria</h4>
                          <p className="text-sm text-gray-600">Registrar todas as ações administrativas</p>
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
            </>
          )}
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
