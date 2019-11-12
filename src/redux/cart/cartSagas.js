import { takeLatest, put } from "redux-saga/effects";
import { clearCart } from "./cartActions";

export function* onSignOutSuccess() {
  yield takeLatest("SIGN_OUT_SUCCESS", clearCartOnSignOut);
}

function* clearCartOnSignOut() {
  yield put(clearCart());
}
