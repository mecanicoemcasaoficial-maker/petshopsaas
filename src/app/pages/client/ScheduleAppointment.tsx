import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Select } from '../../components/ui/Select';
import { Textarea } from '../../components/ui/Textarea';
import { Calendar, Clock, PawPrint, Check } from 'lucide-react';

export function ScheduleAppointment() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedPet, setSelectedPet] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: 'bath', name: 'Banho', price: 'R$ 50,00', duration: '45min' },
    { id: 'grooming', name: 'Tosa', price: 'R$ 70,00', duration: '1h' },
    { id: 'bath-grooming', name: 'Banho e Tosa', price: 'R$ 120,00', duration: '1h 30min' },
    { id: 'vet', name: 'Consulta Veterinária', price: 'R$ 250,00', duration: '30min' }
  ];

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const pets = [
    { value: '1', label: 'Rex - Golden Retriever' },
    { value: '2', label: 'Luna - Gato Persa' }
  ];

  const handleConfirm = () => {
    setStep(4);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agendar Serviço</h1>
          <p className="text-gray-600 mt-1">Escolha o serviço e horário desejado</p>
        </div>

        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step > s ? <Check className="w-5 h-5" /> : s}
              </div>
              {s < 3 && <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Selecione o Serviço</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all ${
                    selectedService === service.id ? 'border-2 border-blue-600 bg-blue-50' : 'hover:border-blue-300'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-blue-600 font-medium">{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">Duração: {service.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setStep(2)} disabled={!selectedService}>
                Continuar
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Escolha o Pet e Data</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <Select
                  label="Selecione o Pet"
                  options={[{ value: '', label: 'Selecione o pet' }, ...pets]}
                  value={selectedPet}
                  onChange={(e) => setSelectedPet(e.target.value)}
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Escolha a Data
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>Voltar</Button>
              <Button onClick={() => setStep(3)} disabled={!selectedPet || !selectedDate}>
                Continuar
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Escolha o Horário</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-4 border-2 rounded-lg font-medium transition-all ${
                    selectedTime === time
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Observações</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Informações adicionais sobre o agendamento..."
                  rows={4}
                />
              </CardContent>
            </Card>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>Voltar</Button>
              <Button onClick={handleConfirm} disabled={!selectedTime}>
                Confirmar Agendamento
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Agendamento Confirmado!</h2>
                <p className="text-gray-600 mb-6">Você receberá um lembrete um dia antes</p>
                <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto text-left">
                  <h3 className="font-semibold text-gray-900 mb-4">Detalhes do Agendamento</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <PawPrint className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600">Pet:</span>
                      <span className="font-medium text-gray-900">{pets.find(p => p.value === selectedPet)?.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600">Data:</span>
                      <span className="font-medium text-gray-900">{selectedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-600">Horário:</span>
                      <span className="font-medium text-gray-900">{selectedTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 justify-center mt-6">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Novo Agendamento
                  </Button>
                  <Button onClick={() => window.location.href = '/client'}>
                    Voltar ao Início
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
