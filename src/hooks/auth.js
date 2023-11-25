import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {createUser, login, resetPassword} from '../API/autenticacao';

import {createContext, useContext, useState} from 'react';

const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState('');
  const navigation = useNavigation();

  const handleLogin = async ({email, password}) => {
    const userData = await login(email, password);
    if (userData) {
      setUser({
        id: userData.uid,
        email: userData.email
      });
      navigation.navigate('Drawer');
    } else {
      Alert.alert('Ops', 'Erro ao realizar login, tente novamente', [
        {
          text: 'Ok',
          onPress: () => {},
        },
      ]);
    }
  };

  const handleRegister = async ({email, password}) => {
    const userData = await createUser(email, password);
    if (userData.uid) {
      navigation.navigate('Login');
    } else {
      Alert.alert('Ops', 'Erro ao criar uma conta, tente novamente', [
        {
          text: 'Ok',
          onPress: () => {},
        },
      ]);
    }
  };

  const handleResetPassword = async email => {
    const isSended = await resetPassword(email);

    if (isSended) {
      Alert.alert('', 'Foi enviado um link no seu email para recuperar a conta', [
        {
          text: 'Ok',
          onPress: () => {
            navigation.navigate('Login');
          },
        },
      ]);
    } else {
      Alert.alert('Ops', 'Erro ao recuperar senha, tente novamente', [
        {
          text: 'Ok',
          onPress: () => {},
        },
      ]);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        handleLogin,
        handleRegister,
        handleResetPassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const content = useContext(AuthContext);
  return content;
};
