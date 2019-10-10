import { createStore, combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({ userReducer, cartReducer });

const store = createStore(rootReducer);

export default store;
