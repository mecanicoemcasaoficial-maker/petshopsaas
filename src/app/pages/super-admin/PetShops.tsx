import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Modal } from '../../components/ui/Modal';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { Plus, Search, Store, Users, DollarSign } from 'lucide-react';

export function PetShops() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const petshops = [
    {
      id: '1',
      name: 'PetShop Premium',
      owner: 'João Silva',
      plan: 'Enterprise',
      clients: 234,
      revenue: 'R$ 18.450',
      status: 'active',
      joined: '10/01/2024'
    },
    {
      id: '2',
      name: 'Bichos & Cia',
      owner: 'Maria Santos',
      plan: 'Pro',
      clients: 156,
      revenue: 'R$ 12.890',
      status: 'active',
      joined: '15/02/2024'
    },
    {
      id: '3',
      name: 'Pet Love Store',
      owner: 'Pedro Costa',
      plan: 'Starter',
      clients: 89,
      revenue: 'R$ 5.600',
      status: 'active',
      joined: '20/03/2024'
    },
    {
      id: '4',
      name: 'Mundo Pet',
      owner: 'Ana Lima',
      plan: 'Pro',
      clients: 45,
      revenue: 'R$ 3.200',
      status: 'trial',
      joined: '01/05/2024'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gestão de PetShops</h1>
            <p className="text-gray-600 mt-1">Gerencie todos os petshops da plataforma</p>
          </div>
          <Button onClick={() => setShowModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Novo PetShop
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">247</p>
                </div>
                <Store className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Ativos</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">231</p>
                </div>
                <Store className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Em Trial</p>
                  <p className="text-2xl font-bold text-yellow-600 mt-1">16</p>
                </div>
                <Store className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Receita Total</p>
                  <p className="text-2xl font-bold text-purple-600 mt-1">R$ 124k</p>
                </div>
                <DollarSign className="w-8 h-8 text-purple-600" />
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
                  placeholder="Buscar petshops..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>PetShop</TableHead>
                  <TableHead>Proprietário</TableHead>
                  <TableHead>Plano</TableHead>
                  <TableHead>Clientes</TableHead>
                  <TableHead>Receita Mensal</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Membro desde</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {petshops.map((petshop) => (
                  <TableRow key={petshop.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Store className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-900">{petshop.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{petshop.owner}</TableCell>
                    <TableCell>
                      <Badge variant={
                        petshop.plan === 'Enterprise' ? 'info' :
                        petshop.plan === 'Pro' ? 'success' : 'default'
                      }>
                        {petshop.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>{petshop.clients}</TableCell>
                    <TableCell><span className="font-medium">{petshop.revenue}</span></TableCell>
                    <TableCell>
                      <Badge variant={petshop.status === 'active' ? 'success' : 'warning'}>
                        {petshop.status === 'active' ? 'Ativo' : 'Trial'}
                      </Badge>
                    </TableCell>
                    <TableCell>{petshop.joined}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Gerenciar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Novo PetShop" size="lg">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Nome do PetShop" type="text" required />
            <Input label="CNPJ" type="text" required />
            <Input label="Email" type="email" required />
            <Input label="Telefone" type="tel" required />
            <Input label="Nome do Proprietário" type="text" required />
            <Input label="Email do Proprietário" type="email" required />
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setShowModal(false)} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">Criar PetShop</Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
}
