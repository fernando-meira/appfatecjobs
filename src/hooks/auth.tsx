import React, { useContext, createContext, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '~/services/api';
import { UserData, UserResponse } from '~/interfaces/User';

interface AuthContextData {
  signOut(): void;
  loginLoading: boolean;
  user: UserData | undefined;
  setUser: (props: UserData) => void;
  signIn: (ra: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData>();
  const [loginLoading, setLoginLoading] = useState(false);

  console.log('user', user);

  const signIn = useCallback(async (ra: string, senha: string) => {
    try {
      setLoginLoading(true);

      const response = await api.post<UserResponse>('aluno/login', {
        ra,
        senha,
      });

      const userData = response.data.response.data[0];

      setUser(userData);

      return true;
    } catch (error) {
      Alert.alert(
        'Erro de login',
        'Verifique as credenciais e tente novamente!',
      );

      return false;
    } finally {
      setLoginLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@fatecJobs:token', '@fatecJobs:user']);

    setUser({} as UserData);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        setUser,
        loginLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
