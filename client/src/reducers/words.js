import { TRANSLATE } from "../constants";

export default (state = [], action) => {
  const { type, data } = action;

  switch (type) {
    case TRANSLATE:
      if (data) return [...state, data];

    default:
      return state;
  }
};
