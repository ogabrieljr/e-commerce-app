import { all } from "redux-saga/effects";
import { fetchStart } from "./shop/shopSagas";
import { googleStart } from "./user/userSagas";

export default function* rootSaga() {
  yield all([fetchStart(), googleStart()]);
}
