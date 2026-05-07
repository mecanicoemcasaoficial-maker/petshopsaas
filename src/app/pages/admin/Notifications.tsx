import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Tabs } from '../../components/ui/Tabs';
import { Bell, AlertCircle, CheckCircle, Info, TrendingUp, Calendar, Package } from 'lucide-react';

export function Notifications() {
  const allNotifications = [
    { id: '1', type: 'info', title: 'Novo cliente cadastrado', message: 'Ana Lima acabou de se cadastrar no sistema', time: '5 min atrás', read: false },
    { id: '2', type: 'warning', title: 'Estoque baixo', message: 'Ração Premium 15kg está acabando (5 unidades)', time: '1 hora atrás', read: false },
    { id: '3', type: 'success', title: 'Pagamento confirmado', message: 'Assinatura Premium de João Silva foi renovada', time: '2 horas atrás', read: false },
    { id: '4', type: 'info', title: 'Novo agendamento', message: 'Maria Santos agendou banho e tosa para amanhã às 10h', time: '3 horas atrás', read: true },
    { id: '5', type: 'alert', title: 'Agendamento cancelado', message: 'Pedro Costa cancelou o agendamento de hoje', time: '5 horas atrás', read: true }
  ];

  const automations = [
    { name: 'Lembrete de Banho', description: 'Enviar WhatsApp 3 dias antes do agendamento', status: 'active', sent: 234 },
    { name: 'Aniversário do Pet', description: 'Enviar mensagem de parabéns no aniversário', status: 'active', sent: 45 },
    { name: 'Assinatura Renovada', description: 'Confirmar renovação de assinatura mensal', status: 'active', sent: 87 },
    { name: 'Carrinho Abandonado', description: 'Lembrar cliente sobre carrinho não finalizado', status: 'paused', sent: 12 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notificações</h1>
            <p className="text-gray-600 mt-1">Central de notificações e automações</p>
          </div>
          <Button variant="outline">
            <CheckCircle className="w-4 h-4 mr-2" />
            Marcar todas como lidas
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Não Lidas</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">3</p>
                </div>
                <Bell className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Hoje</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                </div>
                <Calendar className="w-8 h-8 text-gray-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Automações Ativas</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">3</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Enviadas (mês)</p>
                  <p className="text-2xl font-bold text-purple-600 mt-1">378</p>
                </div>
                <Package className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs
          tabs={[
            { id: 'notifications', label: 'Notificações', icon: <Bell className="w-4 h-4" /> },
            { id: 'automations', label: 'Automações', icon: <TrendingUp className="w-4 h-4" /> }
          ]}
        >
          {(activeTab) => (
            <>
              {activeTab === 'notifications' && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {allNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 rounded-lg border transition-colors ${
                            notification.read ? 'bg-white border-gray-200' : 'bg-blue-50 border-blue-200'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-2 rounded-lg ${
                              notification.type === 'success' ? 'bg-green-100' :
                              notification.type === 'warning' ? 'bg-yellow-100' :
                              notification.type === 'alert' ? 'bg-red-100' : 'bg-blue-100'
                            }`}>
                              {notification.type === 'success' ? <CheckCircle className="w-5 h-5 text-green-600" /> :
                               notification.type === 'warning' ? <AlertCircle className="w-5 h-5 text-yellow-600" /> :
                               notification.type === 'alert' ? <AlertCircle className="w-5 h-5 text-red-600" /> :
                               <Info className="w-5 h-5 text-blue-600" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-1">
                                <h4 className="font-medium text-gray-900">{notification.title}</h4>
                                {!notification.read && <Badge variant="info">Nova</Badge>}
                              </div>
                              <p className="text-sm text-gray-600">{notification.message}</p>
                              <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'automations' && (
                <div className="space-y-4">
                  {automations.map((automation, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-gray-900">{automation.name}</h3>
                              <Badge variant={automation.status === 'active' ? 'success' : 'warning'}>
                                {automation.status === 'active' ? 'Ativa' : 'Pausada'}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{automation.description}</p>
                            <p className="text-xs text-gray-500">
                              <span className="font-medium">{automation.sent}</span> mensagens enviadas este mês
                            </p>
                          </div>
                          <div className="flex gap-2">
                            {automation.status === 'active' ? (
                              <Button variant="outline" size="sm">Pausar</Button>
                            ) : (
                              <Button variant="primary" size="sm">Ativar</Button>
                            )}
                            <Button variant="outline" size="sm">Configurar</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
