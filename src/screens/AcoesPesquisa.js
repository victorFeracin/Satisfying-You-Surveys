import { useState } from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
import AcoesCard from '../components/AcoesCard/AcoesCard';


const AcoesPesquisa = (props) => {

  const goToLogin = () => {
    props.navigation.navigate('Login');
  }

  return (
    <FormContainer padding={30}>

      <AcoesCard/>
    </FormContainer>
  );
}

export default AcoesPesquisa;