import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import StyleInputImage from './StyleInputImage';
import {Alert} from 'react-native';

const InputImage = props => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = () => {
    Alert.alert(
      'Selecione',
      'Informe de onde você quer pegar a foto:',
      [
        {
          text: 'Galeria',
          onPress: () => pickImageFromGalery(),
          style: 'default',
        },
        {text: 'Câmera', onPress: () => pickImageFromCam(), style: 'default'},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('tratar'),
      },
    );
  };

  const pickImageFromGalery = async () => {
    const options = {
      mediaType: 'photo',
    };

    const result = await launchImageLibrary(options);

    if (result?.assets) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const pickImageFromCam = async () => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: false,
      cameraType: 'front',
      quality: 1,
    };

    const result = await launchCamera(options);

    if (result?.assets) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={StyleInputImage.container}>
      <Text style={StyleInputImage.label}>Imagem</Text>
      <View style={StyleInputImage.containerImage}>
        <TouchableOpacity onPress={() => handleImageSelect()}>
          {selectedImage ? (
            <Image
              source={{uri: selectedImage}}
              style={{width: 50, height: 50}}
            />
          ) : (
            <Text>Câmera/Galeria de imagens</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputImage;
