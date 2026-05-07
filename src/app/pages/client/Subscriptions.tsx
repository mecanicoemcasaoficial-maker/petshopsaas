import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Package, Calendar, CreditCard, TrendingUp, Check } from 'lucide-react';

export function Subscriptions() {
  const activeSubscriptions = [
    {
      id: '1',
      plan: 'Ração Premium Mensal',
      product: 'Ração Premium Dog 15kg',
      price: 'R$ 179,90/mês',
      nextDelivery: '15/05/2026',
      status: 'active',
      startDate: '15/01/2024'
    }
  ];

  const availablePlans = [
    {
      name: 'Plano Básico',
      price: 'R$ 99,90',
      period: 'mês',
      features: ['1 Entrega mensal', 'Ração tradicional 10kg', 'Sem frete', 'Cancelamento a qualquer momento'],
      popular: false
    },
    {
      name: 'Plano Premium',
      price: 'R$ 179,90',
      period: 'mês',
      features: ['1 Entrega mensal', 'Ração premium 15kg', 'Sem frete', '5% de desconto', 'Brinde exclusivo', 'Cancelamento a qualquer momento'],
      popular: true
    },
    {
      name: 'Plano Família',
      price: 'R$ 299,90',
      period: 'mês',
      features: ['2 Entregas mensais', 'Ração premium 15kg cada', 'Sem frete', '10% de desconto', 'Brindes exclusivos', 'Atendimento prioritário', 'Cancelamento a qualquer momento'],
      popular: false
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assinaturas</h1>
          <p className="text-gray-600 mt-1">Gerencie suas assinaturas ativas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Assinaturas Ativas</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">1</p>
                </div>
                <Package className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Próxima Entrega</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">15/05</p>
                </div>
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Economia Total</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">R$ 248</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {activeSubscriptions.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Minhas Assinaturas</h2>
            <div className="space-y-4">
              {activeSubscriptions.map((subscription) => (
                <Card key={subscription.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4 flex-1">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Package className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{subscription.plan}</h3>
                            <Badge variant="success">Ativa</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{subscription.product}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                              <CreditCard className="w-4 h-4" />
                              <span>{subscription.price}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>Próxima entrega: {subscription.nextDelivery}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Package className="w-4 h-4" />
                              <span>Desde {subscription.startDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Pausar</Button>
                        <Button variant="outline" size="sm">Gerenciar</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Planos Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availablePlans.map((plan, index) => (
              <Card key={index} className={plan.popular ? 'border-2 border-blue-600' : ''}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.popular && (
                      <Badge variant="info">Mais Popular</Badge>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                    Assinar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
