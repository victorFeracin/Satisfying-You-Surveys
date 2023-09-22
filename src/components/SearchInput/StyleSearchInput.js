import { StyleSheet } from 'react-native';

const StyleSearchInput = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginVertical: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    color: '#8B8B8B',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  button: {
    padding: 8,
  },
});

export default StyleSearchInput;