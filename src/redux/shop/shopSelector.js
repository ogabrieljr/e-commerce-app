import { createSelector } from "reselect";

const shopState = state => state.shopReducer;

export const getShopCollections = createSelector(
  [shopState],
  shop => shop.collections
);
