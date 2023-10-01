import {useState} from 'react';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import ErrorText from '../components/ErrorText/ErrorText';
import Input from '../components/Input/Input';
import InputDate from '../components/InputDate/InputDate';
import InputImage from '../components/inputImage/inputImage';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DeleteModal from '../components/DeleteModal/DeleteModal';

const ModificarPesquisa = props => {
  const [name, setName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    setModalVisible(false);
  };

  return (
    <FormContainer padding={30}>
      <Input label="Nome" value={name} onChangeText={setName} />
      <InputDate />
      <InputImage />

      <View style={containerButtons.containerTO}>
        <View style={{width: '80%'}}>
          <Btn
            txt="CADASTRAR"
            backgroundColor="#37BD6D"
            padding={10}
            marginTop={0}
          />
        </View>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={containerButtons.box}>
            <Icon color="#FFFFFF" name="delete" size={30} />
            <Text style={{color: 'white', fontFamily: 'AveriaLibre-Regular'}}>
              Apagar
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <DeleteModal
        isVisible={isModalVisible}
        onCancel={() => setModalVisible(false)}
        onConfirm={handleDelete}
      />
    </FormContainer>
  );
};

const containerButtons = StyleSheet.create({
  containerTO: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '21%',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModificarPesquisa;
