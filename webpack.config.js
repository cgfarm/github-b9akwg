const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC0pYJ0yMlsRv4cj88uSMRfddzSXj_0VnM',
  authDomain: 'cgfnslogin.firebaseapp.com',
  projectId: 'cgfnslogin',
  storageBucket: 'cgfnslogin.appspot.com',
  messagingSenderId: '604386494452',
  appId: '1:604386494452:web:b9c600e6f419a1e90e5ba1',
  measurementId: 'G-ETFCNL73R9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
