import { app } from './firebase-config.js';
import { initializeAuth, getReactNativePersistence, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// const auth = initializeAuth(app, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) });
const auth = getAuth(app);

export const createUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log('Erro ao criar conta: ' + error);
  }
}

export const login = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    console.log("CREDENTIALS " + userCredentials.user.uid);
  } catch (error) {
    console.log('Erro ao tentar fazer login: ' + error);
  }
}