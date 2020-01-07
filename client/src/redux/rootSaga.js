import { all } from "redux-saga/effects";
import { onFetchStart } from "./shop/shopSagas";
import { userSagas } from "./user/userSagas";
import { cartSagas } from "./cart/cartSagas";

export default function* rootSaga() {
  yield all([onFetchStart(), userSagas(), cartSagas()]);
}
