import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAIAe05CrfUdBb2j84r7BaawKEqd78LNhg",
  authDomain: "discord-clone-app-reactjs.firebaseapp.com",
  projectId: "discord-clone-app-reactjs",
  storageBucket: "discord-clone-app-reactjs.appspot.com",
  messagingSenderId: "863996950980",
  appId: "1:863996950980:web:24999d37a651616d014c91",
  measurementId: "G-SGBEQ8SDK1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default database;
export { auth, provider };
