import {useState} from 'react';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import Input from '../components/Input/Input';
import InputDate from '../components/InputDate/InputDate';
import InputImage from '../components/inputImage/inputImage';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import DeleteModal from '../components/DeleteModal/DeleteModal';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'O nome precisa conter no mínimo 3 caracteres')
    .required('Preencha o campo Nome'),
});

const ModificarPesquisa = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});
  const [name, setName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    setModalVisible(false);
  };

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <FormContainer padding={30}>
      <Input control={control} name='name' error={errors?.name?.message} label="Nome" value={name} onChangeText={setName} />
      <InputDate />
      <InputImage />

      <View style={containerButtons.containerTO}>
        <View style={{width: '80%'}}>
          <Btn
            txt="CADASTRAR"
            backgroundColor="#37BD6D"
            padding={10}
            marginTop={0}
            action={handleSubmit(onSubmit)}
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
