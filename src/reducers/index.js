import { combineReducers } from "redux";
import modal from "./modal";
import ideaReducer from "./addIdea.js";

export default combineReducers({
  modal,
  ideaReducer
});
