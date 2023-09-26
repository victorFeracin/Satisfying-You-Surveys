import { useState } from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
import SearchInput from '../components/SearchInput/SearchInput';
import CardContainer from '../components/CardContainer/CardContainer';
import SurveyCard from '../components/SurveyCard/SurveyCard';
import Btn from '../components/Btn/Btn';

/*Definição da função de criação do componente*/
const Home = (props) => {

  const goToAcoesPesquisa = (link) => {
    props.navigation.navigate(link)
  }
  const goToNovaPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa');
  }

  const cardsTest = [
      {
        img: require('../../assets/images/Secomp.png'),
        title: 'SECOMP 2023',
        date: '10/10/2023',
        link: 'Login'
      },
      {
        img: require('../../assets/images/Ubuntu.png'),
        title: 'UBUNTU 2022',
        date: '05/06/2022',
        link: 'NovaConta'
      },
      {
        img: require('../../assets/images/MeninasCpu.png'),
        title: 'MENINAS CPU',
        date: '15/08/2023',
        link: 'Login'
      },
      {
        img: require('../../assets/images/Secomp.png'),
        title: 'Teste 202424244',
        date: '07/07/2024',
        link: 'Login'
      },
  ] //REMOVER QUANDO CHAMAR API

  return (
    <FormContainer padding={15}>
      <SearchInput/>

      <CardContainer>
        {cardsTest.map((card, index) => {
          return(
            <SurveyCard key={index} img={card?.img} title={card?.title} date={card?.date} onPress={() => goToAcoesPesquisa(card?.link)}/>
          )
        })} 
      </CardContainer>
      
      <Btn txt="NOVA PESQUISA" action={goToNovaPesquisa} backgroundColor="#37BD6D" padding={10} marginTop={30}/>

    </FormContainer>
  );
};

export default Home;