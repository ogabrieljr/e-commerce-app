import { addItemToCart, removeItemFromCart } from "./cartUtils";

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
    case "ADD_ITEM":
      return {
        ...state,
        items: addItemToCart(state.items, action.payload)
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload)
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: []
      };
    case "FETCH_CART_ITEMS_START":
      return { ...state };
    case "FETCH_CART_ITEMS_SUCCESS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
