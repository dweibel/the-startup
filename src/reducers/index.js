import { combineReducers } from "redux";
import modal from "./modal";
import ideaReducers from "./ideaReducers.js";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  modal,
  idea: ideaReducers,
  form: formReducer
});
