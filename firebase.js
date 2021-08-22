import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_tz3md2Af1pooqOrR8xGrn4WGj-YmHRE",
  authDomain: "e-clone-e03ea.firebaseapp.com",
  projectId: "e-clone-e03ea",
  storageBucket: "e-clone-e0ea.appspot.com",
  messagingSenderId: "79896338422",
  appId: "1:79896338422:web:af69b19dca15d340d9f1d7",
  measurementId: "G-XG6SL6J542"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
