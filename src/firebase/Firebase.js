import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgqoA0UGTsg0z3aTNmh8-emhCR7et2cxY",
  authDomain: "ecommerce-crwn.firebaseapp.com",
  databaseURL: "https://ecommerce-crwn.firebaseio.com",
  projectId: "ecommerce-crwn",
  storageBucket: "ecommerce-crwn.appspot.com",
  messagingSenderId: "1032346930752",
  appId: "1:1032346930752:web:7170dfc52fef21bc9499a5",
  measurementId: "G-H3GRMKNR0T"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// var firebaseConfig = {
//   apiKey: "AIzaSyAgqoA0UGTsg0z3aTNmh8-emhCR7et2cxY",
//   authDomain: "ecommerce-crwn.firebaseapp.com",
//   databaseURL: "https://ecommerce-crwn.firebaseio.com",
//   projectId: "ecommerce-crwn",
//   storageBucket: "",
//   messagingSenderId: "1032346930752",
//   appId: "1:1032346930752:web:7170dfc52fef21bc9499a5",
//   measurementId: "G-H3GRMKNR0T"
// };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
