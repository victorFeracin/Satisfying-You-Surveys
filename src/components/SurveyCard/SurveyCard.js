import {Text, Image, TouchableOpacity} from 'react-native';
import StyleSurveyCard from './StyleSurveyCard';

const SurveyCard = props => {
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  return (
    <TouchableOpacity style={StyleSurveyCard.container} onPress={props.onPress}>
      <Image
        style={StyleSurveyCard.img}
        source={{uri: props.img}}
        resizeMode="contain"
      />
      <Text style={StyleSurveyCard.title}>{props.title.toUpperCase()}</Text>
      <Text style={StyleSurveyCard.date}>{formatDate(props.date)}</Text>
    </TouchableOpacity>
  );
};

export default SurveyCard;
