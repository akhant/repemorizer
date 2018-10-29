import {
  TRANSLATE,
  GET_FIFTY,
  GET_DICTIONARY,
  REMOVE_TEXT,
  GET_WORDS_TO_REPEAT
} from "../constants";

export default (state = [], action) => {
  const { type, data } = action;

  switch (type) {
    case TRANSLATE:
      console.log(
        state.every(d => {
          if (d) {
            return d._id !== data._id;
          } else {
            return true;
          }
        })
      );
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
    
    case GET_FIFTY:
      if (data.dictionary) return (state = data.dictionary);

    case GET_DICTIONARY:
      if (data.dictionary) return (state = data.dictionary);

    case REMOVE_TEXT:
      return state.filter(word => word._id !== data.removedElement._id);

    
      default:
      return state;
  }
};
