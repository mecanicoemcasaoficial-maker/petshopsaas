import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { cn } from '../../lib/utils';
import {
  LayoutDashboard,
  Users,
  Store,
  DollarSign,
  Settings,
  Calendar,
  Package,
  Bell,
  Award,
  ShoppingBag,
  PawPrint,
  CreditCard
} from 'lucide-react';

interface SidebarItem {
  icon: ReactNode;
  label: string;
  path: string;
}

interface SidebarProps {
  items: SidebarItem[];
  logo?: string;
  title?: string;
}

export function Sidebar({ items, logo, title = 'PetShop SaaS' }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
            <PawPrint className="w-6 h-6 text-white" />
          </div>
          <span className="font-semibold text-gray-900">{title}</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {items.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all',
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <span className={cn('w-5 h-5', isActive && 'text-blue-600')}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-900 mb-1">Precisa de ajuda?</p>
          <p className="text-xs text-blue-700 mb-3">Acesse nossa central de suporte</p>
          <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Suporte
          </button>
        </div>
      </div>
    </aside>
  );
}

export const superAdminMenuItems: SidebarItem[] = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', path: '/super-admin' },
  { icon: <Store className="w-5 h-5" />, label: 'PetShops', path: '/super-admin/petshops' },
  { icon: <Users className="w-5 h-5" />, label: 'Usuários', path: '/super-admin/users' },
  { icon: <DollarSign className="w-5 h-5" />, label: 'Assinaturas', path: '/super-admin/subscriptions' },
  { icon: <Settings className="w-5 h-5" />, label: 'Configurações', path: '/super-admin/settings' }
];

export const adminMenuItems: SidebarItem[] = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', path: '/admin' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Agenda', path: '/admin/schedule' },
  { icon: <Users className="w-5 h-5" />, label: 'Clientes', path: '/admin/clients' },
  { icon: <PawPrint className="w-5 h-5" />, label: 'Pets', path: '/admin/pets' },
  { icon: <Package className="w-5 h-5" />, label: 'Pedidos', path: '/admin/orders' },
  { icon: <Bell className="w-5 h-5" />, label: 'Notificações', path: '/admin/notifications' },
  { icon: <Settings className="w-5 h-5" />, label: 'Configurações', path: '/admin/settings' }
];

export const clientMenuItems: SidebarItem[] = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Início', path: '/client' },
  { icon: <PawPrint className="w-5 h-5" />, label: 'Meus Pets', path: '/client/pets' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Agendar', path: '/client/schedule' },
  { icon: <ShoppingBag className="w-5 h-5" />, label: 'Pedidos', path: '/client/orders' },
  { icon: <CreditCard className="w-5 h-5" />, label: 'Assinaturas', path: '/client/subscriptions' },
  { icon: <Award className="w-5 h-5" />, label: 'Recompensas', path: '/client/rewards' },
  { icon: <Settings className="w-5 h-5" />, label: 'Meu Perfil', path: '/client/settings' }
];
