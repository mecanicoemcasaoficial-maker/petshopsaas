import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { Tabs } from '../../components/ui/Tabs';
import { Search, Package, ShoppingBag, RefreshCw } from 'lucide-react';

export function MyOrders() {
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    { id: '#001', date: '01/05/2026', items: 'Ração Premium 15kg', amount: 'R$ 189,90', status: 'delivered', type: 'product' },
    { id: '#002', date: '28/04/2026', items: 'Banho e Tosa - Rex', amount: 'R$ 120,00', status: 'completed', type: 'service' },
    { id: '#003', date: '15/04/2026', items: 'Kit Higiene Completo', amount: 'R$ 85,00', status: 'delivered', type: 'product' },
    { id: '#004', date: '10/04/2026', items: 'Consulta Veterinária - Luna', amount: 'R$ 250,00', status: 'completed', type: 'service' },
    { id: '#005', date: '05/04/2026', items: 'Ração Special Cat 10kg', amount: 'R$ 145,00', status: 'processing', type: 'product' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meus Pedidos</h1>
          <p className="text-gray-600 mt-1">Acompanhe seus pedidos e histórico</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total de Pedidos</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">28</p>
                </div>
                <ShoppingBag className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Gasto Total</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">R$ 2.450</p>
                </div>
                <Package className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Em Andamento</p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">1</p>
                </div>
                <RefreshCw className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

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

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pedido</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Itens</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell><span className="font-medium">{order.id}</span></TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell><span className="font-medium">{order.amount}</span></TableCell>
                    <TableCell>
                      <Badge variant={
                        order.status === 'delivered' || order.status === 'completed' ? 'success' :
                        order.status === 'processing' ? 'info' : 'warning'
                      }>
                        {order.status === 'delivered' ? 'Entregue' :
                         order.status === 'completed' ? 'Concluído' :
                         order.status === 'processing' ? 'Processando' : 'Pendente'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Ver Detalhes</Button>
                        {order.type === 'product' && (
                          <Button variant="primary" size="sm">Recomprar</Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
