import {useState, useEffect} from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
import SearchInput from '../components/SearchInput/SearchInput';
import CardContainer from '../components/CardContainer/CardContainer';
import SurveyCard from '../components/SurveyCard/SurveyCard';
import Btn from '../components/Btn/Btn';
import {useAuth} from '../hooks/auth';
import {usePesquisa} from '../hooks/pesquisa';

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
