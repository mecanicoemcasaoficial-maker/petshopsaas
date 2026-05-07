import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'super-admin' | 'admin' | 'client';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  petshopId?: string;
  petshopName?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      let mockUser: User;

      if (email === 'superadmin@petshop.com') {
        mockUser = {
          id: '1',
          name: 'Super Admin',
          email: email,
          role: 'super-admin',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin'
        };
      } else if (email === 'admin@petshop.com') {
        mockUser = {
          id: '2',
          name: 'João Silva',
          email: email,
          role: 'admin',
          petshopId: 'ps1',
          petshopName: 'PetShop Premium',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=joao'
        };
      } else {
        mockUser = {
          id: '3',
          name: 'Maria Santos',
          email: email,
          role: 'client',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria'
        };
      }

      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        role,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
      };

      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
