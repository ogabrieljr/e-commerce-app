import { takeLatest, put, all, select } from "redux-saga/effects";
import {
  clearCart,
  fetchCartItemsStart,
  fetchCartItemsSuccess
} from "./cartActions";
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
  yield takeLatest(["ADD_ITEM", "REMOVE_ITEM", "CLEAR_ITEM"], sendItems);
}

function* sendItems() {
  const cartItems = yield select(getItems);
  const userAuth = yield select(getCurrentUser);
  const userRef = firestore.doc(`users/${userAuth.id}`);
  yield userRef.update({ cartItems });
}

function* fetchCartItems() {
  yield takeLatest("FETCH_CART_ITEMS_START", fetchItems);
}

function* fetchItems() {
  const userAuth = yield select(getCurrentUser);
  const docRef = firestore.collection("users").doc(userAuth.id);
  const items = yield docRef.get().then(function(doc) {
    return doc.data().cartItems;
  });
  yield put(fetchCartItemsSuccess(items));
}

export function* cartSagas() {
  yield all([onSignOutSuccess(), sendCartItemToFirebase(), fetchCartItems()]);
}
