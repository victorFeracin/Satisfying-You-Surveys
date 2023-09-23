import { View, ScrollView } from "react-native";
import StyleFormContainer from "./StyleFormContainer";

const FormContainer = (props) => {

  return (
    <ScrollView style={StyleFormContainer.container}>
      <View style={[ {padding: props.padding}]}>
        {props.children}
      </View>
    </ScrollView>
  );
}

export default FormContainer;