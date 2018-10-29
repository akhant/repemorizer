import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
/* import logger from "../middlewares/logger";*/
import Data from "../middlewares/data"; 

export default function configureStore() {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     applyMiddleware( Data) 
  );
  window.store = store;

  return store;
}
