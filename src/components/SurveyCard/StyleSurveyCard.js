import { StyleSheet } from 'react-native';

const StyleSurveyCard = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 238,
    height: 195,
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 5
  },
  date: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#8B8B8B',
    fontSize: 14
  },

});

export default StyleSurveyCard;