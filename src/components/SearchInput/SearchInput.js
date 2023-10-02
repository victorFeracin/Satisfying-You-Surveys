import {
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyleSearchInput from './StyleSearchInput';

const SearchInput = (props) => {

  return (
    <View style={StyleSearchInput.container}>
      <TouchableOpacity style={StyleSearchInput.button} onPress={() => {/* Adicione a lógica de pesquisa aqui */}}>
        <Icon name="search" size={20} color="#8B8B8B"/>
      </TouchableOpacity>
      <TextInput
        style={StyleSearchInput.input}
        placeholder="Insira o termo de busca..."
        placeholderTextColor="#8B8B8B"
        onChangeText={props.setSearchText}
      />
    </View>
  );
}

export default SearchInput;