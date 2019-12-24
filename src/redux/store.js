import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from "./shop/shopReducer";
import directoryReducer from "./directory/directoryReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer", "userReducer"]
};

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  shopReducer,
  directoryReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [sagaMiddleware];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
