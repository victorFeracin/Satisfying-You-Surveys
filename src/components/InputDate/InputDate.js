import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import StyleInputDate from './StyleInputDate';
import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from 'react';

const InputDate = props => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selected) => {
    const currentDate = selected || selectedDate;
    setSelectedDate(currentDate);
    setShowDatePicker(false);
  };

  const formatDate = date => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={StyleInputDate.container}>
      <Text style={StyleInputDate.label}>Data</Text>
      <View style={StyleInputDate.dateContainer}>
        <TextInput
          style={StyleInputDate.input}
          value={formatDate(selectedDate)}
        />
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Icon color="#999998" name="calendar" size={30} />
        </TouchableOpacity>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

export default InputDate;
