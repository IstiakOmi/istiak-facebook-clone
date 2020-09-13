import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGh6SeUwlPwJnRVZJgOglB260ZWZbvct0",
  authDomain: "istiak-facebook.firebaseapp.com",
  databaseURL: "https://istiak-facebook.firebaseio.com",
  projectId: "istiak-facebook",
  storageBucket: "istiak-facebook.appspot.com",
  messagingSenderId: "761630923177",
  appId: "1:761630923177:web:75dd37de09267ad01bccb8",
  measurementId: "G-GDF4LXE5YK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
