import { all } from "redux-saga/effects";
import { fetchStart } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas";
import { onSignOutSuccess } from "./cart/cartSagas";

export default function* rootSaga() {
  yield all([fetchStart(), userSagas(), onSignOutSuccess()]);
}
