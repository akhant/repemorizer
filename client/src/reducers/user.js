import { USER_LOGGED_IN, LOGOUT } from "../constants";

export default (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case USER_LOGGED_IN:
      return { ...state, ...data.user };
    case LOGOUT:
      localStorage.removeItem("JWT");
      return {};
    
    default:
      return state;
  }
};
