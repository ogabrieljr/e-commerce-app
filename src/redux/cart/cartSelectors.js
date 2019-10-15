/*
import { createSelector } from 'reselect'// selector

const getBar = (state) => state.foo.bar// reselect function

export const getBarState = createSelector(
  [ getBar ],
  (bar) => bar
)
*/

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
