import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAMV9_YifHm-R6_Ox_NtzkgXDfDuI8J_-w",
    authDomain: "react-game-f2212.firebaseapp.com",
    databaseURL: "https://react-game-f2212-default-rtdb.firebaseio.com",
    projectId: "react-game-f2212",
    storageBucket: "react-game-f2212.appspot.com",
    messagingSenderId: "669953468870",
    appId: "1:669953468870:web:49f69d79e796c39eaf6ac7"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;