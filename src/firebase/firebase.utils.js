import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDGffdvDJJbTwZy58JEUxGunSbMWr0F98Q",
  authDomain: "clthingdb.firebaseapp.com",
  databaseURL: "https://clthingdb.firebaseio.com",
  projectId: "clthingdb",
  storageBucket: "clthingdb.appspot.com",
  messagingSenderId: "277281198590",
  appId: "1:277281198590:web:97afad6876c2adea15b0af",
  measurementId: "G-2YH3N4907L",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
