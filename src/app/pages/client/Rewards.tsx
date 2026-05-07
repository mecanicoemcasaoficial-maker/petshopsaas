import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Award, Gift, Star, TrendingUp, CreditCard } from 'lucide-react';

export function Rewards() {
  const rewards = [
    { id: '1', name: '10% de desconto', points: 500, description: 'Válido para qualquer serviço', available: true },
    { id: '2', name: 'Banho grátis', points: 1000, description: 'Um banho completo gratuito', available: true },
    { id: '3', name: '15% de desconto', points: 1500, description: 'Válido em produtos selecionados', available: false },
    { id: '4', name: 'Tosa grátis', points: 2000, description: 'Uma tosa completa gratuita', available: false }
  ];

  const history = [
    { date: '01/05/2026', action: 'Compra de ração', points: '+150', type: 'earn' },
    { date: '28/04/2026', action: 'Banho e tosa', points: '+80', type: 'earn' },
    { date: '15/04/2026', action: 'Resgate: 10% desconto', points: '-500', type: 'redeem' },
    { date: '10/04/2026', action: 'Compra de produtos', points: '+120', type: 'earn' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Recompensas</h1>
          <p className="text-gray-600 mt-1">Acumule pontos e ganhe prêmios</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-blue-100 mb-1">Seus Pontos</p>
                  <p className="text-5xl font-bold">1.240</p>
                </div>
                <Award className="w-16 h-16 text-white/30" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-blue-100 text-sm mb-1">Cashback Disponível</p>
                  <p className="text-2xl font-bold">R$ 45,00</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-blue-100 text-sm mb-1">Nível</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-300" />
                    <p className="text-2xl font-bold">Ouro</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm text-gray-600 mb-1">Próximo Nível</p>
                <p className="text-2xl font-bold text-gray-900">Platina</p>
                <p className="text-sm text-gray-500 mt-2">Faltam 760 pontos</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '62%' }}></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Resgatar Recompensas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward) => (
              <Card key={reward.id} className={!reward.available ? 'opacity-60' : ''}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Gift className="w-6 h-6 text-orange-600" />
                    </div>
                    <Badge variant={reward.available ? 'success' : 'default'}>
                      {reward.points} pts
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{reward.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                  <Button
                    variant={reward.available ? 'primary' : 'outline'}
                    size="sm"
                    className="w-full"
                    disabled={!reward.available}
                  >
                    {reward.available ? 'Resgatar' : 'Bloqueado'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Histórico de Pontos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.type === 'earn' ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      {item.type === 'earn' ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <Gift className="w-5 h-5 text-orange-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.action}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                  <span className={`font-semibold ${
                    item.type === 'earn' ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    {item.points}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
