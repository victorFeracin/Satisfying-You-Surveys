import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Drawer from './src/screens/Drawer';
import NovaConta from './src/screens/NovaConta';
import RecuperarSenha from './src/screens/RecuperarSenha';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: '#403275',
          headerStyle: {
            backgroundColor: '#2B1D62',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 28,
            color: '#FFFFFF',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Drawer"component={Drawer} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="NovaConta"
          component={NovaConta}
          options={{headerTitle: 'Nova Conta'}}
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{headerTitle: 'Recuperação de senha'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
