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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error, "ERROR");
    }
  }
  return userRef;
};

export const addCollectionToFirebase = (collectionKey, document) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  document.forEach(item => {
    const docRef = collectionRef.doc();
    batch.set(docRef, item);
  });
  batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
