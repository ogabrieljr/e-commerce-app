import { createSelector } from "reselect";

const shopState = state => state.shopReducer;

export const getShopItems = createSelector(
  [shopState],
  shop => shop.collections
);
