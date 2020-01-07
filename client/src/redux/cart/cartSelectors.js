import { createSelector } from "reselect";

const cartState = state => state.cartReducer;

export const getItems = createSelector(
  [cartState],
  cart => cart.items
);

export const getHiddenState = createSelector(
  [cartState],
  cart => cart.hidden
);

export const itemCount = createSelector(
  [cartState],
  cart =>
    cart.items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
);

export const totalPrice = createSelector(
  [cartState],
  cart =>
    cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0)
);
