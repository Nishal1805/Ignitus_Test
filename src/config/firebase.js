import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';


const app = firebase.initializeApp({
  apiKey: "AIzaSyAuZaH65y5i0nrQq6DrtO28daxIIOXCXME",
  authDomain: "auction-site-881d5.firebaseapp.com",
  projectId: "auction-site-881d5",
  storageBucket: "auction-site-881d5.appspot.com",
  messagingSenderId: "1049592527504",
  appId: "1:1049592527504:web:45d59f965b59c07543b615"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
