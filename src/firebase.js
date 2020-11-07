import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhY9hkDzLnTlR1aeEa8h20R8YZ48WTxyY",
  authDomain: "clone-90f93.firebaseapp.com",
  databaseURL: "https://clone-90f93.firebaseio.com",
  projectId: "clone-90f93",
  storageBucket: "clone-90f93.appspot.com",
  messagingSenderId: "421017679932",
  appId: "1:421017679932:web:66810105f20f8f9315ab39",
  measurementId: "G-F7WG1L811V",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };