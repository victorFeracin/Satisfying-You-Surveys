import { useState } from 'react';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import ErrorText from '../components/ErrorText/ErrorText';
import Input from '../components/Input/Input';


const RecuperarSenha = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const goToLogin = () => {
    props.navigation.navigate('Login');
  }

  return (
    <FormContainer padding={30}>

      <Input label="E-mail" value={email} onChangeText={setEmail}/>
      <ErrorText message="E-mail parece ser inválido." color="#FD7979"/>

      <Btn txt="RECUPERAR" action={goToLogin} backgroundColor="#37BD6D" padding={10} marginTop={30}/>
    </FormContainer>
  );
}

export default RecuperarSenha;