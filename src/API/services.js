import { app } from './firebase-config.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth(app);

export const createUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.log('Erro ao criar conta: ' + error);
    return false;
  }
}

export const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    console.log("CREDENTIALS " + userCredentials.user.uid);
    return true;
  } catch (error) {
    console.log('Erro ao tentar fazer login: ' + error);
    return false;
  }
};