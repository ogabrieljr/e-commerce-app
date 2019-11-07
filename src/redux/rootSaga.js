import { all } from "redux-saga/effects";
import { fetchStart } from "./shop/shopSagas";

export default function* rootSaga() {
  yield all([fetchStart()]);
}
