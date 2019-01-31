import { ADD_IDEA } from "../actions/type.js";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_IDEA:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
