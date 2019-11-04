import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDaaYnVN5M-WZAMx4PaH2IK4YErc3_S7xU',
  authDomain: 'crwn-db-76a82.firebaseapp.com',
  databaseURL: 'https://crwn-db-76a82.firebaseio.com',
  projectId: 'crwn-db-76a82',
  storageBucket: 'crwn-db-76a82.appspot.com',
  messagingSenderId: '769965384256',
  appId: '1:769965384256:web:6067761086f99e431675a5'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
