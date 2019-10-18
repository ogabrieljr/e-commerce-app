import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
// import logger from "redux-logger";

const middlewares = [];

const rootReducer = combineReducers({ userReducer, cartReducer });

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

// // configureStore.js

// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import rootReducer from './reducers'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

// import { PersistGate } from 'redux-persist/integration/react'

// // ... normal setup, create store and persistor, import components etc.

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <RootComponent />
//       </PersistGate>
//     </Provider>
//   );
