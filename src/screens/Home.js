//Importação
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useState} from 'react';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import SearchInput from '../components/SearchInput/SearchInput';

/*Definição da função de criação do componente*/
const Home = () => {
  const [txtPeso, setPeso] = useState('');
  const [txtAltura, setAltura] = useState('');
  const [imc, setIMC] = useState('');

  const calcIMC = () => {
    let peso = parseFloat(txtPeso);
    let altura = parseFloat(txtAltura);

    let result = (peso / (altura * altura)).toString();

    setIMC(result);
  };

  return (
    <FormContainer>
      <SearchInput/>
    </FormContainer>
  );
};

export default Home;



//Exportação do componente
// export default App;

// const App = () => {

//   return (
//     <ViewComponent>
//       <Image style={{width: 50, height: 50}} source={{ uri:'https://reactnative.dev/img/tiny_logo.png' }}/>
//       <Text>Altura:</Text>
//     </ViewComponent>
//   )
// }

// export default App;

// const App = () => {
//   return (
//       <View style={estilos.container}>
//           <View style={estilos.subcontainer1}>
//               <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
//               <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
//               <View style={{ width: 50, height: 50, backgroundColor: 'green' }}></View>
//           </View>

//           <View style={estilos.subcontainer2}>
//               <View style={{ width: 50, height: 50, backgroundColor: 'brown' }}></View>
//               <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
//               <View style={{ width: 50, height: 50, backgroundColor: 'magenta' }}></View>
//           </View>
//       </View>
//   )
// }

// const estilos = StyleSheet.create({
//   container: {
//       flex: 1,
//       backgroundColor: 'white',
//       flexDirection: 'row',
//       alignItems: 'flex-end'

//   },
//   subcontainer1: {
//       flex: 1,
//       height: '50%',
//       backgroundColor: 'gray',
//       flexDirection: 'row',
//       justifyContent: 'space-between',

//   },
//   subcontainer2: {
//       flex: 1,
//       height: '50%',
//       backgroundColor: 'orange',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       alignItems: 'flex-end'

//   }
// })