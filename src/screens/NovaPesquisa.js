import {useEffect, useState} from 'react';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import Input from '../components/Input/Input';
import InputDate from '../components/InputDate/InputDate';
import InputImage from '../components/inputImage/inputImage';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {StyleSheet, Text} from 'react-native';
import {usePesquisa} from '../hooks/pesquisa';
import {useAuth} from '../hooks/auth';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'O nome precisa conter no mínimo 3 caracteres')
    .required('Preencha o campo Nome'),
});
const NovaPesquisa = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});
  const [name, setName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState(false);
  const {handleCreatePesquisa} = usePesquisa();
  const {user} = useAuth();
  const onSubmit = async data => {
    await handleCreatePesquisa({name: data.name, userId: user.id, imageUrl: selectedImage, date: selectedDate || new Date()});
  };

  return (
    <FormContainer padding={30}>
      <Input
        control={control}
        name="name"
        error={errors?.name?.message}
        label="Nome"
        value={name}
        onChangeText={setName}
      />

      <InputDate
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />

      <InputImage
        setSelectedImage={setSelectedImage}
        setError={setError}
        selectedImage={selectedImage}
      />
      {!!error && <Text style={styled.error}>Escolha ou Tire uma foto</Text>}

      <Btn
        txt="CADASTRAR"
        backgroundColor="#37BD6D"
        padding={10}
        marginTop={30}
        action={() => {
          if (!selectedImage) setError(true);
          handleSubmit(onSubmit)();
        }}
      />
    </FormContainer>
  );
};

export default NovaPesquisa;

const styled = StyleSheet.create({
  error: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    marginTop: 5,
    color: '#FD7979',
    marginTop: 12,
  },
});
