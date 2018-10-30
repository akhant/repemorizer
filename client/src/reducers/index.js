import { combineReducers } from "redux";
import dictionary from './dictionary'
import words from './words'
import user from './user'

export default combineReducers({
  dictionary, words, user
});
