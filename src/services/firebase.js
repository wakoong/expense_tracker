import firebase from 'firebase';
console.log(process.env);
const config = {
  apiKey: 'AIzaSyBl0Okv4NTCXWOhXPNyIGw_8HGO5UFY8iI',
  authDomain: 'expense-tracker-271c1.firebaseapp.com',
  databaseURL: 'https://expense-tracker-271c1.firebaseio.com',
  // OPTIONAL
  projectId: 'expense-tracker-271c1',
  storageBucket: 'expense-tracker-271c1.appspot.com',
  messagingSenderId: '481643362756',
  appId: '1:481643362756:web:e0f437e3c93be601690c91',
  measurementId: 'G-Q7M9WPJ1T7',
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
