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
  // Object { _key: {…}, firestore: {…}, _firestoreClient: {…} }
  // snapShot = userRef.get()
  // snapShot.data()  { createdAt: {…}, displayName: "DISPLAY NAME", email: "EMAIL" }

  const snapShot = await userRef.get();
  // Object { _firestore: {…}, _key: {…}, _document: {…}, _fromCache: false, _hasPendingWrites: false }
  // snapShot.exists => boolean

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const cartItems = [];
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        cartItems,
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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
