import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Tabs } from '../../components/ui/Tabs';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, DollarSign, PawPrint, ShoppingBag, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ClientProfile() {
  const client = {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    phone: '(11) 98765-4321',
    cpf: '123.456.789-00',
    birthDate: '15/03/1985',
    address: 'Rua das Flores, 123 - Jardim Paulista',
    city: 'São Paulo',
    state: 'SP',
    joinDate: '10/01/2024',
    totalSpent: 'R$ 2.450,00',
    status: 'active'
  };

  const pets = [
    { name: 'Rex', breed: 'Golden Retriever', age: '3 anos', nextVisit: '15/05/2026' },
    { name: 'Luna', breed: 'Gato Persa', age: '2 anos', nextVisit: '20/05/2026' }
  ];

  const orders = [
    { id: '#001', date: '01/05/2026', service: 'Banho e Tosa', pet: 'Rex', amount: 'R$ 120,00', status: 'completed' },
    { id: '#002', date: '28/04/2026', service: 'Ração Premium 15kg', pet: '-', amount: 'R$ 189,90', status: 'completed' },
    { id: '#003', date: '15/04/2026', service: 'Consulta Veterinária', pet: 'Luna', amount: 'R$ 250,00', status: 'completed' }
  ];

  const subscriptions = [
    { plan: 'Ração Premium Mensal', price: 'R$ 179,90/mês', nextDelivery: '15/05/2026', status: 'active' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/admin/clients">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{client.name}</h1>
              <p className="text-gray-600 mt-1">Cliente desde {client.joinDate}</p>
            </div>
          </div>
          <Button>
            <Edit className="w-4 h-4 mr-2" />
            Editar
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600 mb-1">Total Gasto</p>
              <p className="text-2xl font-bold text-gray-900">{client.totalSpent}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600 mb-1">Pets Cadastrados</p>
              <p className="text-2xl font-bold text-gray-900">{pets.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600 mb-1">Pedidos Totais</p>
              <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600 mb-1">Assinaturas</p>
              <p className="text-2xl font-bold text-gray-900">{subscriptions.length}</p>
            </CardContent>
          </Card>
        </div>

        <Tabs
          tabs={[
            { id: 'info', label: 'Informações', icon: <Mail className="w-4 h-4" /> },
            { id: 'pets', label: 'Pets', icon: <PawPrint className="w-4 h-4" /> },
            { id: 'orders', label: 'Pedidos', icon: <ShoppingBag className="w-4 h-4" /> },
            { id: 'subscriptions', label: 'Assinaturas', icon: <DollarSign className="w-4 h-4" /> }
          ]}
        >
          {(activeTab) => (
            <>
              {activeTab === 'info' && (
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="font-medium text-gray-900">{client.email}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-600">Telefone</p>
                            <p className="font-medium text-gray-900">{client.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-600">Data de Nascimento</p>
                            <p className="font-medium text-gray-900">{client.birthDate}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-600">Endereço</p>
                            <p className="font-medium text-gray-900">{client.address}</p>
                            <p className="text-sm text-gray-600">{client.city} - {client.state}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5" />
                          <div>
                            <p className="text-sm text-gray-600">CPF</p>
                            <p className="font-medium text-gray-900">{client.cpf}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5" />
                          <div>
                            <p className="text-sm text-gray-600">Status</p>
                            <Badge variant="success">Ativo</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'pets' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pets.map((pet, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <PawPrint className="w-8 h-8 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{pet.name}</h3>
                            <p className="text-sm text-gray-600">{pet.breed}</p>
                            <p className="text-sm text-gray-500">{pet.age}</p>
                            <p className="text-sm text-blue-600 mt-2">Próxima visita: {pet.nextVisit}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === 'orders' && (
                <Card>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Pedido</TableHead>
                          <TableHead>Data</TableHead>
                          <TableHead>Serviço/Produto</TableHead>
                          <TableHead>Pet</TableHead>
                          <TableHead>Valor</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell><span className="font-medium">{order.id}</span></TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.service}</TableCell>
                            <TableCell>{order.pet}</TableCell>
                            <TableCell><span className="font-medium">{order.amount}</span></TableCell>
                            <TableCell>
                              <Badge variant="success">Concluído</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}

              {activeTab === 'subscriptions' && (
                <Card>
                  <CardContent className="pt-6">
                    {subscriptions.map((sub, index) => (
                      <div key={index} className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{sub.plan}</h3>
                            <p className="text-sm text-gray-600 mt-1">{sub.price}</p>
                            <p className="text-sm text-blue-600 mt-1">Próxima entrega: {sub.nextDelivery}</p>
                          </div>
                          <Badge variant="success">Ativa</Badge>
                        </div>
                      </div>
                    ))}
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
