export const toggleHiddenState = () => ({
  type: "TOGGLE_CART_STATE"
});

export const addItem = item => ({
  type: "ADD_ITEM",
  payload: item
});

export const clearItem = item => ({
  type: "CLEAR_ITEM",
  payload: item
});

export const removeItem = item => ({
  type: "REMOVE_ITEM",
  payload: item
});

export const clearCart = () => ({
  type: "CLEAR_CART"
});

export const fetchCartItemsStart = () => ({
  type: "FETCH_CART_ITEMS_START"
});

export const fetchCartItemsSuccess = items => ({
  type: "FETCH_CART_ITEMS_SUCCESS",
  payload: items
});
