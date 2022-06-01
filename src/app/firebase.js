import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAR88_pgSqrarI0KWxBsjXducu7-sfQ3HE",
    authDomain: "snapchat-clone-yt-93160.firebaseapp.com",
    projectId: "snapchat-clone-yt-93160",
    storageBucket: "snapchat-clone-yt-93160.appspot.com",
    messagingSenderId: "861422787937",
    appId: "1:861422787937:web:7df164ce69ef1d4e3e3920"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, storage, provider};