import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAMHd0P_-_dm2YUrMOXj69y7YdD7Wee-dk',
  authDomain: 'streamify-react-app.firebaseapp.com',
  databaseURL: 'https://streamify-react-app-default-rtdb.firebaseio.com',
  projectId: 'streamify-react-app',
  storageBucket: 'streamify-react-app.firebasestorage.app',
  messagingSenderId: '580074849455',
  appId: '1:580074849455:web:6e50a915caa0334607405a',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
