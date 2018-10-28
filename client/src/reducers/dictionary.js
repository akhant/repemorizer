import { TRANSLATE, GET_DICTIONARY } from "../constants";

export default (state = [], action) => {
  const { type, data } = action;

  switch (type) {
    case TRANSLATE:
    console.log(state.every(d => {
      if (d) {
        return d._id !== data._id;
      } else {
        return true;
      }
    }))
      if (
        state.every(d => {
          if (d) {
            return d._id !== data._id;
          } else {
            return true;
          }
        })
      ) {
        return [...state, data];
      }
      return state;
      /* return [...state, data]; */
    case GET_DICTIONARY:
    console.log(data)
      if (data.dictionary) return state = data.dictionary
    default:
      return state;
  }
};
