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
