export const toggleHiddenState = () => ({
  type: "TOGGLE_CART_STATE"
});

export const addItem = item => ({
  type: "ADD_ITEM",
  payload: item
});

export const removeItem = item => ({
  type: "REMOVE_ITEM",
  payload: item
});
