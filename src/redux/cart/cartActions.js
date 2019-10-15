export const toggleHiddenState = () => ({
  type: "TOGGLE_CART_STATE"
});

export const addItems = items => ({
  type: "ADD_ITEMS",
  payload: items
});
