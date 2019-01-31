import { ADD_IDEA } from "./type.js";

export const addIdea = formValues => dispatch => {
  return {
    type: ADD_IDEA,
    payload: formValues
  };
};
