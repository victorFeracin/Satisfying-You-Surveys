import {useState} from 'react';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import ErrorText from '../components/ErrorText/ErrorText';
import Input from '../components/Input/Input';

const NovaPesquisa = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const goToLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <FormContainer padding={30}>
      <Input label="E-mail" value={email} onChangeText={setEmail} />
      <Input
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Input
        label="Repetir Senha"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry={true}
      />
      <ErrorText
        message="O campo repetir senha difere da senha."
        color="#FD7979"
      />

      <Btn
        txt="CADASTRAR"
        action={goToLogin}
        backgroundColor="#37BD6D"
        padding={10}
        marginTop={30}
      />
    </FormContainer>
  );
};

export default NovaPesquisa;
