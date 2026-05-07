import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Modal } from '../../components/ui/Modal';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { Plus, Search, PawPrint, Calendar } from 'lucide-react';

export function Pets() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const pets = [
    {
      id: '1',
      name: 'Rex',
      breed: 'Golden Retriever',
      age: '3 anos',
      weight: '30kg',
      owner: 'João Silva',
      lastVisit: '01/05/2026',
      nextVisit: '15/05/2026',
      status: 'active'
    },
    {
      id: '2',
      name: 'Luna',
      breed: 'Gato Persa',
      age: '2 anos',
      weight: '4kg',
      owner: 'Maria Santos',
      lastVisit: '28/04/2026',
      nextVisit: '20/05/2026',
      status: 'active'
    },
    {
      id: '3',
      name: 'Thor',
      breed: 'Labrador',
      age: '5 anos',
      weight: '35kg',
      owner: 'Pedro Costa',
      lastVisit: '15/04/2026',
      nextVisit: '18/05/2026',
      status: 'active'
    },
    {
      id: '4',
      name: 'Mel',
      breed: 'Poodle',
      age: '4 anos',
      weight: '8kg',
      owner: 'Ana Lima',
      lastVisit: '10/03/2026',
      nextVisit: '-',
      status: 'inactive'
    }
  ];

  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Pets</h1>
            <p className="text-gray-600 mt-1">Gerencie os pets cadastrados</p>
          </div>
          <Button onClick={() => setShowModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Cadastrar Pet
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total de Pets</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">412</p>
                </div>
                <PawPrint className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Cachorros</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">278</p>
                </div>
                <PawPrint className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Gatos</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">134</p>
                </div>
                <PawPrint className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Visitas (mês)</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">187</p>
                </div>
                <Calendar className="w-8 h-8 text-green-600" />
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
                  placeholder="Buscar por nome do pet ou tutor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pet</TableHead>
                  <TableHead>Raça</TableHead>
                  <TableHead>Idade</TableHead>
                  <TableHead>Peso</TableHead>
                  <TableHead>Tutor</TableHead>
                  <TableHead>Última Visita</TableHead>
                  <TableHead>Próxima Visita</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPets.map((pet) => (
                  <TableRow key={pet.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <PawPrint className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-900">{pet.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{pet.breed}</TableCell>
                    <TableCell>{pet.age}</TableCell>
                    <TableCell>{pet.weight}</TableCell>
                    <TableCell>{pet.owner}</TableCell>
                    <TableCell>{pet.lastVisit}</TableCell>
                    <TableCell>{pet.nextVisit}</TableCell>
                    <TableCell>
                      <Badge variant={pet.status === 'active' ? 'success' : 'default'}>
                        {pet.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Cadastrar Pet" size="lg">
        <form className="space-y-4">
          <Select
            label="Tutor"
            options={[
              { value: '', label: 'Selecione o tutor' },
              { value: '1', label: 'João Silva' },
              { value: '2', label: 'Maria Santos' }
            ]}
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Nome do pet" type="text" required />
            <Select
              label="Espécie"
              options={[
                { value: '', label: 'Selecione' },
                { value: 'dog', label: 'Cachorro' },
                { value: 'cat', label: 'Gato' },
                { value: 'other', label: 'Outro' }
              ]}
              required
            />
            <Input label="Raça" type="text" required />
            <Input label="Idade" type="text" />
            <Input label="Peso" type="text" />
            <Select
              label="Sexo"
              options={[
                { value: '', label: 'Selecione' },
                { value: 'male', label: 'Macho' },
                { value: 'female', label: 'Fêmea' }
              ]}
            />
            <Input label="Cor" type="text" />
            <Input label="Data de nascimento" type="date" />
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setShowModal(false)} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">Cadastrar Pet</Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
}
