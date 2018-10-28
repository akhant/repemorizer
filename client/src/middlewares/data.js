import { TRANSLATE } from "../constants";
import axios from "axios";
const serverUrl = "http://localhost:3000/api";

const Data = store => next => action => {
  const { type, payload } = action;

  switch (type) {
    case TRANSLATE:
      axios
        .post(`${serverUrl}/translate`, { text: payload })
        .then(res => {
          return next({
            type: TRANSLATE,
            data: { text: payload, translation: res.data.text }
          });
        })
        .catch(err => {
          console.log("Error post TRANSLATE", err);
        });
    default:
      return next(action);
  }
  /*  if (type === TRANSLATE) {
    axios.post(`${serverUrl}/translate`, { text: payload }).then(res => {
      return next({ type: TRANSLATE, ...res.data});
    }).catch(err => {
      console.log("Error post TRANSLATE", err)
    })
  } */

  console.log("STORE", store.getState());
};

export default Data;
