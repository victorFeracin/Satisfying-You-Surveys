//Importação
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useState} from 'react';
import Btn from '../components/Btn/Btn';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <PaperProvider theme={theme}>
      <View style={style.container}>
        <View style={style.imgContainer}>
          <Icon name="weight-kilogram" size={80} color="#555555" />
        </View>

        <Text style={[style.texto, style.labelInput]}>Peso:</Text>
        <TextInput
          style={[style.texto, style.inputStyle]}
          value={txtPeso}
          onChangeText={setPeso}
          placeholder='Ex: 75'
        />

        <Text style={[style.texto, style.labelInput]}>Altura:</Text>
        <TextInput
          style={[style.texto, style.inputStyle]}
          value={txtAltura}
          onChangeText={setAltura}
          placeholder='Ex: 175'
        />

        <Btn txt="CALCULAR" action={calcIMC} />

        <Text style={[style.texto, style.txtResult]}>{imc}</Text>
      </View>
    </PaperProvider>
  );
};

const style = StyleSheet.create({
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
  },
  texto: {
    fontSize: 24,
    fontFamily: 'AveriaLibre-Regular',
  },
  labelInput: {
    marginTop: 10
  },    
  inputStyle: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#387392',
    color: '#555555',
    marginTop: 5,
  },
  container: {
    padding: 10,
  },
  txtResult: {
    marginTop: 10,
    textAlign: 'center',
  },
});


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