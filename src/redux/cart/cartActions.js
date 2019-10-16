export const toggleHiddenState = () => ({
  type: "TOGGLE_CART_STATE"
});

export const addItem = item => ({
  type: "ADD_ITEM",
  payload: item
});
