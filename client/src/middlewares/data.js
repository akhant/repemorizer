import { TRANSLATE } from "../constants";
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
              wordId: res.data._id
            }
          })
        )
        .catch(err => {
          console.log("Error post TRANSLATE", err);
        });
    default:
      return next(action);
  }

  console.log("STORE", store.getState());
};

export default Data;
