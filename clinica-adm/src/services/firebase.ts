import firebase, { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { collection, getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDGYKn4RB5cSXr8-kXGz3xb-2qBLOpQMx4",
  authDomain: "clinica-2.firebaseapp.com",
  projectId: "clinica-2",
  storageBucket: "clinica-2.appspot.com",
  messagingSenderId: "411646376548",
  appId: "1:411646376548:web:3d36860bdf210f62a3bd71"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //firebase.initializeApp(firebaseConfig);

  export const db = getFirestore(app);


  export const auth = getAuth();
  export const database = getDatabase();
  export const firestore = getFirestore()
/*   export const auth = firebase.auth();
  export const database = firebase.database(); */



  /* createUserWithEmailAndPassword(auth, "email", password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); */
