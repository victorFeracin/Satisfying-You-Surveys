import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import CustomDrawerItem from '../CustomDrawerItem/CustomDrawerItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyleCustomDrawerContent from './StyleCustomDrawerContent';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={StyleCustomDrawerContent.container}>
      <View style={StyleCustomDrawerContent.drawerHeader}>
        <Text style={StyleCustomDrawerContent.headerText}>usuario@dominio.com</Text>
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