import axios from "axios";
import setAuthHeader from "../utils/setAuthHeader";
import {
  TRANSLATE,
  GET_DICTIONARY,
  REMOVE_TEXT,
  GET_FIFTY,
  GET_WORDS_TO_REPEAT,
  CHECK_WORDS_TO_REPEAT,
  NEXT_STAGE,
  SIGNUP,
  FETCH_CURRENT_USER,
  USER_LOGGED_IN,
  LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  SHOW_MESSAGE
} from "../constants";

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
        .get(`${serverUrl}/get_words_to_repeat`)
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
        .patch(`${serverUrl}/check_words_to_repeat`)
        .then(res =>
          next({
            type: CHECK_WORDS_TO_REPEAT,
            data: {
              updatedDictionary: res.data
            }
          })
        )

        .catch(err => console.log("Error patch CHECK_WORDS_TO_REPEAT", err));
    case NEXT_STAGE:
      return axios
        .patch(`${serverUrl}/next_stage`, { ...payload })
        .then(res =>
          next({
            type: NEXT_STAGE,
            data: {
              updatedWord: res.data
            }
          })
        )
        .catch(err => console.log("Error patch NEXT_STAGE", err));

    case SIGNUP:
      return axios
        .post(`${serverUrl}/signup`, { ...payload })
        .then(res => {
          const { token, message } = res.data;
          if (message) {
             next({
              type: SHOW_MESSAGE,
              data: {
                ...res.data
              }
            });
          }
          if (token) {
            localStorage.JWT = token;
            setAuthHeader(token);
            next({
              type: USER_LOGGED_IN,
              data: {
                user: res.data
              }
            });
          }
        })
        .catch(err => console.log("Error post SIGNUP", err));

    case FETCH_CURRENT_USER:
      return axios
        .get(`${serverUrl}/fetch_current_user`)
        .then(res => {
          next({
            type: USER_LOGGED_IN,
            data: {
              user: res.data
            }
          });
        })
        .catch(err => console.log("Error get FETCH_CURRENT_USER", err));

    case LOGIN:
      return axios
        .post(`${serverUrl}/login`, { ...payload })
        .then(res => {
          const { token, message } = res.data;
          if (message) {
             next({
              type: SHOW_MESSAGE,
              data: {
                ...res.data
              }
            });
          }
          if (token) {
            localStorage.JWT = token;
            setAuthHeader(token);
          }
          console.log(res);
          next({
            type: USER_LOGGED_IN,
            data: {
              user: res.data
            }
          });
        })
        .catch(err => console.log("Error post LOGIN", err));

    case FORGOT_PASSWORD:
      return axios
        .post(`${serverUrl}/forgot_password`, { ...payload })
        .then(res => {
          const { message } = res.data;
          if (message) {
            return next({
              type: SHOW_MESSAGE,
              data: {
                ...res.data
              }
            });
          }
        })

        .catch(err => console.log("Error post FORGOT_PASSWORD", err));

    case RESET_PASSWORD:
      return axios
        .post(`${serverUrl}/reset_password`, { ...payload })
        .then(res => {
          const { message } = res.data;
          if (message) {
            return next({
              type: SHOW_MESSAGE,
              data: {
                ...res.data
              }
            });
          }
        })

        .catch(err => console.log("Error post RESET_PASSWORD", err));

    default:
      return next(action);
  }
};

export default Data;
