import {
  TRANSLATE,
  GET_DICTIONARY,
  REMOVE_TEXT,
  GET_FIFTY,
  GET_WORDS_TO_REPEAT,
  CHECK_WORDS_TO_REPEAT
} from "../constants";
import axios from "axios";
const serverUrl = "http://localhost:3000/api";


// TODO: change error handling to send error to server and
// write to log, don't show to client
const Data = store => next => action => {
  const { type, payload } = action;

  switch (type) {
    case TRANSLATE:
      return axios
        .post(`${serverUrl}/translate`, { text: payload })
        .then(res => 
          next({
            type: TRANSLATE,
            data: {
              ...res.data
            }
          })
        )
        .catch(err => console.log("Error post TRANSLATE", err));
    case GET_FIFTY:
      return axios
        .get(`${serverUrl}/get_fifty`)
        .then(res =>
          next({
            type: GET_FIFTY,
            data: {
              dictionary: res.data
            }
          })
        )
        .catch(err => console.log("Error get GET_FIFTY", err));
    case GET_DICTIONARY:
      return axios
        .get(`${serverUrl}/get_dictionary`)
        .then(res =>
          next({
            type: GET_DICTIONARY,
            data: {
              dictionary: res.data
            }
          })
        )
        .catch(err => console.log("Error get GET_FIFTY", err));
    case REMOVE_TEXT:
      return axios
        .post(`${serverUrl}/remove_text`, { id: payload })
        .then(res =>
          next({
            type: REMOVE_TEXT,
            data: {
              removedElement: res.data
            }
          })
        )
        .catch(err => console.log("Error post REMOVE_TEXT", err));
    case GET_WORDS_TO_REPEAT:
      return axios
        .get(`${serverUrl}/get_words_to_repeat`, )
        .then(res =>
          next({
            type: GET_WORDS_TO_REPEAT,
            data: {
              wordsToRepeat: res.data
            }
          })
        )
        .catch(err => console.log("Error post GET_WORDS_TO_REPEAT", err));
    
        case CHECK_WORDS_TO_REPEAT:
      return axios
        .get(`${serverUrl}/check_words_to_repeat` )
        
        .catch(err => console.log("Error get CHECK_WORDS_TO_REPEAT", err));

    default:
      return next(action);
  }
};

export default Data;
