import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { superAdminMenuItems, adminMenuItems, clientMenuItems } from './Sidebar';
import { useAuth, UserRole } from '../../contexts/AuthContext';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user } = useAuth();

  const getMenuItems = (role: UserRole) => {
    switch (role) {
      case 'super-admin':
        return superAdminMenuItems;
      case 'admin':
        return adminMenuItems;
      case 'client':
        return clientMenuItems;
      default:
        return [];
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar items={getMenuItems(user.role)} />
      <Navbar />
      <main className="ml-64 pt-16">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
