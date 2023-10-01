import {useState} from 'react';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import ErrorText from '../components/ErrorText/ErrorText';
import Input from '../components/Input/Input';
import InputDate from '../components/InputDate/InputDate';
import InputImage from '../components/inputImage/inputImage';

const NovaPesquisa = props => {
  const [name, setName] = useState('');

  return (
    <FormContainer padding={30}>
      <Input label="Nome" value={name} onChangeText={setName} />
      <ErrorText message="Preencha o nome da pesquisa" color="#FD7979" />

      <InputDate />
      <ErrorText message="Preencha a data" color="#FD7979" />

      <InputImage />

      <Btn
        txt="CADASTRAR"
        backgroundColor="#37BD6D"
        padding={10}
        marginTop={30}
      />
    </FormContainer>
  );
};

export default NovaPesquisa;
