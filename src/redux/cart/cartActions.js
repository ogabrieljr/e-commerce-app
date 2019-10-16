export const toggleHiddenState = () => ({
  type: "TOGGLE_CART_STATE"
});

export const addItem = items => ({
  type: "ADD_ITEM",
  payload: items
});
