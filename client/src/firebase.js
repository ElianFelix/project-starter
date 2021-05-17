import firebase from 'firebase/app';
import 'firebase/storage'
require('dotenv').config();
// import firebaseConfig from './firebaseConfig.json';
const firebaseConfig = process.env.FIREBASE_CONFIG;


firebase.initializeApp(firebaseConfig);

export default firebase;