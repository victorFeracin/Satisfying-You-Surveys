import {
  View,
  Text,
  TextInput,
} from 'react-native';
import StyleInput from './StyleInput';
import {Controller} from 'react-hook-form';

const Input = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({field: {value, onChange}}) => (
        <>
          <View style={StyleInput.container}>
          <Text style={StyleInput.label}>{props.label}</Text>
          <TextInput style={StyleInput.input} value={value || props.defaultValue} onChangeText={onChange} placeholder={props.placeholder}  defaultValue={props.defaultValue} secureTextEntry={props.secureTextEntry}></TextInput>
        </View>
        {props.error && <Text style={StyleInput.error}>{props.error}</Text>}
        </>
      )}
    />
  );
}

export default Input;