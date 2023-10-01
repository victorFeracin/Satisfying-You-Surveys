import {StyleSheet} from 'react-native';

const StyleDeleteModal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#372775',
    padding: 20,
  },
  boxButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  label: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 5,
    textAlign: 'center',
  },
  btnDelete: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: 40,
    backgroundColor: '#FF8383',
  },
  btnCancel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: 40,
    backgroundColor: '#3F92C5',
  },
});

export default StyleDeleteModal;
