import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { Tabs } from '../../components/ui/Tabs';
import { Search, Package, DollarSign, TrendingUp, ShoppingBag, RefreshCw } from 'lucide-react';

export function Orders() {
  const [searchTerm, setSearchTerm] = useState('');

  const allOrders = [
    { id: '#001', date: '07/05/2026', client: 'João Silva', items: 'Banho e Tosa', amount: 'R$ 120,00', status: 'completed', type: 'service' },
    { id: '#002', date: '06/05/2026', client: 'Maria Santos', items: 'Ração Premium 15kg', amount: 'R$ 189,90', status: 'processing', type: 'product' },
    { id: '#003', date: '05/05/2026', client: 'Pedro Costa', items: 'Consulta Veterinária', amount: 'R$ 250,00', status: 'completed', type: 'service' },
    { id: '#004', date: '04/05/2026', client: 'Ana Lima', items: 'Kit Higiene Completo', amount: 'R$ 85,00', status: 'cancelled', type: 'product' }
  ];

  const recurringOrders = [
    { id: '#R01', client: 'João Silva', product: 'Ração Premium 15kg', frequency: 'Mensal', nextDelivery: '15/05/2026', amount: 'R$ 179,90', status: 'active' },
    { id: '#R02', client: 'Maria Santos', product: 'Kit Antipulgas', frequency: 'Trimestral', nextDelivery: '01/06/2026', amount: 'R$ 120,00', status: 'active' },
    { id: '#R03', client: 'Pedro Costa', product: 'Ração Special Cat', frequency: 'Mensal', nextDelivery: '20/05/2026', amount: 'R$ 145,00', status: 'paused' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pedidos</h1>
          <p className="text-gray-600 mt-1">Gerencie pedidos e assinaturas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total (mês)</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">234</p>
                </div>
                <ShoppingBag className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Receita (mês)</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">R$ 18.450</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Recorrentes</p>
                  <p className="text-2xl font-bold text-purple-600 mt-1">87</p>
                </div>
                <RefreshCw className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Crescimento</p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">+23%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs
          tabs={[
            { id: 'all', label: 'Todos os Pedidos', icon: <ShoppingBag className="w-4 h-4" /> },
            { id: 'recurring', label: 'Pedidos Recorrentes', icon: <RefreshCw className="w-4 h-4" /> }
          ]}
        >
          {(activeTab) => (
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Buscar pedidos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {activeTab === 'all' && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pedido</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Itens</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {allOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell><span className="font-medium">{order.id}</span></TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.client}</TableCell>
                          <TableCell>{order.items}</TableCell>
                          <TableCell><span className="font-medium">{order.amount}</span></TableCell>
                          <TableCell>
                            <Badge variant={
                              order.status === 'completed' ? 'success' :
                              order.status === 'processing' ? 'info' : 'danger'
                            }>
                              {order.status === 'completed' ? 'Concluído' :
                               order.status === 'processing' ? 'Processando' : 'Cancelado'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">Ver Detalhes</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}

                {activeTab === 'recurring' && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Produto</TableHead>
                        <TableHead>Frequência</TableHead>
                        <TableHead>Próxima Entrega</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recurringOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell><span className="font-medium">{order.id}</span></TableCell>
                          <TableCell>{order.client}</TableCell>
                          <TableCell>{order.product}</TableCell>
                          <TableCell>{order.frequency}</TableCell>
                          <TableCell>{order.nextDelivery}</TableCell>
                          <TableCell><span className="font-medium">{order.amount}</span></TableCell>
                          <TableCell>
                            <Badge variant={order.status === 'active' ? 'success' : 'warning'}>
                              {order.status === 'active' ? 'Ativa' : 'Pausada'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Gerenciar</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          )}
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
