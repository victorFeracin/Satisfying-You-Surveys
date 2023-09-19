import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";


const DrawerNavigator= createDrawerNavigator();

const Drawer = () => {

  return (
    <DrawerNavigator.Navigator screenOptions={{drawerActiveTintColor: "#387392", headerTintColor: '#FFFFFF', headerStyle: { backgroundColor: "#387392"} }}>
      <DrawerNavigator.Screen name="Home" component={Home}/>
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;