import { takeLatest, put, all } from "redux-saga/effects";
import { clearCart } from "./cartActions";

function* onSignOutSuccess() {
  yield takeLatest("SIGN_OUT_SUCCESS", clearCartOnSignOut);
}

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* cartSagas() {
  yield all([onSignOutSuccess()]);
}
