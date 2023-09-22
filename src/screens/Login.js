import { useState } from 'react';
import LoginTitle from '../components/LoginTitle/LoginTitle';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import ErrorText from '../components/ErrorText/ErrorText';
import Input from '../components/Input/Input';


const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToHome = () => {
    props.navigation.navigate('Drawer');
  }
  const goToNovaConta = () => {
    props.navigation.navigate('NovaConta');
  }
  const goToRecuperarSenha = () => {
    props.navigation.navigate('RecuperarSenha')
  }

  return (
    <FormContainer>
      <LoginTitle/>

      <Input label="E-mail" value={email} onChangeText={setEmail}/>
      <Input label="Senha" value={password} onChangeText={setPassword} secureTextEntry={true}/>
      <ErrorText message="E-mail e/ou senha inválidos." color="#FD7979"/>

      <Btn txt="Entrar" action={goToHome} backgroundColor="#37BD6D" padding={10} marginTop={30}/>
      <Btn txt="Criar minha conta" action={goToNovaConta} backgroundColor="#419ED7" padding={5} marginTop={60}/>
      <Btn txt="Esqueci minha senha" action={goToRecuperarSenha} backgroundColor="#B0CCDE" padding={5} marginTop={10}/>
    </FormContainer>
  );
}

export default Login;