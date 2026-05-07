import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Textarea } from '../../components/ui/Textarea';
import { Modal } from '../../components/ui/Modal';
import { Badge } from '../../components/ui/Badge';
import { Plus, Calendar, Clock, User, PawPrint } from 'lucide-react';

export function Schedule() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('2026-05-07');

  const appointments = [
    { id: '1', time: '09:00', service: 'Banho e Tosa', pet: 'Rex', client: 'João Silva', duration: '1h', status: 'confirmed' },
    { id: '2', time: '10:30', service: 'Consulta Veterinária', pet: 'Luna', client: 'Maria Santos', duration: '30min', status: 'confirmed' },
    { id: '3', time: '14:00', service: 'Banho', pet: 'Thor', client: 'Pedro Costa', duration: '45min', status: 'pending' },
    { id: '4', time: '16:00', service: 'Tosa', pet: 'Mel', client: 'Ana Lima', duration: '1h', status: 'confirmed' }
  ];

  const timeSlots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Agenda</h1>
            <p className="text-gray-600 mt-1">Gerencie os agendamentos</p>
          </div>
          <Button onClick={() => setShowModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Novo Agendamento
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Hoje</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Esta Semana</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">23</p>
                </div>
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Confirmados</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">18</p>
                </div>
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pendentes</p>
                  <p className="text-2xl font-bold text-yellow-600 mt-1">5</p>
                </div>
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Selecionar Data</h3>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Confirmado</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-600">Pendente</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Cancelado</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Agendamentos do Dia</h3>
              <div className="space-y-3">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="text-center min-w-[60px]">
                          <div className="text-sm font-medium text-blue-600">{appointment.time}</div>
                          <div className="text-xs text-gray-500">{appointment.duration}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900">{appointment.service}</h4>
                            <Badge variant={appointment.status === 'confirmed' ? 'success' : 'warning'}>
                              {appointment.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <PawPrint className="w-4 h-4" />
                              <span>{appointment.pet}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{appointment.client}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Editar</Button>
                        <Button variant="ghost" size="sm">Cancelar</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Novo Agendamento" size="lg">
        <form className="space-y-4">
          <Select
            label="Cliente"
            options={[
              { value: '', label: 'Selecione o cliente' },
              { value: '1', label: 'João Silva' },
              { value: '2', label: 'Maria Santos' }
            ]}
            required
          />
          <Select
            label="Pet"
            options={[
              { value: '', label: 'Selecione o pet' },
              { value: '1', label: 'Rex - Golden Retriever' },
              { value: '2', label: 'Luna - Gato Persa' }
            ]}
            required
          />
          <Select
            label="Serviço"
            options={[
              { value: '', label: 'Selecione o serviço' },
              { value: 'bath', label: 'Banho' },
              { value: 'grooming', label: 'Tosa' },
              { value: 'bath-grooming', label: 'Banho e Tosa' },
              { value: 'vet', label: 'Consulta Veterinária' }
            ]}
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Data" type="date" required />
            <Select
              label="Horário"
              options={[
                { value: '', label: 'Selecione o horário' },
                ...timeSlots.map(time => ({ value: time, label: time }))
              ]}
              required
            />
          </div>
          <Textarea label="Observações" rows={3} placeholder="Informações adicionais..." />
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setShowModal(false)} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">Agendar</Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
}
