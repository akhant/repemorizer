import {
  SHOW_MESSAGE,
  LOGOUT,
  USER_LOGGED_IN,
  CLEAR_MESSAGE
} from "../constants";

export default (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case SHOW_MESSAGE:
      return { ...state, ...data };
    case USER_LOGGED_IN:
      return {};
    case LOGOUT:
      return {};
    case CLEAR_MESSAGE:
      return {};
    default:
      return state;
  }
};
