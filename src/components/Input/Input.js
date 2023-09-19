import {
  View,
  Text,
  TextInput,
} from 'react-native';
import StyleInput from './StyleInput';

const Input = (props) => {

  return (
    <View style={StyleInput.container}>
      <Text style={StyleInput.label}>{props.label}</Text>
      <TextInput style={StyleInput.input} value={props.value} onChangeText={props.onChangeText} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry}></TextInput>
    </View>
  );
}

export default Input;