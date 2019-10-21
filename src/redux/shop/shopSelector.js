import { createSelector } from "reselect";

const shopState = state => state.shopReducer;

export const getShopCollections = createSelector(
  [shopState],
  shop => shop.collections
);

export const collectionValues = createSelector(
  [getShopCollections],
  collections => Object.values(collections)
);

export const selectCollection = params =>
  createSelector(
    [getShopCollections],
    collections => collections[params]
  );
