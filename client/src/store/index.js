import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import Data from "../middlewares/data";

export default function configureStore() {
  const store = createStore(reducer, applyMiddleware(Data));

  return store;
}
