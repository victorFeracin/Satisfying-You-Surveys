import { StyleSheet } from 'react-native';

const StyleInput = StyleSheet.create({
  container: {
    marginTop: 15,
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
  },
  error: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    marginTop: 5,
    color: '#FD7979'
  }
});

export default StyleInput;