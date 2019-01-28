export const ADD_IDEA = "ADD_IDEA";
export const addIdea = (title, description, ideaIndex) => ({
  type: ADD_IDEA,
  title,
  description,
  ideaIndex
});
