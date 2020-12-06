import { SET_SAVED_MODULES, SET_USER, ADD_TO_SAVED_MODULES } from '../actions'
import { REMOVE_USER } from '../actions/authenticated'
const initialState = 
 {

}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER:
      return {...state, ...action.user}
    case REMOVE_USER:
      return {}
    case SET_SAVED_MODULES:
      let preSavedModuleState = state
      preSavedModuleState.saved = action.modules
      return preSavedModuleState
    case ADD_TO_SAVED_MODULES:
      let preAddToSavedModuleState = state
      preAddToSavedModuleState.saved.push(action.module)
      return preAddToSavedModuleState

      default:
        return state
  }
}

export default reducer