import { takeEvery, put } from "redux-saga/effects";
import { firestore } from "../../firebase/Firebase";
import { fetchCollectionsSuccess, fetchCollectionsFail } from "./shopActions";

export function* onFetchStart() {
  yield takeEvery("FETCH_COLLECTIONS_START", fetchAsync);
}

function* fetchAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const mappedItems = snapShot.docs.map(item => {
      const { title, items } = item.data();
      return {
        title,
        items,
        id: item.id,
        routeName: encodeURI(title.toLowerCase())
      };
    });
    const reducedItems = mappedItems.reduce((acc, items) => {
      acc[items.title.toLowerCase()] = items;
      return acc;
    }, {});
    yield put(fetchCollectionsSuccess(reducedItems));
  } catch (error) {
    yield put(fetchCollectionsFail(error));
  }
}
