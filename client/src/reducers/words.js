import { TRANSLATE } from "../constants";

export default (state = [], action) => {
  const { type, data } = action;

  switch (type) {
    case TRANSLATE:
      if (
        state.every(d => {
          if (d) {
            return d.wordId !== data.wordId;
          } else {
            return true;
          }
        })
      ) {
        return [...state, data];
      }
      return state;
      /* return [...state, data]; */

    default:
      return state;
  }
};
