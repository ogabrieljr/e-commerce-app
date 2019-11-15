import { takeLatest, put, all } from "redux-saga/effects";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/Firebase";
import { signInSuccess, signInFail, signOutSuccess } from "./userActions";

function* getUserAuth(userAuth, additionalData) {
  // Object { I: [], l: "AIzaSyAgqoA0UGTsg0z3aTNmh8-emhCR7et2cxY", m: "[DEFAULT]", o: "ecommerce-crwn.firebaseapp.com" }

  try {
    const userRef = yield createUserProfileDocument(userAuth, additionalData);
    const snapShot = yield userRef.get();
    yield put(signInSuccess({ id: snapShot.id, ...snapShot.data() }));
    //   currentUser: { id: "ID", createdAt: {…}, displayName: "DN", email: "EM" }
  } catch (error) {
    put(signInFail(error));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest("GOOGLE_SIGN_IN_START", signInWithGoogle);
}

function* signInWithGoogle() {
  const { user } = yield auth.signInWithPopup(googleProvider);
  yield getUserAuth(user);
}

function* onEmailSignInStart() {
  yield takeLatest("EMAIL_SIGN_IN_START", signWithWithEmail);
}

function* signWithWithEmail({ payload: { email, password } }) {
  // Object { type: "EMAIL_SIGN_IN_START", payload: { email: "EMAIL", password: "PASSWORD" } }
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  yield getUserAuth(user);
}

function* onSignOut() {
  yield takeLatest("SIGN_OUT_START", signOutUser);
}

function* signOutUser() {
  yield auth.signOut();
  yield put(signOutSuccess());
}

function* onSignUpStart() {
  yield takeLatest("SIGN_UP_START", signUp);
}

function* signUp({ payload: { email, password, displayName } }) {
  const { user } = yield auth.createUserWithEmailAndPassword(email, password);
  yield getUserAuth(user, { displayName });
}

export function* userSagas() {
  yield all([
    onGoogleSignInStart(),
    onEmailSignInStart(),
    onSignOut(),
    onSignUpStart()
  ]);
}

// export const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = auth.onAuthStateChanged(userAuth => {
//       unsubscribe();
//       resolve(userAuth);
//     }, reject);
//   });
// };

// function* isUserAuthenticated() {
//   try {
//     const userAuth = yield getCurrentUser();
//     if (!userAuth) return;
//     yield getSnapshotFromUserAuth(userAuth);
//   } catch (error) {
//     yield put(signInFail(error));
//   }
// }
