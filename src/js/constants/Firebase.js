import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const FirebaseConfig = {
    apiKey: "AIzaSyC3vJR84nFlora-BIeiK4MVppUK_kcvzn0",
    authDomain: "economyappen.firebaseapp.com",
    databaseURL: "https://economyappen.firebaseio.com",
    projectId: "economyappen",
    storageBucket: "economyappen.appspot.com",
    messagingSenderId: "758118324568",
    appId: "1:758118324568:web:f3a287bd1e13368b60ed2d",
    measurementId: "G-XD5ETZTR36"
    }

firebase.initializeApp(FirebaseConfig);
// firebase.firestore();

export default firebase;
