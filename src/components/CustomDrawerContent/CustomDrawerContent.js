import { useState, useEffect } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import CustomDrawerItem from '../CustomDrawerItem/CustomDrawerItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyleCustomDrawerContent from './StyleCustomDrawerContent';
import { useAuth } from '../../hooks/auth';

const CustomDrawerContent = ({ navigation }) => {
  const { user } = useAuth();

  return (
    <View style={StyleCustomDrawerContent.container}>
      <View style={StyleCustomDrawerContent.drawerHeader}>
        <Text style={StyleCustomDrawerContent.headerText}>{user.email}</Text>
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