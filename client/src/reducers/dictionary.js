import {
  TRANSLATE,
  GET_FIFTY,
  GET_DICTIONARY,
  REMOVE_TEXT,
  CHECK_WORDS_TO_REPEAT,
  LOGOUT
} from "../constants";

export default (state = [], action) => {
  const { type, data } = action;

  switch (type) {
    case TRANSLATE:
      if (
        state.every(d => {
          if (d) return d._id !== data._id;

          return true;
        })
      ) {
        return [...state, data];
      }
      return state;

    case GET_FIFTY:
      if (data.dictionary) return data.dictionary;
      break;
    case GET_DICTIONARY:
      if (data.dictionary) return data.dictionary;
      break;
    case REMOVE_TEXT:
      return state.filter(word => word._id !== data.removedElement._id);

    case CHECK_WORDS_TO_REPEAT:
      return data.updatedDictionary;

    case LOGOUT:
      return [];

    default:
      return state;
  }
};
