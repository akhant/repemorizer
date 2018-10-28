import {TRANSLATE, ADD_TO_REPETITION, GET_DICTIONARY} from '../constants'

export const translateRequest = (text) => ({
  type: TRANSLATE,
  payload: text
})

export const addToRepetition = (text) => ({
    type: ADD_TO_REPETITION,
    payload: text
  })

  export const getDictionary = () => ({
    type: GET_DICTIONARY
  })
  