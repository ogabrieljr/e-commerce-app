import { takeLatest, put } from "redux-saga/effects";
import { auth, googleProvider, createUserProfileDocument } from "../../firebase/Firebase";
import { googleSignInSuccess, googleSignInFail } from "./userActions";

export function* googleStart() {
  yield takeLatest("GOOGLE_SIGN_IN_START", signInWithGoogle);
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield createUserProfileDocument(user);
    const snapshot = yield userRef.get();
    put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    put(googleSignInFail(error));
  }
}
