import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Drawer from './src/screens/Drawer';
import NovaConta from './src/screens/NovaConta';
import RecuperarSenha from './src/screens/RecuperarSenha';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import {ColetarAcaoPesquisa} from './src/screens/ColetarAcaoPesquisa';
import {Agradecimento} from './src/screens/Agradecimento';
import {RelatorioAcaoPesquisa} from './src/screens/RelatorioAcaoPesquisa';
import NovaPesquisa from './src/screens/NovaPesquisa';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import {AppProvider} from './src/hooks';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppProvider>
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
          <Stack.Screen
            name="Drawer"
            component={Drawer}
            options={{headerShown: false}}
          />
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
          <Stack.Screen
            name="AcoesPesquisa"
            component={AcoesPesquisa}
            options={{headerTitle: 'Ações Pesquisa'}}
          />
          <Stack.Screen
            name="NovaPesquisa"
            component={NovaPesquisa}
            options={{headerTitle: 'Nova Pesquisa'}}
          />
          <Stack.Screen
            name="ColetarAcaoPesquisa"
            component={ColetarAcaoPesquisa}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Agradecimento"
            component={Agradecimento}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RelatorioAcaoPesquisa"
            component={RelatorioAcaoPesquisa}
            options={{headerTitle: 'Relatório'}}
          />
          <Stack.Screen
            name="ModificarPesquisa"
            component={ModificarPesquisa}
            options={{headerTitle: 'Modificar Pesquisa'}}
          />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
