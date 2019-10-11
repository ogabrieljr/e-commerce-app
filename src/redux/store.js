import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import logger from "redux-logger";

const middlewares = [logger];

const rootReducer = combineReducers({ userReducer, cartReducer });

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
