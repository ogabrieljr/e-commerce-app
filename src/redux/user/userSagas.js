import { takeLatest, put, all } from "redux-saga/effects";
import { auth, googleProvider, createUserProfileDocument } from "../../firebase/Firebase";
import { signInSuccess, signInFail } from "./userActions";

function* getUserAuth(userAuth) {
  try {
    const userRef = yield createUserProfileDocument(userAuth);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    put(signInFail(error));
  }
}

function* googleStart() {
  yield takeLatest("GOOGLE_SIGN_IN_START", signInWithGoogle);
}

function* signInWithGoogle() {
  const { user } = yield auth.signInWithPopup(googleProvider);
  yield getUserAuth(user);
}

function* emailSignInStart() {
  yield takeLatest("EMAIL_SIGN_IN_START", signWithWithEmail);
}

function* signWithWithEmail({ payload: { email, password } }) {
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  yield getUserAuth(user);
}

export function* userSagas() {
  yield all([googleStart(), emailSignInStart()]);
}
