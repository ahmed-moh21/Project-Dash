import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCP3e604HqbLdJyo63J4xHuQXX5LBCgk5o",
    authDomain: "schoolbusza-83864.firebaseapp.com",
    projectId: "schoolbusza-83864",
    storageBucket: "schoolbusza-83864.appspot.com",
    messagingSenderId: "416499073550",
    appId: "1:416499073550:web:0a6846b6b6f1f7440d325f",
    measurementId: "G-BN2JQVY4V0"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;

