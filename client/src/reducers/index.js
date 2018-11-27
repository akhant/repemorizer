import { combineReducers } from "redux";
import dictionary from "./dictionary";
import words from "./words";
import user from "./user";
import messages from "./messages";

export default combineReducers({
  dictionary,
  words,
  user,
  messages
});
