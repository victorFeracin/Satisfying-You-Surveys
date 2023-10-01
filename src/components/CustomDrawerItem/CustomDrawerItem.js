import { View, Text, TouchableOpacity  } from 'react-native';
import StyleCustomDrawerItem from './StyleCustomDrawerItem';

const CustomDrawerItem = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={StyleCustomDrawerItem.drawerItem}>
        {icon}
        <Text style={StyleCustomDrawerItem.drawerItemLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;