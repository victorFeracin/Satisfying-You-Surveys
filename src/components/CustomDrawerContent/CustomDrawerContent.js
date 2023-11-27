import { useState, useEffect } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import CustomDrawerItem from '../CustomDrawerItem/CustomDrawerItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyleCustomDrawerContent from './StyleCustomDrawerContent';
import { getUserEmailAuthenticated } from '../../API/autenticacao.js'
import {Alert} from 'react-native';

const CustomDrawerContent = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await getUserEmailAuthenticated();
      setUserEmail(email);
    };

    fetchUserEmail();
  }, []);

  return (
    <View style={StyleCustomDrawerContent.container}>
      <View style={StyleCustomDrawerContent.drawerHeader}>
        <Text style={StyleCustomDrawerContent.headerText}>{userEmail}</Text>
        <View style={StyleCustomDrawerContent.headerDivider} />
      </View>
      <DrawerContentScrollView>
      <CustomDrawerItem
          label="Pesquisas"
          icon={<Icon name="description" size={30} color="#FFFFFF" />}
          onPress={() => navigation.navigate('Home')}
      />
      </DrawerContentScrollView>
      <CustomDrawerItem
          label="Sair"
          icon={<Icon name="logout" size={30} color="#FFFFFF" />}
          onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default CustomDrawerContent