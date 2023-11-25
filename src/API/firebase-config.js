import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAyDzOHbMIgt6q2Ih_4p45xhA1yA9RMQEg',
  authDomain: 'satisfying-you-e4de5.firebaseapp.com',
  projectId: 'satisfying-you-e4de5',
  storageBucket: 'satisfying-you-e4de5.appspot.com',
  messagingSenderId: '318735345225',
  appId: '1:318735345225:web:96f3426344b1a6487cc198',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export {app, db, storage};
