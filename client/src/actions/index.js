import {
  TRANSLATE,
  SIGNUP,
  LOGOUT,
  LOGIN,
  GET_FIFTY,
  REMOVE_TEXT,
  GET_DICTIONARY,
  GET_WORDS_TO_REPEAT,
  CHECK_WORDS_TO_REPEAT,
  NEXT_STAGE,
  FETCH_CURRENT_USER,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  CLEAR_MESSAGE
} from "../constants";

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

export const removeText = id => ({
  type: REMOVE_TEXT,
  payload: id
});

export const getWordsToRepeat = () => ({
  type: GET_WORDS_TO_REPEAT
});

export const checkWordsToRepeat = () => ({
  type: CHECK_WORDS_TO_REPEAT
});
export const nextStage = (_id, success) => ({
  type: NEXT_STAGE,
  payload: { _id, success }
});

export const signup = data => ({
  type: SIGNUP,
  payload: data
});

export const fetchCurrentUser = () => ({
  type: FETCH_CURRENT_USER
});

export const logout = () => ({
  type: LOGOUT
});

export const login = data => ({
  type: LOGIN,
  payload: data
});

export const forgotPassword = data => ({
  type: FORGOT_PASSWORD,
  payload: data
});

export const resetPassword = data => ({
  type: RESET_PASSWORD,
  payload: data
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE
});
