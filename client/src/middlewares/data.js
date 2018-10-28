import { TRANSLATE, GET_DICTIONARY } from "../constants";
import axios from "axios";
const serverUrl = "http://localhost:3000/api";

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
              text: res.data.text,
              translation: res.data.translation,
              _id: res.data._id
            }
          })
        )
        .catch(err => {
          console.log("Error post TRANSLATE", err);
        });
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
        .catch(err => {
          console.log("Error get GET_DICTIONARY", err);
        });
    default:
      return next(action);
  }

  
};

export default Data;
