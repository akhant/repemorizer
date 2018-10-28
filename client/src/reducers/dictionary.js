import {ADD_TO_REPETITION} from '../constants'



export default (state = [], action) => {

  switch (action.type) {
      case ADD_TO_REPETITION:
    return [...state, action.payload]

    default:
      return state;
  }
};
