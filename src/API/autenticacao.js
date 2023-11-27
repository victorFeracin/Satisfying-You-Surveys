import { useAuth } from '../hooks/auth.js';
import { app } from './firebase-config.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);

export const createUser = async (email, password) => {
  try {
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log('Erro ao criar conta: ' + error);
    return false;
  }
}

export const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const userData = res.user
    return userData;
  } catch (error) {
    console.log('Erro ao tentar fazer login: ' + error);
    return false;
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    console.log('Erro ao tentar trocar senha: ' + error);
    return false;
  }
};

export const getUserEmailAuthenticated = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userEmail = user.email;
        resolve(userEmail);
      } else {
        reject('Usuário não autenticado');
      }
    });
  });
};