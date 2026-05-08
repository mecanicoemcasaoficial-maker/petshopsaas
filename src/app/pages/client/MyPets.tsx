import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Modal } from '../../components/ui/Modal';
import { EmptyState } from '../../components/ui/EmptyState';
import { Plus, PawPrint, Calendar, Syringe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MyPets() {
  const [showModal, setShowModal] = useState(false);

  const pets = [
    {
      id: '1',
      name: 'Rex',
      breed: 'Golden Retriever',
      age: '3 anos',
      weight: '30kg',
      photo: 'https://api.dicebear.com/7.x/bottts/svg?seed=rex',
      nextVaccine: '15/06/2026',
      lastVisit: '01/05/2026'
    },
    {
      id: '2',
      name: 'Luna',
      breed: 'Gato Persa',
      age: '2 anos',
      weight: '4kg',
      photo: 'https://api.dicebear.com/7.x/bottts/svg?seed=luna',
      nextVaccine: '20/07/2026',
      lastVisit: '28/04/2026'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Meus Pets</h1>
            <p className="text-gray-600 mt-1">Gerencie os pets da sua família</p>
          </div>
          <Button onClick={() => setShowModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Pet
          </Button>
        </div>

        {pets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <Card key={pet.id} className="overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <img src={pet.photo} alt={pet.name} className="w-20 h-20" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{pet.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{pet.breed}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Heart className="w-4 h-4 text-pink-600" />
                      <span>{pet.age} • {pet.weight}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>Última visita: {pet.lastVisit}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Syringe className="w-4 h-4 text-green-600" />
                      <span>Próxima vacina: {pet.nextVaccine}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/client/pets/${pet.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">Ver Perfil</Button>
                    </Link>
                    <Button variant="primary" className="flex-1">Agendar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="pt-6">
              <EmptyState
                icon={<PawPrint className="w-8 h-8 text-gray-400" />}
                title="Nenhum pet cadastrado"
                description="Adicione seu primeiro pet para começar"
                actionLabel="Adicionar Pet"
                onAction={() => setShowModal(true)}
              />
            </CardContent>
          </Card>
        )}
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Adicionar Pet" size="lg">
        <form className="space-y-4">
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
            <Button type="submit" className="flex-1">Adicionar Pet</Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
}
