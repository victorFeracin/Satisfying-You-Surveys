import {StyleSheet} from 'react-native';

const StyleCustomDrawerContent = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B1F5C',
  },
  drawerHeader: {
    backgroundColor: '#2B1F5C',
    padding: 16,
  },
  headerText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    marginTop: 15
  },
  headerDivider: {
    backgroundColor: 'white',
    height: 1,
    marginTop: 25,
  },
  drawerItemLabel: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
  },
});

export default StyleCustomDrawerContent;