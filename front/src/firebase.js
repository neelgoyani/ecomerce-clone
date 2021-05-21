// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDILmAl1y4jANEpq3aFJCU2dV_uA3WgAl8",
  authDomain: "airbnb-clone-f314f.firebaseapp.com",
  projectId: "airbnb-clone-f314f",
  storageBucket: "airbnb-clone-f314f.appspot.com",
  messagingSenderId: "1054467011475",
  appId: "1:1054467011475:web:e0cc44dc897ebbc72a2e66",
  measurementId: "G-BHBK2Z464C"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  

  export {db,auth} ;