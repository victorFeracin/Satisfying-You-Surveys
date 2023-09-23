import { StyleSheet } from 'react-native';

const StyleSearchInput = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginVertical: 2,
    height: 40,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    color: '#8B8B8B',
  },
  icon: {
    marginRight: 4,
  },
  button: {
    padding: 6,
  },
});

export default StyleSearchInput;