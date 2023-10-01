import {View, Text, StyleSheet} from 'react-native';
import {VictoryPie, VictoryTooltip} from 'victory-native';
export function RelatorioAcaoPesquisa() {
  const states = [
    {
      color: '#53D8D8',
      title: 'Péssimo',
    },
    {
      color: '#EA7288',
      title: 'Ruim',
    },
    {
      color: '#5FCDA4',
      title: 'Neutro',
    },
    {
      color: '#6994FE',
      title: 'Bom',
    },
    {
      color: '#F1CE7E',
      title: 'Excelente',
    },
  ];

  return (
    <View style={styled.container}>
      <View style={styled.chart}>
        <VictoryPie
          data={[
            {x: 'Excelente', y: 35},
            {x: 'Bom', y: 40},
            {x: 'Neutro', y: 55},
            {x: 'Ruim', y: 30},
            {x: 'Péssimo', y: 65},
          ]}
          colorScale={['#F1CE7E', '#6994FE', '#5FCDA4', '#EA7288', '#53D8D8']}
          labelComponent={<VictoryTooltip renderInPortal={false} />}
        />
        <View style={styled.wrapperStates}>
          {states.map(state => (
            <View key={state.title} style={styled.state}>
              <View style={[styled.color, {backgroundColor: state.color}]} />
              <Text style={styled.title}>{state.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#372775',
  },
  wrapperChart: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperStates: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 16,
  },
  state: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {
    width: 24,
    height: 24,
  },
  title: {
    marginLeft: 8,
    fontSize: 24,
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFF',
  },
});
