import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAf685XXQglOyuz0x_5qUHOfH6TKzrl0Yc",
  authDomain: "flashcards-native-7f4bd.firebaseapp.com",
  projectId: "flashcards-native-7f4bd",
  storageBucket: "flashcards-native-7f4bd.appspot.com",
  messagingSenderId: "718141498252",
  appId: "1:718141498252:web:5092c97c98b1984e7feca9"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = getAuth(app);

export const categories = db.collection('categories');
export const cards = db.collection('cards');