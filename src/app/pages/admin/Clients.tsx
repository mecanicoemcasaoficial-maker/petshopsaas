import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Modal } from '../../components/ui/Modal';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { EmptyState } from '../../components/ui/EmptyState';
import { Plus, Search, Phone, Mail, MapPin, Users, Edit, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Clients() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const clients = [
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '(11) 98765-4321',
      pets: 2,
      totalSpent: 'R$ 2.450',
      lastVisit: '01/05/2026',
      status: 'active'
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@email.com',
      phone: '(11) 91234-5678',
      pets: 1,
      totalSpent: 'R$ 1.890',
      lastVisit: '28/04/2026',
      status: 'active'
    },
    {
      id: '3',
      name: 'Pedro Costa',
      email: 'pedro@email.com',
      phone: '(11) 99876-5432',
      pets: 3,
      totalSpent: 'R$ 3.200',
      lastVisit: '15/04/2026',
      status: 'active'
    },
    {
      id: '4',
      name: 'Ana Lima',
      email: 'ana@email.com',
      phone: '(11) 94567-8901',
      pets: 1,
      totalSpent: 'R$ 890',
      lastVisit: '10/03/2026',
      status: 'inactive'
    }
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
            <p className="text-gray-600 mt-1">Gerencie seus clientes cadastrados</p>
          </div>
          <Button onClick={() => setShowModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Novo Cliente
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total de Clientes</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">234</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Ativos</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">187</p>
                </div>
                <Users className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Novos (mês)</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">23</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Inativos</p>
                  <p className="text-2xl font-bold text-gray-600 mt-1">47</p>
                </div>
                <Users className="w-8 h-8 text-gray-400" />
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
                  placeholder="Buscar por nome ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {filteredClients.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Pets</TableHead>
                    <TableHead>Total Gasto</TableHead>
                    <TableHead>Última Visita</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredClients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-gray-900">{client.name}</p>
                          <p className="text-sm text-gray-500">{client.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{client.phone}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-900">{client.pets} pet(s)</span>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium text-gray-900">{client.totalSpent}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">{client.lastVisit}</span>
                      </TableCell>
                      <TableCell>
                        <Badge variant={client.status === 'active' ? 'success' : 'default'}>
                          {client.status === 'active' ? 'Ativo' : 'Inativo'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Link to={`/admin/clients/${client.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <EmptyState
                icon={<Users className="w-8 h-8 text-gray-400" />}
                title="Nenhum cliente encontrado"
                description="Tente ajustar os filtros de busca"
              />
            )}
          </CardContent>
        </Card>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Novo Cliente" size="lg">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Nome completo" type="text" required />
            <Input label="Email" type="email" required />
            <Input label="Telefone" type="tel" required />
            <Input label="CPF" type="text" />
            <Input label="Data de nascimento" type="date" />
            <Input label="CEP" type="text" />
          </div>
          <Input label="Endereço" type="text" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input label="Cidade" type="text" />
            <Input label="Estado" type="text" />
            <Input label="Bairro" type="text" />
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setShowModal(false)} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">Cadastrar Cliente</Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
}
