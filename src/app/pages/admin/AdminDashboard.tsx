import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Users, PawPrint, DollarSign, Package, Calendar, Bell, TrendingUp } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { title: 'Clientes Cadastrados', value: '234', icon: Users, color: 'blue' },
    { title: 'Pets Registrados', value: '412', icon: PawPrint, color: 'green' },
    { title: 'Receita Mensal', value: 'R$ 18.450', icon: DollarSign, color: 'purple' },
    { title: 'Pedidos Recorrentes', value: '87', icon: Package, color: 'orange' }
  ];

  const todaySchedule = [
    { time: '09:00', service: 'Banho e Tosa', pet: 'Rex (Golden)', client: 'João Silva' },
    { time: '10:30', service: 'Consulta Veterinária', pet: 'Luna (Gato)', client: 'Maria Santos' },
    { time: '14:00', service: 'Banho', pet: 'Thor (Labrador)', client: 'Pedro Costa' },
    { time: '16:00', service: 'Tosa', pet: 'Mel (Poodle)', client: 'Ana Lima' }
  ];

  const upcomingDeliveries = [
    { product: 'Ração Premium 15kg', client: 'João Silva', date: '08/05/2026' },
    { product: 'Kit Higiene Completo', client: 'Maria Santos', date: '09/05/2026' },
    { product: 'Ração Especial Gatos', client: 'Carlos Souza', date: '10/05/2026' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard PetShop</h1>
          <p className="text-gray-600 mt-1">Bem-vindo ao PetShop Premium</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                      <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Agenda de Hoje</CardTitle>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaySchedule.map((appointment, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex-shrink-0 w-16 text-center">
                      <p className="text-sm font-medium text-blue-600">{appointment.time}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{appointment.service}</p>
                      <p className="text-sm text-gray-600">{appointment.pet}</p>
                      <p className="text-xs text-gray-500">{appointment.client}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Próximas Entregas</CardTitle>
                <Package className="w-5 h-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeliveries.map((delivery, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-gray-900">{delivery.product}</p>
                      <p className="text-sm text-gray-500">{delivery.client}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{delivery.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Notificações Recentes</CardTitle>
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: 'info', message: 'Novo cliente cadastrado: Ana Lima', time: '5 min atrás' },
                { type: 'warning', message: 'Estoque baixo: Ração Premium 15kg', time: '1 hora atrás' },
                { type: 'success', message: 'Pagamento confirmado: Assinatura Premium', time: '2 horas atrás' }
              ].map((notification, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    notification.type === 'info' ? 'bg-blue-600' :
                    notification.type === 'warning' ? 'bg-orange-600' : 'bg-green-600'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
