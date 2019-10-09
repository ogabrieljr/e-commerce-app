import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ userReducer });

const store = createStore(rootReducer);

export default store;
