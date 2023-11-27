import {deleteDoc, doc, updateDoc} from 'firebase/firestore';
import {db} from './firebase-config';

export const changePesquisa = (id, name, date, image) => {
  try {
    const pesquisaRef = doc(db, 'pesquisa', id);
    const document = {
      name,
      date,
      image,
    };
    updateDoc(pesquisaRef, document);
    return true;
  } catch (error) {
    console.log('changePesquisa ~ error:', error);
    return false;
  }
};

export const deletePesquisa = (id) => {
  try {
    deleteDoc(doc(db, 'pesquisa', id));
    return true
  } catch (error) {
    console.log("deletePesquisa ~ error:", error)
    return false
  }
} 