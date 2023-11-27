import {useState, useEffect} from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
import SearchInput from '../components/SearchInput/SearchInput';
import CardContainer from '../components/CardContainer/CardContainer';
import SurveyCard from '../components/SurveyCard/SurveyCard';
import Btn from '../components/Btn/Btn';
import {useAuth} from '../hooks/auth';
import {usePesquisa} from '../hooks/pesquisa';

const cardsTest = [
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/satisfying-you-e4de5.appspot.com/o/teste%20com%20data%202.jpeg?alt=media&token=3b01ca46-aa35-4901-b685-cee131fdc410',
    name: 'SECOMP 2023',
    date: '10/10/2023',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/satisfying-you-e4de5.appspot.com/o/teste%20com%20data.jpeg?alt=media&token=d5a2bbb9-250a-483e-8d43-f76b2c81e55e',
    name: 'UBUNTU 2022',
    date: '05/06/2022',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/satisfying-you-e4de5.appspot.com/o/teste%20asdf.jpeg?alt=media&token=0733b590-5903-4ac9-9f34-8bb4633c43c3',
    name: 'MENINAS CPU',
    date: '15/08/2023',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/satisfying-you-e4de5.appspot.com/o/teste%20098.jpeg?alt=media&token=30606240-0c6f-4107-98d8-eeaed8e0ceb9',
    name: 'Teste 202424244',
    date: '07/07/2024',
  },
]; //REMOVER QUANDO CHAMAR API

/*Definição da função de criação do componente*/
const Home = props => {
  const [searchText, setSearchText] = useState('');
  const [cardsFiltered, setCardsFiltered] = useState([]);
  const {pesquisas} = usePesquisa();
  const goToAcoesPesquisa = card => {
    props.navigation.navigate('AcoesPesquisa', {
      card,
    });
  };
  const goToNovaPesquisa = () => {
    props.navigation.navigate('NovaPesquisa');
  };

  useEffect(() => {
    setCardsFiltered(
      pesquisas.filter(card => card.name.toLowerCase().includes(searchText)),
    );
  }, [searchText]);

  return (
    <FormContainer padding={15}>
      <SearchInput setSearchText={setSearchText} />

      <CardContainer>
        {pesquisas &&
          pesquisas.map((card, index) => {
            return (
              <SurveyCard
                key={index}
                img={card?.image}
                title={card?.name}
                date={card?.date}
                onPress={() => goToAcoesPesquisa(card)}
              />
            );
          })}
      </CardContainer>

      <Btn
        txt="NOVA PESQUISA"
        action={goToNovaPesquisa}
        backgroundColor="#37BD6D"
        padding={10}
        marginTop={30}
      />
    </FormContainer>
  );
};

export default Home;
