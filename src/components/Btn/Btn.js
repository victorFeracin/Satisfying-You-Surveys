import { TouchableOpacity, Text } from "react-native";
import StyleBtn from "./StyleBtn";

const Btn = (props) => {

  
  return (
    
    <>
      {/* Torna qualquer elemento dentro da TAG tocável */}
      <TouchableOpacity style={[StyleBtn.btn, {backgroundColor: props.backgroundColor, padding: props.padding, marginTop: props.marginTop}]} onPress={props.action}>
        <Text style={StyleBtn.btnText}>{props.txt}</Text>
      </TouchableOpacity>
    </>
    
  )
}

export default Btn;