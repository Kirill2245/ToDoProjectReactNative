// contexts/AuthContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextType {
  isAuthFormOpen: boolean;
  openAuthForm: () => void;
  closeAuthForm: () => void;
  toggleAuthForm: () => void;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  // другие поля пользователя
}

// Создаем контекст с дефолтными значениями
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthFormOpen, setIsAuthFormOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const openAuthForm = () => {
    setIsAuthFormOpen(true);
  };

  const closeAuthForm = () => {
    setIsAuthFormOpen(false);
  };

  const toggleAuthForm = () => {
    setIsAuthFormOpen(prev => !prev);
  };

  const login = (userData: User) => {
    setUser(userData);
    closeAuthForm(); // Закрываем форму после успешного входа
    // Можно добавить сохранение в AsyncStorage
  };

  const logout = () => {
    setUser(null);
    // Можно добавить очистку AsyncStorage
  };

  const value: AuthContextType = {
    isAuthFormOpen,
    openAuthForm,
    closeAuthForm,
    toggleAuthForm,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};