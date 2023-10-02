import { useState } from 'react';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import Input from '../components/Input/Input';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email('Deve ser um email válido').required('Preencha o campo E-mail'),
  password: Yup.string().min(3, 'A senha precisa conter pelo menos 3 caracteres').required('Preencha o campo Senha'),
  passwordConfirm: Yup.string().required('Preencha o campo Repetir Senha').oneOf([Yup.ref('password')], 'O campo Repetir Senha difere da senha'),
})

const NovaConta = (props) => {

  const {control, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onSubmit = (data) => {
    goToLogin();
  }

  const goToLogin = () => {
    props.navigation.navigate('Login');
  }

  return (
    <FormContainer padding={30}>

      <Input control={control} name='email' error={errors?.email?.message} label="E-mail" value={email} onChangeText={setEmail}/>
      <Input control={control} name='password' error={errors?.password?.message} label="Senha" value={password} onChangeText={setPassword} secureTextEntry={true}/>
      <Input control={control} name='passwordConfirm' error={errors?.passwordConfirm?.message} label="Repetir Senha" value={repeatPassword} onChangeText={setRepeatPassword} secureTextEntry={true}/>

      <Btn txt="CADASTRAR" action={handleSubmit(onSubmit)} backgroundColor="#37BD6D" padding={10} marginTop={30}/>
    </FormContainer>
  );
}

export default NovaConta;