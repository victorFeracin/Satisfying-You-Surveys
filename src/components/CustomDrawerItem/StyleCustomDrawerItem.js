import {StyleSheet} from 'react-native';

const StyleCustomDrawerItem = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    marginLeft: 30,
    marginBottom: 30
  },
  drawerItemLabel: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    marginLeft: 10,
  }
});

export default StyleCustomDrawerItem;