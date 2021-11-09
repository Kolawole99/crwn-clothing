import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCCZBxDJoRacbFc8z21TDyWf6pgJN4Q7xg',
  authDomain: 'crwn-clothing-4b192.firebaseapp.com',
  projectId: 'crwn-clothing-4b192',
  storageBucket: 'crwn-clothing-4b192.appspot.com',
  messagingSenderId: '940763417620',
  appId: '1:940763417620:web:1e82049a27a538a92d2b01',
  measurementId: 'G-D1TEXJJLT5',
};

firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = fireStore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
