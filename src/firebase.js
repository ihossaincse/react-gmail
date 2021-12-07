import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0HvxcgMHqMA9i1PtmrWJ5MQ0mOFH6YT4",
    authDomain: "react-e71a2.firebaseapp.com",
    projectId: "react-e71a2",
    storageBucket: "react-e71a2.appspot.com",
    messagingSenderId: "979503321021",
    appId: "1:979503321021:web:dcb40eb2656b655868ccd4"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

