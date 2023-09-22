import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerActiveTintColor: '#387392',
        headerTintColor: '#FFFFFF',
        headerStyle: { 
          backgroundColor: '#2B1D62',
          elevation: 0,
          shadowOpacity: 0, 
        },
        headerTitleStyle: {
          display: 'none',
        },
      }}>

      <DrawerNavigator.Screen
        name="Home"
        component={Home}
        options={{drawerLabel: 'Hoamasae'}}
      />

    </DrawerNavigator.Navigator>
  );
};

export default Drawer;
