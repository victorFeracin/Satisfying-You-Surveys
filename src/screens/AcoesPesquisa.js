import { useState } from 'react';
import FormContainer from '../components/FormContainer/FormContainer';


const AcoesPesquisa = (props) => {

  const goToLogin = () => {
    props.navigation.navigate('Login');
  }

  return (
    <FormContainer padding={30}>

      
    </FormContainer>
  );
}

export default AcoesPesquisa;