import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers/index.js";

export default function configureStore(initialState) {
  return createStore(combineReducers, applyMiddleware(thunk));
}
