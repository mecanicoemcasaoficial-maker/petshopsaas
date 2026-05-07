import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Store, Users, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function SuperAdminDashboard() {
  const stats = [
    {
      title: 'Total de PetShops',
      value: '247',
      change: '+12%',
      trend: 'up',
      icon: Store,
      color: 'blue'
    },
    {
      title: 'Total de Clientes',
      value: '8.543',
      change: '+23%',
      trend: 'up',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Receita Mensal',
      value: 'R$ 124.560',
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
      color: 'purple'
    },
    {
      title: 'Crescimento',
      value: '32%',
      change: '-3%',
      trend: 'down',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const recentPetshops = [
    { name: 'PetShop Premium', plan: 'Pro', clients: 234, revenue: 'R$ 4.890' },
    { name: 'Bichos & Cia', plan: 'Enterprise', clients: 456, revenue: 'R$ 8.900' },
    { name: 'Pet Love Store', plan: 'Starter', clients: 89, revenue: 'R$ 1.290' },
    { name: 'Mundo Pet', plan: 'Pro', clients: 312, revenue: 'R$ 5.600' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Super Admin</h1>
          <p className="text-gray-600 mt-1">Visão geral da plataforma</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isPositive = stat.trend === 'up';

            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {isPositive ? (
                          <ArrowUpRight className="w-4 h-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-600" />
                        )}
                        <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change}
                        </span>
                        <span className="text-sm text-gray-500">vs último mês</span>
                      </div>
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
              <CardTitle>PetShops Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPetshops.map((petshop, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Store className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{petshop.name}</p>
                        <p className="text-sm text-gray-500">Plano {petshop.plan}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{petshop.revenue}</p>
                      <p className="text-sm text-gray-500">{petshop.clients} clientes</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assinaturas por Plano</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { plan: 'Enterprise', count: 23, percentage: 35, color: 'purple' },
                  { plan: 'Pro', count: 89, percentage: 45, color: 'blue' },
                  { plan: 'Starter', count: 135, percentage: 20, color: 'green' }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">{item.plan}</span>
                      <span className="text-sm text-gray-500">{item.count} petshops</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-${item.color}-600 h-2 rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
