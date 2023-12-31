import { useState } from 'react';
import Btn from '../components/Btn/Btn';
import FormContainer from '../components/FormContainer/FormContainer';
import Input from '../components/Input/Input';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { resetPassword } from '../API/autenticacao.js'
import { useAuth } from '../hooks/auth';

const schema = Yup.object().shape({
  email: Yup.string().email('Deve ser um email válido').required('Preencha o campo E-mail'),
})

const RecuperarSenha = (props) => {
  const {handleResetPassword} = useAuth();
  const {control, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

  const onSubmit = async (data) => {
    await handleResetPassword(data.email);
  }

  return (
    <FormContainer padding={30}>

      <Input control={control} name='email' error={errors?.email?.message} label="E-mail"/>

      <Btn txt="RECUPERAR" action={handleSubmit(onSubmit)} backgroundColor="#37BD6D" padding={10} marginTop={30}/>
    </FormContainer>
  );
}

export default RecuperarSenha;