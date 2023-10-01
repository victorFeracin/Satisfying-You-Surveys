import {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function Agradecimento(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.goBack();
    }, 3000);
  }, []);

  return (
    <View style={styled.container}>
      <Text style={styled.title}>Obrigado por participar da pesquisa!</Text>
      <Text style={styled.title}>Aguardamos você no próximo ano!</Text>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312464',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  title: {
    marginTop: 24,
    fontSize: 32,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFF',
  },
});
