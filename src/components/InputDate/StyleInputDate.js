import {StyleSheet} from 'react-native';

const StyleInputDate = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  label: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    padding: 10,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    width: '88%',
  },
});

export default StyleInputDate;
