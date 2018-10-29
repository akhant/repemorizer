import {
    
    GET_WORDS_TO_REPEAT
  } from "../constants";
  
  export default (state = [], action) => {
    const { type, data } = action;
  
    switch (type) {
       case GET_WORDS_TO_REPEAT:
        return data.wordsToRepeat;
      
        default:
        return state;
    }
  };
  