import {
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import StyleSurveyCard from './StyleSurveyCard';

const SurveyCard = (props) => {

  return (
    <TouchableOpacity style={StyleSurveyCard.container} onPress={props.onPress}>
      <Image style={StyleSurveyCard.img} source={props.img} resizeMode='contain'/>
      <Text style={StyleSurveyCard.title}>{props.title.toUpperCase()}</Text>
      <Text style={StyleSurveyCard.date}>{props.date}</Text>
    </TouchableOpacity>
  );
}

export default SurveyCard;