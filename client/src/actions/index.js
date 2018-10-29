import { TRANSLATE, GET_FIFTY,REMOVE_TEXT, GET_DICTIONARY, GET_WORDS_TO_REPEAT, CHECK_WORDS_TO_REPEAT } from "../constants";

export const translateRequest = text => ({
  type: TRANSLATE,
  payload: text
});

export const getFifty = () => ({
  type: GET_FIFTY
});

export const getDictionary = () => ({
  type: GET_DICTIONARY
});

export const removeText = (id) => ({
  type: REMOVE_TEXT,
  payload: id
})

export const getWordsToRepeat = () => ({
  type: GET_WORDS_TO_REPEAT
})

export const checkWordsToRepeat = () => ({
  type: CHECK_WORDS_TO_REPEAT
})