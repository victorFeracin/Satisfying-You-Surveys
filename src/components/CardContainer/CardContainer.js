import { ScrollView } from "react-native";
import StyleCardContainer from "./StyleCardContainer";

const CardContainer = (props) => {

  return (
    <ScrollView horizontal style={StyleCardContainer.container}>
      {props.children}
    </ScrollView>
  );
}

export default CardContainer;