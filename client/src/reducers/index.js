import { combineReducers } from "redux";
import words from "./words";
import dictionary from './dictionary'


export default combineReducers({
  dictionary, words
});
