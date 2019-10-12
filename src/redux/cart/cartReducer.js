import { addItemToCart } from "./cartUtils";

const INITIAL_STATE = {
  hidden: true,
  items: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_STATE":
      return {
        ...state,
        hidden: !state.hidden
      };
    case "ADD_ITEMS":
      return {
        ...state,
        items: addItemToCart(state.items, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
