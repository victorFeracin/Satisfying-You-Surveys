import {useNavigation} from '@react-navigation/native';
import {createContext, useContext, useState, useEffect} from 'react';
import {changePesquisa, deletePesquisa} from '../API/pesquisa';
import {Alert} from 'react-native';
import {addDoc, collection, onSnapshot, query} from 'firebase/firestore';
import {db, storage} from '../API/firebase-config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const PesquisaContext = createContext({});

export function PesquisaProvider({children}) {
  const [pesquisas, setPesquisas] = useState([]);
  const navigation = useNavigation();

  const handleCreatePesquisa = async ({name, userId, imageUrl, date}) => {
    const currentTimestamp = new Date().getTime();
    const imageRef = ref(storage, `${currentTimestamp}_picture.jpeg`);
    const file = await fetch(imageUrl);
    const blob = await file.blob();
    uploadBytes(imageRef, blob, {contentType: 'image/jpeg'})
      .then(() => {
        getDownloadURL(imageRef)
          .then(url => {
            const document = {
              name,
              userId,
              image: url,
              date,
            };
            addDoc(collection(db, 'pesquisa'), document)
              .then(() => {
                navigation.goBack();
              })
              .catch(error => {
                console.log('addDoc ~ error:', error);
              });
          })
          .catch(error => {
            console.log('getDownloadURL ~ error:', error);
          });
      })
      .catch(error => console.log('Error to upload image: ', error));
  };

  const handleChangePesquisa = async ({id, name, date, image}) => {
    const result = changePesquisa(id, name, date, image);
    if (result) {
      navigation.goBack();
    } else {
      Alert.alert('Ops', 'Erro ao alterar pesquisa, tente novament', [
        {
          text: 'Ok',
          onPress: () => {},
        },
      ]);
    }
  };

  const handleDeletePesquisa = async id => {
    const result = deletePesquisa(id);
    if (result) {
      navigation.navigate('Drawer');
    } else {
      Alert.alert('Ops', 'Erro ao deletar pesquisa, tente novament', [
        {
          text: 'Ok',
          onPress: () => {},
        },
      ]);
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'pesquisa'));
    onSnapshot(q, snapshot => {
      const allPesquisas = [];
      snapshot.forEach(doc => {
        allPesquisas.push({
          id: doc.id,
          name: doc.data().name,
          image: doc.data().image,
          date: new Date(doc.data().date?.seconds * 1000),
        });
      });
      setPesquisas(allPesquisas);
    });
  }, []);

  return (
    <PesquisaContext.Provider
      value={{
        handleCreatePesquisa,
        handleChangePesquisa,
        handleDeletePesquisa,
        pesquisas,
      }}>
      {children}
    </PesquisaContext.Provider>
  );
}

export const usePesquisa = () => {
  const content = useContext(PesquisaContext);
  return content;
};
