import {
  GET_WORDS_TO_REPEAT,
  NEXT_STAGE,
  CHECK_WORDS_TO_REPEAT,
  LOGOUT
} from "../constants";

export default (state = [], action) => {
  const { type, data } = action;

  switch (type) {
    case GET_WORDS_TO_REPEAT:
      return data.wordsToRepeat;
    case CHECK_WORDS_TO_REPEAT:
      return data.updatedDictionary.filter(w => w.isRepeatTime === true);
    case NEXT_STAGE:
      return state.map(w => {
        if (w._id === data.updatedWord._id) return data.updatedWord;
        return w;
      });
    case LOGOUT:
      return [];
    default:
      return state;
  }
};
