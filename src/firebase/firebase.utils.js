import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA8Jlbidr2M1QNu-cpyR4YClwYfpJlW7EA",
  authDomain: "crwn-db-46459.firebaseapp.com",
  projectId: "crwn-db-46459",
  storageBucket: "crwn-db-46459.appspot.com",
  messagingSenderId: "467967443822",
  appId: "1:467967443822:web:c958801b0ccaa87acdf77f",
  measurementId: "G-0ZTQPF9V10",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
