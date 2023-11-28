import {useEffect, useState} from 'react';
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
import { usePesquisa } from '../hooks/pesquisa';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'O nome precisa conter no mínimo 3 caracteres')
    .required('Preencha o campo Nome'),
});

const ModificarPesquisa = props => {
  const {card} = props.route.params;
 
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});
  const [name, setName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(card.date);
  const [selectedImage, setSelectedImage] = useState(card.image);
  const {handleChangePesquisa, handleDeletePesquisa} = usePesquisa();
  const handleDelete = () => {
    handleDeletePesquisa(card.id)
  };

  const onSubmit = async data => {
    await handleChangePesquisa({id: card.id, name: data.name, date: selectedDate,image: selectedImage})
  };

  useEffect(() => {
    setValue("name", card.name);
  },[])

  return (
    <FormContainer padding={30}>
      <Input
        control={control}
        name="name"
        error={errors?.name?.message}
        label="Nome"
        value={name || card.name}
        onChangeText={setName}
        defaultValue={card.name}
      />
      <InputDate
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      <InputImage
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
      />

      <View style={containerButtons.containerTO}>
        <View style={{width: '80%'}}>
          <Btn
            txt="SALVAR"
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
