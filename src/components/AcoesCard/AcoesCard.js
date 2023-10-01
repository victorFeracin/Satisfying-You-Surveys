import {Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyleAcoesCard from './StyleAcoesCard';
import {useNavigation} from '@react-navigation/native';

const AcoesCard = props => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      style={StyleAcoesCard.container}
      contentContainerStyle={{
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        style={StyleAcoesCard.containerCard}
        onPress={props.onPress}>
        <Icon name="edit-document" size={50} color="#FFFFFF" />
        <Text style={StyleAcoesCard.title}>Modificar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={StyleAcoesCard.containerCard}
        onPress={() =>
          navigation.navigate('ColetarAcaoPesquisa', {card: props.card})
        }>
        <Icon name="library-add-check" size={50} color="#FFFFFF" />
        <Text style={StyleAcoesCard.title}>Coletar Dados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={StyleAcoesCard.containerCard}
        onPress={props.onPress}>
        <Icon name="donut-large" size={50} color="#FFFFFF" />
        <Text style={StyleAcoesCard.title}>Relatório</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AcoesCard;
