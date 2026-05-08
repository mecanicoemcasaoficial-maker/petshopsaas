import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { SuperAdminDashboard } from './pages/super-admin/SuperAdminDashboard';
import { PetShops } from './pages/super-admin/PetShops';
import { Users } from './pages/super-admin/Users';
import { SuperAdminSettings } from './pages/super-admin/SuperAdminSettings';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { Clients } from './pages/admin/Clients';
import { ClientProfile } from './pages/admin/ClientProfile';
import { Pets } from './pages/admin/Pets';
import { Schedule } from './pages/admin/Schedule';
import { Orders } from './pages/admin/Orders';
import { Notifications } from './pages/admin/Notifications';
import { Settings } from './pages/admin/Settings';
import { ClientDashboard } from './pages/client/ClientDashboard';
import { Profile } from './pages/client/Profile';
import { MyPets } from './pages/client/MyPets';
import { Subscriptions } from './pages/client/Subscriptions';
import { Rewards } from './pages/client/Rewards';
import { MyOrders } from './pages/client/MyOrders';
import { ScheduleAppointment } from './pages/client/ScheduleAppointment';
import { NotFound } from './pages/NotFound';

function RoleBasedRedirect() {
  const userStr = localStorage.getItem('user');

  if (!userStr) {
    return <Navigate to="/login" replace />;
  }

  try {
    const user = JSON.parse(userStr);

    switch (user.role) {
      case 'super-admin':
        return <Navigate to="/super-admin" replace />;
      case 'admin':
        return <Navigate to="/admin" replace />;
      case 'client':
        return <Navigate to="/client" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  } catch {
    return <Navigate to="/login" replace />;
  }
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RoleBasedRedirect />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },

  // Super Admin Routes
  {
    path: '/super-admin',
    element: (
      <ProtectedRoute allowedRoles={['super-admin']}>
        <SuperAdminDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/super-admin/petshops',
    element: (
      <ProtectedRoute allowedRoles={['super-admin']}>
        <PetShops />
      </ProtectedRoute>
    )
  },
  {
    path: '/super-admin/users',
    element: (
      <ProtectedRoute allowedRoles={['super-admin']}>
        <Users />
      </ProtectedRoute>
    )
  },
  {
    path: '/super-admin/subscriptions',
    element: (
      <ProtectedRoute allowedRoles={['super-admin']}>
        <div>Subscriptions Page - Em desenvolvimento</div>
      </ProtectedRoute>
    )
  },
  {
    path: '/super-admin/settings',
    element: (
      <ProtectedRoute allowedRoles={['super-admin']}>
        <SuperAdminSettings />
      </ProtectedRoute>
    )
  },

  // Admin Routes
  {
    path: '/admin',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/schedule',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <Schedule />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/clients',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <Clients />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/clients/:id',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <ClientProfile />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/pets',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <Pets />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <Orders />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/notifications',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <Notifications />
      </ProtectedRoute>
    )
  },
  {
    path: '/admin/settings',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <Settings />
      </ProtectedRoute>
    )
  },

  // Client Routes
  {
    path: '/client',
    element: (
      <ProtectedRoute allowedRoles={['client']}>
        <ClientDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/client/pets',
    element: (
      <ProtectedRoute allowedRoles={['client']}>
        <MyPets />
      </ProtectedRoute>
    )
  },
  {
    path: '/client/pets/:id',
    element: (
      <ProtectedRoute allowedRoles={['client']}>
        <div>Pet Profile Page - Em desenvolvimento</div>
      </ProtectedRoute>
    )
  },
  {
    path: '/client/schedule',
    element: (
      <ProtectedRoute allowedRoles={['client']}>
        <ScheduleAppointment />
      </ProtectedRoute>
    )
  },
  {
    path: '/client/orders',
    element: (
      <ProtectedRoute allowedRoles={['client']}>
        <MyOrders />
      </ProtectedRoute>
    )
  },
  {
    path: '/client/subscriptions',
    element: (
      <ProtectedRoute allowedRoles={['client']}>
        <Subscriptions />
      </ProtectedRoute>
    )
  },
  {
    path: '/client/rewards',
    element: (
      <ProtectedRoute allowedRoles={['client']}>
        <Rewards />
      </ProtectedRoute>
    )
  },
  {
    path: '/client/settings',
    element: (
      <ProtectedRoute allowedRoles={['client']}>
        <Profile />
      </ProtectedRoute>
    )
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
