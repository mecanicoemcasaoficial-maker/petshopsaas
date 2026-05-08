import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">A página que você procura não existe ou foi movida.</p>

        <div className="flex items-center justify-center gap-4">
          <Link to="/">
            <Button variant="primary">
              <Home className="w-4 h-4 mr-2" />
              Ir para Início
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}
