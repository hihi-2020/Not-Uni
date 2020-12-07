import {  SET_SAVED_MODULES_FROM_DATA_BASE } from '../actions'
import {  ADD_SINGLE_MODULE_TO_SAVED_MODULES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAVED_MODULES_FROM_DATA_BASE:
      return action.modules
    case ADD_SINGLE_MODULE_TO_SAVED_MODULES:
      let oldSavedModules = [...state]
      oldSavedModules.push(action.module)
      return oldSavedModules
    default:
      return state
  }
}

export default reducer
