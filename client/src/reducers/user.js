import { USER_LOGGED_IN } from "../constants";

export default (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case USER_LOGGED_IN:
      return { ...data.user };

    default:
      return state;
  }
};
