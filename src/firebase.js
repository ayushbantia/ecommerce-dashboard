import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgmzJ7gO3yznP_OK1wb1L0pUOidHOSIss",
  authDomain: "ecommerce-analytics-b7457.firebaseapp.com",
  projectId: "ecommerce-analytics-b7457",
  storageBucket: "ecommerce-analytics-b7457.appspot.com",
  messagingSenderId: "992422450626",
  appId: "1:992422450626:web:1a512d6aa865e983f7725b",
  measurementId: "G-6DRLDJNQGT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
