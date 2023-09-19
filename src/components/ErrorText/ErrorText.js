import { Text } from 'react-native';
import StyleErrorText from './StyleErrorText';

const ErrorText = (props) => {

  return (
    <>
      <Text style={[StyleErrorText.text, {color: props.color}]}>{props.message}</Text>
    </>
  );
}

export default ErrorText;