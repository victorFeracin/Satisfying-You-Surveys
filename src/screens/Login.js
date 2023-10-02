import { useState } from 'react';
import LoginTitle from '../components/LoginTitle/LoginTitle';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import Input from '../components/Input/Input';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email('Deve ser um email válido').required('Preencha o campo E-mail'),
  password: Yup.string().required('Preencha o campo Senha')
})

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {control, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

  const onSubmit = (data) => {
    goToHome();
  }

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

    <FormContainer padding={30}>
      <LoginTitle/>

      <Input control={control} name='email' error={errors?.email?.message} label="E-mail" value={email} onChangeText={setEmail}/>
      <Input control={control} name='password' error={errors?.password?.message} label="Senha" value={password} onChangeText={setPassword} secureTextEntry={true}/>

      <Btn txt="Entrar" action={handleSubmit(onSubmit)} backgroundColor="#37BD6D" padding={10} marginTop={30}/>
      <Btn txt="Criar minha conta" action={goToNovaConta} backgroundColor="#419ED7" padding={5} marginTop={60}/>
      <Btn txt="Esqueci minha senha" action={goToRecuperarSenha} backgroundColor="#B0CCDE" padding={5} marginTop={10}/>
    </FormContainer>
  );
}

export default Login;