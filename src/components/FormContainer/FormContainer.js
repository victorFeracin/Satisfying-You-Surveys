import { View } from "react-native";
import StyleFormContainer from "./StyleFormContainer";

const FormContainer = (props) => {

  return (
    <View style={StyleFormContainer.container}>
      {props.children}
    </View>
  );
}

export default FormContainer;