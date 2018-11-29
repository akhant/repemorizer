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

const serverUrl = "https://repemorizer.herokuapp.com/api/";

const Data = store => next => action => {
  const { type, payload } = action;

  switch (type) {
    case TRANSLATE:
      return axios
        .post(`${serverUrl}/translate`, { ...payload })
        .then(res =>
          next({
            type: TRANSLATE,
            data: {
              ...res.data
            }
          })
        )
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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

        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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
            next({
              type: USER_LOGGED_IN,
              data: {
                user: res.data
              }
            });
          }
        })
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

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
        .catch(error => axios.post(`${serverUrl}/error`, { error }));

    default:
      return next(action);
  }
};

export default Data;
