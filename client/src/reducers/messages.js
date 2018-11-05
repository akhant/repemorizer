import {
  SHOW_MESSAGE,
  
  CLEAR_MESSAGE
} from "../constants";

export default (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case SHOW_MESSAGE:
      return { ...state, ...data };
    case CLEAR_MESSAGE:
      return {};
    default:
      return state;
  }
};
