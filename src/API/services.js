import { app } from './firebase-config.js';
import { initializeAuth, getReactNativePersistence, getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const auth = initializeAuth(app, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) });

export const createUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
}