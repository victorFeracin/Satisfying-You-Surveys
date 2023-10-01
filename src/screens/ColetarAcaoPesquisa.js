import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function ColetarAcaoPesquisa(props) {
  const {card} = props.route.params;
  const states = [
    {
      icon: 'emoticon-angry-outline',
      color: '#D71616',
      title: 'Péssimo',
    },
    {
      icon: 'emoticon-sad-outline',
      color: '#FF360A',
      title: 'Ruim',
    },
    {
      icon: 'emoticon-neutral-outline',
      color: '#FFC632',
      title: 'Neutro',
    },
    {
      icon: 'emoticon-happy-outline',
      color: '#37BD6D',
      title: 'Bom',
    },
    {
      icon: 'emoticon-excited-outline',
      color: '#25BC22',
      title: 'Excelente',
    },
  ];

  return (
    <SafeAreaView style={styled.container}>
      <Text style={styled.title}>O que você achou do {card.title}?</Text>
      <View style={styled.content}>
        <View style={styled.wrapperScrollView}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 78,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {states.map((state, index) => (
              <TouchableOpacity
                key={index}
                style={styled.wrapperIcon}
                onPress={() => props.navigation.navigate('Agradecimento')}>
                <MaterialCommunityIcons
                  name={state.icon}
                  size={70}
                  color={state.color}
                />
                <Text style={styled.iconText}>
                  {state.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312464',
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 24,
    fontSize: 32,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperScrollView: {
    height: '40%',
    width: '100%',
  },
  wrapperIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFF',
    textAlign: 'center',
  },
});
