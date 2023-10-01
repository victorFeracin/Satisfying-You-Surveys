import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import StyleDeleteModal from './StyleDeleteModal';

const DeleteModal = props => {
  return (
    <Modal isVisible={props.isVisible}>
      <View style={StyleDeleteModal.container}>
        <View style={StyleDeleteModal.box}>
          <Text style={StyleDeleteModal.label}>
            Tem certeza de apagar essa pesquisa?
          </Text>
          <View style={StyleDeleteModal.boxButtons}>
            <TouchableOpacity
              onPress={props.onConfirm}
              style={StyleDeleteModal.btnDelete}>
              <Text style={StyleDeleteModal.label}>SIM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={props.onCancel}
              style={StyleDeleteModal.btnCancel}>
              <Text style={StyleDeleteModal.label}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
