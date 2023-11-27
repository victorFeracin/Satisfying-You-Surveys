import {useState} from 'react';
import FormContainer from '../components/FormContainer/FormContainer';
import AcoesCard from '../components/AcoesCard/AcoesCard';
import {StyleSheet, SafeAreaView, Text, View, ScrollView} from 'react-native';

const AcoesPesquisa = props => {
  const {card} = props.route.params;
  
  const goToLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={StyleAcoesPesquisa.container}>
        <AcoesCard card={card}/>
    </SafeAreaView>
  );
};

const StyleAcoesPesquisa = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#372775',
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AcoesPesquisa;
