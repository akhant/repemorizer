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

    case CHECK_WORDS_TO_REPEAT:
      return data.updatedDictionary;

      case LOGOUT:
      return []
 /*    case NEXT_STAGE:
      return state.map(w => {
        if (w._id === data.updatedWord._id) return data.updatedWord;
        return w;
      }); */

    default:
      return state;
  }
};
