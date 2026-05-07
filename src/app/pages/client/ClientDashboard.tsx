import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { PawPrint, Calendar, ShoppingBag, Award, CreditCard, Package } from 'lucide-react';

export function ClientDashboard() {
  const myPets = [
    { name: 'Rex', breed: 'Golden Retriever', age: '3 anos', photo: 'https://api.dicebear.com/7.x/bottts/svg?seed=rex' },
    { name: 'Luna', breed: 'Gato Persa', age: '2 anos', photo: 'https://api.dicebear.com/7.x/bottts/svg?seed=luna' }
  ];

  const recentOrders = [
    { product: 'Ração Premium 15kg', date: '01/05/2026', status: 'Entregue', price: 'R$ 189,90' },
    { product: 'Banho e Tosa', date: '28/04/2026', status: 'Concluído', price: 'R$ 120,00' },
    { product: 'Kit Higiene', date: '15/04/2026', status: 'Entregue', price: 'R$ 85,00' }
  ];

  const activeSubscriptions = [
    { plan: 'Ração Premium Mensal', nextDelivery: '15/05/2026', price: 'R$ 179,90/mês' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Bem-vindo de volta!</h1>
          <p className="text-gray-600 mt-1">Cuide melhor dos seus pets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8" />
                <span className="text-2xl font-bold">1.240</span>
              </div>
              <p className="text-blue-100 mb-2">Pontos Acumulados</p>
              <Button variant="secondary" size="sm" className="w-full bg-white text-blue-700 hover:bg-blue-50">
                Resgatar Pontos
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <CreditCard className="w-8 h-8" />
                <span className="text-2xl font-bold">R$ 45</span>
              </div>
              <p className="text-green-100 mb-2">Cashback Disponível</p>
              <Button variant="secondary" size="sm" className="w-full bg-white text-green-700 hover:bg-green-50">
                Usar Cashback
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Package className="w-8 h-8" />
                <span className="text-2xl font-bold">1</span>
              </div>
              <p className="text-purple-100 mb-2">Assinatura Ativa</p>
              <Button variant="secondary" size="sm" className="w-full bg-white text-purple-700 hover:bg-purple-50">
                Gerenciar
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Meus Pets</CardTitle>
                <PawPrint className="w-5 h-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myPets.map((pet, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <img src={pet.photo} alt={pet.name} className="w-16 h-16 rounded-full" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{pet.name}</p>
                      <p className="text-sm text-gray-600">{pet.breed}</p>
                      <p className="text-xs text-gray-500">{pet.age}</p>
                    </div>
                    <Button variant="outline" size="sm">Ver Perfil</Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  + Adicionar Novo Pet
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Próximas Ações</CardTitle>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900">Agendar Banho e Tosa</p>
                      <p className="text-sm text-blue-700 mt-1">Última visita: 28/04/2026</p>
                      <Button variant="primary" size="sm" className="mt-3">
                        Agendar Agora
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-green-900">Próxima Entrega</p>
                      <p className="text-sm text-green-700 mt-1">Ração Premium - 15/05/2026</p>
                      <Button variant="outline" size="sm" className="mt-3">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Histórico de Pedidos</CardTitle>
              <ShoppingBag className="w-5 h-5 text-gray-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{order.product}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Entregue' || order.status === 'Concluído'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </span>
                    <span className="font-medium text-gray-900">{order.price}</span>
                    <Button variant="outline" size="sm">Recomprar</Button>
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
