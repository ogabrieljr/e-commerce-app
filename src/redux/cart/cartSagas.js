import { takeLatest, put, all, select } from "redux-saga/effects";
import { clearCart } from "./cartActions";
import { getItems } from "./cartSelectors";
import { firestore } from "../../firebase/Firebase";
import { getCurrentUser } from "../user/userSelector";

function* onSignOutSuccess() {
  yield takeLatest("SIGN_OUT_SUCCESS", clearCartOnSignOut);
}

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* sendCartItemToFirebase() {
  yield takeLatest("ADD_ITEM", sendItems);
}

function* sendItems(item) {
  const cartItems = yield select(getItems);
  const userAuth = yield select(getCurrentUser);
  const userRef = firestore.doc(`users/${userAuth.id}`);
  yield userRef.update({ cartItems });
}

export function* cartSagas() {
  yield all([onSignOutSuccess(), sendCartItemToFirebase()]);
}
