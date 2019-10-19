import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
// import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({ userReducer, cartReducer, shopReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
