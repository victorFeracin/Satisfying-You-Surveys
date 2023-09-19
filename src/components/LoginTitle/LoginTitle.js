import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyleLoginTitle from './StyleLoginTitle';

const LoginTitle = () => {
  return (
    <View style={StyleLoginTitle.titleContainer}>
      <Text style={StyleLoginTitle.title}>Satisfying.you</Text>
      <Icon name="sentiment-satisfied-alt" size={50} color="#FFFFFF"/>
    </View>
  );

}

export default LoginTitle;