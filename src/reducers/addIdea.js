import * as actions from "../actions";

const initialState = {
  ideas: [
    {
      title: "Example Idea 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      research: [
        {
          question1: " answer1",
          question2: " answer2",
          question3: " answer3",
          question4: " answer4",
          question5: " answer5",
          question6: " answer6"
        }
      ]
    },
    {
      title: "Example Idea 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      research: [
        {
          question1: " answer1",
          question2: " answer2",
          question3: " answer3",
          question4: " answer4",
          question5: " answer5",
          question6: " answer6"
        }
      ]
    }
  ]
};

export default (state = initialState, action) => {
  if (action.type === actions.ADD_IDEA) {
    return Object.assign({}, state, {
      ideas: [
        ...state.ideas,
        {
          title: action.title,
          description: action.description
        }
      ]
    });
  }
  return state;
};
