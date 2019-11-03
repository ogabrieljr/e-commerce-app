import { firestore } from "../../firebase/Firebase";

export const fetchCollectionsStart = () => ({
  type: "FETCH_COLLECTIONS_START"
});

export const fetchCollectionsSuccess = collections => ({
  type: "FETCH_COLLECTIONS_SUCCESS",
  payload: collections
});

export const fetchCollectionsFail = message => ({
  type: "FETCH_COLLECTIONS_FAIL",
  payload: message
});

export const fetchCollectionsAsync = () => dispatch => {
  const collectionRef = firestore.collection("collections");
  collectionRef
    .get()
    .then(items => {
      const mappedItems = items.docs.map(item => {
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
      dispatch(fetchCollectionsSuccess(reducedItems));
    })
    .catch(err => dispatch(fetchCollectionsFail(err)));
};
