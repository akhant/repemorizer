import { combineReducers } from "redux";
import dictionary from './dictionary'
import words from './words'

export default combineReducers({
  dictionary, words
});
